import React, { memo } from 'react'

import FFFSearchInput from './c-cpns/search-input'
import FFFSearchResult from './c-cpns/search-result'

import { SearchWrapper } from './style'

export default memo(function FFFSearch() {
  return (
    <SearchWrapper className="wrap-v2">
      <FFFSearchInput />
      <FFFSearchResult />
    </SearchWrapper>
  )
})
