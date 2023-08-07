import {
  Button,
  Flex,
  FormControl,
  HStack,
  Heading,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { AiOutlineIdcard, AiOutlineLock } from "react-icons/ai";
import { Link as RouterLink } from "react-router-dom";
import Card from "../assets/card.png";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { useAuth } from "../stores/use-auth";
import DefaultLayout from "./_layouts/DefaultLayout";

const userSchema = z.object({
  document: z
    .string()
    .nonempty("CPF/CNPJ é um campo obrigatório.")
    .regex(
      /(^\d{3}\.\d{3}\.\d{3}-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$)/,
      "Favor informar um CPF/CNPJ válido."
    ),
  password: z.string().nonempty("Senha é um campo obrigatório."),
});

export default function Login() {
  const signIn = useAuth((store) => store.signIn);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    resolver: zodResolver(userSchema),
  });

  async function handleLogin(data) {
    await signIn(data);
  }

  return (
    <DefaultLayout>
      <Flex maxWidth={1300} mb={50} w="100%" p="8" borderRadius={8}>
        <SimpleGrid minChildWidth="500px" spacing="8" w="100%">
          <Image src={Card} />

          <Flex
            as="form"
            id="sign-in"
            w="100%"
            flexDirection="column"
            onSubmit={handleSubmit(handleLogin)}
          >
            <Heading size="xl" color="#004AAD" fontWeight="bold">
              Entre na sua conta para cuidar da sua saúde e da sua família!
            </Heading>

            <VStack spacing="4" mt={8}>
              <FormControl>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <Icon as={AiOutlineIdcard} color="#004AAD" />
                  </InputLeftElement>

                  <Input
                    type="text"
                    size="md"
                    color="black"
                    borderColor="#004AAD"
                    borderRadius={20}
                    placeholder="CPF/CNPJ"
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

              <FormControl>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <Icon as={AiOutlineLock} color="#004AAD" />
                  </InputLeftElement>

                  <Input
                    type="password"
                    size="md"
                    color="black"
                    borderColor="#004AAD"
                    borderRadius={20}
                    placeholder="Senha"
                    _placeholder={{ fontSize: "18", color: "#004AAD" }}
                    {...register("password")}
                  />
                </InputGroup>

                {errors.password && (
                  <Text
                    pl={4}
                    mt={1}
                    fontSize="sm"
                    color="#d10007"
                    fontWeight="bold"
                  >
                    {errors.password.message}
                  </Text>
                )}
              </FormControl>
            </VStack>

            <HStack justify="space-evenly" mt={10}>
              <Button
                isLoading={isSubmitting}
                loadingText="Carregando"
                type="submit"
                form="sign-in"
                bg="#004AAD"
                color="white"
                fontSize={18}
                p="25px 35px"
                borderRadius={20}
              >
                Acessar
              </Button>

              <Link as={RouterLink} to="/signin" display="flex" algin="center">
                <Button
                  bg="#5DE0E6"
                  color="#004AAD"
                  fontSize={18}
                  p="25px 35px"
                  borderRadius={20}
                >
                  Criar Conta
                </Button>
              </Link>
            </HStack>
          </Flex>
        </SimpleGrid>
      </Flex>
    </DefaultLayout>
  );
}
