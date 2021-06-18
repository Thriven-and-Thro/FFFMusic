import styled from 'styled-components'

export const TopBannerWrapper = styled.div`
  position: relative;
  height: 285px;
  background: url(${props => props.bgimg}) center/6000px;
  .banner{
    display: flex;
    height: 100%;
    .carousel{
      width: 730px;
      .banner-item{
        position: relative;
        display: block;
        height: 285px;
        img{
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          height: 285px;
        }
      }
      .slick-dots{
        .slick-active{
          button{
            background-color: #C20C0C;
          }
        }
        button{
          height: 5px;
        }
      }
    }
    .download{
      position: relative;
      flex: 1;
      background: url(${require('@/assets/img/download.png').default});
      background-position: 0 0;
      a{
        position: absolute;
        bottom: 43.5px;
        left: 19.5px;
        display: block;
        width: 215px;
        height: 56px;
        text-indent: -9999px;
        &:hover{
          background: url(${require('@/assets/img/download.png').default});
          background-position: 0 -290px;
        }
      }
    }
    .banner-sprite{
      position: absolute;
      height: 63px;
      width: 36px;
      cursor: pointer;
      background: url(${require("@/assets/img/banner_sprite.png").default});
    }
    .eleft{
      left: 50%;
      top: 108.5px;
      transform:translate(-558px);
      background-position: 0 -357.5px;
      &:hover{
        background-position: 0 -425px;
      }
    }
    .eright{
      right: 50%;
      top: 108.5px;
      transform:translate(558px);
      background-position: 0 -504.5px;
      &:hover{
        background-position: 0 -575px;
      }
    }
  }
`