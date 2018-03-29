// Core dependencies
import React, { Component } from 'react';
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

class Navigation extends Component {
  render() {
    const { children, isOpen, actions } = this.props;
    return (
      <div className='Navigation_Container'>
        <div className='Navigation_Logo'>
          <Logo className='fab fa-react' small />
        </div>
        <div
          className='Navigation_Burger'
          onClick={() => actions.toggleNavigation(!isOpen)}>
          <Logo className='fas fa-bars' small />
        </div>
        <div className={`Navigation_Links${isOpen ? ' Navigation_Drawer' : ''}`}>
          { children }
        </div>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
export { NavigationReducer }
