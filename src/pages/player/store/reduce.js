import { Map } from 'immutable'

import * as actionTypes from './constants'

const defaultState = Map({
  // 当前歌曲
  currentSong: [],
  // 当前歌曲索引
  currentIndex: 0,
  // 歌曲列表
  playList: [],
  // 播放模式：0顺序 1随机 2单曲
  sequence: 0,
  // 歌词
  lyricList: [],
  // 当前歌词条数
  currentLyricIndex: 0
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_SONG:
      return state.set("currentSong", action.currentSong)
    case actionTypes.CHANGE_CURRENT_INDEX:
      return state.set("currentIndex", action.currentIndex)
    case actionTypes.CHANGE_PLAY_LIST:
      return state.set("playList", action.playList)
    case actionTypes.CHANGE_SEQUENCE:
      return state.set("sequence", action.sequence)
    case actionTypes.CHANGE_LYRIC_LIST:
      return state.set("lyricList", action.lyricList)
    case actionTypes.CHANGE_CURRENT_LYRIC_INDEX:
      return state.set("currentLyricIndex", action.currentLyricIndex)
    default:
      return state
  }
}

export default reducer