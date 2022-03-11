import styled from 'styled-components'

export const PlayWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: url(${require('@/assets/img/wrap-bg.png').default}) repeat-y;

  .left{
    padding: 40px;
    width: 709px;

    .words{
      display: flex;
      height: 640px;

      .words-left{
        width: 206px;
        text-align: center;
        background-color: #000;
        img{
          border-radius: 50%;
        }
      }

      .words-right{
        padding-left: 20px;
        .words-message{
          div{
            display: flex;
            color: #999;
            a{
              color: #0c73c2;
            }
          }
          .words-message-ar{
            >div:last-child span{
              color: transparent
            }
            span {
              padding: 0 5px;
              color: #000;
            }
          }
        }
        .words-button{
          button{
            width: 92px;
            height: 31px;
            line-height: 31px;
            font-size: 14px;
            color: #fff;
            background-color: #3E8BD3;
            border-radius: 5px;
            cursor: pointer;
            &:hover{
              background-color: #5DA2E2;
            }
          }
        }
      }
    }

    .expend{
      color: #0c73c2;
      background-color: transparent;
      cursor: pointer;
      &:hover{
        text-decoration: underline;
      }
    }
  }

  .right{
    flex: 1;
  }

  .commend{

  }
`