import React, { memo } from 'react'
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Input } from 'antd';

import { changeSearchValue } from '../../store'

import { SearchInput } from './style'

export default withRouter(memo(function FFFSearchInput(props) {
  const { Search } = Input;

  const dispatch = useDispatch()

  const onSearch = (value) => {
    dispatch(changeSearchValue(value))
    return props.history.push(`/search/m/?s=${value}&type=1`)
  }

  return (
    <SearchInput>
      <Search onSearch={onSearch} className="input" />
    </SearchInput>
  )
}))
