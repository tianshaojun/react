import styled from 'styled-components';
import border from 'components/styled/border';

const BetterWrapper = styled.div`
  background: #fff;
`

const Title = border({
    component: styled.h1`
      height: .6rem;
      color: #666;
      font-size: .14rem;
      padding-left: .18rem;
      line-height: .7rem;
      font-weight: 100;
      margin-bottom: .1rem;
    `,
    width: '0 0 1px 0'
})

const Grid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: .1rem;
  li {
      width: 50%;
      display: flex;
      flex-direction: column;
      padding: .1rem .1rem 0 0;
      > div:first-child {
        position: relative;
        font-size: 0;
        padding-bottom: 66.666667%;
      }
      > div:first-child img {
          position: absolute;
          width: 100%;
      }
      > div:last-child {
          height: .6rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          h3 {
              font-size: .14rem;
          }
          p {
              font-size: .12rem;
              & span {
                  margin-right: .1rem;
              }
          }
      }
  }
`

export {
    BetterWrapper,
    Grid,
    Title
}