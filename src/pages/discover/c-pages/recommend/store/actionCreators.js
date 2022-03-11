import * as actionTypes from './constants'

import { getTopBanners, getHotRecommend, getNewDjradio, getTopList } from '@/servies/recommend'



const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res && res.banners
})

const changeHotCommendAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommend: res && res.result
})

const changeNewDjradioAction = (res) => ({
  type: actionTypes.CHANGE_NEW_DJRADIO,
  newDjradio: res && res.albums
})

const changeUpRankingAction = (res) => ({
  type: actionTypes.CHANGE_UP_RANKING,
  upRanking: res && res.playlist
})

const changeNewRankingAction = (res) => ({
  type: actionTypes.CHANGE_NEW_RANKING,
  newRanking: res && res.playlist
})

const changeOriginRankingAction = (res) => ({
  type: actionTypes.CHANGE_ORIGIN_RANKING,
  originRanking: res && res.playlist
})

export const getTopBannerAction = () => {
  // thunk
  return dispatch => {
    getTopBanners().then(res => {
      dispatch(changeTopBannerAction(res))
    })
  }
}

export const getHotRecommendAction = (limit) => {
  return dispatch => {
    getHotRecommend(limit).then(res => {
      dispatch(changeHotCommendAction(res))
    })
  }
}

export const getNewDjradioAction = (limit) => {
  return async dispatch => dispatch(changeNewDjradioAction(await getNewDjradio(limit)))
}

export const getTopListAction = (idx) => {
  return dispatch => {
    getTopList(idx).then(res => {
      switch (idx) {
        case 0:
          dispatch(changeNewRankingAction(res))
          break
        case 2:
          dispatch(changeOriginRankingAction(res))
          break
        case 3:
          dispatch(changeUpRankingAction(res))
          break
        default:
      }
    })
  }
}