import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { NewDjradioWrapper } from './style'

import FFFThemeHeaderRcm from '@/components/theme-header-rcm'
import { getNewDjradioAction } from '../../store/actionCreators'
import * as commonContants from '@/common/contants'

export default memo(function FFFNewDjradio() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getNewDjradioAction(commonContants.NEW_DJRADIO_LIMIT))
  }, [dispatch])

  const { newDjradio } = useSelector(state => ({
    newDjradio: state.getIn(['recommend', 'newDjradio'])
  }), shallowEqual)

  console.log(newDjradio);

  return (
    <NewDjradioWrapper>
      <FFFThemeHeaderRcm title="新碟上架" titleLink='/discover/album/' />
    </NewDjradioWrapper>
  )
})
