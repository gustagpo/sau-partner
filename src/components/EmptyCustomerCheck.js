import { Box, Flex, Text } from "@chakra-ui/react";
import { PiMagnifyingGlassMinus } from "react-icons/pi";

export function EmptyCustomerCheck() {
  return (
    <Box h="300px" mt={8} w="100%" bg="gray.200" rounded={8}>
      <Flex
        alignItems="center"
        justifyContent="center"
        h="100%"
        flexDirection="column"
      >
        <PiMagnifyingGlassMinus size={52} color="#004AAD" />

        <Text fontSize="3xl" letterSpacing="tight" fontWeight="bold">
          Nenhuma bonificação encontrada.
        </Text>
      </Flex>
    </Box>
  );
}
