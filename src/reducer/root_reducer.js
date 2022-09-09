import { firestoreReducer } from "react-redux-firebase";
import { combineReducers } from "redux";
import authreducer from "./authreducer";
import todo_reducer from "./todo_reducer";

const Root_reducer = combineReducers({
  auth: authreducer,
  todo: todo_reducer,
});

export default Root_reducer;
