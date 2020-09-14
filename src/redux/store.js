import { drinkReducer } from "./DrinksReducer";
import {filtersReducer} from "./FiltersReducer";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";


const middleware = applyMiddleware(thunk)

const rootReducer = combineReducers({ DrinkReducer: drinkReducer, FilterReducer:filtersReducer });

export const store = createStore(rootReducer, middleware);
