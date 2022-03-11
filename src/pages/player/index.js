import React, { memo, useState } from 'react'
import { withRouter } from 'react-router-dom'

import { getSongDetail, getLyric } from '@/servies/player'
import { putSizeImg } from '@/utils/formate-util'

import { PlayWrapper } from './style'
import { useEffect } from 'react'

export default withRouter(memo(function FFFPlayer(props) {

  const [expand, setexpand] = useState(false)
  const [songDetail, setsongDetail] = useState({})
  const [lyric, setlyric] = useState({})

  const expandClick = () => {
    setexpand(!expand)
  }

  useEffect(() => {
    const search = props.location.search
    const id = search.slice(search.indexOf("=") + 1)
    getSongDetail(id).then(res => {
      setsongDetail(res.songs[0])
    })
    getLyric(id).then(res => {
      setlyric(res.lrc)
    })
  }, [props.location.search])
  console.log(lyric);
  console.log(songDetail);

  return (
    <PlayWrapper className="wrap-v2">
      <div className="left">

        <div className="words" style={{ height: expand ? "640px" : "auto" }}>

          <div className="words-left">
            <div>
              <img src={songDetail.al && putSizeImg(songDetail.al.picUrl, 130)} alt="" />
            </div>
          </div>
          <div className="words-right">
            <div className="words-message">
              <h2>{songDetail.name}</h2>
              <div className="words-message-ar">
                歌手：
                {
                  songDetail.ar && songDetail.ar.map((iten, index) => {
                    return (
                      <div key={index} className="play-header-author-item">
                        <a href={`/#/artist?id=${iten.id}`}>{iten.name}</a>
                        <span>/</span>
                      </div>
                    )
                  })
                }
              </div>
              <div>
                所属专辑：
                <a href={`/#/album?id=${songDetail.al && songDetail.al.id}`}>{songDetail.al && songDetail.al.name}</a>
              </div>
            </div>
            <div className="words-button">
              <button>播放</button>
            </div>
            <div className="words-lyric">
            </div>
          </div>
        </div>

        <button
          className="expend"
          onClick={e => expandClick()}>
          {expand ? "展开▽" : "收起△"}
        </button>

        <div className="commend">
          <h2>commend</h2>
        </div>
      </div>

      <div className="right">
        <h2>right</h2>
      </div>

    </PlayWrapper>
  )
}))
