import React, { Component } from 'react';

import { HotMenuWrap, Title } from './styledComponents.js';

import { withRouter } from 'react-router-dom';

import { Grid } from 'antd-mobile';

class HotMenuContainer extends Component {
    render() {
        let data = this.props.categories && this.props.categories.get('热门').toJS().slice(0, 11).map((value, index) => {
            return {
                icon: value.img,
                text: value.title
            }
        });
        data && data.push({
            icon: '',
            text: '更多...'
        })
        return (
            <HotMenuWrap>
                <Title>热门分类</Title>
                <Grid 
                  data={data} 
                  hasLine={false}
                  onClick={_el => this.props.history.push('/list')} 
                />
            </HotMenuWrap>
        )
    }
}

export default withRouter(HotMenuContainer);

