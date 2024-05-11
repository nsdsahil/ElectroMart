import React from "react";
import { Flex, Image, useBreakpointValue } from "@chakra-ui/react";

/**
 * @author
 * @function AdvertiseBanner
 **/

export const AdvertiseBanner = () => {
    const isMobile = useBreakpointValue({
        base: true,
        sm: true,
        md: false,
        lg: false,
        xl: false,  
    })
    
	return (
		<>
			<Flex margin={"1% 0 2% 0"}>
				<Image
					src={isMobile?"https://www.sears.com/staticpage/content/sears/shc/en/homepage/images/Subscribe-banner-mobile.jpg":"https://www.sears.com//staticpage/content/sears/shc/en/homepage/images/Subscribe-thin-banner-desktop-2.jpg"}
					alt=""
				/>
			</Flex>
			<Flex margin={"2% 0 2% 0"}>
				<Image
					src={isMobile?"https://www.sears.com//staticpage/content/sears/shc/en/homepage/images/militarymobile2919m.jpg":"https://www.sears.com//staticpage/content/sears/shc/en/homepage/images/military2919D.jpg"}
					alt=""
				/>
			</Flex>
		</>
	);
};
