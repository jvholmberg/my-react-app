import React from 'react';
import { CraftClassName } from '../';

import './style.css';

const Logo = ({ large, medium, small, className, ...props }) => {
  let cn = CraftClassName({ large, medium, small }, 'Logo', 'Small', 'Logo-');
  if (className) cn = `${className} ${cn}`;
  return (<i className={cn} {...props} />);
};
export default Logo;