import React, { memo } from 'react'

import { RecommendWrapper, MainRecommend, MainRecommendLeft, MainRecommendRight } from './style'
import FFFTopBanner from './c-cpns/top-banner/index'
import FFFHotRecommend from './c-cpns/hot-recommend/index'
import FFFNewDjradio from './c-cpns/new-djradio'
import FFFRcmRanking from './c-cpns/rcm-ranking'

function FFFRecommend(props) {

  return (
    <RecommendWrapper>
      <FFFTopBanner />
      <MainRecommend className="wrap-v2">
        <MainRecommendLeft>
          <FFFHotRecommend />
          <FFFNewDjradio />
          <FFFRcmRanking />
        </MainRecommendLeft>
        <MainRecommendRight>

        </MainRecommendRight>
      </MainRecommend>
    </RecommendWrapper>
  )
}

export default memo(FFFRecommend)



// 不使用hook的redux
// function FFFRecommend(props) {
//   const { getBanners, topBanners } = props

//   useEffect(() => {
//     getBanners()
//   }, [getBanners])

//   return (
//     <div>
//       <h2>FFFRecommend:{topBanners.length}</h2>
//     </div>
//   )
// }

// const mapStateToProps = state => ({
//   topBanners: state.recommend.topBanners
// })

// const mapDispatchToProps = dispatch => ({
//   getBanners: () => {
//     dispatch(getTopBannerAction())
//   }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(memo(FFFRecommend))
