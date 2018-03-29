// Core dependencies
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Project dependecies
import { Logo } from '../../Components';

// Reducers
import NavigationReducer, { toggleNavigation } from './reducer';

// Selectors
import { isNavigationOpen } from './selectors';

// Styling (TODO: Add babel-plugin-react-css-modules)
import './style.css';

const mapStateToProps = state => {
  const isOpen = isNavigationOpen(state);
  return ({ isOpen });
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    toggleNavigation,
}, dispatch);

const Navigation = ({ children, isOpen }) => (
  <div className='Navigation_Container'>
    <div className='Navigation_Logo'>
      <Logo className='fab fa-react' small />
    </div>
    <div className='Navigation_Burger'>
      <Logo
        className='fas fa-bars'
        small
        onClick={() => toggleNavigation(!isOpen) }/>
    </div>
    <div className={`Navigation_Links${isOpen ? ' Navigation_Drawer' : ''}`}>
      { children }
    </div>
  </div>
);
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
export { NavigationReducer }
