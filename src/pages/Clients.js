import React, {useState} from 'react';
import { useToast, Link, Avatar, Box, Flex, SimpleGrid, Text, List, Icon, Button, Image, ListItem, ListIcon, Heading, Table, Thead, Tr, Th, Td, Checkbox, Tbody, HStack, FormControl, InputGroup, InputLeftElement, Input } from '@chakra-ui/react';
import { RiCloseLine } from 'react-icons/ri';
import { AiOutlineIdcard } from 'react-icons/ai';
import { BsCheck } from 'react-icons/bs';
import { MdCheckCircle } from 'react-icons/md';
import Pagination from '../components/Pagination';
import { Link as RouterLink } from 'react-router-dom';
import InputMask from 'react-input-mask';
import { cpf } from 'cpf-cnpj-validator';


import AuthLayout from './_layouts/AuthLayout';

export default function Home() {
    const [show, setShow] = useState(false);
    const [document, setDocument] = useState('');

    const toast = useToast();

     function checkCPF(e){
        if(e.length === 14) {
            const validCpf = cpf.isValid(e);
            if(!validCpf) {   
                toast({
                    title: 'CPF Inválido.',
                    description: "O número do CPF colocado é inválido.",
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                });
                setDocument('');
            };
        };
        setDocument(e);
    };

    function handleSearch() {
        if(document.length == 14){
            const validCpf = cpf.isValid(document);
            if(!validCpf) {   
                toast({
                    title: 'CPF Inválido.',
                    description: "O número do CPF colocado é inválido.",
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                });
                setDocument('');
            } else {
                setShow(true);
            }
        }
    }

    return (
      <AuthLayout>
        <Flex w='100%' display="flex" align="center" flexDirection="column" mb={36}>
            <Text fontSize="4xl" fontWeight="bold">Consultar Cliente</Text>
            <Box w='auto' mt={5}>
                <FormControl isRequired>
                    <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                            <Icon as={AiOutlineIdcard} color='#004AAD' />
                        </InputLeftElement>
                        <Input
                            as={InputMask}
                            name='cpf'
                            id='cpf'
                            type='text'
                            size='md'
                            w='auto'
                            color='black'
                            mask="999.999.999-99"
                            maskChar={null}
                            borderColor='#004AAD'
                            borderRadius={20}
                            placeholder='CPF'
                            _placeholder={{
                                fontSize: '18',
                                color: '#004AAD'
                            }}
                            value={document}
                            onChange={(event)=> checkCPF(event.target.value)}
                        />
                    </InputGroup>
                </FormControl>
                <Button
                    onClick={handleSearch}
                    mt={4}
                    w='100%'
                    size='lg'
                    fontSize='sm'
                    colorScheme='blue'
                    >
                    Consultar 
                </Button>
            </Box>
            {show ?
            <>
                <SimpleGrid w='100%' flex="1" my={8} gap="2" minChildWidth="350px">
                    <Box align="center" py='8' px='8' borderWidth={1} borderColor={'blue'}>
                        <Text fontSize="4xl" fontWeight="bold">Nome</Text>
                        <Text fontSize="xl">Gustavo Peixoto de Oliveira - Titular</Text>
                        <br/>
                        <Text fontSize="4xl" fontWeight="bold">CPF</Text>
                        <Text fontSize="xl">000.577.091-22</Text>
                        <br/>
                        <Text fontSize="4xl" fontWeight="bold">Status</Text>
                        <Text fontSize="xl" color="red">Pendente de pagamento</Text>
                    </Box> 
                    <Box align="center"  py='8' px='8' borderWidth={1} borderColor={'blue'}>
                        <Text fontSize="4xl" fontWeight="bold">Nome</Text>
                        <Text fontSize="xl">Sandro Vasconcelos - Dependente</Text>
                        <br/>
                        <Text fontSize="4xl" fontWeight="bold">CPF</Text>
                        <Text fontSize="xl">208.129.580-63</Text>
                        <br/>
                        <Text fontSize="4xl" fontWeight="bold">Status</Text>
                        <Text fontSize="xl" color="red">Pendente de pagamento</Text>
                    </Box> 
                    <Box align="center"  py='8' px='8' borderWidth={1} borderColor={'blue'}>
                        <Text fontSize="4xl" fontWeight="bold">Nome</Text>
                        <Text fontSize="xl">Pedro Henrique - Dependente</Text>
                        <br/>
                        <Text fontSize="4xl" fontWeight="bold">CPF</Text>
                        <Text fontSize="xl">559.185.340-40</Text>
                        <br/>
                        <Text fontSize="4xl" fontWeight="bold">Status</Text>
                        <Text fontSize="xl" color="red">Pendente de pagamento</Text>
                    </Box> 
                    <Box align="center"  py='8' px='8' borderWidth={1} borderColor={'blue'}>
                        <Text fontSize="4xl" fontWeight="bold">Nome</Text>
                        <Text fontSize="xl">Luiz Moreira - Dependente</Text>
                        <br/>
                        <Text fontSize="4xl" fontWeight="bold">CPF</Text>
                        <Text fontSize="xl">007.933.820-84</Text>
                        <br/>
                        <Text fontSize="4xl" fontWeight="bold">Status</Text>
                        <Text fontSize="xl" color="red">Pendente de pagamento</Text>
                    </Box> 
                </SimpleGrid>
                <Box w='100%' p='8'>
                    <Flex mb='8' justify='space-between' align='center'>
                        <Heading size='lg' color='#004AAD' fontWeight='normal'>Bonificações Cadastradas no Plano</Heading>
                    </Flex>

                    <Table colorScheme='gray.200'>
                        <Thead>
                            <Tr>
                                <Th px='6' width='8'>
                                    <Checkbox colorScheme='twitter' borderColor="gray.400" />
                                </Th>
                                <Th>Id Cliente</Th>
                                <Th>Cliente / Dependente</Th>
                                <Th>Data</Th>
                                <Th>Ação</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px='6'>
                                    <Checkbox colorScheme='twitter' borderColor="gray.400"/>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text>#4090</Text>
                                    </Box>
                                </Td>
                                <Td>
                                    Luiz Moreira
                                </Td>
                                <Td>
                                    -
                                </Td>
                                <Td>
                                <HStack spacing='2'>
                                    <Button
                                    as='a'
                                    size='sm'
                                    fontSize='sm'
                                    colorScheme='green'
                                    leftIcon={<Icon as={BsCheck} />}
                                    >
                                        Confirmar
                                    </Button>
                                </HStack>
                            </Td>
                            </Tr>
                            <Tr>
                                <Td px='6'>
                                    <Checkbox colorScheme='twitter' borderColor="gray.400"/>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text>#9451</Text>
                                    </Box>
                                </Td>
                                <Td>
                                    Pedro Henrique
                                </Td>
                                <Td>
                                    10/06/2023
                                </Td>
                                <Td>
                                    <Button
                                    as='a'
                                    size='sm'
                                    disabled
                                    fontSize='sm'
                                    colorScheme='gray'
                                    leftIcon={<Icon as={MdCheckCircle} />}
                                    >
                                        Registrado
                                    </Button>
                                </Td>
                            </Tr>
                            
                            <Tr>
                                <Td px='6'>
                                    <Checkbox colorScheme='twitter' borderColor="gray.400"/>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text>#6638</Text>
                                    </Box>
                                </Td>
                                <Td>
                                    Sandro Vasconcelos
                                </Td>
                                <Td>
                                    10/03/2023
                                </Td>
                                <Td>
                                    <Button
                                    as='a'
                                    size='sm'
                                    disabled
                                    fontSize='sm'
                                    colorScheme='gray'
                                    leftIcon={<Icon as={MdCheckCircle} />}
                                    >
                                        Registrado
                                    </Button>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td px='6'>
                                    <Checkbox colorScheme='twitter' borderColor="gray.400"/>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text>#6690</Text>
                                    </Box>
                                </Td>
                                <Td>
                                    Gustavo Peixoto de Oliveira
                                </Td>
                                <Td>
                                    10/02/2023
                                </Td>
                                <Td>
                                    <Button
                                    as='a'
                                    size='sm'
                                    disabled
                                    fontSize='sm'
                                    colorScheme='gray'
                                    leftIcon={<Icon as={MdCheckCircle} />}
                                    >
                                        Registrado
                                    </Button>
                                </Td>
                            </Tr>
                            
                        </Tbody>
                    </Table>
                </Box>
            </>
            :
                <>
                </>
            }
        </Flex>
      </AuthLayout>
  )
}
