import styled from 'styled-components'

export const TopRankingWrapper = styled.div`
  width: 100%;
  .top-ranking-top{
    position: relative;
    padding-top: 25px;
    height: 120px;
    .top-img{
      position: absolute;
      top: 20px;
      left: 20px;
      .grass{
        position: absolute;
        width: 80px;
        height: 80px;
        background-position: -145px -57px;
      }
    }
    .top-name{
      margin-left: 110px;
      color: #333;
      font-size: 14px;
      font-weight: 700;
    }
    .top-btn{
      padding: 10px 0 0 110px;
      button{
        display: inline-block;
        margin-right: 10px;
        width: 22px;
        height: 22px;
        text-indent: -9999px;
        cursor: pointer;
        &:nth-child(1){
          background-position: -267px -205px;
        }
        &:nth-child(2){
          background-position: -300px -205px;
        }
      }
    }
  }
  .top-ranking-middle{
    .tracks-item{
      display: flex;
      position: relative;
      height: 32px;
      .tracks-index{
        display: inline-block;
        height: 100%;
        width: 35px;
        line-height: 32px;
        text-align: right;
        &:nth-child(-n+5){
          color: #C10D0C;
          font-size: 16px;
        }
      }
      .tracks-name{
        padding-left: 10px;
        a{
          display: block;
          width: 170px;
          height: 32px;
          line-height: 32px;
          color: #000;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .tracks-btn{
          position: absolute;
          padding: 5px 5px 0 0;
          height: 32px;
          line-height: 32px;
          right: 0;
          bottom: 0;
          z-index:-9999;
          button{
            padding: 0;
            margin-right: 10px;
            width: 17px;
            height: 17px;
            cursor: pointer;
            &:nth-child(1){
              background-position: -267px -268px;
            }
            &:nth-child(2){
              background-position: 2px -698px;
            }
            &:nth-child(3){
              background-position: -297px -268px;
            }
          }
        }
      }

      &:hover{
        .tracks-name{
          a{
            width: 96px;
          }
          .tracks-btn{
            z-index: 9999;
          }
        }
      }
    }
  }
  .top-ranking-bottom{
    padding-right: 32px;
    text-align: right;
    a{
      height: 32px;
      line-height: 32px;
      color: #000;
    }
  }
`