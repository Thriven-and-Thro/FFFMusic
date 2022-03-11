import styled from "styled-components";

export const SearchResult = styled.div`
  margin-top: 40px;
`

export const ResultTable = styled.div`
  .table-header{
    display: flex;
    margin-bottom: 20px;
    color: #333;
    border-left: 1px solid #d5d5d5;
    border-right: 1px solid #d5d5d5;
    div{
      flex: 1;
      height: 37px;
      line-height: 37px;
      font-size: 14px;
      text-align: center;
      background-color: #F6F6F6;
      border-top: 2px solid #ccc;
      border-bottom: 1px solid #ccc;
      cursor: pointer;
      &:hover{
        border-top: 2px solid #D13030;
      }
      &:nth-child(${props => props.currentIndex}){
        background-color: #fff;
        border-top: 2px solid #D13030;
        border-bottom: none;
        border-left: 1px solid #d5d5d5;
         border-right: 1px solid #d5d5d5;
      }
    }
  }

  .table-item{
    display: flex;
    padding: 0 40px;
    height: 40px;
    align-items: center;
    color: #333;
    a{
      color: #333;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .play{
      margin-right: 5px;
      width: 17px;
      height: 17px;
      background-position: 0 -103px;
      cursor: pointer;
    }
    .table-item-name{
      width: 446px;
    }
    .table-item-artist{
      width: 150px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      span{
        margin: 0 2px;
        &:last-child{
          color: transparent;
        }
      }
    }
    .table-item-album{
      width: 156px;
      a{
        display: block;
        width: 156px;
      }
    }
    .table-item-time{
      flex: 1;
      text-align: right;
    }
  }
`