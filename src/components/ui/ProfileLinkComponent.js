import { Avatar, Box, Button, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import { useAuth } from "../../stores/use-auth";

export function ProfileLinkComponent() {
  const user = useAuth((store) => store.user);
  const signOut = useAuth((store) => store.signOut);

  return (
    <Link as={RouterLink} to="/users" display="flex" algin="center">
      <Flex align="center">
        <Box mr="4" textAlign="right">
          <Text color="#004AAD">{user.name}</Text>

          <Text color="#gray.500" fontSize="small">
            {user.document}
          </Text>
        </Box>

        <Flex gap={2} mr="4" textAlign="right">
          <Avatar
            size="md"
            name="Empresa Parceira"
            src="https://avatars.githubusercontent.com/u/77734338"
          />

          <Button variant="link" onClick={signOut}>
            Sair
          </Button>
        </Flex>
      </Flex>
    </Link>
  );
}
