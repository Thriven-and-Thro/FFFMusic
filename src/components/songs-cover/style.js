import styled from 'styled-components'

export const SongsCoverWrapper = styled.div`
  width: 140px;
  height: 204px;
  .top{
    position: relative;
    width: 140px;
    height: 140px;
    .top-img{
      .glass{
        position: absolute;
        top: 0;
        height: 100%;
        width: 100%;
        background-position: 0 0;
      }
      img{
        height: 140px;
        width: 140px;
      }
    }
    .top-count{
      position: absolute;
      top: 113px;
      padding-left: 14px;
      height: 27px;
      width: 100%;
      line-height: 27px;
      background-color: rgba(0,0,0,0.5);
    }
  }
  .bottom{
    div{
      margin: 8px 0 3px 0;
      a{
        color: #000;
        font-size: 14px;
      }
    }
  }
`