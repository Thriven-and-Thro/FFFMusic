import styled from 'styled-components'

export const NewDjradioWrapper = styled.div`

`

export const NewDjradioCarousel = styled.div`
  display: flex;
  margin-top: 20px;
  height: 186px;
  background-color: #F5F5F5;
  border: 1px solid #d3d3d3;
  .arrow{
    color: #898989;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
    &:hover{
      color: #000;
      background-color: #ddd;
    }
  }
  .carousel{
    flex: 1;
    width: 645px;
    .page{
      display: flex !important;
      justify-content: space-evenly;
      margin-top: 28px;
      font-size: 12px;
    }
  }
`