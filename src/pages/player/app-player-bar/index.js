import React, { memo, useCallback, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Slider } from 'antd';

import { putSizeImg, formatMinuteSecond, getPlaySong } from '@/utils/formate-util'

import { AppPlayBarWrapper } from './style'
import { getSongDetailAction } from '../store/actionCreators'
import { useRef } from 'react';

export default memo(function FFFAppPlayBar() {

  // 获取数据三部曲
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSongDetailAction(1327341487))
  }, [dispatch])

  const { currentSong } = useSelector(state => ({
    currentSong: state.getIn(["player", "currentSong"])
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
  }, [currentSong])

  // 播放事件
  const playMusic = () => {
    if (!playing) {
      audioRef.current.play()
      setplaying(true)
    } else {
      audioRef.current.pause()
      setplaying(false)
    }
  }

  const timeUpdate = (e) => {
    if (!changing) {
      // 获取当前时间并保存
      setcurrentTime(e.target.currentTime * 1000);
      // 计算进度
      setprogress(currentTime / dt * 100)
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

  return (
    <AppPlayBarWrapper className="sprite_player" playing={playing}>
      <div className="content">

        <div className="btn">
          <button className="sprite_player"></button>
          <button className="sprite_player" onClick={e => playMusic()}></button>
          <button className="sprite_player"></button>
        </div>

        <div className="play">
          <div className="play-img">
            <img src={putSizeImg(al.picUrl, 34)} alt=""></img>
            <a href={"songs?id=" + currentSong.id} className="sprite_player glass">glass</a>
          </div>

          <div className="play-message">
            <div className="play-header">
              <a href={"songs?id=" + currentSong.id} className="play-header-name">{currentSong.name}</a>
              <a href={"artist?id=" + ar[0].id} className="play-header-author">{ar[0].name}</a>
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
          <button className="sprite_player"></button>
          <button className="sprite_player"></button>
        </div>

      </div>
      <audio ref={audioRef} onTimeUpdate={timeUpdate}></audio>
    </AppPlayBarWrapper>
  )
})
