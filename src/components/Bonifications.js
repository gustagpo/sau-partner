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

export function Bonifications({ bonificationChecks }) {
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
          {bonificationChecks.map(
            ({ user_id, bonification_id, ...bonification }) => {
              return (
                <Tr key={bonification.id}>
                  <Td>
                    <Box>
                      <Text textTransform="uppercase">
                        #{bonification.id.substring(0, 7)}
                      </Text>
                    </Box>
                  </Td>
                  <Td>{bonification.user.name}</Td>
                  <Td>{formatDate(bonification.createdAt)}</Td>
                  <Td>
                    <HStack spacing="2">
                      {bonification.status === false ? (
                        <Button
                          as="a"
                          size="sm"
                          fontSize="sm"
                          colorScheme="green"
                          leftIcon={<Icon as={BsCheck} />}
                          onClick={() =>
                            handleRedeemBonus(user_id, bonification_id)
                          }
                        >
                          Confirmar
                        </Button>
                      ) : (
                        <Button
                          as="a"
                          size="sm"
                          fontSize="sm"
                          colorScheme="gray"
                          leftIcon={<Icon as={BsCheck} />}
                        >
                          Registrado
                        </Button>
                      )}
                    </HStack>
                  </Td>
                </Tr>
              );
            }
          )}
        </Tbody>
      </Table>
    </Box>
  );
}
