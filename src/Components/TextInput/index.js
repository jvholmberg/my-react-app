import React from 'react';
import { CraftClassName } from '../';

import './style.css';

const TextInput = ({
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
  let className = CraftClassName(type, 'TextInput', 'Primary');
  return (
    <div className='TextInput-Container'>
      <label className='TextInput-Label'>
        {label} {required && (<span className='TextInput-Required'>*</span>)}
        <input
          name={name}
          placeholder={placeholder}
          type={password ? 'password' : 'text'}
          className={className}
          {...props} />
      </label>
    </div>
  );
}
export default TextInput;
