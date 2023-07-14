import React from 'react';
import { Link, Avatar, Box, Flex, SimpleGrid, Text, List, Icon, Button, Image, ListItem, ListIcon, Heading, Table, Thead, Tr, Th, Td, Checkbox, Tbody, HStack } from '@chakra-ui/react';
import { RiAddLine, RiCloseLine } from 'react-icons/ri';
import { BiMoneyWithdraw } from 'react-icons/bi';
import { BsGraphUp } from 'react-icons/bs';
import { MdCheckCircle } from 'react-icons/md';
import Care from '../assets/health-care 2.png';
import Family from '../assets/family 2.png';
import Phone from '../assets/cellphone.png';
import Star from '../assets/star.png';
import Pagination from '../components/Pagination';
import { Link as RouterLink } from 'react-router-dom';


import AuthLayout from './_layouts/AuthLayout';

export default function Home() {
    return (
      <AuthLayout>
        <Flex w='100%' display="flex" flexDirection="column">
          <Box padding="100px 140px 70px" bg="#DBFBFD" borderRadius="150px 0 150px 0" mb={24}>
            <Flex align="center" mb="12" >
              <Avatar size="xl" name="Empresa Parceira" src="https://avatars.githubusercontent.com/u/77734338" mr="12" />
              <Text fontSize="4xl" fontWeight="bold">Bem-vindo, Empresa Parceira</Text>
            </Flex>
            <Text fontSize="xl">Acreditamos que através de nossa parceria podemos alcançar maiores metas, e é por isso que queremos ofrecer uma variedade de benefícios exclusivos para nossos membros.</Text>
          </Box>
          <Text fontSize="4xl" fontWeight="bold">Veja como você está cuidando da saúde financeira dos seus clientes</Text>
          <Box w='100%' mb={16} p='8'>
              <Flex mb='8' justify='space-between' align='center'>
                  <Heading size='lg' color='#004AAD' fontWeight='normal'>Descontos Cadastrados no Perfil</Heading>

                  <Link as={RouterLink} to='/discounts' display="flex" algin="center">
                      <Button
                      as='a'
                      size='sm'
                      fontSize='sm'
                      colorScheme='green'
                      leftIcon={<Icon
                      as={RiAddLine}
                      />}
                      >
                      Cadastrar novo desconto
                      </Button>
                  </Link>
              </Flex>

              <Table colorScheme='gray.200'>
                  <Thead>
                      <Tr>
                          <Th px='6' width='8'>
                              <Checkbox colorScheme='twitter' borderColor="gray.400" />
                          </Th>
                          <Th>Id Desconto</Th>
                          <Th>Cliente</Th>
                          <Th>Valor</Th>
                          <Th>Data</Th>
                          <Th>Status</Th>
                      </Tr>
                  </Thead>
                  <Tbody>
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
                              R$ 140,00
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
                                  Negado
                              </Button>
                          </Td>
                      </Tr>
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
                              R$ 540,00
                          </Td>
                          <Td>
                              10/04/2023
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
                                  Confirmado
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
                              R$ 15,00
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
                              >
                                A confirmar
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
                              José da Silva
                          </Td>
                          <Td>
                              R$ 150,00
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
                                  Confirmado
                              </Button>
                          </Td>
                      </Tr>
                      
                  </Tbody>
              </Table>

              <Pagination/>

          </Box>
          <SimpleGrid flex="1" gap="4" minChildWidth="500px" align="flex-start" mb={20}>
              <Box
                p="8"
                bg="#004AAD"
                borderRadius={14}
                pb="4"
              >
                <Flex w="100%" align="center" pb="4" display="flex" flexDirection="column" color="white" >
                  <Flex align="center" mb="10" justify="center">
                    <Icon as={BiMoneyWithdraw} color="#5DE0E6" boxSize={16} mr="5" />
                    <Text fontSize="3xl" fontWeight="bold" mr="3" align="center" >Seus descontos até agora: </Text>
                  </Flex>
                  <Box>
                    <Flex w="100%" align="left" pb="4" display="flex" flexDirection="column" color="white" fontSize="xl">
                      <List spacing={3}>
                        <ListItem>
                          <ListIcon as={MdCheckCircle} color="#fff" />
                          Descontos aprovados: R$ 690,00
                        </ListItem>
                        <ListItem>
                          <ListIcon as={MdCheckCircle} color="#fff" />
                          Descontos em aprovação: R$ 15,00
                        </ListItem>
                        <ListItem>
                          <ListIcon as={MdCheckCircle} color="#fff" />
                          Descontos reprovados: R$ 140,00
                        </ListItem>
                        <ListItem>
                          <ListIcon as={MdCheckCircle} color="#fff" />
                          Total de descontos: R$ 845,00
                        </ListItem>
                      </List>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
              <Box
                p="8"
                borderWidth={3}
                borderColor="#5DE0E6"
                borderRadius={14}
                pb="4"
              >
                  <Flex w="100%" align="left" pb="4" display="flex" color="black">
                    <Icon as={BsGraphUp} color="#5DE0E6" boxSize={12} mt="2" />
                    <Flex w="100%" align="left" display="flex" ml={6} flexDirection="column" color="black">
                      <Text fontSize="4xl" fontWeight="bold" >Ranking de Parceiros</Text>
                      <HStack>
                        <Text fontSize="5xl" fontWeight="bold" color="#004AAD">14º</Text>
                        <Text fontSize="4xl" fontWeight="bold" color="#004AAD">/ 89</Text>

                      </HStack>
                    </Flex>
                  </Flex>
                  <Text fontSize="lg" >Aqui valorizamos a nossa parceiria, e por isso sempre premiamos os <strong>5 primeiros parceiros</strong> no ranking.</Text>
                  <Text fontSize="lg" >Lembrando que as premiações são de forma <strong>semestral</strong>. Quaisquer dúvidas não exite em entrar em contato com nosso suporte.</Text>
              </Box>
          </SimpleGrid>
        </Flex>
      </AuthLayout>
  )
}
