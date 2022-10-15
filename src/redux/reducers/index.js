import { combineReducers } from "redux";
import categoryReducer from "./category";

// The key of this object will be the name of the store
const rootReducers = combineReducers({ category: categoryReducer });

export default rootReducers;