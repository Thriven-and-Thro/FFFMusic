import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import { putSizeImg } from '@/utils/formate-util.js'

import { AblumCoverWrapper } from './style'

function FFFAblumCover(props) {
  const { albumMessages, size, bgp } = props
  return (
    <AblumCoverWrapper size={size} bgp={bgp}>
      <div className="top">
        <NavLink to={`/album?id=${albumMessages.id}`} className="top-img">
          <div className="glass  sprite_covor"></div>
          <img src={putSizeImg(albumMessages.picUrl, size)} alt=""></img>
        </NavLink>
      </div>
      <div className="bottom">
        <div>
          <NavLink to={`/album?id=${albumMessages.id}`}>{albumMessages.name}</NavLink>
          <NavLink to={`/artist?id=${albumMessages.artist.id}`}>{albumMessages.artist.name}</NavLink>
        </div>
      </div>
    </AblumCoverWrapper>
  )
}

FFFAblumCover.propTypes = {
  albumMessages: PropTypes.object.isRequired
}

FFFAblumCover.defaultProps = {
  albumMessages: {
    picUrl: 'http://s4.music.126.net/style/web2/img/default/default_avatar.jpg',
    name: "出错了~",
    id: 0,
    artist: {
      id: 0,
      name: "未知"
    }
  }
}

export default memo(FFFAblumCover)

