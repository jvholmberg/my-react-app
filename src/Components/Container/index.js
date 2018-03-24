import React from 'react';
import { CraftClassName } from '../';

import './style.css';

/**
 * A Container wrapping around your sections. Should never hold content since it belongs into sections.
 * @param {boolean} full - Make container have no max-width.
 * @param {boolean} regular - Container has width of 100%, but no more than 1080px  
 * @returns {element} <Container>
 */
const Container = ({ full, regular, className, children, ...props }) => {
  let cn = CraftClassName({ full, regular }, 'Container', 'Regular', 'Container-');
  if (className) cn = `${className} ${cn}`;
  return (
    <div className={cn} {...props}>
      {children}
    </div>
  );
};
export default Container;
