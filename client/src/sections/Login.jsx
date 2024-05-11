import {
	Button,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	Text,
	
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Box,
	useDisclosure,
	Input,
	FormControl,
	FormLabel,
	Stack,
	useToast,
	useColorModeValue,
	Heading,
	FormHelperText,
	FormErrorMessage,
} from "@chakra-ui/react";
import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";
import React from "react";
import image from "../assets/icons/Screenshot_2024-05-11_200038-removebg-preview.png"
function Login() {
	const [loading, setLoading] = useState(false);
	const { isLogin, setIsLogin } = useContext(AuthContext);
    
	const [userDetails, setUserDetails] = useState({});
	const toast = useToast();
	const navigate = useNavigate();

	const handlechange = (e) => {
		const { name, value } = e.target;
		setUserDetails({
			...userDetails, //email:KXrYk@example.com,password:123
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {
		console.log(userDetails);
		axios.defaults.withCredentials = true;
		toast({
			title: "Login",
			description: "Processing",
			status: "info",
		})
		await axios
			.post("https://sears-40h2.onrender.com/user/login", userDetails, {
				withCredentials: true,
			})
			.then((res) => {
				toast({
					title: "Login",
					description: "You are logged in",
					status: "success",
				});
				setIsLogin(true);
				console.log(res.data);
				//navigate to home
				navigate("/");
			})
			.catch((err) => {
				toast({
					title: "Login failed",
					description: "try again",
					status: "error",
				});
				console.log(err);
			});
	};
		
	const color = {
		primary: "#0948bb",
		secondary: "white",
		tertiary: "#41e0d0",
	};
	const OverlayOne = () => (
		<ModalOverlay
			bg="blackAlpha.300"
			backdropFilter="blur(10px) hue-rotate(90deg)"
		/>
	);

	const OverlayTwo = () => (
		<ModalOverlay
			bg="none"
			backdropFilter="auto"
			backdropInvert="80%"
			backdropBlur="2px"
		/>
	);

	const { isOpen, onOpen, onClose } = useDisclosure();
	const [overlay, setOverlay] = React.useState(<OverlayOne />);

	return (
		<>
			<Button
				variant="ghost"
				backgroundColor={color.primary}
				color={color.secondary}
				onClick={() => {
					setOverlay(<OverlayOne />);
					onOpen();
				}}
			>
				Login
			</Button>

			<Modal isCentered isOpen={isOpen} onClose={onClose}>
				{overlay}
				<ModalContent>
					<ModalHeader>
						<Box >
							<img
								width="70%"
								src={image}
								alt=""
							/>
						</Box>
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody width="90%">
						<div>
							<Heading>Login</Heading>
						</div>
						<FormControl textAlign={"left"}>
							<FormLabel>Email</FormLabel>
							<Input
								type="email"
								name="email"
								onChange={(e) => handlechange(e)}
							/>
							<FormHelperText>
								Enter the email you'd like to receive the newsletter on.
							</FormHelperText>
							<FormErrorMessage>Email is required.</FormErrorMessage>
							<FormLabel>Password</FormLabel>
							<Input
								type="password"
								name="password"
								onChange={(e) => handlechange(e)}
							/>
							<FormHelperText>We'll never share your Password</FormHelperText>
							<Input
								bg={color.primary}
								color="white"
								width
								value="Login"
								type="submit"
								onClick={(e) => {handleSubmit(e); onClose()}}
							/>
						</FormControl>
						<Text as={Link} color={color.tertiary}>
							Forgot Password ?
						</Text>
						<Text>
							By signing in, I agree to the Shop Your Way℠ Program Terms , and
							the Sears.com Terms of Use and Privacy Policy.
						</Text>
						<Text>
							New user?{" "}
							<Text as={Link} color={color.tertiary}>
								<Link to="/register">
								<Button bgColor={color.primary} onClick={onClose} color="white">
									Create an account
								</Button></Link>
							</Text>
						</Text>
					</ModalBody>
					<ModalFooter></ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}

export default Login;
