const NAVIGATION_TOGGLE = 'NAVIGATION_TOGGLE';

export const toggleNavigation = (isOpen) =>
  ({ type: NAVIGATION_TOGGLE, isOpen });

const defaultState = {
  loggedIn: false,
  isOpen: false,
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case NAVIGATION_TOGGLE:
      return {
        ...state,
        isOpen: action.isOpen,
      };
    default:
      return state;
  }
}
