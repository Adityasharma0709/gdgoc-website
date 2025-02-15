import { useEffect, useState } from "react";
import {
	Button,
	Box,
} from "@chakra-ui/react";
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/modal";

import { motion } from 'motion/react'
import { useNavigate } from "react-router-dom";
const SimpleModal = ({open,setIsOpen}) => {
	
	const navigate=useNavigate()

	const line1 = "Get Ready "
	const line2 = "For Developers Summit 2.0"
	const sentence = {
		hidden: { opacity: 1 },
		visible: {
			opacity: 1,
			transition: {
				delay: 0.5,
				staggerChildren: 0.08,
			}
		}
	}

	const letter = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
		}
	}
	useEffect(() => {
		setIsOpen(true); // Open modal on component mount
	}, []);
	const closeModal = () => setIsOpen(false);

	return (
		<Box display="flex" justifyContent="center" alignItems="center" mt={10} zIndex={999}>
			<Modal isOpen={open} onClose={closeModal} isCentered motionPreset="scale">
				<ModalOverlay bg="blackAlpha.700" />
				<ModalContent
					h={"100vh"}
					display={'flex'}
					justifyContent={'center'}
					alignContent={'center'}
					zIndex="2000"
					p={5}
					borderRadius="md"
					boxShadow="2xl"
					bg="black"
					color="whitesmoke"
					textAlign="center"
				>
					<ModalHeader>
						<motion.h3
							variants={sentence}
							initial="hidden"
							animate="visible"
						>
							<Box fontSize={['5xl','10xl']} fontWeight="bold"> {/* Chakra's font size */}
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


					<ModalFooter justifyContent="center">
						<Button colorScheme="red" mr={3} onClick={closeModal}>
							Go To Main Page
						</Button>
						<Button colorScheme="blue" onClick={() => navigate("/events")}>
							Check Out Summit
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Box>
	);
};

export default SimpleModal;
