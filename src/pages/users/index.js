import { AtSignIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Select,
  SimpleGrid,
  Skeleton,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineIdcard, AiOutlineLock, AiOutlineMail } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { Link as RouterLink } from "react-router-dom";

import AuthLayout from "../_layouts/AuthLayout";
import { useAuth } from "../../stores/use-auth";

export default function UserList() {
  const user = useAuth((store) => store.user);

  return (
    <AuthLayout>
      <Flex display="flex" flexDirection="column">
        <Box padding="50px" mb={4}>
          <Flex align="center" mb="12">
            <Avatar
              size="xl"
              name="Empresa Parceira"
              src="https://avatars.githubusercontent.com/u/77734338"
              mr="12"
            />

            {!user ? (
              <Skeleton height={8} width={390} rounded={16} />
            ) : (
              <Text fontSize="4xl" fontWeight="bold">
                Bem-vindo, {user.name}
              </Text>
            )}
          </Flex>
          <Text fontSize="xl">
            Acreditamos que cuidar da sua saúde não precisa ser caro, e é por
            isso que oferecemos uma variedade de benefícios exclusivos para
            nossos membros.
          </Text>
        </Box>

        <Box w="100%" mb={16} p="8">
          <Heading size="lg" fontWeight="normal">
            Dados do parceiro
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
                    value="Empresa Parceira"
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
                    disabled
                    value="empresa@gmail.com"
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
                <Select
                  name="password"
                  id="password"
                  type="text"
                  size="md"
                  color="black"
                  borderColor="#004AAD"
                  borderRadius={20}
                  disabled
                  placeholder="Tipo"
                  _placeholder={{
                    fontSize: "18",
                    color: "#004AAD",
                  }}
                >
                  <option value="1" selected>
                    PJ
                  </option>
                  <option value="2">PF</option>
                </Select>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <Icon as={AiOutlineIdcard} color="#004AAD" />
                  </InputLeftElement>
                  <Input
                    name="cnpj"
                    id="cnpj"
                    type="text"
                    size="md"
                    color="black"
                    borderColor="#004AAD"
                    borderRadius={20}
                    placeholder="CNPJ"
                    value="48.908.091/0001-10"
                    disabled
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
                    value="(62) 99297-7034"
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
                    <AtSignIcon color="#004AAD" />
                  </InputLeftElement>
                  <Input
                    name="phone"
                    id="phone"
                    type="text"
                    size="md"
                    color="black"
                    borderColor="#004AAD"
                    borderRadius={20}
                    placeholder="Usuário"
                    value="empresaparceira"
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
            <Link as={RouterLink} to="/" display="flex" w="20%" algin="right">
              <Button colorScheme="whatsapp" w="100%">
                Salvar
              </Button>
            </Link>
          </Flex>
        </Box>
      </Flex>
    </AuthLayout>
  );
}
