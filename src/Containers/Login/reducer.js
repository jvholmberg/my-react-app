
const SUBMIT_LOGIN_FORM = 'SUBMIT_LOGIN_FORM';

export const submitLoginForm = (values) =>
  ({ type: SUBMIT_LOGIN_FORM, values });

export default function (state = {}, action) {
  switch (action.type) {
    case SUBMIT_LOGIN_FORM:
      return action.values;
    default:
      return state;
  }
}
