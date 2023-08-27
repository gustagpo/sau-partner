import { Box, SimpleGrid, Text } from "@chakra-ui/react";

export function ClientPlans({ users }) {
  const STATUS_PAYMENTS = {
    1: "Pendente",
    2: "Ativo",
    3: "Recebimento parcial",
    4: "Cancelado",
    5: "Vencido",
  };

  const STATUS_PAYMENTS_COLORS = {
    1: "red",
    2: "blue",
    3: "gray",
    4: "black",
    5: "yellow",
  };

  return (
    <SimpleGrid w="100%" flex="1" my={8} gap="2" minChildWidth="350px">
      {users.map((plan) => {
        return (
          <Box
            key={plan.user.id}
            align="center"
            py="8"
            px="8"
            borderWidth={1}
            borderColor={"blue"}
          >
            <Text fontSize="4xl" fontWeight="bold">
              {plan.name}
            </Text>
            <Text fontSize="xl">{plan.user.name} - {plan.type === 1 ? 'Titular' : 'Dependente' }</Text>
            <br />
            <Text fontSize="4xl" fontWeight="bold">
              CPF
            </Text>
            <Text fontSize="xl">{plan.user.cpf}</Text>
            <br />
            <Text fontSize="4xl" fontWeight="bold">
              Status
            </Text>

            <Text fontSize="xl" color={STATUS_PAYMENTS_COLORS[plan.status]}>
              {STATUS_PAYMENTS[plan.status]}
            </Text>
          </Box>
        );
      })}
    </SimpleGrid>
  );
}
