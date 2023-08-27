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

import { api } from "../lib/axios";
import { formatDate } from "../util/format-date";
import { EmptyCustomerCheck } from "./EmptyCustomerCheck";

export function Bonifications({ handleUpdate, bonificationChecks, users, bonification }) {
  const toast = useToast();

  async function handleRedeemBonus(userId, bonificationId) {
    try {
      const response = await api.post("/partners/bonification", {
        id: bonificationId,
        user_id: userId,
        status: true,
      });

      if(response.data){
        toast({
          title: "Bonificação resgatada com sucesso",
          description: "O resgate da bonificação conecida ao cliente foi salvo",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
        handleUpdate();
      }

    } catch (err) {
      toast({
        title: "Erro ao resgatar a bonificação.",
        description: err.response.data.error,
        status: "error",
        duration: 2500,
        isClosable: true,
        position: "top",
      });
    }
  }

  return (
    <>
      {bonification.id ? (
        <Box w="100%" p="8">
          <Flex mb="8" align="left" flexDirection="column">
            <Heading size="lg" color="#004AAD" fontWeight="normal">
              Bonificações Cadastradas no Plano
            </Heading>
            <br/>
            <Text fontSize="xl"><strong>Bonificação: </strong>{bonification.name}</Text>
            <Text fontSize="xl"><strong>Descrição: </strong>{bonification.description}</Text>
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
                        if( b.user.id === user.id && b.status == true) {
                          return(
                            <>
                              <Td>{formatDate(b.created_at)}</Td>
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
                          );
                        } else if(b.user.id === user.id){
                          return(
                            <>
                              <Td> - </Td>
                              <Td>
                                <Button
                                  as="button"
                                  size="sm"
                                  fontSize="sm"
                                  colorScheme="green"                                  
                                  onClick={() =>
                                    handleRedeemBonus(user.id, bonification.id)
                                  }
                                >
                                  Confirmar
                                </Button>
                              </Td>
                            </>
                          );
                        }
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
