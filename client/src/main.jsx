import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider, useCart } from "react-use-cart";
import AuthContextProvider from "./context/AuthContextProvider.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
    <BrowserRouter>
    <AuthContextProvider>
      <CartProvider>
    <App /></CartProvider>
    </AuthContextProvider>
    </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
)
