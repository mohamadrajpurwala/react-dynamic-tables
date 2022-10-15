import { applyMiddleware, compose, createStore } from "redux";
import rootReducers from "../reducers";
import thunk from 'redux-thunk';

const keyName = 'category';

// convert object to string and store in localStorage
function saveToLocalStorage(state) {
    try {
        const serialisedState = JSON.stringify(state.category);
        localStorage.setItem(keyName, serialisedState);
    } catch (e) {
        console.warn(e);
    }
}

// create our store from our rootReducers and use loadFromLocalStorage
// to overwrite any values that we already have saved
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)));

// listen for store changes and use saveToLocalStorage to
// save them to localStorage
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;