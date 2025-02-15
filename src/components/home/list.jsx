import React, { useState, useEffect } from 'react';
import { Box, Text, VStack, Button, SimpleGrid, Heading, Image } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { events } from "../../Eventdetails";
import { useThemeContext } from "../../contexts/themecontext";
import { useNavigate } from "react-router-dom";
import Speakers from './Speakers';

const List = () => {
  const { colorMode } = useThemeContext();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentEvents, setCurrentEvents] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  const nextEvent = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
  };

  const prevEvent = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth >= 768) {
      setCurrentEvents(events.slice(currentIndex, currentIndex + 3).concat(
        events.slice(0, Math.max(0, 3 - (events.length - currentIndex)))
      ));
    } else {
      setCurrentEvents(events.slice(currentIndex, currentIndex + 1));
    }
  }, [windowWidth, currentIndex, events]);

  return (
    <Box
      pt={10}
      w="100vw"
      minH="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-start"
      position="relative"
      bg='rgb(0,0,128)'
      bgGradient={'linear-gradient(159deg, rgba(0,0,128,1) 0%, rgba(0,191,255,1) 100%)'}
      color={colorMode === "light" ? "black" : "white"}
      overflowY="auto"
      overflowX={'hidden'}
    >
      <Heading fontSize={['5xl', '10xl']} color={'whiteAlpha.700'}>EVENTS</Heading>
      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        bgImage={`url(/abstract.jpg)`}
        bgSize="cover"
        bgPosition="center"
        zIndex="-1"
        filter="blur(10px)"
      />

      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3 }}
        spacing={6}
        pl={{ base: '10%', md: 6 }}

        pt={{ base: 8, md: 12 }}
        pb={{ base: 8, md: 12 }}
        w="100%"
        maxW="1200px"
        mx="auto"
        align="center"
        justify="center"
        gap={{ base: 6, md: 8 }}
      >
        <AnimatePresence mode="wait">
          {currentEvents.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              style={{ position: "relative", zIndex: 1 }}
            >
              <VStack
                spacing={4}
                p={4}
                borderWidth="1px"
                borderRadius="lg"
                boxShadow="2xl"
                align="center"
                w={{ base: "280px", md: "320px", lg: "360px" }}
                h={{ base: "280px", md: "320px", lg: "360px" }}
                position="relative"
                overflow="hidden"
              >
                <Image
                  src={`${event.photo}`}
                  alt={event.name}
                  h="100%"
                  w="100%"
                  objectFit="cover"
                  position="absolute"
                  top={0}
                  left={0}
                  zIndex={0}
                  onClick={()=>window.open(`${event.form}`,"_blank")}
                />

                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="flex-end"
                  alignItems="center"
                  w="100%"
                  h="40%"
                  p={4}
                  borderRadius="md"
                  zIndex={1}
                  position="absolute"
                  bottom={0}
                >

                
                </Box>
              </VStack>
            </motion.div>
          ))}
        </AnimatePresence>
      </SimpleGrid>

      <Button
        position="absolute"
        left={{ base: "10px", md: "5%" }}
        top={['20%', '30%']}
        transform="translateY(-50%)"
        onClick={prevEvent}
        zIndex={20}
        _hover={{ bg: "gray.800" }}
        _active={{ bg: "gray.900" }}
        bg="transparent"
        color="black"
      >
        <ChevronLeftIcon />
      </Button>
      <Button
        position="absolute"
        right={{ base: "10px", md: "5%" }}
        top={['20%', '30%']}
        transform="translateY(-50%)"
        onClick={nextEvent}
        zIndex={20}
        _hover={{ bg: "gray.800" }}
        _active={{ bg: "gray.900" }}
        bg="transparent"
        color="black"
      >
        <ChevronRightIcon />
      </Button>

      {/* Speakers Section */}
      <Box
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        mt={10}
        px={4}
      >
        <Speakers />
      </Box>
    </Box>
  );
};

export default List;