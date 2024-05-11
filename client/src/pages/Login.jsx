import React from "react";
import {
	Box,
	FormControl,
	FormLabel,
	Input,
	FormHelperText,
	Text,
	useToast,
	Button,
	FormErrorMessage,
} from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";
import image from "../assets/icons/Screenshot_2024-05-11_200038-removebg-preview.png"

import axios from "axios";
import { useNavigate } from "react-router-dom";
/**
 * @author
 * @function Login
 **/

export const Login = (props) => {
	const [userDetails, setUserDetails] = React.useState({});
	const toast = useToast();
	const { setIsLogin } = useContext(AuthContext);
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
		});
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
	return (
		<Box
			lineHeight={10}
			padding={8}
			boxShadow={
				"rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
			}
			borderRadius={"10px"}
			margin={"auto"}
			marginBottom={"5%"}
			width={"50%"}
		>
			<FormControl textAlign={"left"}>
				<Box>
					<img
						width="70%"
						src={image}
						alt=""
					/>
				</Box>
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
					marginTop={5}
					bg={color.primary}
					color="white"
					width
					value="Login"
					type="submit"
					onClick={(e) => handleSubmit(e)}
				/>
				<Text>
					By signing in, I agree to the Shop Your Way℠ Program Terms , and the
					Sears.com Terms of Use and Privacy Policy.
				</Text>
				<Text>
					New user?{" "}
					<Text as={Link} color={color.tertiary}>
						<Link to="/register">
							<Button bgColor={color.primary}color="white">
								Create an account
							</Button>
						</Link>
					</Text>
				</Text>
			</FormControl>
		</Box>
	);
};
