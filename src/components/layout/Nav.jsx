import { useState, useEffect, useContext } from "react";
import {
  Box,
  Flex,
  Text,
  Spacer,
  IconButton,
  Button,
  Image,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/color-mode";
import "../../App.css";
import { Menu, MenuButton, MenuList, MenuItem, MenuGroup, MenuDivider } from "@chakra-ui/menu";
import { HamburgerIcon, ArrowDownIcon } from "@chakra-ui/icons";
import { toast } from "react-toastify";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { useThemeContext } from "../../contexts/themecontext";

const img = "/image.png"

function Nav() {
  
  const [width, setWidth] = useState(window.innerWidth);
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();
  const { colorMode, toggleColorMode } = useThemeContext();


  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Logged out successfully");
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error("Failed to logout");
    }
  };



  return (
    <Box  px={["6", "10"]} width="100%"  bg={colorMode === "light" ? "white" : "#18181a"}
    color={colorMode === "light" ? "black" : "white"} zIndex={999}>
      <Flex justify="center" align="center">
        <Link to="/">
          <Image src={img} width="150px" height="90px" />
        </Link>


        <Spacer />

        <Box ml="2" display={'flex'} gapX={5}>
           <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <SunIcon/>: <MoonIcon/>}
              </Button>
          {currentUser ? (
            <Menu>
              {width > 768 ? (
                <MenuButton as={Button} rightIcon={<ArrowDownIcon />}>
                  My profile
                </MenuButton>
              ) : (
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  variant="outline"
                  textColor={"black"}
                  filter={"brightness(1.5)"}
                >
                  <HamburgerIcon />
                </MenuButton>
              )}
              <MenuList >
                <MenuGroup  >
                  <MenuItem as={Link} to="/write" _hover={{
                    bg: "black",
                    color: "white",
                    transform: "scale(1)",
                  }}>
                    Write article
                  </MenuItem>
                  <MenuItem as={Link} to="/my-articles" _hover={{
                    bg: "black",
                    color: "white",
                    transform: "scale(1)",
                  }}>
                    My articles
                  </MenuItem>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup _hover={{
                  bg: "black",
                  color: "white",
                  scale:1

                }} title={currentUser?.displayName || "Guest User"}>
                  <MenuItem onClick={handleLogout} _hover={{
                    bg: "black",
                    color: "white",
                    transform: "scale(1)",
                  }}>Logout</MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
          ) : (
            <Button as={Link} to="/login" colorScheme="blue">
              Sign Up
            </Button>
          )}
        </Box>
      </Flex>

    </Box>
  );
}

export default Nav;
