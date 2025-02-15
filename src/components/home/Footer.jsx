import { Box, Flex, Text, Link, Stack, Image } from "@chakra-ui/react";
import { FiInstagram,FiLinkedin } from "react-icons/fi";
const Footer = () => {
  return (
    <Box bg="black" color="white" py={4} px={8} h={"100px"} overflowX={'hidden'}>
      <Flex direction={{ base: "column", md: "row" }} justify="space-between" align="center">
        <Text fontSize="sm" color="gray.400">
          &copy; {new Date().getFullYear()} GDGOC SU. All rights reserved.
        </Text>

        <Stack direction="row" spacing={4} mt={{ base: 2, md: 0 }}> 
          <Link href="https://www.linkedin.com/company/gdsc-silicon-institute-of-technology-bhubaneswar/posts/?feedView=all" isExternal color={'white'}>
            <FiLinkedin/>
          </Link>
          <Link href="https://www.instagram.com/gdgoc_su?utm_source=qr&igsh=MTZqZGlubXl5bXZ3NA==" isExternal color={'white'}>
           <FiInstagram/>
          </Link>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Footer;