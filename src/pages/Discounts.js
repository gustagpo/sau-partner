import {
  Box,
  Button,
  Flex,
  FormControl,
  HStack,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  SimpleGrid,
  Text,
  VStack,
  useToast
} from "@chakra-ui/react";
import React from "react";

import CurrencyInput from "react-currency-input-field";
import { AiOutlineIdcard, AiOutlineLock } from "react-icons/ai";
import { BsCalendarDate } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { useNavigate, Link as RouterLink } from "react-router-dom";

import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { z } from "zod";
import { api } from "../lib/axios";
import { useAuth } from "../stores/use-auth";
import { normalizeDocument } from "../util/normalize-document";
import AuthLayout from "./_layouts/AuthLayout";
import InputMask from "react-input-mask";

const createDiscountSchema = z.object({
  customer_name: z.string().optional(),
  created_at: z.string().nonempty("Data de criação é um campo obrigatório."),
  discount_amount: z
    .string()
    .nonempty("Valor do desconto é um campo obrigatório."),
});

export default function Discounts() {
  const user = useAuth((store) => store.user);
  const [customerId, setCustomerId] = React.useState("");
  const [customerDocument, setCustomerDocument] = React.useState("");
  const toast = useToast();
  const navigation = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { isSubmitting, errors },
  } = useForm({
    resolver: zodResolver(createDiscountSchema),
  });

  async function handleCreateNewDiscount(data) {
    try {
      await api.post("/discounts", {
        user_id: customerId,
        partner_id: user.id,
        value: data.discount_amount.replace(/\D/g, ""),
        date: data.created_at,
      });

      toast.success("Desconto criado com sucesso!");

      reset();
      setCustomerDocument("");
      navigation('/')
    } catch (err) {
      if (err instanceof AxiosError) {
        toast({
          title: 'Erro ao criar desconto.',
          description: err.response.data.error,
          status: 'error',
          duration: 5000,
          isClosable: true,
        });

        setCustomerDocument("");
        setValue("customer_name", "");
      }
    }
  }

  async function getCustomerData() {
    try {
      if (customerDocument.length === 14) {
        const response = await api.get(
          `/users/${normalizeDocument(customerDocument)}`
        );

        setValue("customer_name", response.data.user.name);
        setCustomerId(response.data.user.id);
      }
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err.response.status === 400) {
          toast.error("Cliente não encontrado com este CPF.");

          setCustomerDocument("");
          setValue("customer_name", "");
        }
      }

      console.error(err);
    }
  }

  return (
    <AuthLayout>
      <Box
        onSubmit={handleSubmit(handleCreateNewDiscount)}
        as="form"
        w="100%"
        flex="1"
        p="8"
      >
        <Heading size="lg" fontWeight="normal">
          Cadatrar um novo desconto
        </Heading>

        <VStack spacing="4" mt={8}>
          <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
            <FormControl>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Icon as={FiUser} color="#004AAD" />
                </InputLeftElement>

                <Input
                  as={InputMask}
                  mask="999.999.999-99"
                  maskChar={null}
                  type="text"
                  size="md"
                  color="black"
                  borderColor="#004AAD"
                  borderRadius={20}
                  placeholder="CPF Cliente"
                  onBlur={getCustomerData}
                  onChange={(event) => setCustomerDocument(event.target.value)}
                  _placeholder={{ fontSize: "18", color: "#004AAD" }}
                />
              </InputGroup>
            </FormControl>

            <FormControl>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Icon as={AiOutlineIdcard} color="#004AAD" />
                </InputLeftElement>

                <Input
                  disabled
                  type="text"
                  size="md"
                  color="black"
                  borderColor="#004AAD"
                  borderRadius={20}
                  placeholder="Nome Cliente"
                  _placeholder={{ fontSize: "18", color: "#004AAD" }}
                  {...register("customer_name")}
                />
              </InputGroup>
            </FormControl>
          </SimpleGrid>

          <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
            <FormControl>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Icon as={BsCalendarDate} color="#004AAD" />
                </InputLeftElement>

                <Input
                  type="date"
                  size="md"
                  color="black"
                  borderColor="#004AAD"
                  borderRadius={20}
                  placeholder="Data do desconto"
                  _placeholder={{ fontSize: "18", color: "#004AAD" }}
                  {...register("created_at")}
                />
              </InputGroup>

              {errors.created_at && (
                <Text
                  pl={4}
                  mt={1}
                  fontSize="sm"
                  color="#d10007"
                  fontWeight="bold"
                >
                  {errors.created_at.message}
                </Text>
              )}
            </FormControl>

            <FormControl>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Icon as={AiOutlineLock} color="#004AAD" />
                </InputLeftElement>

                <Input
                  as={CurrencyInput}
                  decimalsLimit={2}
                  prefix="R$ "
                  size="md"
                  color="black"
                  borderColor="#004AAD"
                  borderRadius={20}
                  placeholder="Valor do Desconto"
                  _placeholder={{ fontSize: "18", color: "#004AAD" }}
                  {...register("discount_amount")}
                />
              </InputGroup>

              {errors.discount_amount && (
                <Text
                  pl={4}
                  mt={1}
                  fontSize="sm"
                  color="#d10007"
                  fontWeight="bold"
                >
                  {errors.discount_amount.message}
                </Text>
              )}
            </FormControl>
          </SimpleGrid>
        </VStack>

        <Flex mt="8" justify="flex-end">
          <HStack spacing="4">
            <Link as={RouterLink} to="/" display="flex" algin="center">
              <Button type="button" colorScheme="blackAlpha">
                Cancelar
              </Button>
            </Link>

            <Button
              type="submit"
              colorScheme="whatsapp"
              isLoading={isSubmitting}
              loadingText="Salvando"
            >
              Salvar
            </Button>
          </HStack>
        </Flex>
      </Box>
    </AuthLayout>
  );
}
