import { ChakraProvider } from "@chakra-ui/react";
import * as React from "react";
import { BrowserRouter } from "react-router-dom";

import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "./lib/react-query";
import Index from "./routes";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <BrowserRouter>
          <Index />
        </BrowserRouter>
      </ChakraProvider>
    </QueryClientProvider>
  );
}
