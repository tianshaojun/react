import React, { Component } from 'react';

import { connect } from 'react-redux';

import { Carousel } from 'antd-mobile';

const swiperListGetter = (data) => {
    return data ? data.slice(0, 5) : [];
}

const mapState = (state) => {
    return {
        swiperList: swiperListGetter(state.getIn(['cookbook', 'list']))
    }
}

class SwiperContainer extends Component {
    render() {
        // console.log(this.props.swiperList);
        return (
            <Carousel
                autoplay={true}
                infinite
            >
                {this.props.swiperList.toJS().map(val => (
                    <img
                        key={val.id}
                        src={val.img}
                        alt=""
                        style={{ width: '100%', verticalAlign: 'top' }}
                    />
                ))}
            </Carousel>
        )
    }
}

export default connect(mapState)(SwiperContainer);