// 使用 immutable 优化
import { Map } from "immutable"

import * as actionTypes from './constants'

// 使用Map
const defaultState = Map({
  topBanners: [],
  hotRecommend: [],
  newDjradio: [],

  upRanking: {},
  newRanking: {},
  originRanking: {},
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      // 使用set
      return state.set("topBanners", action.topBanners)
    case actionTypes.CHANGE_HOT_RECOMMEND:
      return state.set("hotRecommend", action.hotRecommend)
    case actionTypes.CHANGE_NEW_DJRADIO:
      return state.set("newDjradio", action.newDjradio)
    case actionTypes.CHANGE_UP_RANKING:
      return state.set("upRanking", action.upRanking)
    case actionTypes.CHANGE_NEW_RANKING:
      return state.set("newRanking", action.newRanking)
    case actionTypes.CHANGE_ORIGIN_RANKING:
      return state.set("originRanking", action.originRanking)
    default:
      return state
  }
}

export default reducer