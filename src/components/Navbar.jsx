import { useState } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Text,
  useColorMode,
  Image,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link as ScrollLink } from "react-scroll";
import styles from "../pages/homepage.module.css";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const { colorMode, toggleColorMode } = useColorMode();

  const handleClick = () => {
    onClose();
  };

  return (
    <>
      <Box w="100%" top="0" zIndex={1} bg={"#05445E"} px={4} position="fixed">
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Flex w="100%" justify={"flex-start"} align={"center"}>
              <Text
              color={'#FFFFFF'}
                fontSize={{ base: "20px", md: "30px" }}
                className={styles.heading}
              >
                SURAJ DJ
              </Text>
              <Image
                src="https://qph.cf2.quoracdn.net/main-qimg-9ce1dcacbca9d22b00e6db84df936347"
                width={{ base: "12%", md: "8%" }}
                alt=""
              />
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
