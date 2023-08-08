import { Avatar, Box, Flex, Heading, Skeleton, Text } from "@chakra-ui/react";
import React from "react";

import { EditPartnerForm } from "../../components/EditPartnerForm";
import { useAuth } from "../../stores/use-auth";
import AuthLayout from "../_layouts/AuthLayout";

export default function UserList() {
  const user = useAuth((store) => store.user);

  return (
    <AuthLayout>
      <Flex display="flex" flexDirection="column">
        <Box padding="50px" mb={4}>
          <Flex align="center" mb="12">
            <Avatar
              size="xl"
              name={user.name}
              src=""
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

        <EditPartnerForm />
      </Flex>
    </AuthLayout>
  );
}
