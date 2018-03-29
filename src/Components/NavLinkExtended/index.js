import React from 'react';
import { NavLink } from 'react-router-dom'

const NavLinkExtended = ({ children, ...props }) =>
  <NavLink { ...props }>{ children }</NavLink>;
export default NavLinkExtended;
