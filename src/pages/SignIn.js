import React, {useState} from 'react';
import { Button, Flex, Input, Heading, SimpleGrid, FormControl, Box, Select, Link, InputGroup, InputLeftElement, Icon, VStack, Image} from '@chakra-ui/react';
import { FiUser } from 'react-icons/fi';
import { AtSignIcon, PhoneIcon } from '@chakra-ui/icons';
import { BsCalendarDate } from 'react-icons/bs';
import { AiOutlineIdcard, AiOutlineMail, AiOutlineLock } from 'react-icons/ai';
import Card from '../assets/card.png'
import { Link as RouterLink} from 'react-router-dom';

import DefaultLayout from './_layouts/DefaultLayout';

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit() {
    console.log(email);
    console.log(password);
    setLoading(true);
  }

  return (
    <DefaultLayout>
        <Flex maxWidth={1300} mb={50}  w="100%" p="8" borderRadius={8}>
          <SimpleGrid minChildWidth='500px' spacing='8' w='100%'>
            <Image src={Card} />
            <Flex as="form" w="100%" flexDirection='column' onSubmit={handleSubmit}>
              <Heading size='xl' color="#004AAD" fontWeight='bold'>Crie sua conta para cuidar da sua saúde pessoal e financeira!</Heading>

              <Box w='100%' mb={16} p='8'>
                <Heading size='lg' fontWeight='normal'>Dados do parceiro</Heading>

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
                        placeholder='Nome Completo'
                        value="Empresa Parceira"
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
                        <Icon as={AiOutlineMail} color='#004AAD' />
                    </InputLeftElement>
                    <Input
                        name='email'
                        id='email'
                        type='email'
                        size='md'
                        color='black'
                        borderColor='#004AAD'
                        borderRadius={20}
                        placeholder='E-mail'
                        disabled
                        value="empresa@gmail.com"
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
                    <Select
                        name='password'
                        id='password'
                        type='text'
                        size='md'
                        color='black'
                        borderColor='#004AAD'
                        borderRadius={20}
                        disabled
                        placeholder='Tipo'
                        _placeholder={{
                            fontSize: '18',
                            color: '#004AAD'
                        }}
                    >
                    <option value='1' selected>PJ</option>
                    <option value='2'>PF</option>
                    </Select>
                </FormControl>
                <FormControl isRequired>
                    <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                        <Icon as={AiOutlineIdcard} color='#004AAD' />
                    </InputLeftElement>
                    <Input
                        name='cnpj'
                        id='cnpj'
                        type='text'
                        size='md'
                        color='black'
                        borderColor='#004AAD'
                        borderRadius={20}
                        placeholder='CNPJ'
                        value="48.908.091/0001-10"
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
                        <PhoneIcon color='#004AAD' />
                    </InputLeftElement>
                    <Input
                        name='phone'
                        id='phone'
                        type='text'
                        size='md'
                        color='black'
                        borderColor='#004AAD'
                        borderRadius={20}
                        placeholder='Celular'
                        value="(62) 99297-7034"
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
                        <AtSignIcon color='#004AAD' />
                    </InputLeftElement>
                    <Input
                        name='phone'
                        id='phone'
                        type='text'
                        size='md'
                        color='black'
                        borderColor='#004AAD'
                        borderRadius={20}
                        placeholder='Usuário'
                        value="empresaparceira"
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
                        placeholder='Senha'
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
                        name='confirm-password'
                        id='confirm-password'
                        type='text'
                        size='md'
                        color='black'
                        borderColor='#004AAD'
                        borderRadius={20}
                        placeholder='Confirmar Senha'
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
                <Link as={RouterLink} to='/' display="flex" w="20%" algin="right">
                    <Button colorScheme='whatsapp' w="100%">Salvar</Button>
                </Link>
            </Flex>
            </Box>
              {/* <VStack spacing='4' mt={8}>
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
                        placeholder='Nome Completo'
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
                        name='email'
                        id='email'
                        type='email'
                        size='md'
                        color='black'
                        borderColor='#004AAD'
                        borderRadius={20}
                        placeholder='E-mail'
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
                        placeholder='CPF'
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
                      <PhoneIcon color='#004AAD' />
                    </InputLeftElement>
                    <Input
                        name='phone'
                        id='phone'
                        type='text'
                        size='md'
                        color='black'
                        borderColor='#004AAD'
                        borderRadius={20}
                        placeholder='Celular'
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
                        placeholder='Data de nascimento'
                        _placeholder={{
                            fontSize: '18',
                            color: '#004AAD'
                        }}
                    />
                  </InputGroup>
                </FormControl>
                <SimpleGrid minChildWidth='240px' spacing='8' w='100%'>
                  <FormControl isRequired>
                    <InputGroup>
                      <InputLeftElement pointerEvents='none'>
                        <Icon as={AiOutlineLock} color='#004AAD' />
                      </InputLeftElement>
                      <Input
                          name='email'
                          id='email'
                          type='email'
                          size='md'
                          color='black'
                          borderColor='#004AAD'
                          borderRadius={20}
                          placeholder='E-mail'
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
                          name='email'
                          id='email'
                          type='email'
                          size='md'
                          color='black'
                          borderColor='#004AAD'
                          borderRadius={20}
                          placeholder='E-mail'
                          _placeholder={{
                              fontSize: '18',
                              color: '#004AAD'
                          }}
                      />
                    </InputGroup>
                  </FormControl>
                </SimpleGrid>
              </VStack> */}
              <Button bg='#004AAD' color="white" fontSize={18} p="25px 35px" borderRadius={20} mt={10}>Cadastrar agora</Button>
            </Flex>
          </SimpleGrid>
        </Flex>
    </DefaultLayout>
  )
}
