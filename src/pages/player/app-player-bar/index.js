import React, { memo, useCallback, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Slider, message } from 'antd';

import { putSizeImg, formatMinuteSecond, getPlaySong } from '@/utils/formate-util'

import { AppPlayBarWrapper } from './style'
import { changeCurrentSong, changeSequenceAction, getSongDetailAction, changeLyricIndexAction } from '../store/actionCreators'
import { useRef } from 'react';

export default memo(function FFFAppPlayBar() {

  // 获取数据三部曲
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSongDetailAction(1327341487))
  }, [dispatch])

  const { currentSong, sequence, lyricList, currentLyricIndex } = useSelector(state => ({
    currentSong: state.getIn(["player", "currentSong"]),
    sequence: state.getIn(["player", "sequence"]),
    lyricList: state.getIn(["player", "lyricList"]),
    currentLyricIndex: state.getIn(["player", "currentLyricIndex"])
  }), shallowEqual)

  const [currentTime, setcurrentTime] = useState(0)
  const [progress, setprogress] = useState(0)
  const [changing, setchanging] = useState(false)
  const [playing, setplaying] = useState(false)

  // 默认值处理
  let al = (currentSong && currentSong.al) || "http://s4.music.126.net/style/web2/img/default/default_album.jpg"
  let ar = (currentSong && currentSong.ar) || [{}]
  let dt = (currentSong && currentSong.dt) || 0

  // 获取audio标签
  const audioRef = useRef()

  useEffect(() => {
    audioRef.current.src = getPlaySong(currentSong.id)
    audioRef.current.play().then(res => {
      setplaying(true)
    }).catch(err => {
      setplaying(false)
    })
  }, [currentSong])

  // 播放事件
  const playMusic = useCallback(() => {
    if (!playing) {
      audioRef.current.play()
      setplaying(true)
    } else {
      audioRef.current.pause()
      setplaying(false)
    }
  }, [playing])

  const timeUpdate = (e) => {
    if (!changing) {
      // 获取当前时间并保存
      setcurrentTime(e.target.currentTime * 1000);
      // 计算进度
      setprogress(currentTime / dt * 100)
    }

    // 获取当前歌词
    let i = 0
    for (; i < lyricList.length; i++) {
      let lyricItem = lyricList[i]
      if (currentTime < lyricItem.time) {
        break
      }
    }

    // 保存当前歌词位置
    if (currentLyricIndex !== i) {
      dispatch(changeLyricIndexAction(i))
      message.open({
        content: lyricList[currentLyricIndex] && lyricList[currentLyricIndex].content,
        key: 'lyric',
        duration: 0,
        className: "lyric-style",
      })
    }
  }

  // 滑动事件
  const slideChange = useCallback((value) => {
    setchanging(true)
    setprogress(value)
    let currentTime = value / 100 * dt / 1000
    setcurrentTime(currentTime * 1000)
  }, [dt])
  const slideAfterChange = useCallback((value) => {
    let currentTime = value / 100 * dt / 1000
    audioRef.current.currentTime = currentTime
    setcurrentTime(currentTime * 1000)
    if (!playing) playMusic()
    setchanging(false)
  }, [dt, playing, playMusic])

  // 切换播放模式
  const changeSequence = () => {
    let currentSequence = sequence + 1
    if (currentSequence > 2) currentSequence = 0
    dispatch(changeSequenceAction(currentSequence))
  }

  // 上下切歌
  const changeMusic = (tag) => {
    setcurrentTime(0)
    dispatch(changeCurrentSong(tag))
  }

  // 自动下一首
  const handleMusicEnded = () => {
    if (sequence === 2) {
      setcurrentTime(0)
      audioRef.current.play()
    } else {
      changeMusic(1)
    }
  }

  return (
    <AppPlayBarWrapper className="sprite_player" playing={playing} sequence={sequence}>
      <div className="content">

        <div className="btn">
          <button className="sprite_player" onClick={e => changeMusic(-1)}></button>
          <button className="sprite_player" onClick={e => playMusic()}></button>
          <button className="sprite_player" onClick={e => changeMusic(1)}></button>
        </div>

        <div className="play">
          <div className="play-img">
            <img src={putSizeImg(al.picUrl, 34)} alt=""></img>
            <a href={"#/discover/songs?id=" + currentSong.id} className="sprite_player glass">glass</a>
          </div>

          <div className="play-message">
            <div className="play-header">
              <a href={"#/discover/songs?id=" + currentSong.id} className="play-header-name">{currentSong.name}</a>
              <a href={"#/discover/artist?id=" + ar[0].id} className="play-header-author">{ar[0].name}</a>
            </div>

            <div className="play-slider">
              <Slider
                defaultValue={0}
                tipFormatter={null}
                value={progress}
                onChange={slideChange}
                onAfterChange={slideAfterChange} />
              <span className="play-time">
                <em>{formatMinuteSecond(currentTime)}</em>/{formatMinuteSecond(dt)}
              </span>
            </div>

          </div>
        </div>

        <div className="oper">
          <button className="sprite_player"></button>
          <button className="sprite_player"></button>
          <button className="sprite_player"></button>
        </div>

        <div className="flag">
          <button className="sprite_player"></button>
          <button className="sprite_player" onClick={e => changeSequence()}></button>
          <button className="sprite_player"></button>
        </div>

      </div>
      <audio ref={audioRef} onTimeUpdate={e => timeUpdate(e)} onEnded={e => handleMusicEnded()}></audio>
    </AppPlayBarWrapper>
  )
})
