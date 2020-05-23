import styled from 'styled-components'
import border from 'components/styled/border'

const HotMenuWrap = styled.div`
  background: #fff;
  .am-grid.am-grid-square .am-grid-item .am-grid-item-inner-content .am-grid-icon {
    width: 66% !important;
    height: 100%;
    border-radius: .1rem;
  }
  .am-grid .am-flexbox .am-flexbox-item .am-grid-item-content .am-grid-item-inner-content .am-grid-text {
    margin-top: .05rem;
    font-size: .14rem;
  }
  .am-flexbox.am-flexbox-justify-center:last-child > div:last-child img {
    display: none;
  }
`

const Title = border({
  component: styled.h1`
    height: .48rem;
    color: #666;
    font-size: .14rem;
    padding-left: .18rem;
    line-height: .48rem;
    font-weight: 100;
    margin-bottom: .1rem;
  `,
  width: '0 0 1px 0'
})

export {
  HotMenuWrap,
  Title
}