import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
// import { connect } from 'react-redux'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Carousel } from 'antd'

import { getTopBannerAction } from '../../store/actionCreators'
import { TopBannerWrapper } from './style'

export default memo(function FFFTopBanner() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // 通过hook：useDispatch直接获得dispatch对象
  const dispatch = useDispatch()
  // 通过hook：useSelector，参数1为一个回调函数，其返回值为useSelector的返回值
  // 使用 shallowEqual 换位浅层比较
  const { topBanners } = useSelector(state => ({
    // 使用get
    // topBanners: state.get("recommend").get("topBanners")
    // 使用语法糖 getIn
    topBanners: state.getIn(["recommend", "topBanners"])
  }), shallowEqual)

  useEffect(() => {
    // 使用dispatch对象执行action
    dispatch(getTopBannerAction())
  }, [dispatch])

  // 使用 hook 的 ref
  const bannerRef = useRef()

  const changeBg = useCallback((from, to) => {
    setCurrentIndex(to)
  }, [])

  let bgImg = topBanners[currentIndex] && ((topBanners[currentIndex].imageUrl) + '?imageView&blur=40x20'
  )

  return (
    <TopBannerWrapper bgimg={bgImg}>
      <div className="banner wrap-v2">
        <div className="carousel">
          <Carousel effect="fade" autoplay="true" ref={bannerRef} beforeChange={changeBg}>
            {
              topBanners.map((item, index) => {
                return (
                  <a href={item.url} className="banner-item" key={item.url}>
                    <img src={item.imageUrl} alt={item.typeTitle}></img>
                  </a>
                )
              })
            }
          </Carousel>
        </div>
        <div className="download">
          <a href='https://music.163.com/#/download' target="_blank" rel="noreferrer">下载客户端</a>
        </div>
        <div className="banner-sprite eleft" onClick={e => bannerRef.current.prev()}></div>
        <div className="banner-sprite eright" onClick={e => bannerRef.current.next()}></div>
      </div>
    </TopBannerWrapper>
  )
})
