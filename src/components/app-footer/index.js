import React, { memo } from 'react'

import { FooterWrapper, FooterLeft, FooterRight } from './style'
import { footerLeftLinks, footerRightLinks } from '@/common/local-data.js'

export default memo(function FFFAppHeader() {
  function footerAccord(item, index) {
    return (index < 5 && (
      <>
        <a href={item.link} key={index}>{item.title}</a>
        <span>|</span>
      </>
    ))
  }

  function footerOtherLink(item, index) {
    let result
    (index === 7 || index === 10) ?
      result = index >= 5 &&
      (item.link ?
        (<><a href={item.link} key={index}>{item.title}</a><br /></>) :
        (<><span>{item.title}</span><br /></>)) :
      result = index >= 5 &&
      (item.link ?
        (<a href={item.link} key={index}>{item.title}</a>) :
        (<span>{item.title}</span>))
    return result
  }

  function footerRightFun(item, index) {
    return (
      <div>
        <a href={item.link} key={index}> </a>
        <span>{item.title}</span>
      </div>
    )
  }

  return (
    <FooterWrapper>
      <div className="wrap-v2">
        <FooterLeft>
          <div className="accord">
            {
              footerLeftLinks.map((item, index) => {
                return footerAccord(item, index)
              })
            }
          </div>
          <div className="otherlink">
            {
              footerLeftLinks.map((item, index) => {
                return footerOtherLink(item, index)
              })
            }
          </div>
        </FooterLeft>
        <FooterRight>
          {
            footerRightLinks.map((item, index) => footerRightFun(item, index))
          }
        </FooterRight>
      </div>
    </FooterWrapper>
  )
})
