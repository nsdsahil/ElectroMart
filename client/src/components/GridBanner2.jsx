import React from "react";
import { Grid, Box,Text, GridItem, Button, Heading } from "@chakra-ui/react";
import { ShopNowButton } from "./ShopNow";

/**
 * @author
 * @function GridBanner
 **/

export const GridBanner2 = ({ heading }) => {
	const color = {
		primary: "#0948bb",
		secondary: "white",
		tertiary: "#41e0d0",
	};
	return (
		<Box  >
			<Heading
				letterSpacing={"4px"}
				marginTop={"1%"}
				marginBottom={"5%"}
				textAlign={"center"}
				size={["md", "lg", "2xl", "2xl", "2xl"]}
			>
				{heading}
			</Heading>
			<Grid
				h={["800px", "800px", "600px", "500px", "600px"]}
				templateRows={[
					"repeat(4, 1fr)",
					"repeat(4, 1fr)",
					"repeat(2, 1fr)",
					"repeat(2, 1fr)",
					"repeat(2, 1fr)",
				]}
				templateColumns={[
					"repeat(1, 1fr)",
					"repeat(1, 1fr)",
					"repeat(6, 1fr)",
					"repeat(6, 1fr)",
					"repeat(6, 1fr)",
				]}
				gap={5}
			>
				<GridItem
					position={"relative"}
					// backgroundImage={
					// 	"https://www.sears.com/staticpage/content/sears/shc/en/homepage/images/Box-Jewelry-020224.jpg"
					// }
				    width={"100%"}
					bgSize="contain"
					bgPos="center"
					rowSpan={[1, 1, 2, 2, 2]}
					colSpan={3}
				>
					
					<img width={'100%'} height={'100%'} src="https://www.sears.com//staticpage/content/sears/shc/en/homepage/images/100621_BIG_BOX_02.jpg" alt="" />
					
					<ShopNowButton/>
				</GridItem>
				<GridItem
					position={"relative"}
					// backgroundImage={
					// 	"https://www.sears.com//staticpage/content/sears/shc/en/homepage/images/Box-Furniture2-020224.jpg"
					// }

					colSpan={3}

				>
					<Box position={"relative"}>
					<Box position={"absolute"} top={["2","10","10","10","10"]}
					 left={["2","10","10","10","10","10"]}  paddingLeft={2}>
						<Text  fontSize={["13px","15px","15px","15px","15px"]} fontWeight={"bold"}>
							UP TO 50% OFF
						</Text>
						<Text fontWeight={"bold"} fontSize={["20px", "30px", "30px", "30px", "30px"]}>
							POWER TOOLS
						</Text>
						<Text fontSize={["13px","15px","15px","15px","15px"]} fontWeight={"bold"}>
							+FREE SHIPPING
						</Text>
					</Box>
					<img width={'100%'} src="https://www.sears.com//staticpage/content/sears/shc/en/homepage/images/100621_BOX_Tools.jpg" alt=""/>
					</Box>
					<ShopNowButton/>
				</GridItem>
				<GridItem
				    position={"relative"}
					colSpan={3}
					
				>
					<Box position={"absolute"} top={["2","10","10","10","10"]}
					 left={["2","10","10","10","10","10"]}  paddingLeft={2}>
						<Text  fontSize={["13px","15px","15px","15px","15px"]} fontWeight={"bold"}>
							UP TO 50% OFF
						</Text>
						<Text fontWeight={"bold"} fontSize={["20px", "30px", "30px", "30px", "30px"]}>
							GARDEN TOOLS	
						</Text>
						<Text fontSize={["13px","15px","15px","15px","15px"]} fontWeight={"bold"}>
							+FREE SHIPPING
						</Text>
					</Box>
					<Box>
					<img src="https://www.sears.com//staticpage/content/sears/shc/en/homepage/images/030321_BOX_LG.jpg" alt="" /></Box>
					<ShopNowButton/>
				</GridItem>
			</Grid>
		</Box>
	);
};