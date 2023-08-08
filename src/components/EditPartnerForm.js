import { PhoneIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  SimpleGrid,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { AiOutlineIdcard, AiOutlineLock, AiOutlineMail } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import ReactInputMask from "react-input-mask";
import { z } from "zod";
import { api } from "../lib/axios";
import { useAuth } from "../stores/use-auth";

const editUserSchema = z
  .object({
    name: z.string().nonempty("Nome é um campo obrigatório."),
    type: z.coerce.number(),
    phone: z.string().nonempty("Telefone é um campo obrigatório."),
    old_password: z.string().optional(),
    password: z.string().optional(),
    confirm_password: z.string().optional(),
  })
  .refine((data) => data.confirm_password === data.password, {
    message: "As senhas precisam ser iguais",
    path: ["confirm_password"],
  });

export function EditPartnerForm() {
  const user = useAuth((store) => store.user);

  const toast = useToast();

  const { handleSubmit, register, control, watch, formState } = useForm({
    resolver: zodResolver(editUserSchema),
    defaultValues: {
      type: user && user.type,
    },
  });

  const handleUpdatePartnerData = async (data) => {
    let formData = {
      name: data.name,
      document: user.document,
      email: user.email,
      phone: data.phone,
      type: data.type,
    };

    if (data.old_password) {
      formData = {
        name: data.name,
        document: user.document,
        email: user.email,
        phone: data.phone,
        type: data.type,
        oldPassword: data.old_password,
        password: data.password,
        confirmPassword: data.confirm_password,
      };
    }

    try {
      await api.put("/partners", formData);

      toast({
        title: "Informações alteradas com sucesso.",
        status: "success",
        duration: 2500,
        isClosable: true,
        position: "top",
      });

      await new Promise((resolve) => setTimeout(resolve, 300));

      window.location.href = "/";
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err.response.status === 400) {
          toast({
            title: "Erro ao alterar as informações.",
            status: "error",
            duration: 2500,
            isClosable: true,
            position: "top",
          });
        }

        if (err.response.status === 401) {
          toast({
            title: "Senha incorreta.",
            description: "Revise as informações e tente novamente",
            status: "error",
            duration: 2500,
            isClosable: true,
            position: "top",
          });
        }
      }
    }
  };

  const oldPassword = watch("old_password");
  const isPasswordsInputDisabled = !oldPassword;

  return (
    <Box
      as="form"
      onSubmit={handleSubmit(handleUpdatePartnerData)}
      w="100%"
      mb={16}
      p="8"
    >
      <Heading size="lg" fontWeight="normal">
        Dados do parceiro
      </Heading>

      <VStack spacing="4" mt={8}>
        <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
          <FormControl>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon as={FiUser} color="#004AAD" />
              </InputLeftElement>

              <Input
                autoFocus
                type="text"
                size="md"
                color="black"
                borderColor="#004AAD"
                borderRadius={20}
                placeholder="Nome Completo"
                defaultValue={user && user.name}
                _placeholder={{ fontSize: "18", color: "#004AAD" }}
                {...register("name")}
              />
            </InputGroup>
          </FormControl>

          <FormControl>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon as={AiOutlineMail} color="#004AAD" />
              </InputLeftElement>

              <Input
                disabled
                type="email"
                size="md"
                color="black"
                borderColor="#004AAD"
                borderRadius={20}
                value={user && user.email}
                placeholder="E-mail"
                _placeholder={{ fontSize: "18", color: "#004AAD" }}
              />
            </InputGroup>
          </FormControl>
        </SimpleGrid>

        <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
          <FormControl>
            <Controller
              name="type"
              control={control}
              render={({ field }) => {
                return (
                  <Select
                    type="text"
                    size="md"
                    color="black"
                    borderColor="#004AAD"
                    borderRadius={20}
                    placeholder="Tipo"
                    defaultValue={user && user.type}
                    _placeholder={{ fontSize: "18", color: "#004AAD" }}
                    onChange={field.onChange}
                  >
                    <option value="1">PJ</option>
                    <option value="2">PF</option>
                  </Select>
                );
              }}
            />
          </FormControl>

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
                placeholder="CNPJ"
                defaultValue={user && user.document}
                disabled
                _placeholder={{ fontSize: "18", color: "#004AAD" }}
              />
            </InputGroup>
          </FormControl>
        </SimpleGrid>

        <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
          <FormControl>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <PhoneIcon color="#004AAD" />
              </InputLeftElement>

              <Input
                as={ReactInputMask}
                mask="(99) 99999-9999"
                maskChar={null}
                defaultValue={user && user.phone}
                type="tel"
                size="md"
                color="black"
                borderColor="#004AAD"
                borderRadius={20}
                placeholder="Celular"
                _placeholder={{ fontSize: "18", color: "#004AAD" }}
                {...register("phone")}
              />
            </InputGroup>
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
                placeholder="Senha antiga"
                _placeholder={{ fontSize: "18", color: "#004AAD" }}
                {...register("old_password")}
              />
            </InputGroup>
          </FormControl>
        </SimpleGrid>
        <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
          <FormControl>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon as={AiOutlineLock} color="#004AAD" />
              </InputLeftElement>

              <Input
                disabled={isPasswordsInputDisabled}
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
          </FormControl>
          <FormControl>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon as={AiOutlineLock} color="#004AAD" />
              </InputLeftElement>

              <Input
                disabled={isPasswordsInputDisabled}
                type="password"
                size="md"
                color="black"
                borderColor="#004AAD"
                borderRadius={20}
                placeholder="Confirmar Senha"
                _placeholder={{ fontSize: "18", color: "#004AAD" }}
                {...register("confirm_password")}
              />
            </InputGroup>
          </FormControl>
        </SimpleGrid>
      </VStack>

      <Flex mt="8" justify="flex-end">
        <Button
          type="submit"
          colorScheme="whatsapp"
          w="20%"
          loading={formState.isSubmitting}
          loadingText="Salvando"
        >
          Salvar
        </Button>
      </Flex>
    </Box>
  );
}
