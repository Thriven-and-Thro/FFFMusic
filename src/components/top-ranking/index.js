import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import { TopRankingWrapper } from './style'

import { putSizeImg } from '@/utils/formate-util'
import { getSongDetailAction } from '@/pages/player/store'

function FFFTopRanking(props) {
  // 获取 props
  const { info } = props

  // 播放歌曲
  const dispatch = useDispatch()

  const playMusic = (item) => {
    dispatch(getSongDetailAction(item.id))
  }


  return (
    <TopRankingWrapper>
      <div className="top-ranking-top">
        <NavLink to={`/toplist?id=${info.id}`} className="top-img">
          <div className="grass sprite_covor"></div>
          <img src={putSizeImg(info.coverImgUrl, 80)} alt=""></img>
        </NavLink>
        <NavLink to={`/toplist?id=${info.id}`} className="top-name">{info.name}</NavLink>
        <div className="top-btn">
          <button className="sprite_02" alt="播放">播放</button>
          <button className="sprite_02" alt="收藏">收藏</button>
        </div>
      </div>
      <div className="top-ranking-middle">
        {
          info.tracks && info.tracks.slice(0, 10).map((item, index) => {
            return (
              <div key={item.id} className="tracks-item">
                <span className="tracks-index">{index + 1}</span>
                <div className="tracks-name">
                  <NavLink to={`/songs?id=${item.id}`}>{item.name}</NavLink>
                  <div className="tracks-btn">
                    <button className="sprite_02" alt="播放" onClick={e => playMusic(item)}></button>
                    <button className="sprite_icon2" alt="添加到播放列表"></button>
                    <button className="sprite_02" alt="收藏"></button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="top-ranking-bottom">
        <a href={`#/toplist?id=${info.id}`}>查看全部...</a>
      </div>
    </TopRankingWrapper>
  )
}

FFFTopRanking.propTypes = {
  info: PropTypes.object.isRequired
}

FFFTopRanking.defaultProps = {
  info: {
    coverImgUrl: 'http://s4.music.126.net/style/web2/img/default/default_avatar.jpg',
    name: "出错了~",
    id: 0,
  }
}

export default memo(FFFTopRanking)
