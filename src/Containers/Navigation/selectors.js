import _ from 'lodash';

export const isNavigationOpen = (state) =>
  _.get(state, 'isOpen', false);
