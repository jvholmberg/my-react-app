import React from 'react';
import { CraftClassName } from '../';

import './style.css';

const TextArea = ({
  name, label, placeholder, password, required,
  // All touched inputs for the entire form, get by name
  touched,
  // Validation errors for the entire form, get by name
  errors,
  // Other props passed
  ...props,
}) => {
  const type = {
    primary: touched && !touched[name],
    success: errors && !errors[name],
    danger: errors && touched && errors[name] && touched[name],
  };
  let className = CraftClassName(type, 'TextArea', 'Primary');
  return (
    <div className='TextArea-Container'>
      <label className='TextArea-Label'>
        {label} {required && (<span className='TextArea-Required'>*</span>)}
        <textarea
          name={name}
          placeholder={placeholder}
          type={password ? 'password' : 'text'}
          className={className}
          {...props} />
      </label>
    </div>
  );
}
export default TextArea;
