import { Box, FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react"
import { useFormik } from "formik";
import * as Yup from 'yup'

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Email is required').email('Email is incorrect'),
      password: Yup.string().required('Password is required').min(8, 'Min length for password is 8 characters')
    })
  });

  console.log(formik);

  return (
    <Box display='flex' justifyContent='center' alignItems='center' flexDir='column'>
      <Box w={500}>
        <FormControl isInvalid={!!formik.errors.email} mb={5}>
          <FormLabel>Email</FormLabel>
          <Input name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type='email'
            placeholder='Enter your email' />
          <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
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