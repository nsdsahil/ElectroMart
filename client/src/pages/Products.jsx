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
import { useCart } from "react-use-cart";
import { Product } from "../components/Product";
import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
} from "@chakra-ui/react";
import PaginatedItems from "../components/Pagination";
import { AuthContext } from "../context/AuthContextProvider";

import ReactStars from "react-rating-stars-component";
import SearchBar from "../components/SearchBar";
import { Loading } from "../components/Loading";

/**
 * @author
 * @function
 **/

export const Products = ({ productsData }) => {
	const [loading, setLoading] = useState(false);
	const { addItem } = useCart();
	const color = {
		primary: "#0948bb",
		secondary: "white",
		tertiary: "#41e0d0",
	};
	const items = [1, 2, 3, 4, 5, 6, 7];
	const isMobile = useBreakpointValue({
		base: true,
		sm: true,
		md: false,
		lg: false,
		xl: false,
		xxl: false,
	});
	const [isAdded, setIsAdded] = useState(false);

	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(12);
	const { products, setProducts } = useContext(AuthContext);

	// Calculate indexes for slicing the data array
	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	

	React.useEffect(() => {
		async function getProducts() {
			try {
				setLoading(true);
				const res = await fetch("https://sears-40h2.onrender.com/products");
				const data = await res.json();
				console.log(data);
				setProducts(data);
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		}
		getProducts();
	}, []);

	return (
		<Box>
			<Flex justifyContent={"space-between"}>
				<Box
					width={["98%", "98", "98%", "69%", "95%", "95%"]}
					padding={4}
					margin={"auto"}
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
					{loading ? (
						<Loading />
					) : (
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
								<GridItem key={product._id}>
									<Product product={product} />
								</GridItem>
							))}
						</Grid>
					)}
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
	const [value,setValue]=React.useState('')
	const {products,setProducts}=useContext(AuthContext)


	const handleSelect = (e) => {
		setValue(e.target.value)
		console.log(value)
		if(value=="high-low"){
			const sortedData = [...products]
			.sort(
				(a, b) =>
					parseInt(a.price.substring(2))-parseInt(b.price.substring(2))
			);
			setProducts(sortedData);
		}else{
			const sortedData = [...products]
			.sort(
				(a, b) =>
					parseInt(b.price.substring(1))-parseInt(a.price.substring(1))
			);
			setProducts(sortedData);
		}	
	};
	
	return (
		<Select onChange={handleSelect} placeholder="Recommended">
			<option  value="high-low">Prices Low to High</option>
			<option  value="low-high">Prices High to Low</option>
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
