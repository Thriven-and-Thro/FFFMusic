import styled from 'styled-components'

export const PlayWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: url(${require('@/assets/img/wrap-bg.png').default}) repeat-y;

  .left{
    width: 709px;
  }

  .right{
    flex: 1;
  }

  .commend{

  }
`