import userAPI from "../../api/user";

export const REGISTER_BEGIN = "registerForm/REGISTER_BEGIN";
export const REGISTER_SUCCESS = "registerForm/REGISTER_SUCCESS";
export const REGISTER_FAILURE = "registerForm/REGISTER_FAILURE";

export function registerBegin() {
  return {
    type: REGISTER_BEGIN
  };
}

export function registerSuccess(data) {
  return {
    type: REGISTER_SUCCESS,
    payload: { data }
  };
}

export function registerFailure(error) {
  return {
    type: REGISTER_FAILURE,
    payload: { error }
  };
}

export function register(data) {
  return dispatch => {
    dispatch(registerBegin());

    return userAPI
      .create(data)
      .then(data => {
        dispatch(registerSuccess(data));

        console.log(data);
      })
      .catch(error => {
        dispatch(registerFailure(error));

        console.log(error);
      });
  };
}
