import React, {useState} from 'react';
import { Link, Button, Flex, Input, Heading, SimpleGrid, FormControl, InputGroup, InputLeftElement, Icon, VStack, Image, HStack} from '@chakra-ui/react';
import { AiOutlineIdcard, AiOutlineLock } from 'react-icons/ai';
import Card from '../assets/card.png';
import { Link as RouterLink} from 'react-router-dom';


import DefaultLayout from './_layouts/DefaultLayout';

export default function Login() {
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
              <Heading size='xl' color="#004AAD" fontWeight='bold'>Entre na sua conta para cuidar da sua saúde e da sua família!</Heading>

              <VStack spacing='4' mt={8}>
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
                      <Icon as={AiOutlineLock} color='#004AAD' />
                    </InputLeftElement>
                    <Input
                        name='password'
                        id='password'
                        type='password'
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
              </VStack>
              <HStack justify="space-evenly" mt={10}>
                <Button bg='#004AAD' color="white" fontSize={18} p="25px 35px" borderRadius={20} >Acessar</Button>
                <Link as={RouterLink} to='/signin' display="flex" algin="center">
                  <Button bg='#5DE0E6' color="#004AAD" fontSize={18} p="25px 35px" borderRadius={20} >Criar Conta</Button>
                </Link>
              </HStack>
            </Flex>
          </SimpleGrid>
        </Flex>
    </DefaultLayout>
  )
}
