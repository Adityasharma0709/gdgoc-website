import { Box, Image, Text, VStack, SimpleGrid, Heading, Button } from '@chakra-ui/react';
import React from 'react';

const speakers = [
  {
    photo: "/sp1.jpg",
    name: "Belal Khan",
    role: "Google Developers Expert, Senior Engineer American Express, Founder Simplified Coding",
    register:"https://gdg.community.dev/events/details/google-gdg-on-campus-silicon-university-bhubaneswar-india-presents-ai-amp-ml-transforming-android/"
  },
  {
    photo: "/sp2.jpg",
    name: "Soumya Ranjan Sahoo",
    role: "Co-founder & Head of Backend Development in Smartters Software Pvt. Ltd",
    register:"https://gdg.community.dev/events/details/google-gdg-on-campus-silicon-university-bhubaneswar-india-presents-monolithic-vs-microservices-the-big-debate/"
  }
];

const Speakers = () => {
  return (
    <Box
      width="100vw"
      maxW="1200px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      mb={2}
    >
      <Heading
        fontFamily="sans-serif"
        fontSize={['2xl', '3xl', '5xl']}
        mb={10}
        color="whiteAlpha.600"
      >
        KeyNote Speakers
      </Heading>
      <SimpleGrid
        columns={[1, 2, 3, 4]}
        spacing="60"
        width="100%"
        justifyItems="center"
        ml={["0", "50%"]}
        gap={10}
      >
        {speakers.map((member, index) => (
          <VStack
            key={index}
            spacing="4"
           
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="md"
            align="center"
            justify="center"
            width="100%"
            maxW="300px" // Set a max width
            height="300px" // Set the height for square shape
            bg="white"
            position="relative" // Ensure image is contained within the card
          >
            <Image
              width="100%"
              height="100%" // Ensure the image takes the full square card
              objectFit="full" // Image should fill the card proportionally
              borderRadius="lg"
              src={member.photo}
              alt={member.name}
              onClick={() => window.open(`${member.register}`, "_blank")}
            />
            <Box
              position="absolute"
              bottom="20px"
              left="50%"
              transform="translateX(-50%)"
              width="80%" // Adjust button position and size
              textAlign="center"
            >
            
            </Box>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Speakers;
