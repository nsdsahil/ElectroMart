import React from "react";
import { Grid, Box, GridItem } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

/**
* @author
* @function Categories

**/

export const Categories = ({ categories, heading }) => {
    const navigate = useNavigate()
	return (
		<Box marginTop={"5%"} marginBottom={"5%"}>
			<Heading letterSpacing={"2px"} margin={"2%"} size={["md", "lg", "2xl", "2xl", "2xl"]}textAlign={"center"}>
				{heading}{" "}
			</Heading>

			<Grid
				templateColumns={[
					"repeat(2, 1fr)",
					"repeat(3, 1fr)",
					"repeat(5, 1fr)",
					"repeat(5, 1fr)",
					"repeat(6, 1fr)",
				]}
				gap={6}
			>
				{console.log(categories)}
				{categories.map((categories) => (
					<GridItem onClick={() => navigate(`/products`)}  textAlign={"center"} width={"90%"}>
						<img width={"100%"} src={categories.image} alt="category" />
						<Heading size="SM">{categories.name}</Heading>
					</GridItem>
				))}
			</Grid>
		</Box>
	);
};
