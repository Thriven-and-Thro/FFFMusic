// 使用 immutable 优化
import { Map } from "immutable"

import * as actionTypes from './constants'

// 使用Map
const defaultState = Map({
  topBanners: []
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      // 使用set
      return state.set("topBanners", action.topBanners)
    default:
      return state
  }
}

export default reducer