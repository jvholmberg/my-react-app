import React from 'react';
import { CraftClassName } from '../';

import './style.css';

const TextInput = ({
  primary, secondary, success, danger, warning, info, light, dark,
  name, label, placeholder, password, required, onChange, className, ...props,
}) => {
  const type = { primary, secondary, success, danger, warning, info, light, dark };

  let cn = CraftClassName(type, 'TextInput', 'Primary');
  if (className) cn = `${className} ${cn}`;
  return (
    <div className='TextInput-Container'>
      <label className='TextInput-Label'>
        {label} {required && (<span className='TextInput-Required'>*</span>)}
        <input
          name={name}
          placeholder={placeholder}
          type={password ? 'password' : 'text'}
          className={cn}
          {...props} />
      </label>
    </div>
  );
}
export default TextInput;
