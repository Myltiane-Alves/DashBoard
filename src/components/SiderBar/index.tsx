import React from "react";
import {
    Box, 
    Link, 
    useDisclosure 
} from "@chakra-ui/react";



export function SiderNavBar({ children }: { children: React.ReactNode }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
    <Box
      bg="red"
     
    >
      
        <a>
          <img src="../../assets/logo.png" alt="logo"/>
        </a>
   
      <Box mt="6" as="aside">
        {children}
      </Box>
    </Box>
  );
}
