import { Skeleton, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

export function TableSkeleton() {
  return (
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
        {[...Array(6).keys()].map((_, i) => {
          return (
            <Tr key={i}>
              <Td>
                <Skeleton h={4} w={90} />
              </Td>
              <Td>
                <Skeleton h={4} w={130} />
              </Td>
              <Td>
                <Skeleton h={4} w={70} />
              </Td>
              <Td>
                <Skeleton h={4} w={80} />
              </Td>
              <Td>
                <Skeleton h={4} w={110} />
              </Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
}
