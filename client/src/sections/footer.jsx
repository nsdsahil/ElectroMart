import React from "react";
import {
	Heading,
	Link,
	Text,
	Grid,
	Flex,
	GridItem,
	Box,
} from "@chakra-ui/react";

/**
 * @author
 * @function Footer
 **/

export const Footer = (props) => {
	return (
		<>

			
			<BottomFooter />
		</>
	);
};
const FooterCategories = () => {
	const lineHeight = [8, 10, 10, 10]
	return (
		<Box fontSize={["xs", "sm", "sm", "md"]} padding={["2% 1% 2% 1%", "2% 15% 2% 15%", "2% 15% 2% 15%", "2% 15% 2% 15%"]} backgroundColor={"#f5f5f5"}>
			<Grid
				margin={"auto"}
				width={"80%"}
				templateColumns={[
					"repeat(2, 1fr)",
					"repeat(2, 1fr)",
					"repeat(2, 1fr)",
					"repeat(4, 1fr)",
					"repeat(4, 1fr)",
				]}
				gap={10}
			>
				<GridItem lineHeight={lineHeight}>
					<Heading size="sm" letterSpacing={"2px"} margin={"2%"}>
						Customer Service
					</Heading>

					<Link display={"block"}>Store Locator</Link>
					<Link display={"block"}>Order Status</Link>
					<Link display={"block"}>Shipping & Returns</Link>
					<Link display={"block"}>Products Realls</Link>
					<Link display={"block"}>Signup for Email & Texts</Link>
					<Link display={"block"}>Help & Contact Us</Link>
				</GridItem>
				<GridItem lineHeight={lineHeight}>
					<Heading size="sm" letterSpacing={"2px"} margin={"2%"}>
						Customer Service
					</Heading>

					<Link display={"block"}>Store Locator</Link>
					<Link display={"block"}>Order Status</Link>
					<Link display={"block"}>Shipping & Returns</Link>
					<Link display={"block"}>Products Realls</Link>
					<Link display={"block"}>Signup for Email & Texts</Link>
					<Link display={"block"}>Help & Contact Us</Link>
				</GridItem>
				<GridItem lineHeight={lineHeight}>
					<Heading size="sm" letterSpacing={"2px"} margin={"2%"}>
						Customer Service
					</Heading>

					<Link display={"block"}>Store Locator</Link>
					<Link display={"block"}>Order Status</Link>
					<Link display={"block"}>Shipping & Returns</Link>
					<Link display={"block"}>Products Realls</Link>
					<Link display={"block"}>Signup for Email & Texts</Link>
					<Link display={"block"}>Help & Contact Us</Link>
				</GridItem>
				<GridItem lineHeight={lineHeight}>
					<Heading size="sm" letterSpacing={"2px"} margin={"2%"}>
						Customer Service
					</Heading>

					<Link display={"block"}>Store Locator</Link>
					<Link display={"block"}>Order Status</Link>
					<Link display={"block"}>Shipping & Returns</Link>
					<Link display={"block"}>Products Realls</Link>
					<Link display={"block"}>Signup for Email & Texts</Link>
					<Link display={"block"}>Help & Contact Us</Link>
				</GridItem>
			</Grid>
		</Box>
	);
};

const MiddleFooter = () => {
	return (
		<>
			<Box fontSize={["xs", "sm", "sm", "md"]} backgroundColor={"#dbdde0"}>
				<Flex
					fontWeight={"bold"}
					padding={"2% 10% 2% 10%"}
					justifyContent={"space-around"}
					borderBottom={"1px gray solid"}
				>
					<Flex alignItems={"center"} gap={2}>
						{" "}
						<Box>
							<img
								float={"right"}
								src="https://www.sears.com/content/configs/citi/images/sears/2024-syw-mastercard-90x60-qm-2-amp-fmt-eq-png-alpha.webp"
								alt=""
							/>
						</Box>
						Get the Shop Your Way Mastercard® <Link>Apply Now</Link>
					</Flex>
					<Text>View Credit Card Offers</Text>
					<Text>Pay Your Bill</Text>
					<Text>Manage Your Account</Text>
				</Flex>
				<Flex
					padding={"2% 15% 2% 15%"}
					gap={2}
					justifyContent={"space-around"}
					flexWrap={"wrap"}
				>
					<Text>About Shop Your Way</Text>
					<Text>Price Match Policy</Text>
					<Text>Accessibility</Text>
					<Text>Terms of Service</Text>
					<Text>Privacy Policy</Text>
					<Text>CA Supply Chain Act</Text>
					<Text>CA Privacy Rights</Text>
					<Text>Do Not Sell My Personal Information</Text>
					<Text>CA Privacy Rights</Text>
					<Text>California Privacy Rights </Text>
					<Text>California Cleaning Products Right to Know Act</Text>
					<Text>Do not Sell or Share My Personal Information</Text>
				</Flex>
			</Box>
		</>
	);
};

const BottomFooter = () => {
	return (
		<>
			<Box padding={3} textAlign={"center"}>
				<Heading size="sm" letterSpacing={"2px"}>
					Visit our Other sites
				</Heading>
				<Flex
					fontWeight={"bold"}
					padding={"2% 10% 2% 10%"}
					justifyContent={"space-around"}
					borderBottom={"1px gray solid"}
					gap={5}
				>
					<Box>
						<img
							width={"100% "}
							src="https://www.sears.com/assets/images/s_footer_images/Kenmore.png"
							alt=""
						/>
					</Box>
					<Box>
						<img
							src="https://www.sears.com/assets/images/s_footer_images/Kmart.png"
							alt=""
						/>
					</Box>
					<Box>
						<img
							src="https://www.sears.com/assets/images/s_footer_images/BBB_Accredited%20Business.png"
							alt=""
						/>
					</Box>
					<Box>
						<img
							src="https://www.sears.com/assets/images/s_footer_images/Sears_HomeServices.png"
							alt=""
						/>
					</Box>
					<Box>
						<img
							src="https://www.sears.com/assets/images/s_footer_images/Sears_Puerto%20Rico.png"
							alt=""
						/>
					</Box>
				</Flex>
				<Flex
					padding={[
						"2% 1% 2% 1%",
						"2% 15% 2% 15%",
						"2% 15% 2% 15%",
						"2% 15% 2% 15%",
					]}
					gap={5}
					justifyContent={"space-betweem"}
				>
					<Box>
						<img
							src="https://www.sears.com/assets/images/s_footer_images/BBB_Accredited%20Business.png"
							alt=""
						/>
					</Box>
					<Text fontSize={["xs", "md", "lg", "md"]}>
						{" "}
						2024 Transform SR Brands LLC. All Rights Reserved
					</Text>
					<Flex>
						<Box>
							<img
								width={"100% "}
								src="https://www.sears.com/assets/images/s_footer_images/facebook-footer.png"
								alt=""
							/>
						</Box>
						<Box>
							<img
								width={"100% "}
								src="https://www.sears.com/assets/images/s_footer_images/youtube-footer.png"
								alt=""
							/>
						</Box>
						<Box>
							<img
								width={"100% "}
								src="https://www.sears.com/assets/images/s_footer_images/instagram-footer.png"
								alt=""
							/>
						</Box>
					</Flex>
				</Flex>
			</Box>
		</>
	);
};
