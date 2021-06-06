import request from './request'

export function getTopBanners() {
  return request({
    url: "/banner"
  })
}

export function getHotRecommend(limit) {
  return request({
    url: "/personalized",
    params: {
      limit
    }
  })
}

export function getNewDjradio(limit) {
  return request({
    url: "/top/album",
    params: {
      limit
    }
  })
}