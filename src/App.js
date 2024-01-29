import { ChakraProvider } from "@chakra-ui/react";
import LoginForm from "./components/LoginForm";


const App = () => {
  return (
    <ChakraProvider>
      <LoginForm />
    </ChakraProvider>
  )
}

export default App;


