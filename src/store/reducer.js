// 合并reducer
// 使用 redux-immutable 的 combineReducers 会将合并后的对象转成 immutable 对象
import { combineReducers } from 'redux-immutable'

import { reducer as recommendReducer } from '@/pages/discover/c-pages/recommend/store'
import { reducer as playerReducer } from '@/pages/player/store'
import { reducer as searchReducer } from '@/pages/search/store'

// combineReducers 最后返回一个新的对象
// 使用Map存在两个问题：1、合并操作频繁 2、combineReducers底层需要操作对象
const cReducer = combineReducers({
  recommend: recommendReducer,
  player: playerReducer,
  search: searchReducer
})

export default cReducer