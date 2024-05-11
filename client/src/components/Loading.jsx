import { Box, Image } from '@chakra-ui/react'
import React from 'react'

/**
* @author
* @function Loading
**/

export const Loading= () => {
  return(
    <Box margin={"auto"}  textAlign={"center"}>
        <Image display={"block"} margin={"auto"} width="20%" src='https://img.icons8.com/?size=48&id=0kXwvcChdrri&format=gif'alt="loading" />
    </Box>
   )
  }
