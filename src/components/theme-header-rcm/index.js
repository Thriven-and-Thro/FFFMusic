import React, { Fragment, memo } from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

import { ThemeHeaderRcmWrapper } from './style'

function FFFThemeHeaderRcm(props) {
  const { title, keywords, titleLink } = props

  return (
    <ThemeHeaderRcmWrapper>
      <div className='wrapperleft'>
        <div className="icon">▌</div>
        <NavLink to={titleLink} className="title">{title}</NavLink>
        <div className="keyword">
          {
            keywords.map((item, index) => {
              return (
                <Fragment key={item.name}>
                  <NavLink to={item.link}>
                    {item.name}
                  </NavLink>
                  <span>|</span>
                </Fragment>
              )
            })
          }
        </div>
      </div>

      <div className="more">
        <NavLink to={titleLink}>更多</NavLink>
      </div>
    </ThemeHeaderRcmWrapper>
  )
}

FFFThemeHeaderRcm.propTypes = {
  title: PropTypes.string.isRequired,
  keywords: PropTypes.array,
  titleLink: PropTypes.string.isRequired
}

FFFThemeHeaderRcm.defaultProps = {
  keywords: [],
  titleLink: ''
}

export default memo(FFFThemeHeaderRcm)
