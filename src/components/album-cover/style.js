import styled from 'styled-components'

export const AblumCoverWrapper = styled.div`
  width: ${props => (props.size / 0.85) + 'px'};
  height: ${props => (props.size / 0.67) + 'px'};
  .top{
    position: relative;
    width: ${props => props.size + 'px'};
    height: ${props => props.size + 'px'};
    .top-img{
      .glass{
        position: absolute;
        top: 0;
        width: ${props => (props.size / 0.85) + 'px'};
        height: ${props => props.size + 'px'};
        background-position: 0 ${props => props.bgp + 'px'};
      }
      img{
        height: ${props => props.size + 'px'};
        width: ${props => props.size + 'px'};
      }
    }
  }
  .bottom{
    div{
      margin: 8px 0 3px 0;
      a{
        display: block;
        color: #000;
        font-size: 12px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        &:last-child{
          color: #666;
        }
      }
    }
  }
`