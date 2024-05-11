import React from "react";
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

/**
 * @author
 * @function
 **/

export const HotDeals = ({ productsData }) => {
	const [products, setProducts] = useState([]);
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
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(12);

	// Calculate indexes for slicing the data array
	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	React.useEffect(() => {
		async function getProducts() {
			try {
				const res = await fetch("http://localhost:8080/products/65c5d513216f075027acbf8e/hotDeals");
				const data = await res.json();
				console.log(res);
				setProducts(data.hotDeals);
			} catch (error) {
				console.log(error);
			}
		}
		getProducts();
	});

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
							<GridItem>
								<Box maxWidth={"70%"}>
									<img
										width={"100%"}
										src={product["image"]}
										alt="Image not found"
									/>
								</Box>
								<Box paddingLeft={2}>
									<Text>{product[""]}</Text>
									<Text color="red">
										{" "}
										<strike>{product["unmarkedPrice"]}</strike>
									</Text>
									<Text>{product["price"]}</Text>
									<Heading size="xs">{product["title"]}</Heading>
									<ReactStars
										count={5}
										value={product.rating}
										edit={false}
										size={24}
										activeColor="#ffd700"
									/>
									<Button color={color.secondary} bgColor={color.primary}>
										Add to cart
									</Button>
								</Box>
							</GridItem>
						))}
					</Grid>
				</Box>
			</Flex>

			<Flex
				padding={2}
				margin={"auto"}
				width={"20%"}
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
