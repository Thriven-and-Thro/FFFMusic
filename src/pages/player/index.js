import React, { memo } from 'react'

import { PlayWrapper } from './style'

export default memo(function FFFPlayer() {
  return (
    <PlayWrapper className="wrap-v2">
      <div className="left">
        <div className="words">
          <h2>words</h2>
        </div>
        <div className="commend">
          <h2>commend</h2>
        </div>
      </div>

      <div className="right">
        <h2>right</h2>
      </div>

    </PlayWrapper>
  )
})
