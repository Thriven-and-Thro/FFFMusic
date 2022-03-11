import styled from 'styled-components'

export const DiscoverWarpper = styled.div`

`

export const TopMeau = styled.div`
  height: 30px;
  background-color: #C20C0C;
  div {
    padding-left: 119px;
    height: 100%;
    a{
      display: inline-block;
      padding: 2px 17px 0 17px;
      height: 100%;
      text-decoration: none;
      span{
        display: inline-block;
        padding: 0 13px;
        font-size: 12px;
        line-height: 20px;
        border-radius: 20px;
      }
    }
    .active span{
      background-color: #9B0909;
    }
  }
`