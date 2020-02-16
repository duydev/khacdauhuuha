import { REGISTER_BEGIN, REGISTER_SUCCESS, REGISTER_FAILURE } from "./actions";

const initialState = {
  loading: false,
  user: null,
  error: null
};

function registerBegin(state) {
  return { ...initialState, loading: true };
}

function registerSuccess(state, { payload: { data } }) {
  return { ...state, loading: false, user: data };
}

function registerFailure(state, { payload: { error } }) {
  return { ...state, loading: false, error };
}

const handlers = {
  [REGISTER_BEGIN]: registerBegin,
  [REGISTER_SUCCESS]: registerSuccess,
  [REGISTER_FAILURE]: registerFailure
};

export default (state = initialState, action) => {
  const handler = handlers[action.type];

  return handler ? handler(state, action) : state;
};
