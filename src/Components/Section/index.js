import React from 'react';
import { CraftClassName } from '../';

import './style.css';

/**
 * A Section of your page presenting content of type X.
 * @param {boolean} inverted - Adjust content to be viewable on dark background
 * @param {boolean} left - Make content horizontally left aligned
 * @param {boolean} center - Make content horizontally center aligned
 * @param {boolean} right - Make content horizontally right aligned
 * @returns {element} <Section>
 */
const Section = ({ inverted, left, center, right, className, children, ...props }) => {
  let cn = CraftClassName({ inverted }, 'Section', 'Normal', 'Section-');
  cn = CraftClassName({ left, center, right }, cn, 'Left', 'Section-', '-Aligned');
  if (className) cn = `${className} ${cn}`;
  return (
    <div className={cn} {...props}>
      {children}
    </div>
  )
};
export default Section;
