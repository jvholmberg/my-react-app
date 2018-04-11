import React from 'react';
import { CraftClassName } from '../';

import './style.css';

const Note = ({
  primary, secondary, success, danger, warning, info, light, dark,
  className, children, ...props,
}) => {
  const type = { primary, secondary, success, danger, warning, info, light, dark };

  let cn = CraftClassName(type, 'Note', 'Light');
  return (
    <div className={cn} {...props}>
      {children}
    </div>
  );
};
export default Note;
