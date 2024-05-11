import { Box, Container,Text, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { ShopNowButton } from "./ShopNow";

/**
 * @author
 * @function FlexBanner
 **/

export const FlexBanner = (props) => {
	return (
		<Box>
			<Box display={"flex"} gap={5} flexWrap={"wrap"}>
				<Box
					position={"relative"}
					height={"300px"}
					bgPos={"center"}
					bgSize={"cover"}
					backgroundImage={
						"https://www.sears.com//staticpage/content/sears/shc/en/homepage/images/091823-Bigbox_tv.jpg"
					}
					width={["100%", "100%", "100%", "49%", "49%", "49%"]}
				>
					<Container>
						<Box
							position={"absolute"}
							top={["2", "10", "10", "10", "10"]}
							left={["2", "10", "10", "10", "10", "10"]}
							paddingLeft={2}
						>
							<Text  fontSize={["13px","15px","15px","15px","15px"]} fontWeight={"bold"}>
							UP TO 50% OFF
						</Text>
						<Text fontWeight={"bold"} fontSize={["25px", "30px", "30px", "30px", "30px"]}>
							TELEVISIONS 
						</Text>
						<Text fontSize={["13px","15px","15px","15px","15px"]} fontWeight={"bold"}>
							+FREE SHIPPING
						</Text>
						</Box>
						<ShopNowButton />
					</Container>
				</Box>
				<Box
					position={"relative"}
					backgroundImage={
						"https://www.sears.com/staticpage/content/sears/shc/en/homepage/images/100621_BOX_Console_v4.jpeg"
					}
					height={"300px"}
					bgPos={"center"}
					bgSize={"cover"}
					width={["100%", "100%", "100%", "49%", "49%", "49%"]}
				>
					<Container>
						<Box
							position={"absolute"}
							top={["2", "10", "10", "10", "10"]}
							left={["2", "10", "10", "10", "10", "10"]}
							paddingLeft={2}
						>
							<Text  fontSize={["13px","15px","15px","15px","15px"]} fontWeight={"bold"}>
							UP TO 50% OFF
						</Text>
						<Text fontWeight={"bold"} fontSize={["20px", "30px", "30px", "30px", "30px"]}>
							GAMING SETUPS	
						</Text>
						<Text fontSize={["13px","15px","15px","15px","15px"]} fontWeight={"bold"}>
							+FREE SHIPPING
						</Text>
						</Box>
						<ShopNowButton />
					</Container>
				</Box>
			</Box>
		</Box>
	);
};
