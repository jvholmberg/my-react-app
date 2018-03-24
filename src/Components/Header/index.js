import React from 'react';

import './style.css';

/**
 * A simple header for page/section/content supports (h1-h6)
 * @param {boolean} [as='h1'] - The level of heading (h1-h6). Constants exist for this value
 * @returns {element} <Header>
 */
const Header = ({ h1, h2, h3, h4, h5, h6, className, children, ...props }) => {
  let cn = 'Header';
  if (className) cn = `${className} ${cn}`;

  if (h6) return (<h6 className={cn} {...props}>{children}</h6>);
  if (h5) return (<h5 className={cn} {...props}>{children}</h5>);
  if (h4) return (<h4 className={cn} {...props}>{children}</h4>);
  if (h3) return (<h3 className={cn} {...props}>{children}</h3>);
  if (h2) return (<h2 className={cn} {...props}>{children}</h2>);
  return (<h1 className={cn} {...props}>{children}</h1>);
}
export default Header;
