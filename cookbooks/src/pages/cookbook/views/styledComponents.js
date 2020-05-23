import styled from 'styled-components'

const HomeContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  #cookbook-scroll {
    flex: 1;
    overflow-y: scroll;
  }
`

const Header = styled.header`
  height: .44rem;
  background: #ee7530;
  text-align: center;
  line-height: .44rem;
  color: #fff;
  font-size: .18rem;
`

const SwiperContainer = styled.div`
  font-size: 0;
  padding-bottom: 66.6666667%;
  position: relative;
  .slider {
    position: absolute !important;
    width: 100%;
    height: 100% !important;
  }
  .slider img {
    width: 100%;
    height: 100%;
  }
  .slider-frame {
    height: 100% !important;
  }
  .slider-list {
    height: 100% !important;
  }
  .slider-slide {
    height: 100% !important;
  }
`

export {
  HomeContainer,
  Header,
  SwiperContainer
}