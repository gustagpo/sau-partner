import React from 'react';
import { Box, Select, InputGroup, InputLeftElement, Heading, Input, SimpleGrid, VStack, FormControl, FormLabel, Flex, HStack, Button, Link, Icon} from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons';
import { FiUser } from 'react-icons/fi';
import { BsCalendarDate } from 'react-icons/bs';
import { AiOutlineIdcard, AiOutlineMail, AiOutlineLock } from 'react-icons/ai';
import { Link as RouterLink } from 'react-router-dom';

import AuthLayout from './_layouts/AuthLayout';

export default function Discounts() {
  return (
    <AuthLayout>
        <Box w='100%' flex='1' p='8'>
          <Heading size='lg' fontWeight='normal'>Cadatrar um novo desconto</Heading>

          <VStack spacing='4' mt={8}>
            <SimpleGrid minChildWidth='240px' spacing='8' w='100%'>
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftElement pointerEvents='none'>
                    <Icon as={FiUser} color='#004AAD' />
                  </InputLeftElement>
                  <Input
                      name='name'
                      id='name'
                      type='text'
                      size='md'
                      color='black'
                      borderColor='#004AAD'
                      borderRadius={20}
                      placeholder='CPF Cliente'
                      _placeholder={{
                          fontSize: '18',
                          color: '#004AAD'
                      }}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftElement pointerEvents='none'>
                    <Icon as={AiOutlineIdcard} color='#004AAD' />
                  </InputLeftElement>
                  <Input
                      name='cpf'
                      id='cpf'
                      type='text'
                      size='md'
                      color='black'
                      borderColor='#004AAD'
                      borderRadius={20}
                      placeholder='Nome Cliente'
                      disabled
                      _placeholder={{
                          fontSize: '18',
                          color: '#004AAD'
                      }}
                  />
                </InputGroup>
              </FormControl>

            </SimpleGrid>
            <SimpleGrid minChildWidth='240px' spacing='8' w='100%'>
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftElement pointerEvents='none'>
                    <Icon as={BsCalendarDate} color='#004AAD' />
                  </InputLeftElement>
                  <Input
                      name='birthday'
                      id='birthday'
                      type='date'
                      size='md'
                      color='black'
                      borderColor='#004AAD'
                      borderRadius={20}
                      placeholder='Data do desconto'
                      _placeholder={{
                          fontSize: '18',
                          color: '#004AAD'
                      }}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftElement pointerEvents='none'>
                    <Icon as={AiOutlineLock} color='#004AAD' />
                  </InputLeftElement>
                  <Input
                      name='password'
                      id='password'
                      type='text'
                      size='md'
                      color='black'
                      borderColor='#004AAD'
                      borderRadius={20}
                      placeholder='Valor do Desconto'
                      _placeholder={{
                          fontSize: '18',
                          color: '#004AAD'
                      }}
                  />
                </InputGroup>
              </FormControl>
            </SimpleGrid>
          </VStack>
          <Flex mt='8' justify='flex-end'>
            <HStack spacing='4'>
              <Link as={RouterLink} to='/' display="flex" algin="center">
                <Button colorScheme='blackAlpha'>Cancelar</Button>
              </Link>
              <Button colorScheme='whatsapp'>Salvar</Button>
            </HStack>
          </Flex>
        </Box>
    </AuthLayout>
  )
}
