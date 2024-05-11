import React from 'react'
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
import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
} from "@chakra-ui/react";
import PaginatedItems from "../components/Pagination";

import ReactStars from "react-rating-stars-component";
import SearchBar from "../components/SearchBar";

/**
* @author
* @function Product
**/

export const Product = ({product}) => {
    const [isAdded, setIsAdded] = useState(false);
  const { addItem } = useCart();
  const color = {
    primary: "#0948bb",
    secondary: "white",
    tertiary: "#41e0d0",
};
  return(
    <Box
			borderRadius={"10px"}
			boxShadow={
				"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;"
			}
			height={"400PX"}
			overflow={"hidden"}
			position={"relative"}
		>
        <Box  maxWidth={"70%"} >
									<img
									display={"block"}
									margin={"auto"}
										width={"100%"}
										src={product["img-fluid-product-src"]}
										alt="Image not found"
									/>
								</Box>
								<Box position={"absolute"} bottom={2} paddingLeft={2} key={product._id}>
									<Text>{product["money 2"]}</Text>
									<Text color="red">
										{" "}
										<strike>{product["money 1"]}</strike>
									</Text>
									<Text>{product.price}</Text>
									<Heading size="xs">{product["custom-div-title"]}</Heading>
									<ReactStars
										count={5}
										value={product.rating}
										edit={false}
										size={24}
										activeColor="#ffd700"
									/>
									<Button key={product.id} onClick={() =>{addItem(product); setIsAdded(true)} }color={color.secondary} bgColor={color.primary}>
										{isAdded ? "Add more" : "Add to cart"}
									</Button>
								</Box>

    </Box>
   )
  }
