import React, { memo, useCallback, useEffect, useState, useRef } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Slider, message } from 'antd';

import { putSizeImg, formatMinuteSecond, getPlaySong } from '@/utils/formate-util'

import { AppPlayBarWrapper } from './style'
import { changeCurrentSong, changeSequenceAction, getSongDetailAction, changeLyricIndexAction } from '../store/actionCreators'
import { MineSongList } from '@/common/local-data'

export default memo(function FFFAppPlayBar() {

  // 获取数据三部曲
  const dispatch = useDispatch()

  const { currentSong, sequence, lyricList, currentLyricIndex, playList } = useSelector(state => ({
    currentSong: state.getIn(["player", "currentSong"]),
    sequence: state.getIn(["player", "sequence"]),
    lyricList: state.getIn(["player", "lyricList"]),
    currentLyricIndex: state.getIn(["player", "currentLyricIndex"]),
    playList: state.getIn(["player", "playList"])
  }), shallowEqual)

  const [currentTime, setcurrentTime] = useState(0)
  const [progress, setprogress] = useState(0)
  const [changing, setchanging] = useState(false)
  const [playing, setplaying] = useState(false)
  // 音量
  const [displayVoice, setdisplayVoice] = useState(false)
  // 是否为第一次进入
  const [startIn, setstartIn] = useState(true)

  // 默认值处理
  let al = (currentSong && currentSong.al) || "http://s4.music.126.net/style/web2/img/default/default_album.jpg"
  let ar = (currentSong && currentSong.ar) || [{}]
  let dt = (currentSong && currentSong.dt) || 0

  // 获取audio标签
  const audioRef = useRef()

  // 导入本地歌单
  useEffect(() => {
    // 当playList发生改变时（上一次添加成功）
    // 是否第一次
    if (startIn) {
      if (playList.length === MineSongList.length) {
        setstartIn(false)
        return
      }
      dispatch(getSongDetailAction(MineSongList[playList.length]))
    }
  }, [dispatch, playList, startIn])

  // 切歌时的重新渲染
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

  // 调整音量
  const changeVoice = () => {
    setdisplayVoice(!displayVoice)
  }
  const voiceChange = (value) => {
    audioRef.current.volume = value / 100
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
              <div className="play-header-author">
                {
                  ar.map((iten, index) => {
                    return (
                      <div key={index} className="play-header-author-item">
                        <a href={`/#/artist?id=${iten.id}`}>{iten.name}</a>
                        <span className="gan">/</span>
                      </div>
                    )
                  })
                }
              </div>
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
          <button className="sprite_player" onClick={e => changeVoice()}>
            <Slider
              vertical
              defaultValue={100}
              style={{ display: displayVoice ? 'block' : 'none' }}
              onChange={voiceChange} />
          </button>
          <button className="sprite_player" onClick={e => changeSequence(e)}></button>
          <button className="sprite_player">{playList.length}</button>
        </div>

      </div>
      <audio ref={audioRef} onTimeUpdate={e => timeUpdate(e)} onEnded={e => handleMusicEnded()}></audio>
    </AppPlayBarWrapper>
  )
})
