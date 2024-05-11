import React from "react";
import {
	useNavigate
} from "react-router-dom";

import { useState } from "react";
import image from "../assets/icons/Screenshot_2024-05-11_200038-removebg-preview.png"
import axios from "axios";
import {
	FormControl,
	Box,
	useDisclosure,
	FormLabel,
	Input,
	Modal,
	Link,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Stack,
	Checkbox,
	Button,

	Heading,
	FormErrorMessage,
	RadioGroup,
	Radio,
	HStack,
	useToast,
	FormHelperText,
} from "@chakra-ui/react";
/**
 * @author
 * @function Register
 **/

const Register = () => {
	const navigate = useNavigate();
	const { isOpen, onOpen, onClose } = useDisclosure();
	
	const OverlayOne = () => (
		<ModalOverlay
			bg="blackAlpha.300"
			backdropFilter="blur(10px) hue-rotate(90deg)"
		/>
	);
	const [overlay, setOverlay] = React.useState(<OverlayOne />);
	const color = {
		primary: "#0948bb",
		secondary: "white",
		tertiary: "#41e0d0",
	};
	const toast = useToast();
	const [userDetails, setUserDetails] = useState({
		name: "",
		dob: "",
		gender: "",
		email: "",
		password: "",
	});
	const [TempUserDetails, setTempUserDetails] = React.useState({});

	const verifyHandleChange = (e) => {
		const { name, value } = e.target;
		setTempUserDetails({
			...TempUserDetails, //email:KXrYk@example.com,password:123
			[name]: value,
		});
	};

	const verifyHandleSubmit = async (e) => {
		e.preventDefault();
		console.log(TempUserDetails);

		try {
			const res = await axios.post("https://sears-40h2.onrender.com/user/verify",
				TempUserDetails,
				{ withCredentials: true }
			);
			toast({
				title: "Login",
				description: "You are logged in",
				status: "success",
			});
			setIsLogin(true);
			console.log(res.data);
			// Navigate to home
			navigate("/");
		} catch (err) {
			toast({
				title: "Login failed",
				description: "try again",
				status: "error",
			});
			console.error(err);
		}
	};
	const handlechange = (e) => {
		const { name, value } = e.target;
		setUserDetails({
			...userDetails,
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(userDetails);
		toast({
			title: "Login",
			description: "Processing",
			status: "info",
		})
		await axios
			.post("https://sears-40h2.onrender.com/user/register", userDetails, {
				withCredentials: true,
			})
			.then((res) => {
				console.log(res.data);
				if (res.data.msg == "otp sent") {
					toast({
						title: "otp sent",
						description: "please verify otp",
						status: "success",
					});
					navigate("/verify");
					
				
				} else {
					toast({
						title: "Registration",
						description: res.data.msg,
						status: "error",
					});
				}
			})
			.catch((err) => {
				toast({
					title: "Registration",
					description: err.message,
					status: "error",
				});
				console.log(err);
			});
	};

	return (
		<>
			<Box
				padding={"2%"}
				boxShadow={
					"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
				}
				width={["80%","60%","50%","40%"]}
				margin={"auto"}
				marginBottom={"5%"}
			>
				<img
					width="70%"
					src={image}
				/>
				<div>
					<Heading>Register</Heading>
				</div>
				<FormControl textAlign={"left"}>
					<FormLabel>Name</FormLabel>
					<Input type="text" name="name" onChange={(e) => handlechange(e)} />
					<FormLabel>Date of Birth</FormLabel>
					<Input type="date" name="dob" onChange={(e) => handlechange(e)} />
					<FormLabel>Gender </FormLabel>
					<RadioGroup defaultValue="Itachi">
						<Radio onChange={(e) => handlechange(e)} value="male" name="gender">
							Male
						</Radio>
						<Radio
							onChange={(e) => handlechange(e)}
							value="female"
							name="gender"
						>
							Female
						</Radio>
					</RadioGroup>

					<FormLabel>Email</FormLabel>
					<Input type="email" name="email" onChange={(e) => handlechange(e)} />
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
						color={color.secondary}
						width
						value="Register"
						type="submit"
						onClick={(e) => handleSubmit(e)}
					/>
				</FormControl>
			</Box>
			

			
		</>
	);
};

export default Register;