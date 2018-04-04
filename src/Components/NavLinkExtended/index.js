import React from 'react';
import { NavLink } from 'react-router-dom'

const NavLinkExtended = ({ children, exact = true, ...props }) =>
  <NavLink exact { ...props }>{ children }</NavLink>;
export default NavLinkExtended;
