import {
  Box,
  Button,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { MdCheckCircle } from "react-icons/md";
import { api } from "../../lib/axios";
import { EmptyDiscounts } from "../EmptyDiscounts";
import dayjs from "dayjs";
import { currency } from "../../util/currency";
import { TableSkeleton } from "./TableSkeleton";

export function DiscountTable() {
  const discounts = useQuery(["discounts"], async () => {
    const response = await api.get("/discounts");
    return response.data;
  });

  const formatDate = (date) => dayjs(date).format("DD/MM/YYYY");

  return (
    <>
      {discounts.isLoading ? (
        <TableSkeleton />
      ) : discounts.data.length === 0 ? (
        <EmptyDiscounts />
      ) : (
        <Table colorScheme="gray.200">
          <Thead>
            <Tr>
              <Th>Id Desconto</Th>
              <Th>Cliente</Th>
              <Th>Valor</Th>
              <Th>Data</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>

          <Tbody>
            {discounts.data.map((discount) => {
              return (
                <Tr key={discount.id}>
                  <Td>
                    <Box>
                      <Text style={{ textTransform: "uppercase" }}>
                        #{discount.id.substring(0, 7)}
                      </Text>
                    </Box>
                  </Td>
                  <Td>{discount.user.name}</Td>
                  <Td>{currency().format(discount.value)}</Td>
                  <Td>{formatDate(discount.date)}</Td>

                  <Td>
                    {discount.status === true && (
                      <Button
                        as="a"
                        size="sm"
                        disabled
                        fontSize="sm"
                        colorScheme="green"
                        leftIcon={<Icon as={MdCheckCircle} />}
                      >
                        Aprovado
                      </Button>
                    )}

                    {discount.status === false && (
                      <Button
                        as="a"
                        size="sm"
                        disabled
                        fontSize="sm"
                        colorScheme="red"
                        leftIcon={<Icon as={MdCheckCircle} />}
                      >
                        Negado
                      </Button>
                    )}

                    {discount.status === null && (
                      <Button
                        as="a"
                        size="sm"
                        disabled
                        fontSize="sm"
                        colorScheme="blue"
                        leftIcon={<Icon as={MdCheckCircle} />}
                      >
                        Aprovar
                      </Button>
                    )}
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      )}
    </>
  );
}
