const NAVIGATION_TOGGLE = 'NAVIGATION_TOGGLE';

export const toggleSiteDropdown = (isOpen) =>
  ({ type: `${NAVIGATION_TOGGLE}_SITE`, isOpen });

export const toggleUserDropdown = (isOpen) =>
  ({ type: `${NAVIGATION_TOGGLE}_USER`, isOpen });

const defaultState = {
  isLoggedIn: false,
  isSiteDropdownOpen: false,
  isUserDropdownOpen: false,
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case `${NAVIGATION_TOGGLE}_SITE`:
      return {
        ...state,
        isSiteDropdownOpen: action.isOpen,
        isUserDropdownOpen: false,
      };
    case `${NAVIGATION_TOGGLE}_USER`:
      return {
        ...state,
        isUserDropdownOpen: action.isOpen,
        isSiteDropdownOpen: false,
      };
    default:
      return state;
  }
}
