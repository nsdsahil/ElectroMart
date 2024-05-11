import React from 'react'
import { Menu, MenuButton, MenuList, MenuItem, MenuGroup, MenuDivider, Button } from '@chakra-ui/react'

/**
* @author
* @function Profile
**/

export const Profile = (props) => {
  return(
    <Menu zIndex={10}>
  <MenuButton  as={Button} colorScheme='#0948bb'>
    Profile 
  </MenuButton>
  <MenuList>
    <MenuGroup title='Profile'>
      <MenuItem>My Account</MenuItem>
      <MenuItem>Payments </MenuItem>
    </MenuGroup>
    <MenuDivider />
    <MenuGroup title='Help'>
      <MenuItem>Docs</MenuItem>
      <MenuItem>FAQ</MenuItem>
    </MenuGroup>
  </MenuList>
</Menu>
   )
}
