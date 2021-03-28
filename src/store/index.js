/** @format */

import { createStore, combineReducers } from "redux";
import { addTodoReducer } from "./reducers";

const reducers = combineReducers({ addTodoReducer });

export const store = createStore(reducers);
