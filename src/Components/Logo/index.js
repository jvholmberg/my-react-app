import React from 'react';
import { CraftClassName } from '../';

import './style.css';

const Logo = ({
  icon,
  large,
  medium,
  small,
  xsmall,
  xxsmall,
  className,
  ...props
}) => {
  let cn = CraftClassName({ large, medium, small, xsmall, xxsmall }, 'Logo', 'Small', 'Logo-');
  if (icon) cn = `${cn} ${icon}`;
  if (className) cn = `${cn} ${className}`;
  console.log(cn);
  return (<i className={cn} {...props} />);
};
export default Logo;
