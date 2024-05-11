import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import ReactStars from "react-rating-stars-component";
import { Box } from "@chakra-ui/react";
import { render } from "react-dom";
import { useBreakpointValue, Heading,Image, Text, Button } from "@chakra-ui/react";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

/**
 * @author
 * @function ProductSlider
 **/
const ProductSlider2 = ({ products }) => {
	const navigate = useNavigate();

	const breakpoint = useBreakpointValue({
		base: 1,
		sm: 3,
		md: 5,
		lg: 5,
		xl: 6,
		xxl: 7,
	});
	return (
		<Swiper
			style={{ padding: "30px" }}
			// install Swiper modules
			modules={[Navigation, Pagination, Scrollbar, A11y]}
			spaceBetween={20}
			slidesPerView={breakpoint}
			navigation={true}
			autoplay={{ delay: 2500, disableOnInteraction: true }}
			loop={true}
			// disable dots
			onSwiper={(swiper) => console.log(swiper)}
			onSlideChange={() => console.log("slide change")}
		>
			{console.log(products)}
			{products.map((product) => (
				<SwiperSlide>
					<Box>
						<Product product={product} />
					</Box>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default ProductSlider2;

const Product = ({ product }) => {
	const [isAdded, setIsAdded] = React.useState(false);

	const { addItem } = useCart();
	const color = {
		primary: "#0948bb",
		secondary: "white",
		tertiary: "#41e0d0",
	};
	return (
		<Box
			borderRadius={"10px"}
			boxShadow={
				"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;"
			}
			height={"400PX"}
			overflow={"hidden"}
			position={"relative"}
		>
			<Box margin={"auto"}	  overflow={"hidden"} width={["80%","100%", "100%", "100%", "100%"]}>
				<Image
					onClick={() => navigate(`/products`)}
					width={'100%'}
					display={"block"}
					margin={"auto"}
					
					src={product["productCardSlideOpts-images-src"]}
					alt="Image not found"
				/>
			</Box>
			<Box position={"absolute"} bottom={2} paddingLeft={2} key={product._id}>
				<Text>Best Offer</Text>
				<Text color="red">
					{" "}
					<strike>{product["money"]}</strike>
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
				<Button
					key={product.id}
					display={"block"}
					margin={"auto"}
					onClick={() => {
						addItem(product);
						setIsAdded(true);
					}}
					color={color.secondary}
					bgColor={color.primary}
				>
					{isAdded ? "Added" : "Add to cart"}
				</Button>
			</Box>
		</Box>
	);
};
