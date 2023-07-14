import { Box, Stack, Text, Link, Icon } from '@chakra-ui/react'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiShoppingCartLine } from 'react-icons/ri'

export default function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8" >
        <Stack spacing="12" align="flex-start" >
            <Box>
                <Text fontWeight="bold" color="gray.500" fontSize="small" >MENU</Text>
                <Stack spacing="4" mt="8" align="stretch" >
                    <Link as={RouterLink} to='/' display="flex" algin="center">
                        <Icon as={RiDashboardLine} fontSize="20" />
                        <Text ml="4" fontWeight="medium" >Dashboard</Text>
                    </Link>
                    <Link as={RouterLink} to='/users' display="flex" algin="center">
                        <Icon as={RiContactsLine} fontSize="20" />
                        <Text ml="4" fontWeight="medium" >Usuários</Text>
                    </Link>
                    <Link as={RouterLink} to='/products' display="flex" algin="center">
                        <Icon as={RiShoppingCartLine} fontSize="20" />
                        <Text ml="4" fontWeight="medium" >Produtos</Text>
                    </Link>
                    <Link as={RouterLink} to='/login' display="flex" algin="center">
                        <Icon as={RiGitMergeLine} fontSize="20" />
                        <Text ml="4" fontWeight="medium" >Login</Text>
                    </Link>
                </Stack>
            </Box>
        </Stack>
    </Box>
  )
}
