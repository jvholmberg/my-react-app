import _ from 'lodash';

export const getSiteDropdownStatus = (state) =>
  _.get(state, 'navigation.isSiteDropdownOpen', false);

export const getUserDropdownStatus = (state) =>
  _.get(state, 'navigation.isUserDropdownOpen', false);

export const getUser = (state) =>
  _.get(state, 'user.fullName', 'Johan Holmberg');
