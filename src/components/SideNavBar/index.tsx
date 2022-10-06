import {
  Avatar,
  Box,
  Flex,
  Icon,
  Text,
  Link,
  Image,
  Button,
  Heading,
  Stack,
  VStack,
  BoxProps,
  Drawer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  DrawerContent,
  IconButton,
  useDisclosure,
  DrawerOverlay,
  useColorModeValue,
  MenuDivider,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Divider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { AiOutlineTeam, AiOutlineHome, AiOutlineLogout } from 'react-icons/ai';
import { BsFolder2, BsCalendarCheck } from 'react-icons/bs';
import { FiMenu } from 'react-icons/fi';
import { RiFlashlightFill } from 'react-icons/ri';
import mdi from '../../assets/mdi.svg';
import note from '../../assets/note.svg';
import logo from '../../assets/logo.png';
import divider from '../../assets/divider.png';
import watch from '../../assets/watch.png';
import React, { useState } from 'react';

export default function Index() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <Box as="section" bg="#E5E5E5" minH="100vh">
      <SidebarContent display={{ base: 'none', md: 'unset' }} />
      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent>
          {/* <SidebarContent w="full" borderRight="none" /> */}
        </DrawerContent>
      </Drawer>
      <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
        <Flex
          as="header"
          align="center"
          w="full"
          px="4"
          // d={{ base: 'flex', md: 'none' }}
          borderBottomWidth="1px"
          // borderColor={useColorModeValue('inherit', 'gray.700')}
          bg="transparent"
          justify={{ base: 'space-between', md: 'flex-end' }}
          boxShadow="lg"
          h="14"
        >


          <IconButton
            aria-label="Menu"
            display={{ base: 'inline-flex', md: 'none' }}
            onClick={onOpen}
            icon={<FiMenu />}
            size="md"
          />
        </Flex>

        <Box as="main" p="40px 20px 0 30px" minH="30rem" >
          <Box
            pb="30px"
          >
            <Button
              bg="#330693 "
              w="200px"
              h="50px"
              borderRadius="5px"
              onClick={toggle}
            >
              <Link
                fontSize="16px"
                fontFamily="Poppins"
                fontWeight="400"
                lineHeight="24px"
                color="#FFFFFF"
              >
                Registrar ponto
                <Modal isOpen={modal} onClose={toggle}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Registrar novo ponto</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <Image src={watch} alt="relógio" />
                      <Text>10:30</Text>
                      <Text>25/06/2022</Text>
                      <Box
                        display="grid"
                      >
                        <Button
                          bg="#330693 "
                          w="200px"
                          h="50px"
                          borderRadius="5px"
                        >
                          Bater ponto
                        </Button>
                        <Button 
                          bg="green"
                          w="200px"
                          h="50px"
                          borderRadius="5px"
                        >
                          Cancelar
                        </Button>
                      </Box>
                    </ModalBody>

                    <ModalFooter>
                      <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Close
                      </Button>
                      <Button variant='ghost'>Secondary Action</Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </Link>
            </Button>
          </Box>

          <TableContainer>
            <Table >

              <Thead >
                <Tr>
                  <Th
                    fontSize="22px"
                    fontWeight="700"
                    fontFamily="Poppins"
                    lineHeight="33px"
                    color="20292e"
                  >
                    Colaborador
                  </Th>
                  <Th
                    fontSize="22px"
                    fontWeight="600"
                    fontFamily="Poppins"
                    lineHeight="33px"
                    color="20292e"
                  >
                    Data
                  </Th>
                  <Th
                    fontSize="22px"
                    fontWeight="600"
                    fontFamily="Poppins"
                    lineHeight="33px"
                    color="20292e"
                  >
                    Hora
                  </Th>
                </Tr>
              </Thead>
              <Tbody bg="#FFFFFF" >
                <Tr h="73px">
                  {/* <Td
                    w="20px"
                  >
                  </Td> */}
                  <Td
                    fontSize="22px"
                    fontWeight="700"
                    color="#20292e"
                    fontFamily="Poppins"
                    display="flex"
                    alignItems="center"
                  >
                    <Image src={divider} pr="20px" />
                    João Silva
                  </Td>
                  <Td
                    fontSize="22px"
                    fontWeight="400"
                    color="#20292e"
                    opacity="0.6"
                    fontFamily="Poppins"
                  >
                    12/10/19
                  </Td>
                  <Td
                    fontSize="22px"
                    fontWeight="400"
                    color="#20292e"
                    opacity="0.6"
                    fontFamily="Poppins"
                  >
                    18:30h
                  </Td>
                </Tr>

              </Tbody>
              <Tfoot>

              </Tfoot>
            </Table>
          </TableContainer>

        </Box>
      </Box>
    </Box>
  );
}

const SidebarContent = ({ ...props }: BoxProps) => (
  <Box
    as="nav"
    pos="fixed"
    top="0"
    left="0"
    zIndex="sticky"
    h="full"
    // pb="10"
    overflowX="hidden"
    overflowY="auto"
    bg={useColorModeValue('white', 'gray.800')}
    borderColor={useColorModeValue('inherit', 'gray.700')}
    borderRightWidth="1px"
    w="60"
    {...props}
  >
    <VStack h="full" w="full" alignItems="flex-start" justify="space-between">
      <Box w="full">
        <Flex px="4" py="5" align="center">
          <Image src={logo} alt="logo" w="134px" />
          <Text
            fontSize="2xl"
            ml="2"
            color={useColorModeValue('brand.500', 'white')}
            fontWeight="semibold"
          >

          </Text>
        </Flex>
        <Flex
          direction="column"
          as="nav"
          fontSize="md"
          color="gray.600"
          aria-label="Main Navigation"

        >
          <NavItem bg="#330693" >
            <Image src={mdi} alt="mdi" />
            <Link
              fontSize="14px"
              fontWeight="400"
              lineHeight="21px"
              color="#330693"
              pl="10px"
            >
              Dashboard
            </Link>
          </NavItem>
          <NavItem>
            <Image src={note} alt="note" />
            <Link
              fontSize="14px"
              fontWeight="400"
              lineHeight="21px"
              color="#330693"
              pl="10px"
            >

              Meus registros
            </Link>
          </NavItem>

        </Flex>
      </Box>

      <Flex px="4" py="5" mt={10} justify="center" alignItems="center">
        <Menu>
          <MenuButton
            as={Button}
            size={'sm'}
            rounded={'full'}
            variant={'link'}
            cursor={'pointer'}
            _hover={{ textDecoration: 'none' }}
          >
            <Box display="flex">
              <AiOutlineLogout
                size={20}
                color="20292E"
                name="logout"
              />

              <Text
                fontSize="16px"
                fontWeight="400"
                lineHeight="24px"
                color="#000000"
                pl="15px"
              >

                Sair
              </Text>

            </Box>
          </MenuButton>
          {/* <MenuList fontSize={17} zIndex={5555}>
              <MenuItem as={Link} to="#">
                My profile
              </MenuItem>
              <MenuItem as={Link} to="#">
                Change password
              </MenuItem>
              <MenuItem>Logout</MenuItem>
            </MenuList> */}
        </Menu>
      </Flex>
    </VStack>
  </Box>
);

const NavItem = (props: any) => {
  const color = useColorModeValue('gray.600', 'gray.300');

  const { icon, children } = props;
  return (
    <Flex
      align="center"
      px="4"

      py="3"
      cursor="pointer"
      role="group"
      fontWeight="semibold"
      transition=".15s ease"
      color={useColorModeValue('inherit', 'gray.400')}
      _hover={{
        bg: useColorModeValue('gray.100', 'gray.900'),
        color: useColorModeValue('gray.900', 'gray.200')
      }}
    >
      {icon && (
        <Icon
          mx="2"
          boxSize="4"
          _groupHover={{
            color: color
          }}
          as={icon}
        />
      )}
      {children}
    </Flex>
  );
};

// import {
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   Button,
// } from '@chakra-ui/react'
// import { useState } from 'react';

// const RegisterHours = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure()
//   return (
//     <>
//       <Button onClick={onOpen}>Open Modal</Button>

//       <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Modal Title</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <Lorem count={2} />
//           </ModalBody>

//           <ModalFooter>
//             <Button colorScheme='blue' mr={3} onClick={onClose}>
//               Close
//             </Button>
//             <Button variant='ghost'>Secondary Action</Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </>
//   )
// }