import {
  Box,
  Button,
  Flex,
  FormControl,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineIdcard } from "react-icons/ai";
import InputMask from "react-input-mask";

import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Bonifications } from "../components/Bonifications";
import { ClientPlans } from "../components/clientPlans";
import { api } from "../lib/axios";
import AuthLayout from "./_layouts/AuthLayout";
import { useMutation } from "@tanstack/react-query";
import { EmptyCustomerCheck } from "../components/EmptyCustomerCheck";

const checkCustomerSchema = z.object({
  document: z.string().nonempty("CPF é um campo obrigatório."),
});

export default function Clients() {
  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(checkCustomerSchema),
  });

  const {
    data: bonification,
    mutate,
    isLoading,
  } = useMutation(
    async (document) => {
      const response = await api.get(`/client/${document}`);
      return response.data;
    },
    {
      onError(err) {
        if (err instanceof AxiosError) {
          if (err.response.status === 400) {
            toast({
              title: "CPF Inválido.",
              description: "O número do CPF inserido é inválido.",
              status: "error",
              duration: 2500,
              isClosable: true,
              position: "top",
            });
          }
        }
      },
    }
  );

  async function handleSearchCustomerPlans(data) {
    mutate(data.document);
  }

  return (
    <AuthLayout>
      <Flex
        w="100%"
        display="flex"
        align="center"
        flexDirection="column"
        mb={36}
      >
        <Text fontSize="4xl" fontWeight="bold">
          Consultar Cliente
        </Text>
        <Box
          onSubmit={handleSubmit(handleSearchCustomerPlans)}
          as="form"
          w="auto"
          mt={5}
        >
          <FormControl>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon as={AiOutlineIdcard} color="#004AAD" />
              </InputLeftElement>

              <Input
                as={InputMask}
                size="md"
                w="auto"
                color="black"
                mask="999.999.999-99"
                maskChar={null}
                borderColor="#004AAD"
                borderRadius={20}
                placeholder="CPF"
                _placeholder={{ fontSize: "18", color: "#004AAD" }}
                {...register("document")}
              />
            </InputGroup>

            {errors.document && (
              <Text
                pl={4}
                mt={1}
                fontSize="sm"
                color="#d10007"
                fontWeight="bold"
              >
                {errors.document.message}
              </Text>
            )}
          </FormControl>

          <Button
            type="submit"
            loading={isSubmitting || isLoading}
            loadingText="Carregando"
            mt={4}
            w="100%"
            size="lg"
            fontSize="sm"
            colorScheme="blue"
          >
            Consultar
          </Button>
        </Box>

        {bonification ? <ClientPlans users={bonification.users} /> : null}

        {bonification ? (
          <Bonifications bonificationChecks={bonification.bonificationChecks} />
        ) : null}
      </Flex>
    </AuthLayout>
  );
}
