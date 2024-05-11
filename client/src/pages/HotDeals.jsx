import React, { useContext } from "react";
import { useState } from "react";
import {
	Box,
	GridItem,
	Grid,
	Stack,
	Flex,
	Text,
	Heading,
	Checkbox,
	Select,
	Button,
	useBreakpointValue,
} from "@chakra-ui/react";
import axios from "axios";
import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
} from "@chakra-ui/react";
import PaginatedItems from "../components/Pagination";
import products from "../docs/products";
import ReactStars from "react-rating-stars-component";
import SearchBar from "../components/SearchBar";
import { useCart } from "react-use-cart";
import {Product2} from "../components/Product2"
import { Loading } from "../components/Loading";
import { AuthContext } from "../context/AuthContextProvider";
import { useNavigate } from "react-router-dom";

/**
 * @author
 * @function
 **/

export const HotDeals = ({ productsData }) => {
	const [loading, setLoading] = useState(true);
	const [products, setProducts] = useState([]);
	const color = {
		primary: "#0948bb",
		secondary: "white",
		tertiary: "#41e0d0",
	};
	const items = [1, 2, 3, 4, 5, 6, 7];
	const {addItem}=useCart()
	const isMobile = useBreakpointValue({
		base: true,
		sm: true,
		md: false,
		lg: false,
		xl: false,
		xxl: false,
	});
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(12);

	// Calculate indexes for slicing the data array
	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
	const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const [isAdded, setIsAdded] = useState(false);
	const {isLogin,setIsLogin}=useContext(AuthContext)
	const navigate=useNavigate()
	{!isLogin && navigate("/login")}

	React.useEffect(() => {
		

		async function getProducts() {
			try {
				setLoading(true);
				const res = await fetch("https://sears-40h2.onrender.com/products/65c5d513216f075027acbf8e/hotDeals",{
					method:"GET",
					credentials:"include"
				});
				const data = await res.json();
				console.log(data);
				setProducts(data.hotDeals);
			} catch (error) {
				console.log(error);
			}finally{
				setLoading(false);
			}
		}	
		getProducts();	
	},[]);

	return (
		<Box>
			
			<Flex justifyContent={"space-between"}>
				{!isMobile && (
					<Box
						boxShadow={
							"rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
						}
						padding={2}
						width={"30%"}
					>
						<Filter />
					</Box>
				)}
				<Box
					width={["98%", "98", "98%", "69%", "69%", "69%"]}
					padding={4}
					boxShadow={
						"rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
					}
				>
					<Flex
						flexWrap={["wrap", "wrap", "wrap", "nowrap", "nowrap"]}
						justifyContent={"space-between"}
						alignItems={"center"}
					>
						<Heading size="md">Showing Results</Heading>
						<SearchBar /> <SelectTag />{" "}
					</Flex>
					{loading ?<Loading/>:
					<Grid
						gap={4}
						templateColumns={[
							"repeat(1, 1fr)",
							"repeat(2, 1fr)",
							"repeat(3, 1fr)",
							"repeat(4, 1fr)",
							"repeat(4, 1fr)",
						]}
					>
						{currentItems.map((product) => (
							<GridItem key={product._id}position={"relative"}>
								<Product2 product={product}/>
							</GridItem>
						))}
					</Grid>}
				</Box>
			</Flex>

			<Flex
				padding={2}
				margin={"auto"}
				width={["100%", "30%", "30%", "30%"]}
				alignItems={"center"}
				justifyContent={"space-between"}
			>
				<Button
					size="sm"
					color={color.secondary}
					bgColor={color.primary}
					onClick={() => paginate(currentPage - 1)}
				>
					Previous
				</Button>
				<Text>Page {currentPage}</Text>
				<Button
					size="sm"
					color={color.secondary}
					bgColor={color.primary}
					onClick={() => paginate(currentPage + 1)}
				>
					Next
				</Button>
			</Flex>
		</Box>
	);
};
const SelectTag = () => {
	return (
		<Select placeholder="Recommended">
			<option value="high-low">Prices Low to High</option>
			<option value="low-high">Prices High to Low</option>
		</Select>
	);
};
const Filter = () => {
	return (
		<>
			<Accordion defaultIndex={[2]} allowMultiple>
				<AccordionItem>
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left">
								Event
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						<Checkbox>Flash Sale(33)</Checkbox>
						<Checkbox>New Arrivals</Checkbox>
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem>
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left">
								Department
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						<Checkbox>Tools</Checkbox>
					</AccordionPanel>
				</AccordionItem>
				<AccordionItem>
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left">
								Category
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						<Stack spacing={3}>
							<Checkbox display={"block"}>
								Air Compressors & Air Tools (15){" "}
							</Checkbox>
							<Checkbox display={"block"}>All Tools (1)</Checkbox>
							<Checkbox display={"block"}>Garage Door Openers (3)</Checkbox>
							<Checkbox display={"block"}>
								Garage Organization & Shelving (4)
							</Checkbox>
							<Checkbox display={"block"}>Hand Tools (17)</Checkbox>
							<Checkbox display={"block"}>Home Improvement (2)</Checkbox>
							<Checkbox display={"block"}>Levels & Stud Finders (1)</Checkbox>
							<Checkbox display={"block"}>Mechanics & Auto Tools (30)</Checkbox>
							<Checkbox display={"block"}>Portable Power Tools (3)</Checkbox>
							<Checkbox display={"block"}>Power Tool Accessories (2) </Checkbox>
							<Checkbox display={"block"}>Safety & Shop Gear (1)</Checkbox>
							<Checkbox display={"block"}>Tool Sets (13)</Checkbox>
							<Checkbox display={"block"}>Tool Storage (18)</Checkbox>
							<Checkbox display={"block"}>Tools (11)</Checkbox>
							<Checkbox display={"block"}> Welding Equipment (1)</Checkbox>
							<Checkbox display={"block"}>Tools</Checkbox>
						</Stack>
					</AccordionPanel>
				</AccordionItem>
				<AccordionItem>
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left">
								Brand
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						<Stack spacing={3}>
							<Checkbox display={"block"}>Autel (2)</Checkbox>
							<Checkbox display={"block"}>BeamUp (1) </Checkbox>
							<Checkbox display={"block"}>Cat Footwear (1)</Checkbox>
							<Checkbox display={"block"}>Costway (8) </Checkbox>
							<Checkbox display={"block"}>Craftsman (69)</Checkbox>
							<Checkbox display={"block"}>DieHard (14)</Checkbox>
							<Checkbox display={"block"}>Tool Storage (18)</Checkbox>
							<Checkbox display={"block"}>Tools (11)</Checkbox>
							<Checkbox display={"block"}>Welding Equipment (1)</Checkbox>
							<Checkbox display={"block"}>Tools</Checkbox>
						</Stack>
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</>
	);
};
