import styled from 'styled-components'

export const AppPlayBarWrapper = styled.div`
  button{
    padding: 0;
    cursor: pointer;
  }
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  padding-top: 10px;
  height: 53px;
  background-position: 0 0;
  background-repeat: repeat;

  .content{
    display: flex;
    position: relative;
    width: 980px;
    height: 42px;
    left: 50%;
    transform: translateX(-50%);

    .btn{
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      width: 137px;

      button{
        width: 28px;
        height: 28px;
        &:nth-child(1){
          background-position: 0 -130px;
        }
        &:nth-child(2){
          background-position: 0 -204px;
          width: 36px;
          height: 36px;
        }
        &:nth-child(3){
          background-position: -80px -130px;
        }
      }
    }

    .play{
      flex: 1;
      display: flex;
      align-items: center;

      .play-img{
        position: relative;
        margin-right: 15px;
        img{
          width: 34px;
          height: 34px;
        }
        .glass{
          position: absolute;
          top: 0;
          display: block;
          width: 34px;
          height: 35px;
          background-position: 0 -80px;
          text-indent: -9999px;
        }
      }

      .play-message{
        height: 42px;

        .play-header{
          display: flex;
          align-items: center;
          height: 25px;
          .play-header-name{
            height: 25px;
            line-height: 25px;
            color: #e8e8e8;
          }
          .play-header-author{
            margin-left: 15px;
            color: #9b9b9b;
          }
        }

        .play-slider{
          display: flex;

          .ant-slider{
            margin: 0;
            width: 466px;
            .ant-slider-rail{
              background: url(${require("@/assets/img/progress_bar.png").default}) right -30px no-repeat;
            }
            .ant-slider-track{
              background: url(${require("@/assets/img/progress_bar.png").default}) left -66px no-repeat;
            }
            .ant-slider-handle{
              width: 20px;
              height: 16px;
              background: url(${require("@/assets/img/sprite_icon.png").default}) -1px -253px no-repeat;
              border: none;
            }
          }

          .play-time{
            margin-left: 20px;
            line-height: 1;
            color: #797979;
            em{
              color: #a1a1a1;
            }
          }
        }
      }
    }

    .oper{
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      width: 87px;

      button{
        width: 25px;
        height: 25px;
        &:nth-child(1){
          background-position: 5px -53px;
        }
        &:nth-child(2){
          background-position: -88px -163px;
        }
        &:nth-child(3){
          background-position: -114px -163px;
        }
      }
    }

    .flag{
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      margin-left: 13px;
      width: 126px;

      button{
        width: 25px;
        height: 25px;
        &:nth-child(1){
          background-position: -2px -248px;
        }
        &:nth-child(2){
          background-position: -3px -344px;
        }
        &:nth-child(3){
          width: 59px;
          background-position: -42px -68px;
        }
      }
    }
  }
`