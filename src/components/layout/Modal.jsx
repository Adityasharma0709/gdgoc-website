import { useEffect } from "react";
import { Button, Box } from "@chakra-ui/react";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from "@chakra-ui/modal";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

const SimpleModal = ({ open, setIsOpen }) => {
  const navigate = useNavigate();

  // Text lines to display
  const line1 = "Get Ready ";
  const line2 = "For Developers Summit 2.0";

  // Stagger text animation for letters via Framer Motion
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      }
    }
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    }
  };

  useEffect(() => {
    setIsOpen(true); // Open modal on component mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const closeModal = () => setIsOpen(false);

  return (
    <Box display="flex" justifyContent="center" alignItems="center" mt={10} zIndex={999}>
      <Modal isOpen={open} onClose={closeModal} isCentered motionPreset="scale">
        <ModalOverlay bg="blackAlpha.700" />
        <ModalContent
          h="100vh"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          position="relative"
          zIndex="2000"
          p={5}
          borderRadius="md"
          boxShadow="2xl"
          bg="black"
          color="whitesmoke"
          textAlign="center"
        >
          {/*
            Add this background image box inside ModalContent.
            It is absolutely positioned behind other content.
          */}
          <Box
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            backgroundImage="url('/path-to-your-image.jpg')"  // <<== Change this to your background image path
            backgroundSize="cover"
            backgroundPosition="center"
            filter="brightness(0.5)"
            zIndex={-2}
          />

          {/* If desired, you can also include the animated gradient background below (or remove if not needed)
          <Box
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            background="linear-gradient(270deg, #ff0080, #ff8c00, #40e0d0)"
            backgroundSize="400% 400%"
            animation="gradientAnimation 15s ease infinite"
            filter="blur(4px)"
            opacity={0.6}
            zIndex={-1}
          /> 
          */}

          <ModalHeader>
            <motion.h3 variants={sentence} initial="hidden" animate="visible">
              <Box fontSize={['5xl', '10xl']} fontWeight="bold">
                {line1.split("").map((char, index) => (
                  <motion.span key={char + "-" + index} variants={letter}>
                    {char}
                  </motion.span>
                ))}
                <br />
                {line2.split("").map((char, index) => (
                  <motion.span key={char + "-" + index} variants={letter}>
                    {char}
                  </motion.span>
                ))}
              </Box>
            </motion.h3>
          </ModalHeader>

          {/* ModalBody creates a gap between header text and buttons */}
          <ModalBody pt={0} pb={60} />

          <ModalFooter justifyContent="center">
            <Button
              colorScheme="red"
              mr={3}
              onClick={closeModal}
              px={6}
              py={4}
              _hover={{
                bg: "gray.600",
                transform: "scale(1.03)",
                boxShadow: "md"
              }}
              transition="all 0.2s ease-in-out"
            >
              Go To Main Page
            </Button>
            <Button
              colorScheme="blue"
              onClick={() => navigate("/events")}
              px={6}
              py={4}
              _hover={{
                bg: "gray.600",
                transform: "scale(1.03)",
                boxShadow: "md"
              }}
              transition="all 0.2s ease-in-out"
            >
              Check Out Summit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default SimpleModal;