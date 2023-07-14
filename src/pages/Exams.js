import React from 'react';
import {  Box, Flex, SimpleGrid, Text, Icon, Button, Image, Heading, Table, Thead, Tr, Th, Td, Checkbox, Tbody, HStack, Link, VStack } from '@chakra-ui/react';
import { BsCreditCard } from 'react-icons/bs';
import Lab from '../assets/cdi.png';

import AuthLayout from './_layouts/AuthLayout';

export default function Exams() {
    return (
      <AuthLayout>
        <Flex w='100%' display="flex" flexDirection="column">
            <Text fontSize="4xl" fontWeight="bold">Veja seus exames</Text>
            <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start" mt={16} mb={20}>
                <Box
                  p="8"
                  boxShadow='lg'
                  borderRadius={14}
                >
                  <VStack align="center" spacing={5}>
                    <Image src={Lab} />
                    <Text fontSize="xl" fontWeight="bold" >TOMOGRAFIA FACE</Text>
                  </VStack>
                </Box>
                <Box
                  p="8"
                  boxShadow='lg'
                  borderRadius={14}
                >
                  <VStack align="center" spacing={5}>
                    <Image src={Lab} />
                    <Text fontSize="xl" fontWeight="bold" >HEMOGRAMA COMPLETO</Text>
                  </VStack>
                </Box>
                <Box
                  p="8"
                  boxShadow='lg'
                  borderRadius={14}
                >
                  <VStack align="center" spacing={5}>
                    <Image src={Lab} />
                    <Text fontSize="xl" fontWeight="bold" >USG RINS</Text>
                  </VStack>
                </Box>
            </SimpleGrid>
            <Text fontSize="4xl" fontWeight="bold">Veja suas prescrições</Text>
            <VStack mt={12} mb={20}>
                <Box
                    p="8"
                    bg="#004AAD"
                    borderRadius={14}
                    pb="4"
                    width="100%"
                >
                    <Flex w="100%" align="center" pb="4" display="flex" justifyContent="space-between" color="white">
                        <Text fontSize="lg" fontWeight="bold" mr="3">Medicação 01</Text>
                        <Text fontSize="lg" fontWeight="bold">24/01/2023</Text>
                    </Flex>
                </Box>
                <Box
                    p="8"
                    bg="#004AAD"
                    borderRadius={14}
                    pb="4"
                    width="100%"
                >
                    <Flex w="100%" align="center" pb="4" display="flex" justifyContent="space-between" color="white">
                        <Text fontSize="lg" fontWeight="bold" mr="3">Medicação 02</Text>
                        <Text fontSize="lg" fontWeight="bold">04/05/2023</Text>
                    </Flex>
                </Box>
                <Box
                    p="8"
                    bg="#004AAD"
                    borderRadius={14}
                    pb="4"
                    width="100%"
                >
                    <Flex w="100%" align="center" pb="4" display="flex" justifyContent="space-between" color="white">
                        <Text fontSize="lg" fontWeight="bold" mr="3">Medicação 03</Text>
                        <Text fontSize="lg" fontWeight="bold">02/06/2023</Text>
                    </Flex>
                </Box>

            </VStack>
        </Flex>
      </AuthLayout>
  )
}
