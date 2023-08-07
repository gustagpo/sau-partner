import { PhoneIcon } from "@chakra-ui/icons";
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
  Select,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineIdcard, AiOutlineLock, AiOutlineMail } from "react-icons/ai";
import { BsCalendarDate } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { Link as RouterLink } from "react-router-dom";

import AuthLayout from "../_layouts/AuthLayout";

export default function CreateUsers() {
  return (
    <AuthLayout>
      <Box w="100%" flex="1" p="8">
        <Heading size="lg" fontWeight="normal">
          Cadastrar um novo dependente
        </Heading>

        <VStack spacing="4" mt={8}>
          <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
            <FormControl isRequired>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Icon as={FiUser} color="#004AAD" />
                </InputLeftElement>
                <Input
                  name="name"
                  id="name"
                  type="text"
                  size="md"
                  color="black"
                  borderColor="#004AAD"
                  borderRadius={20}
                  placeholder="Nome Completo"
                  _placeholder={{
                    fontSize: "18",
                    color: "#004AAD",
                  }}
                />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Icon as={AiOutlineMail} color="#004AAD" />
                </InputLeftElement>
                <Input
                  name="email"
                  id="email"
                  type="email"
                  size="md"
                  color="black"
                  borderColor="#004AAD"
                  borderRadius={20}
                  placeholder="E-mail"
                  _placeholder={{
                    fontSize: "18",
                    color: "#004AAD",
                  }}
                />
              </InputGroup>
            </FormControl>
          </SimpleGrid>
          <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
            <FormControl isRequired>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Icon as={AiOutlineIdcard} color="#004AAD" />
                </InputLeftElement>
                <Input
                  name="cpf"
                  id="cpf"
                  type="text"
                  size="md"
                  color="black"
                  borderColor="#004AAD"
                  borderRadius={20}
                  placeholder="CPF"
                  _placeholder={{
                    fontSize: "18",
                    color: "#004AAD",
                  }}
                />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <PhoneIcon color="#004AAD" />
                </InputLeftElement>
                <Input
                  name="phone"
                  id="phone"
                  type="text"
                  size="md"
                  color="black"
                  borderColor="#004AAD"
                  borderRadius={20}
                  placeholder="Celular"
                  _placeholder={{
                    fontSize: "18",
                    color: "#004AAD",
                  }}
                />
              </InputGroup>
            </FormControl>
          </SimpleGrid>
          <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
            <FormControl isRequired>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Icon as={BsCalendarDate} color="#004AAD" />
                </InputLeftElement>
                <Input
                  name="birthday"
                  id="birthday"
                  type="date"
                  size="md"
                  color="black"
                  borderColor="#004AAD"
                  borderRadius={20}
                  placeholder="Data de nascimento"
                  _placeholder={{
                    fontSize: "18",
                    color: "#004AAD",
                  }}
                />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <Select
                name="password"
                id="password"
                type="text"
                size="md"
                color="black"
                borderColor="#004AAD"
                borderRadius={20}
                placeholder="Tipo"
                _placeholder={{
                  fontSize: "18",
                  color: "#004AAD",
                }}
              >
                <option value="1">Adulto</option>
                <option value="2">Criança</option>
              </Select>
            </FormControl>
          </SimpleGrid>
          <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
            <FormControl isRequired>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Icon as={AiOutlineLock} color="#004AAD" />
                </InputLeftElement>
                <Input
                  name="password"
                  id="password"
                  type="text"
                  size="md"
                  color="black"
                  borderColor="#004AAD"
                  borderRadius={20}
                  placeholder="Senha"
                  _placeholder={{
                    fontSize: "18",
                    color: "#004AAD",
                  }}
                />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Icon as={AiOutlineLock} color="#004AAD" />
                </InputLeftElement>
                <Input
                  name="confirm-password"
                  id="confirm-password"
                  type="text"
                  size="md"
                  color="black"
                  borderColor="#004AAD"
                  borderRadius={20}
                  placeholder="Confirmar Senha"
                  _placeholder={{
                    fontSize: "18",
                    color: "#004AAD",
                  }}
                />
              </InputGroup>
            </FormControl>
          </SimpleGrid>
        </VStack>
        <Flex mt="8" justify="flex-end">
          <HStack spacing="4">
            <Link as={RouterLink} to="/users" display="flex" algin="center">
              <Button colorScheme="blackAlpha">Cancelar</Button>
            </Link>
            <Button colorScheme="whatsapp">Salvar</Button>
          </HStack>
        </Flex>
      </Box>
    </AuthLayout>
  );
}
