import { Box, SimpleGrid, Text } from "@chakra-ui/react";

export function ClientPlans({ users }) {
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
            <Text fontSize="xl">{plan.user.name} - Titular</Text>
            <br />
            <Text fontSize="4xl" fontWeight="bold">
              CPF
            </Text>
            <Text fontSize="xl">{plan.user.cpf}</Text>
            <br />
            <Text fontSize="4xl" fontWeight="bold">
              Status
            </Text>
            <Text fontSize="xl" color="red">
              Pendente de pagamento
            </Text>
          </Box>
        );
      })}
    </SimpleGrid>
  );
}
