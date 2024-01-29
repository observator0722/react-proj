import { Box, FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react"

const LoginForm = () => {
  return (
    <Box display='flex' justifyContent='center' alignItems='center' flexDir='column'>
      <Box w={500}>
        <FormControl isInvalid={false} mb={5}>
          <FormLabel>Email</FormLabel>
          <Input type='email' placeholder='Enter your email' />
          <FormErrorMessage></FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={false}>
          <FormLabel>Password</FormLabel>
          <Input placeholder='Enter your password' />
          <FormErrorMessage></FormErrorMessage>
        </FormControl>
      </Box>
    </Box>
  )
}

export default LoginForm