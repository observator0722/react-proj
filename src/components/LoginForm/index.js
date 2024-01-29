import { Box, FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react"
import { useFormik } from "formik";

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    }
  });

  return (
    <Box display='flex' justifyContent='center' alignItems='center' flexDir='column'>
      <Box w={500}>
        <FormControl isInvalid={false} mb={5}>
          <FormLabel>Email</FormLabel>
          <Input name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            type='email'
            placeholder='Enter your email' />
          <FormErrorMessage></FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={false}>
          <FormLabel>Password</FormLabel>
          <Input name="password" value={formik.values.password} onChange={formik.handleChange} placeholder='Enter your password' />
          <FormErrorMessage></FormErrorMessage>
        </FormControl>
      </Box>
    </Box>
  )
}

export default LoginForm