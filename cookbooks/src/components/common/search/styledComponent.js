import styled from 'styled-components';

import border from 'components/styled/border.js';

// const SwiperContainer = styled.div`
//   height: 2.5rem;
// `

const SearchContainer = styled.div`
  padding: .12rem .15rem;
`

const SearchContent = border({
  component: styled.div`
    height: .4rem;
    background: ${ props => props.bgcolor || '#fff'};
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: .18rem;
      height: .18rem;
      margin-right: .06rem;
    }
    span {
      font-size: .14rem;
      color: #979797;
    }
  `,
  color: '#ee7530',
  radius: 6,
  width: props => props.border ? '1px' : '0px'
})

export {
  SearchContainer,
  SearchContent
}