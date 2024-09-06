import { combineReducers } from "redux";

import authReducer from "./AuthReducer";
import postReducer from "./PostReducer";
import chatReducer from "./ChatUserReducer";
import userReducer from "./UserReducer"
import cmntReducer from "./CmntReducer";

export const reducers = combineReducers({
  authReducer,
  postReducer,
  chatReducer,
  userReducer,
  cmntReducer,
});