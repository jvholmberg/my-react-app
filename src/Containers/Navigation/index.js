// Core dependencies
import React from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Project dependecies
import { NavLinkExtended } from '../../Components';
import { Logo } from '../../Components';

// Reducers/Selectors
import NavigationReducer, { toggleSiteDropdown, toggleUserDropdown } from './reducer';
import { getSiteDropdownStatus, getUserDropdownStatus, getUser } from './selector';

// Styling (TODO: Add babel-plugin-react-css-modules)
import './style.css';

const mapStateToProps = (state) => {
  const isSiteDropdownOpen = getSiteDropdownStatus(state);
  const isUserDropdownOpen = getUserDropdownStatus(state);
  const user = getUser(state);
  return ({ isSiteDropdownOpen, isUserDropdownOpen, user });
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    toggleSiteDropdown,
    toggleUserDropdown,
  }, dispatch),
});

const Navigation = ({ children, isSiteDropdownOpen, isUserDropdownOpen, user,  actions }) => (
  <div className='Navigation_Container'>
    <div className='Navigation_Logo'>
      <Logo icon='fas fa-heartbeat' small />
    </div>
    <div
      className='Navigation_Burger'
      onClick={() => actions.toggleSiteDropdown(!isSiteDropdownOpen)}>
      <Burger isOpen={isSiteDropdownOpen} />
    </div>
    <div
      className='Navigation_User'
      onClick={() => actions.toggleUserDropdown(!isUserDropdownOpen)}>
      <User isOpen={isUserDropdownOpen}>{ user }</User>
    </div>
    <div className={`Navigation_Links${isSiteDropdownOpen ? ' Open' : ''}`}>
      <NavLinkExtended activeClassName='Active' to='/'>Home</NavLinkExtended>
      <NavLinkExtended activeClassName='Active' to='/dashboard'>Dashboard</NavLinkExtended>
    </div>
    <div className={`Navigation_Links${isUserDropdownOpen ? ' Open' : ''}`}>
      <NavLinkExtended activeClassName='Active' to='/login'>Login</NavLinkExtended>
    </div>
  </div>
);

const Burger = ({ isOpen }) =>
  <Logo icon={isOpen ? 'fas fa-times' : 'fas fa-bars'} xsmall />;

const User = ({ isOpen, children }) => (
  <div>
    <span className='Navigation_User_Username'>{ children }</span>
    <Logo icon={isOpen ? 'fas fa-times' : 'fas fa-user-circle'} small />
  </div>
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navigation));
export { NavigationReducer }
