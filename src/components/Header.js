import React from "react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  HStack,
  Icon,
  IconButton,
  Image,
  Link,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import Logo from "../assets/logo1.png";
import { ProfileLinkComponent } from "./ui/ProfileLinkComponent";
import { useAuth } from "../stores/use-auth";

export default function Header() {
  const isAuthenticated = useAuth((store) => store.isAuthenticated);
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      {/* Conteúdo estático para telas acima do tamanho do celular */}
      <Box mb={10} px={4} display={{ sm: "none", md: "block" }}>
        <Flex
          as="header"
          w="100%"
          maxWidth={1300}
          h="20"
          mx="auto"
          my="6"
          px="6"
          align="center"
        >
          <Link as={RouterLink} to="/" display="flex" algin="center">
            <Image src={Logo} w={250} />
          </Link>

          <Flex align="center" ml="auto">
            <HStack
              spacing="10"
              mx="8"
              pr="8"
              py="1"
              color="#004AAD"
              borderRightWidth={1}
              borderColor="gray.500"
            >
              <Link as={RouterLink} to="/" display="flex" algin="center">
                <Text>Descontos</Text>
              </Link>
              <Link as={RouterLink} to="/clients" display="flex" algin="center">
                <Text>Consultar Cliente</Text>
              </Link>
              <Flex alignItems="center">
                <Text>Siga a Saú</Text>
                <Link
                  href="https://www.instagram.com/saubeneficios/"
                  target="blank"
                  ml={2}
                >
                  <Flex
                    bg="#004AAD"
                    boxSize={10}
                    borderRadius={50}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Icon as={BsInstagram} color="white" boxSize={6} />
                  </Flex>
                </Link>

                <Link
                  href="https://www.instagram.com/saubeneficios/"
                  target="blank"
                  ml={2}
                >
                  <Flex
                    bg="#004AAD"
                    boxSize={10}
                    borderRadius={50}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Icon as={FaFacebookF} color="white" boxSize={6} />
                  </Flex>
                </Link>
              </Flex>
            </HStack>

            {isAuthenticated && <ProfileLinkComponent />}
          </Flex>
        </Flex>
      </Box>

      {/* Header responsivo para telas menores */}
      <Box mb={10} px={4} py={6} display={{ sm: "block", md: "none" }}>
        <Flex h={24} alignItems="center" justifyContent="space-between">
          <IconButton
            colorScheme="blue"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            size="lg"
            onClick={onToggle}
            display={{ sm: "flex", md: "none" }}
          />
          <Box display={{ sm: "flex", md: "flex" }} mr="5" alignItems="center">
            <Image src={Logo} />
          </Box>
        </Flex>

        {isOpen && (
          <Box
            pb={4}
            display={{ sm: "flex", md: "none" }}
            w="100%"
            justifyContent="center"
            mt="10"
          >
            <VStack align="center" color="#004AAD">
              <Link as={RouterLink} to="/" display="flex" algin="center">
                <Text>Descontos</Text>
              </Link>
              <Link as={RouterLink} to="/client" display="flex" algin="center">
                <Text>Consultar Cliente</Text>
              </Link>
              <Flex alignItems="center">
                <Link
                  href="https://www.instagram.com/saubeneficios/"
                  target="blank"
                  ml={2}
                >
                  <Flex
                    bg="#004AAD"
                    boxSize={10}
                    borderRadius={50}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Icon as={BsInstagram} color="white" boxSize={6} />
                  </Flex>
                </Link>
                <Link
                  href="https://www.instagram.com/saubeneficios/"
                  target="blank"
                  ml={2}
                >
                  <Flex
                    bg="#004AAD"
                    boxSize={10}
                    borderRadius={50}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Icon as={FaFacebookF} color="white" boxSize={6} />
                  </Flex>
                </Link>
              </Flex>
            </VStack>
          </Box>
        )}
      </Box>
    </>
  );
}
