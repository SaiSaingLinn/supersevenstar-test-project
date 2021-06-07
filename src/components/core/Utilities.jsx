import styled from 'styled-components'
import colors from './../constant/Color'
import { fontSize, fontWeight } from '../constant/FontSize'

const Quantity = styled.div`
  .quantity-wrap {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 30px;
    > * {
      margin-right: 10px;
      &:last-child {
        margin-right: 0;
      }
    }
    .quantity-input-gp {
      width: 130px;
      input {
        min-height: 43px;
      }
    }
    .arrow-btn {
      position: absolute;
      top: 6px;
      bottom: 0;
      right: 10px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;

      svg {
        cursor: pointer;
        color: #999999;
        transform: translateY(10px);
      }
    }
  }
`

const Image = styled.img`
  width: 100%;
`


export {
  Quantity,
  Image,
}