import { Formik, Field } from "formik";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  Image,
  Heading,
  Text,
  Link,
  SimpleGrid
} from "@chakra-ui/react";
import React from "react";
import image from '../../assets/image-login.png';
import logo from '../../assets/logo.png';
export default function  SectionLogin() {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 1, lg: 2 }}
      bg="#FCFBFF" 
      align="center" 
      justifyItems="center"
      h="100vh"  
      pt="70px" >
      <Box>
        <Box
          w={{ base: "80%", md: "585px" }}
        >
          <Image 
            src={image} alt="Bem vindo ao PontoGo" 
            sizes="100%"
            h="500px"
          />
        </Box>
        <Box
          pt="20px"
          w="463px"
        >
          <Heading
            as="h1"
            fontSize={{ base: "24px", md: "36px", lg: "40px" }}
            fontWeight="700"
            lineHeight="40px"
            color="#330693"

          >
            Bem vindo ao PontoGo
          </Heading>
          <Box
            pt="10px"
            w="381px"
          >

            <Text
              as="p"
              fontSize={{ base: "18px", md: "20px", lg: "22px" }}
              fontWeight="400"
              lineHeight={{ base: "22px", md: "24px", lg: "26px" }}
              color="#330693"
              textAlign="center"
            >
              Aqui você fará toda gestão do
              seu sistema de pontos.
            </Text>
          </Box>
        </Box>
      </Box>
      <Box alignContent="center"  pt="100px"   rounded="md" w={400} h={571}>
        <Box>
          <Image src={logo} alt="PontoGo" w={{ base: "50%", md: "100%"}} />
          <Heading
            as="h1"
            fontSize={{ base: "24px", md: "36px", lg: "40px" }}
            fontWeight="700"
            lineHeight="60px"
            color="#330693"
            fontFamily={"Poppins"}
          >
            Faça Login
          </Heading>
        </Box>

        <Formik
            
          initialValues={{
            email: "",
            password: "",
            rememberMe: false
          }}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <form  onSubmit={handleSubmit}>
              <VStack spacing={4} >
                <FormControl           
                  w={{ base: "300px", md: "400px" }}
                >
                  <FormLabel 
                    htmlFor="email"
                    fontFamily={"Poppins"}
                    fontSize="20px"
                    fontWeight="400"
                    lineHeight="30px"
                    color="#20292e"  
                    >Email </FormLabel>
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    type="email"
                    variant="filled"
                  />
                </FormControl>
                <FormControl  w={{ base: "300px", md: "400px" }} isInvalid={!!errors.password && touched.password}>
                  <FormLabel 
                    htmlFor="password"
                    fontFamily={"Poppins"}
                    fontSize="20px"
                    fontWeight="400"
                    lineHeight="30px"
                    color="#20292e" 

                    >
                      Senha
                    </FormLabel>
                  <Field
                    as={Input}
                    id="password"
                    name="password"
                    type="password"
                    variant="filled"
                    validate={(value) => {
                      let error;

                      if (value.length < 5) {
                        error = "Password must contain at least 6 characters";
                      }

                      return error;
                    }}
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>
                <Link
                  as="a"
                  href="#"
                  fontFamily={"Poppins"}
                  fontSize="15px"
                  fontWeight="400"
                  lineHeight="22px"
                  color="#330693"  
                  alignSelf={{ base: "center", md: "flex-start" }}
                 
                >
                  Esqueci minha senha
                </Link>
                <Button 
                  type="submit" 
                  bg="#330693"
                  color="white" 
                  width={{ base: "200px", md: "400px" }}
                  height="50px"
                  borderRadius="5px"
                  >
                  <Link
                  
                    fontFamily={"Poppins"}
                    fontSize="16px"
                    fontWeight="400"
                    lineHeight="24px"
                  >
                    Entrar
                  </Link>
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
    </SimpleGrid>
  );
}