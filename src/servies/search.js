import request from './request'

export function getSearch(keywords) {
  return request({
    url: "/search",
    params: {
      keywords,
      type: 1
    }
  })
}