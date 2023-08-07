import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Icon,
  Link,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BiMoneyWithdraw } from "react-icons/bi";
import { BsGraphUp } from "react-icons/bs";
import { MdCheckCircle } from "react-icons/md";
import { RiAddLine } from "react-icons/ri";
import { Link as RouterLink } from "react-router-dom";

import { DiscountTable } from "../components/ui/DiscountTable";
import { useAuth } from "../stores/use-auth";
import AuthLayout from "./_layouts/AuthLayout";

export default function Home() {
  const user = useAuth((store) => store.user);

  return (
    <AuthLayout>
      <Flex w="100%" display="flex" flexDirection="column">
        <Box
          padding="100px 140px 70px"
          bg="#DBFBFD"
          borderRadius="150px 0 150px 0"
          mb={24}
        >
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
            Acreditamos que através de nossa parceria podemos alcançar maiores
            metas, e é por isso que queremos ofrecer uma variedade de benefícios
            exclusivos para nossos membros.
          </Text>
        </Box>

        <Text fontSize="4xl" fontWeight="bold">
          Veja como você está cuidando da saúde financeira dos seus clientes
        </Text>

        <Box w="100%" mb={16} p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" color="#004AAD" fontWeight="normal">
              Descontos Cadastrados no Perfil
            </Heading>

            <Link as={RouterLink} to="/discounts" display="flex" algin="center">
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="green"
                leftIcon={<Icon as={RiAddLine} />}
              >
                Cadastrar novo desconto
              </Button>
            </Link>
          </Flex>

          <DiscountTable />
          {/* <Pagination /> */}
        </Box>

        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="500px"
          align="flex-start"
          mb={20}
        >
          <Box p="8" bg="#004AAD" borderRadius={14} pb="4">
            <Flex
              w="100%"
              align="center"
              pb="4"
              display="flex"
              flexDirection="column"
              color="white"
            >
              <Flex align="center" mb="10" justify="center">
                <Icon
                  as={BiMoneyWithdraw}
                  color="#5DE0E6"
                  boxSize={16}
                  mr="5"
                />
                <Text fontSize="3xl" fontWeight="bold" mr="3" align="center">
                  Seus descontos até agora:{" "}
                </Text>
              </Flex>
              <Box>
                <Flex
                  w="100%"
                  align="left"
                  pb="4"
                  display="flex"
                  flexDirection="column"
                  color="white"
                  fontSize="xl"
                >
                  <List spacing={3}>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="#fff" />
                      Descontos aprovados: R$ 690,00
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="#fff" />
                      Descontos em aprovação: R$ 15,00
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="#fff" />
                      Descontos reprovados: R$ 140,00
                    </ListItem>
                    <ListItem>
                      <ListIcon as={MdCheckCircle} color="#fff" />
                      Total de descontos: R$ 845,00
                    </ListItem>
                  </List>
                </Flex>
              </Box>
            </Flex>
          </Box>
          <Box
            p="8"
            borderWidth={3}
            borderColor="#5DE0E6"
            borderRadius={14}
            pb="4"
          >
            <Flex w="100%" align="left" pb="4" display="flex" color="black">
              <Icon as={BsGraphUp} color="#5DE0E6" boxSize={12} mt="2" />
              <Flex
                w="100%"
                align="left"
                display="flex"
                ml={6}
                flexDirection="column"
                color="black"
              >
                <Text fontSize="4xl" fontWeight="bold">
                  Ranking de Parceiros
                </Text>
                <HStack>
                  <Text fontSize="5xl" fontWeight="bold" color="#004AAD">
                    14º
                  </Text>
                  <Text fontSize="4xl" fontWeight="bold" color="#004AAD">
                    / 89
                  </Text>
                </HStack>
              </Flex>
            </Flex>
            <Text fontSize="lg">
              Aqui valorizamos a nossa parceiria, e por isso sempre premiamos os{" "}
              <strong>5 primeiros parceiros</strong> no ranking.
            </Text>
            <Text fontSize="lg">
              Lembrando que as premiações são de forma{" "}
              <strong>semestral</strong>. Quaisquer dúvidas não exite em entrar
              em contato com nosso suporte.
            </Text>
          </Box>
        </SimpleGrid>
      </Flex>
    </AuthLayout>
  );
}
