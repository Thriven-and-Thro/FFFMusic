import { parseLyric } from '@/utils/parse-lyrics'

import { getSongDetail, getLyric } from '@/servies/player'
import * as actionTypes from './constants'

const changeCurrentSongAction = (currentSong) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong
})

const changeCurrentIndexAction = (currentIndex) => ({
  type: actionTypes.CHANGE_CURRENT_INDEX,
  currentIndex
})

const changePlayListAction = (playList) => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  playList
})

const changeLyricList = (lyricList) => ({
  type: actionTypes.CHANGE_LYRIC_LIST,
  lyricList
})

export const changeSequenceAction = (sequence) => ({
  type: actionTypes.CHANGE_SEQUENCE,
  sequence
})

export const changeCurrentSong = (tag) => {
  return (dispatch, getState) => {
    const playList = getState().getIn(["player", "playList"])
    const sequence = getState().getIn(["player", "sequence"])
    let currentIndex = getState().getIn(["player", "currentIndex"])

    switch (sequence) {
      case 1:
        let randomIndex = Math.floor(Math.random() * playList.length)
        currentIndex = randomIndex
        break
      default:
        currentIndex += tag
        if (currentIndex >= playList.length) currentIndex = 0
        if (currentIndex < 0) currentIndex = playList.length - 1
    }

    const currentSong = playList[currentIndex]
    dispatch(changeCurrentSongAction(currentSong))
    dispatch(changeCurrentIndexAction(currentIndex))
    dispatch(getLyricAction(currentSong.id))
  }
}

// 播放操作
export const getSongDetailAction = (ids) => {
  return (dispatch, getState) => {
    const playList = getState().getIn(["player", "playList"])
    const songIndex = playList.findIndex(song => song.id === ids)

    if (songIndex !== -1) {
      dispatch(changeCurrentIndexAction(songIndex))
      const song = playList[songIndex]
      dispatch(changeCurrentSongAction(song))
      dispatch(getLyricAction(song.id))
    } else {
      getSongDetail(ids).then(res => {
        const song = res.songs && res.songs[0]
        if (!song) return

        const newPlayList = [...playList]
        newPlayList.push(song)

        dispatch(changePlayListAction(newPlayList))
        dispatch(changeCurrentIndexAction(newPlayList.length - 1))
        dispatch(changeCurrentSongAction(song))
        dispatch(getLyricAction(song.id))
      })
    }
  }
}

export const getLyricAction = (id) => {
  return dispatch => {
    getLyric(id).then(res => {
      const lyrics = parseLyric(res.lrc.lyric)
      dispatch(changeLyricList(lyrics))
    })
  }
}

export const changeLyricIndexAction = (currentLyricIndex) => ({
  type: actionTypes.CHANGE_CURRENT_LYRIC_INDEX,
  currentLyricIndex
})
