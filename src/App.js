import { ChakraProvider } from "@chakra-ui/react";
import * as React from "react";
import { BrowserRouter } from "react-router-dom";

import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "./lib/react-query";
import Index from "./routes";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <BrowserRouter>
          <Index />

          <Toaster toastOptions={{ duration: 2000 }} />
        </BrowserRouter>
      </ChakraProvider>
    </QueryClientProvider>
  );
}
