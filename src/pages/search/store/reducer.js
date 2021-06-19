import { Map } from 'immutable'

import * as actionTypes from './constants'

const defaultState = Map({
  searchValue: ''
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.SEARCH_VALUE:
      return state.set("searchValue", action.searchValue)
    default:
      return state
  }
}

export default reducer