import React, { useContext } from "react";
import Login from "../sections/Login";

import { Link } from "react-router-dom";

import {
	Box,
	Flex,
	Avatar,
	HStack,
	Button,
	Input,
	Text,
	IconButton,
	Heading,
	ButtonGroup,
	MenuButton,
	Menu,
	MenuList,
	MenuItem,
	MenuDivider,
	useDisclosure,
	useColorModeValue,
	useBreakpointValue,
	Stack,
	useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { HamburgerIcon, CloseIcon, SearchIcon } from "@chakra-ui/icons";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";
import { Profile } from "./Profile";
import image from "../assets/icons/Screenshot_2024-05-11_190908-removebg-preview.png";
import CartSection from "./CartSection";
/**
 * @author Sahil Nishad
 * @function Navbar
 **/

const color = {
	primary: "#0948bb",
	secondary: "white",
	tertiary: "#41e0d0",
};
const Navbar = (props) => {
	const toast = useToast();
	const { isLogin, setIsLogin } = React.useContext(AuthContext);
	const isMobile = useBreakpointValue({
		base: true,
		sm: true,
		md: false,
		lg: false,
		xl: false,
		xxl: false,
	});

	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<Box zIndex={"100"} position={'sticky'} top={0} bg={color.primary} px={4}>
				<Flex
					h={16}
					padding={2}
					alignItems={"center"}
					justifyContent={"space-between"}
				>
					<IconButton
						size={"50px"}
						fontSize={"xl"}
						variant={"ghost"}
						color={color.secondary}
						icon={
							isOpen ? (
								<CloseIcon />
							) : (
								<HamburgerIcon color="white" boxSize={10} />
							)
						}
						aria-label={"Open Menu"}
						display={{ md: "none" }}
						onClick={isOpen ? onClose : onOpen}
					/>
					<HStack
						width="100%"
						justifyContent={"space-around"}
						alignItems={"center"}
					>
						<Box width={["50%","50%", "50%", "5%", "5%"]} as={Link} to="/">
							<img
								width="100%"
								src={image}
								alt=""
							/>
						</Box>
						<Heading size={["sm","sm","sm","lg"]} color={color.secondary}>ElectroMart</Heading>
						<HStack
							as={"nav"}
							color={color.secondary}
							spacing={5}
							display={{ base: "none", md: "flex" }}
						>
							<Link to="/products" color={color.secondary}>
								{" "}
								<b>Products</b>
								
							</Link>
							<Shop />
							<Link to="/hotdeals" color={color.secondary}>
								<b>Hot Deals</b>
							</Link>
						</HStack>
						{!isMobile && <SearchBar />}
					</HStack>

					<Flex>
						{!isMobile && (
							<Button
								variant="ghost"

								backgroundColor={color.primary}
								color={color.secondary}
							>
								<b>My Orders</b>
							</Button>
						)}
						{isLogin ? <Logout /> : <Login />}
						{!isLogin && <Profile />}
						<CartSection />
					</Flex>
				</Flex>
				{isMobile && <SearchBar />}
				{isOpen ? (
					<Box color={color.secondary} pb={4} display={{ md: "none" }}>
						<Stack as={"nav"} spacing={4}>
							<Link to="/products" color={color.secondary}>
								{" "}
								Products
							</Link>
							<Link color={color.secondary}>Shop</Link>
							<Link to="/hotdeals" color={color.secondary}>
								Hot Deals
							</Link>
						</Stack>
					</Box>
				) : null}
			</Box>

			<Box p={4}></Box>
		</>
	);
};

function SearchBar() {
	const navigate=useNavigate();
	const{products,setProducts}=useContext(AuthContext)
	const [searchItem, setSearchItem] = React.useState("");
	async function handleSubmit() {
		console.log(searchItem)
		await axios
			.get("https://sears-40h2.onrender.com/products/search/" + searchItem)
			.then((res) => {
				console.log(res.data);
				setProducts(res.data);
				navigate("/products");
			})
			.catch((err) => {
				console.log(err);
			});
	}
	return (
		<Flex position={"relative"} width={["100%","100%", "50%", "50%", "50%", "50%"]} padding={5}>
			<Input
				borderRadius={"10"}
				width={"100%"}
				bg="white"
				onChange={(e) => {
					setSearchItem(e.target.value);
				}}
				variant="flushed"
				paddingLeft="10px"
				placeholder="Search"
			/>
			<IconButton
				zIndex={2}
				position={"absolute"}
				top={6}
				right={6}
				size={"sm"}
				onClick={() => {
					handleSubmit(searchItem);
				}}
				backgroundColor={color.tertiary}
				aria-label="Search database"
				icon={<SearchIcon />}
			/>
		</Flex>
	);
}

function Shop() {
	return (
		<Menu>
			<MenuButton color={color.secondary}><b>Shop</b></MenuButton>
			<MenuList color={"black"}>
				<MenuItem as="a" >
					<Link to='/products'>Appliances</Link>
				</MenuItem>
				<MenuItem as="a" >
					<Link to='/products'>Tools</Link>
				</MenuItem>
				<MenuItem as="a" >
					<Link to='/products'>Clothing</Link>
				</MenuItem>
				<MenuItem as="a" >
					<Link to='/products'>Lawn and Gardening</Link>
				</MenuItem>
				<MenuItem as="a" >
					<Link to='/products'>Tv and Technologies</Link>
				</MenuItem>
			</MenuList>
		</Menu>
	);
}

const Logout = () => {
	const { setIsLogin } = useContext(AuthContext);
	const toast = useToast();
	const handleClick = async () => {
		await axios
			.get("https://sears-40h2.onrender.com/user/logout", {
				withCredentials: true,
			})
			.then((res) => {
				if (res.data.msg == "logout successful") {
					toast({
						title: res.msg,
						description: "You are logged out",
						status: "success",
					});
					setIsLogin(false);
				} else {
					toast({
						title: res.msg,
						description: res.data.msg,
						status: "error",
					});
					setIsLogin(false);
				}
			})
			.catch((err) => {
				toast({
					title: err.msg,
					description: "try again",
					status: "error",
				});
				console.log(err);
			});
	};
	return (
		<>
			<Button
				backgroundColor={color.primary}
				color={color.secondary}
				onClick={handleClick}
			>
				<b>Logout</b>
			</Button>
		</>
	);
};

export default Navbar;
