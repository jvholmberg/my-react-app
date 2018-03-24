import React from 'react';
import { CraftClassName } from '../'

import './style.css';

const Grid = ({
  col12, col9, col8, col6, col4, col3, className, children, ...props,
}) => {
  let cn = CraftClassName({ col12, col9, col8, col6, col4, col3 }, 'Grid', 'Col12', 'Grid-');
  if (className) cn = `${className} ${cn}`;
  return (<div className={cn} {...props}>{children}</div>);
};
export default Grid;
