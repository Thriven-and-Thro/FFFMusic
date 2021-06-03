import styled from 'styled-components'

export const FooterWrapper = styled.div`
  background-color: #F2F2F2;
  .wrap-v2{
    display: flex;
    height: 172px;
  }
`
export const FooterLeft = styled.div`
  width: 520px;
  a,span{
    line-height: 24px;
  }
  .accord{
    a{
      color: #999;
    }
    span{
      margin: 10px;
      color: #999;
    }
  }
  .otherlink{
    a{
      color: #666;
    }
    span{
      margin-right: 10px;
      color: #666;
    }
  }
`

export const FooterRight = styled.div`
  flex: 1;
  display: flex;
  margin-top: 33px;
    div {
      flex: 1;
      margin: 0 auto;
      height: 70px;
      text-align: center;
      a {
        display: block;
        margin: 0 auto;
        width: 50px;
        height: 45px;
        background: url(${require('@/assets/img/sprite_footer_02.png').default}) no-repeat 2.5px -50px;
        background-size: 104px 444px;
      }
      span{
        color: #8A8A8A;
      }
  }
`