import React from 'react';
import { CraftClassName } from '../';

import './style.css';

/**
 * A regular button. It supports multiple color variations and sizes such as following.
 * It's more or less a slim variant of the bootstrap4 variant.
 * Colors: [primary, secondary, success, danger, warning, info, light, dark, link]
 * Sizes: [large, medium, small]
 * @returns {element} <Button>
 */
const Button = ({
  primary, secondary, success, danger, warning, info, light, dark, link,
  large, medium, small, className, children, ...props,
}) => {
  const type = { primary, secondary, success, danger, warning, info, light, dark, link };
  const size = { large, medium, small };

  let cn = CraftClassName(type, 'Button', 'Link');
  cn = CraftClassName(size, cn, 'Medium', 'Button-Size-');
  if (className) cn = `${className} ${cn}`;
  return (<button className={cn} {...props}>{children}</button>);
}
export default Button;
