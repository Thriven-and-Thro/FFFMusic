import React, { memo, useEffect, useState, Fragment } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getSearch } from '@/servies/search'
import { formatMinuteSecond } from '@/utils/formate-util'
import { getSongDetailAction } from '@/pages/player/store'

import { SearchResult, ResultTable } from './style'
import { SearchTableHeader } from '@/common/local-data'

export default memo(function FFFSearchResult(props) {
  const [searchResult, setsearchResult] = useState([])
  const [currentIndex, setcurrentIndex] = useState(1)

  const dispatch = useDispatch()

  const { searchValue } = useSelector(state => ({
    searchValue: state.getIn(["search", "searchValue"])
  }), shallowEqual)

  useEffect(() => {
    if (searchValue === "") return
    getSearch(searchValue).then(res => {
      setsearchResult(res && res.result.songs)
    })
  }, [searchValue])


  const currentChose = (index) => {
    setcurrentIndex(index + 1)
  }

  const searchPlay = (id) => {
    dispatch(getSongDetailAction(id))
  }


  return (
    <SearchResult>
      <ResultTable currentIndex={currentIndex}>
        <div className="table-header">
          {
            SearchTableHeader.map((item, index) => {
              return (
                <div key={index} onClick={e => currentChose(index)}>{item}</div>
              )
            })
          }
        </div>

        <div className="table-list">
          {
            searchResult && searchResult.slice(0, 20).map((item, index) => {
              return (
                <div key={index} className="table-item">
                  <button className="sprite_table play" onClick={e => searchPlay(item.id)}></button>
                  <div className="table-item-name">
                    <a href={`/#/songs?id=${item.id}`}>{item.name}</a>
                  </div>
                  <div className="table-item-artist">
                    {
                      item.artists && item.artists.map((iten, index) => {
                        return (
                          <Fragment key={index}>
                            <a href={`/#/artist?id=${iten.id}`}>{iten.name}</a>
                            <span>/</span>
                          </Fragment>
                        )
                      })
                    }
                  </div>
                  <div className="table-item-album">
                    <a href={`/#/album?id=${item.album.id}`}>???{item.album && item.album.name}???</a>
                  </div>
                  <div className="table-item-time">{formatMinuteSecond(item.duration)}</div>
                </div>
              )
            })
          }
        </div>
      </ResultTable>
    </SearchResult>
  )
})
