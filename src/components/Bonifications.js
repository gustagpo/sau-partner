import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";
import { BsCheck } from "react-icons/bs";

import { AxiosError } from "axios";
import { api } from "../lib/axios";
import { formatDate } from "../util/format-date";
import { EmptyCustomerCheck } from "./EmptyCustomerCheck";

export function Bonifications({ bonificationChecks, users, id }) {
  const toast = useToast();

  async function handleRedeemBonus(userId, bonificationId) {
    try {
      await api.post("/partners/bonification", {
        id: bonificationId,
        user_id: userId,
        status: true,
      });

    } catch (err) {
      if (err instanceof AxiosError) {
        if (err.response.status === 400) {
          toast({
            title: "Erro ao resgatar a bonificação.",
            description: "Bonificação já resgatada.",
            status: "error",
            duration: 2500,
            isClosable: true,
            position: "top",
          });
        }
      }
    }
  }

  return (
    <>
      {id ? (
        <Box w="100%" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" color="#004AAD" fontWeight="normal">
              Bonificações Cadastradas no Plano
            </Heading>
          </Flex>

          <Table colorScheme="gray.200">
            <Thead>
              <Tr>
                <Th>Id Cliente</Th>
                <Th>Cliente / Dependente</Th>
                <Th>Data</Th>
                <Th>Ação</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users.map(
                ({ name, user, ...users }) => {
                  return (
                    <Tr key={user.id}>
                      <Td>
                        <Box>
                          <Text textTransform="uppercase">
                            #{user.id.substring(0, 7)}
                          </Text>
                        </Box>
                      </Td>
                      <Td>{user.name}</Td>
                      {bonificationChecks.map((b) => {
                        return(
                          b === null ?
                            <>
                              <Td> - </Td>
                              <Td>
                                <Button
                                  as="button"
                                  size="sm"
                                  fontSize="sm"
                                  colorScheme="green"                                  
                                  onClick={() =>
                                    handleRedeemBonus(user.id, id)
                                  }
                                >
                                  Confirmar
                                </Button>
                              </Td>
                            </>
                          
                          : 
                            b.user_id == user.id ? 
                              <>
                              <Td>{formatDate(user.createdAt)}</Td>
                              <Td>
                                <Button
                                as="a"
                                size="sm"
                                fontSize="sm"
                                colorScheme="gray"
                                leftIcon={<Icon as={BsCheck} />}
                                >
                                  Registrado
                                </Button>
                              </Td>
                              </>
                            :
                            <></>
                        )
                      })}
                      <Td>
                        <HStack spacing="2">
                        </HStack>
                      </Td>
                    </Tr>
                  );
                }
              )}
            </Tbody>
          </Table>
        </Box>
      ) : (
        <EmptyCustomerCheck />
      )}
    </>
  );
}
