import {legacy_createStore as createStore, applyMiddleware} from 'redux';
import allReducers from "./events/reducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";


const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;