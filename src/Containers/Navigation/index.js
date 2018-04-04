// Core dependencies
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Project dependecies
import { Logo } from '../../Components';

// Reducers/Selectors
import NavigationReducer, { toggleNavigation } from './reducer';
import { isNavigationOpen } from './selector';

// Styling (TODO: Add babel-plugin-react-css-modules)
import './style.css';

const mapStateToProps = (state) => {
  const isOpen = isNavigationOpen(state);
  console.log(isOpen);
  return ({ isOpen });
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    toggleNavigation,
  }, dispatch),
});

const Navigation = ({ children, isOpen, actions }) => (
  <div className='Navigation_Container'>
    <div className='Navigation_Logo'>
      <Logo icon='fab fa-react' small />
    </div>
    <div
      className='Navigation_Burger'
      onClick={() => actions.toggleNavigation(!isOpen)}>
      <Burger isOpen={isOpen} />
    </div>
    <div className={`Navigation_Links${isOpen ? ' Open' : ''}`}>
      { children }
    </div>
  </div>
);

const Burger = ({ isOpen }) =>
  <Logo icon={isOpen ? 'fas fa-times' : 'fas fa-bars'} xsmall />;

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
export { NavigationReducer }
