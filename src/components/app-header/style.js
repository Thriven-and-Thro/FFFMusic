import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  height: 75px;
  background-color: #242424;

  .content{
    display: flex;
    justify-content: space-between;
    height: 70px;
  }

  .divider{
    height: 5px;
    background-color: #C20C0C;
  }
`

export const HeaderLeft = styled.div`
  display: flex;
  .logo{
    display: inline-block;
    height: 69px;
    width: 177px;
    background-position: 0 0;
  }
`

export const HeaderCenter = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  div{
    position: relative;
    width: 100%;
    a{
      display: block;
      width: 100%;
      height: 100%;
      color: #ccc;
      line-height: 70px;
      text-align: center;
      font-size: 14px;
      text-decoration: none;
      &:hover{
        color: #fff;
        background-color: #000;
      }
    }
    .active{
      color: #fff;
      background-color: #000;
      .icon {
        position: absolute;
        display: inline-block;
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translate(-50%,0);
        background-position: -226px 0;
      }
    }
  }
  .hot{
    position: absolute;
    right: -28px;
    top: 19px;
    width: 28px;
    height: 19px;
    background-position: -190px 0;
  }
`

export const HeaderRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 400px;
  a{
    text-decoration: none;
  }
  div{
    margin: 6px;
  }
  .ant-input-affix-wrapper{
    flex: 1;
    width: 158px;
    height: 32px;
    border-radius: 32px;
    input{
      font-size: 12px;
    }
  }
  .creater{
    display: block;
    width: 88px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: #ccc;
    border: 1px solid #4F4F4F;
    border-radius: 30px;
    &:hover{
      color: #fff;
      border-color: #fff;
    }
  }
  .login{
    color: #787878;
  }
   
`
