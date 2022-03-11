import React, { memo, useEffect, useRef } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Carousel } from 'antd'

import { NewDjradioWrapper, NewDjradioCarousel } from './style'

import FFFThemeHeaderRcm from '@/components/theme-header-rcm'
import { getNewDjradioAction } from '../../store/actionCreators'
import * as commonContants from '@/common/contants'
import FFFAlbumCover from '@/components/album-cover'

export default memo(function FFFNewDjradio() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getNewDjradioAction(commonContants.NEW_DJRADIO_LIMIT))
  }, [dispatch])

  const { newDjradio } = useSelector(state => ({
    newDjradio: state.getIn(['recommend', 'newDjradio'])
  }), shallowEqual)

  const pageRef = useRef()

  return (
    <NewDjradioWrapper>
      <>
        <FFFThemeHeaderRcm title="新碟上架" titleLink='/discover/album/' />
        <NewDjradioCarousel>
          <button className="arrow left" onClick={e => pageRef.current.prev()}>«</button>

          <div className="carousel">
            <Carousel dots={false} ref={pageRef}>
              {
                [0, 1].map(item => {
                  return (
                    <div key={item} className="page">
                      {
                        newDjradio.slice(item * 5, (item + 1) * 5).map(iten => {
                          return <FFFAlbumCover key={iten.id} albumMessages={iten} size="100" bgp="-570"></FFFAlbumCover>
                        })
                      }
                    </div>
                  )
                })
              }
            </Carousel>
          </div>

          <button className="arrow right" onClick={e => pageRef.current.next()}>»</button>
        </NewDjradioCarousel>
      </>
    </NewDjradioWrapper>
  )
})
