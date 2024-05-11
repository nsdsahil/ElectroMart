import { Flex, Input, IconButton } from "@chakra-ui/react";
import React from 'react'
import { SearchIcon } from "@chakra-ui/icons";
function SearchBar() {
    const color = {
        primary: "#0948bb",
        secondary: "white",
        tertiary: "#41e0d0",
    };
	return (
		<Flex position={"relative"} width={"100%"} padding={5}>
			<Input
				borderRadius={"10"}
				width={"100%"}
				bg="white"
				variant="flushed"
				paddingLeft="10px"
				placeholder="Search"
			/>
			<IconButton
				zIndex={2}
				position={"absolute"}
				top={6}
				right={6}
				size={"sm"}
				backgroundColor={color.tertiary}
				aria-label="Search database"
				icon={<SearchIcon />}
			/>
		</Flex>
	);
}

export default SearchBar;