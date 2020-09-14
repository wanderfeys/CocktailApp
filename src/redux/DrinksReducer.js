import { getDrinkByFilter } from "../CocktailDB_API/cocktailsAPI"
import {DRINKS_LOAD,SET_DRINKS_COUNT,DRINK_SCLEAR} from './type'


const Initial_state = {
  drinksCount: 0,
  drinks: [],
}

export const drinkReducer = (state = Initial_state, action) => {
  switch (action.type) {
    case DRINKS_LOAD:
      return {
        ...state,
        drinks: [...state.drinks, action.drinks]
      }
    case DRINK_SCLEAR:
      return {
        ...state,
        drinks: [],
        drinksCount: 0 }
    case SET_DRINKS_COUNT:
      return {
        ...state,
        drinksCount: action.count }
    default:
      return state
  }
}

// actions
const drinks_add = (drinks) => ({
  type: DRINKS_LOAD,
        drinks,
})
export const clear_drinks = () => ({
  type: DRINK_SCLEAR,
})

export const set_drinksAction = (count) => ({
  type: SET_DRINKS_COUNT,
  count,
})


export const drinks_load = () => async (dispatch, getState) => {
  const { DrinkReducer, FilterReducer } = getState()
  const count = DrinkReducer.drinksCount
  const filter = FilterReducer.checkedFilters[count]
  const { data } = await getDrinkByFilter(filter)
  dispatch(drinks_add({ filter, data: data.drinks }))
}

export const checked_drinks = () => async (dispatch, getState) => {
  const { DrinkReducer, FilterReducer } = getState()
  const count = ++DrinkReducer.drinksCount
    if (count >= FilterReducer.checkedFilters.length) return true
    dispatch(set_drinksAction(count))
    await dispatch(drinks_load())
  return false
}
