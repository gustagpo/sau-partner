import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from '@chakra-ui/react';
import Header from '../../components/Header2';
import Footer from '../../components/Footer';
export default function AuthLayout({ children }) {
    return (
        <Flex w='100vw' h='100vh' flexDirection='column'>
            <Header/>

            <Flex w='100%' my='6' maxWidth={1300} mx='auto' px='6'>
                {children}
            </Flex>
            
            <Footer/>
        </Flex>
    )
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
