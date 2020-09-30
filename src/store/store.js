import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import tweetsReducer from "./reducers/tweetsReducer";
import usersReducer from "./reducers/usersReducer";

const reducers = combineReducers({
  tweetsPage: tweetsReducer,
  usersPage: usersReducer,
});
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

window.store = store.getState()

export default store;
