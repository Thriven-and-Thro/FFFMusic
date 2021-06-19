import * as actionTypes from './constants'

export const changeSearchValue = (searchValue) => ({
  type: actionTypes.SEARCH_VALUE,
  searchValue
})