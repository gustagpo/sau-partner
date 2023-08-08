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
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineIdcard, AiOutlineLock } from "react-icons/ai";
import { BsCalendarDate } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { Link as RouterLink } from "react-router-dom";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import AuthLayout from "./_layouts/AuthLayout";

const createDiscountSchema = z.object({
  customer_name: z.string(),
  created_at: z.string(),
  discount_amount: z.number(),
});

export default function Discounts() {
  const [customerCpf, setCustomerCpf] = React.useState("");

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    resolver: zodResolver(createDiscountSchema),
  });

  // const getCustomer = useQuery(
  //   ["customerCpf", customerCpf],
  //   async () => {
  //     const response = await api.get(`/client/${customerCpf}`);
  //     return response.data;
  //   },
  //   { enabled: customerCpf.length === 14 }
  // );

  async function handleCreateNewDiscount(data) {
    console.log(data);
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
                  type="text"
                  maxLength={14}
                  size="md"
                  color="black"
                  borderColor="#004AAD"
                  borderRadius={20}
                  placeholder="CPF Cliente"
                  value={customerCpf}
                  onChange={(event) => setCustomerCpf(event.target.value)}
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
            </FormControl>

            <FormControl>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Icon as={AiOutlineLock} color="#004AAD" />
                </InputLeftElement>

                <Input
                  type="number"
                  size="md"
                  color="black"
                  borderColor="#004AAD"
                  borderRadius={20}
                  placeholder="Valor do Desconto"
                  _placeholder={{ fontSize: "18", color: "#004AAD" }}
                  {...register("discount_amount", { valueAsNumber: true })}
                />
              </InputGroup>
            </FormControl>
          </SimpleGrid>
        </VStack>

        <Flex mt="8" justify="flex-end">
          <HStack spacing="4">
            <Link as={RouterLink} to="/" display="flex" algin="center">
              <Button colorScheme="blackAlpha">Cancelar</Button>
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
