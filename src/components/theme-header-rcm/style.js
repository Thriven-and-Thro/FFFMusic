import styled from 'styled-components'

export const ThemeHeaderRcmWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 35px;
  border-bottom: 2px solid #C10D0C;
  .wrapperleft{
    display: flex;
    .icon{
      width: 34px;
      font-size: 20px;
      color: #C10D0C;
      text-align: center;
    }
    .title{
      font-size: 20px;
      line-height: 30px;
      color: #333;
      text-decoration: none;
    }
    .keyword{
      margin: 0 20px;
      span{
        color: #ccc;
        margin: 0 10px;
        &:nth-last-child(1){
          color: #fff;
        }
      }
    }
  }
  a{
    color: #666;
    line-height: 35px;
  }
`