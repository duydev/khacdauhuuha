import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import appReducer from "./app/reducer";
import registerFormReducer from "./register-form/reducer";

export default combineReducers({
  app: appReducer,
  form: formReducer,
  registerForm: registerFormReducer
});
