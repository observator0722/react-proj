import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react"
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
    }),
    validateOnMount: true
  });

  const handleSubmit = () => {
    if (!formik.isValid) {
      alert('login Failed')
      return
    }
    
    alert(JSON.stringify(formik.values))
  }

  return (
    <Box display='flex' justifyContent='center' alignItems='center' flexDir='column'>
      <Box w={500} mb={4}>
        <FormControl isInvalid={!!formik.errors.email && formik.touched.email} mb={5}>
          <FormLabel>Email</FormLabel>
          <Input name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type='email'
            placeholder='Enter your email' />
          {
            !!formik.errors.email && formik.touched.email
              ? <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              : <></>
          }
        </FormControl>
        <FormControl isInvalid={!!formik.errors.password && formik.touched.password}>
          <FormLabel>Password</FormLabel>
          <Input name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder='Enter your password' />
          {
            !!formik.errors.password && formik.touched.password
              ? <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
              : <></>
          }
        </FormControl>
      </Box>
      <Button onClick={handleSubmit}>Login</Button>
    </Box>
  )
}

export default LoginForm