import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Slider } from 'antd';

import { putSizeImg, formatMinuteSecond } from '@/utils/formate-util'

import { AppPlayBarWrapper } from './style'
import { getSongDetailAction } from '../store/actionCreators'

export default memo(function FFFAppPlayBar() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSongDetailAction(26329928))
  }, [dispatch])

  const { currentSong } = useSelector(state => ({
    currentSong: state.getIn(["player", "currentSong"])
  }), shallowEqual)

  let al = (currentSong && currentSong.al) || "http://s4.music.126.net/style/web2/img/default/default_album.jpg"
  let ar = (currentSong && currentSong.ar) || [{}]
  let dt = (currentSong && currentSong.dt) || 0
  console.log(currentSong);

  return (
    <AppPlayBarWrapper className="sprite_player">
      <div className="content">

        <div className="btn">
          <button className="sprite_player"></button>
          <button className="sprite_player"></button>
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
              <Slider defaultValue={0} tipFormatter={null} />
              <span className="play-time">
                <em>00:00</em>/{formatMinuteSecond(dt)}
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
    </AppPlayBarWrapper>
  )
})
