import { Container, Heading, Box } from '@chakra-ui/react'
import React from 'react'


/**
* @author
* @function Guide
**/

export const Guide = ({docs,heading}) => {
  return(
    <Box marginTop={'2%'} fontSize={['xs','sm','md','lg']} color={'gray'} borderTop={"1px solid gray"} padding={5}>
      <Heading color='gray.600'>{heading}</Heading>
      {docs.map((docs) =>(
        <Box margin={5} key={docs.id}>
        <Heading color='gray.600'  size="md">{docs.heading}</Heading>
        <p>{docs.content}</p>
        </Box>
      ))}
    </Box>
   )
  }
