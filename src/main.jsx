import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./App.css"
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import {system} from "./theme/theme.jsx"
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ChakraProvider value={system}>
    <App />
  </ChakraProvider>
  </StrictMode>
)
