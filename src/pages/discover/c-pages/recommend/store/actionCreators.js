import * as actionTypes from './constants'

import { getTopBanners, getHotRecommend, getNewDjradio } from '@/servies/recommend'

const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})

const changeHotCommendAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommend: res.result
})

const changeNewDjradioAction = (res) => ({
  type: actionTypes.CHANGE_NEW_DJRADIO,
  newDjradio: res.albums
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