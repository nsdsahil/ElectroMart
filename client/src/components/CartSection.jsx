import React from "react";
import {
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	Box,
	useDisclosure,
} from "@chakra-ui/react";
import { Cart } from "./Page";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useCart } from "react-use-cart";
import { FaCircle } from "react-icons/fa6";

function CartSection() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { totalItems } = useCart();

	return (
		<>
			<Button onClick={() => onOpen()} backgroundColor={"#0948bb"} size={"sm"}>
				<MdOutlineShoppingCart color="white" size="40px" />
				<Box position={"absolute"}
						top={-1}
						right={1}>
					<FaCircle
						size={"20px"}
						color={"white"}
					/>
				</Box>
				<Box
					
					position={"absolute"}
					top={-1.}
					right={2}
					style={{ color: "#0948bb", fontSize: "15px" }}
				>
					{totalItems}
				</Box>
			</Button>

			<Drawer size="sm" onClose={onClose} isOpen={isOpen}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>{"Your Cart"}</DrawerHeader>
					<DrawerBody>
						<Cart />
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
}

export default CartSection;
