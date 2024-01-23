import { ChakraProvider } from "@chakra-ui/react";
import CountriesList from "./components/CountriesList";


const App = () => {
  return (
    <ChakraProvider>
      <CountriesList/>
    </ChakraProvider>
  )
}

export default App;


