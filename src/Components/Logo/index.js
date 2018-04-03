import React from 'react';
import { CraftClassName } from '../';

import './style.css';

const Logo = ({
  large,
  medium,
  small,
  xsmall,
  xxsmall,
  className,
  icon,
  ...props
}) => {
  let cn = CraftClassName({ large, medium, small, xsmall, xxsmall }, 'Logo', 'Small', 'Logo-');
  if (icon) cn = `${cn} ${icon}`;
  if (className) cn = `${cn} ${className}`;
  return (<i className={cn} {...props} />);
};
export default Logo;
