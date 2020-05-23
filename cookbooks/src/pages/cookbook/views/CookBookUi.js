import React from 'react';

import {
    HomeContainer,
    Header,
    SwiperContainer
} from './styledComponents';

import Search from 'components/common/search/Search.js';

import HotMenuContainer from './hotmenu/HotMenuContainer';
import BetterContainer from './better/BetterContainer';

import Swiper from './swiper/SwiperContainer.js';

export default class extends React.Component {
    render() {
        return (
            <HomeContainer>
                <Header>菜谱大全</Header>
                <div ref={div => this.scroll = div} id="cookbook-scroll">
                    <div>
                        <SwiperContainer>
                            <Swiper></Swiper>
                        </SwiperContainer>
                        <Search border={true}></Search>
                        <HotMenuContainer {...this.props} ></HotMenuContainer>
                        <BetterContainer></BetterContainer>
                    </div>
                </div>
            </HomeContainer>
        )
    }

    componentDidMount() {
        this.props.setScrollId(this.scroll);
    }
}