import _ from 'lodash';

export const getLoginFormValues = (state) =>
  _.get(state, 'loginForm.values', false);
