import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import { putSizeImg, putPlayCount } from '@/utils/formate-util.js'

import { SongsCoverWrapper } from './style'

function FFFSongsCover(props) {
  const { songMessages } = props
  return (
    <SongsCoverWrapper>
      <div className="top">
        <NavLink to={`/playlist?id=${songMessages.id}`} className="top-img">
          <div className="glass sprite_covor"></div>
          <img src={putSizeImg(songMessages.picUrl, 140)} alt=""></img>
        </NavLink>
        <div className="top-count">{putPlayCount(songMessages.playCount)}</div>
      </div>
      <div className="bottom">
        <div>
          <NavLink to={`/playlist?id=${songMessages.id}`}>{songMessages.name}</NavLink>
        </div>
      </div>
    </SongsCoverWrapper>
  )
}

FFFSongsCover.propTypes = {
  songMessages: PropTypes.object.isRequired
}

FFFSongsCover.defaultProps = {
  songMessages: {
    picUrl: 'http://s4.music.126.net/style/web2/img/default/default_avatar.jpg',
    playCount: 9.9e8,
    name: "出错了~",
    id: 0
  }
}

export default memo(FFFSongsCover)
