import Button from './Button';
import Container from './Container';
import Divider from './Divider';
import Footer from './Footer';
import Grid from './Grid';
import Header from './Header';
import Logo from './Logo';
import Section from './Section';
import TextInput from './TextInput';
import NavLinkExtended from './NavLinkExtended';
import Note from './Note';

/**
 * Appends a className to the provided string from props of type boolean
 * @param {object} props - The props which should be used for creating className
 * @param {string} ret - The string which className will be appended to
 * @param {string} def - The default value if no match was found (Optional)
 * @param {string} [prefix=''] - Prefix for className (Optional)
 * @param {string} [suffix=''] - Suffix for className (Optional)
 */
const CraftClassName = (props, ret, def, prefix, suffix) => {
  let className;
  for (let key in props) {
    if (!props[key]) continue;
    className = Capitalize(key);
    ret = `${ret} ${prefix||''}${className}${suffix||''}`;
    return ret;
  }
  return def ? `${ret} ${prefix||''}${def}${suffix||''}` : ret;
};

/**
 * Capitalizes first character of string.
 * @param {string} str - String to be capitalized
 */
const Capitalize = str =>
  str.charAt(0).toUpperCase() + str.slice(1);

export {
  // Components
  Button,
  Container,
  Divider,
  Footer,
  Grid,
  Header,
  Logo,
  NavLinkExtended,
  Note,
  Section,
  TextInput,

  // Utility functions
  CraftClassName,
  Capitalize,

  // Constants

};
