import { getFiltersList } from "../CocktailDB_API/cocktailsAPI"
import { clear_drinks, drinks_load } from "./DrinksReducer"
import {FILTERS,SET_CHECKED_FILTER} from './type'

const initialState = {
  filters: [],
  checkedFilters: [],
}

export const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTERS:
      return {
        ...state,
        filters: action.filters };
    case SET_CHECKED_FILTER:
      return {
        ...state,
        checkedFilters: [...action.filters] };
    default:
      return state;
  }
}


// actions
const setFilters = (filters) => ({
  type: FILTERS,
  filters,
})

export const setCheckedFiltersAction = (filters) => ({
  type: SET_CHECKED_FILTER,
  filters,
})

// 
export const setCheckedFilters = (filters) => (dispatch) => {
  dispatch(setCheckedFiltersAction(filters))
  dispatch(clear_drinks())
  dispatch(drinks_load())
}

export const filters_load = () => async (dispatch) => {
  const { data } = await getFiltersList()
  const filters = data.drinks.map((item) => item.strCategory)
  dispatch(setFilters(filters))
  dispatch(setCheckedFilters(filters))
}
