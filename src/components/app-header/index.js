import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

import { HeaderWrapper, HeaderLeft, HeaderCenter, HeaderRight } from './style'
import { headerLinks } from '@/common/local-data.js'

export default memo(function FFFAppFooter() {

  // 抽取组件内的详细代码
  const showSelectItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link} exact>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      )
    } else {
      return (
        <a href={item.link} target="_blank" rel="noreferrer" >{item.title}</a>
      )
    }
  }

  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="#/" className="logo sprite_01"> </a>
        </HeaderLeft>
        <HeaderCenter>
          {
            headerLinks.map((item, index) => {
              return (
                <div key={index}>
                  {showSelectItem(item, index)}
                </div>
              )
            })
          }
          <i className='hot sprite_01'></i>
        </HeaderCenter>
        <HeaderRight>
          <div>
            <Input placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} />
          </div>
          <div>
            <a href="https://music.163.com/#/login?targetUrl=%2Fcreatorcenter" target="_blank" rel="noreferrer" className="creater">创作者中心</a>
          </div>
          <div>
            <a href="#/" className="login">登录</a>
          </div>
        </HeaderRight>

      </div>
      <div className='divider'></div>
    </HeaderWrapper >
  )
})
