import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from "react-router-dom";

import Index from './routes'

export default function App() {

  return (
    <ChakraProvider>
      <BrowserRouter>
          <Index/>
      </BrowserRouter>
    </ChakraProvider>
  )
}