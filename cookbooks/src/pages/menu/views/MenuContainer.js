import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    MenuWrapper,
    MenuHeader,
    MenuNav,
    MenuNavItem,
    MenuNavSlider
} from './styledComponent.js';

import Search from 'components/common/search/Search.js';
import MenuCategory from './MenuCategory';
import MenuMaterial from './MenuMaterial';

import {
    Route,
    withRouter
} from 'react-router-dom';

import { CHANGE_FROM } from 'pages/menu/actionTypes.js';

const mapDispatch = (dispatch) => {
    return {
        change(from) {
           dispatch({
               type: CHANGE_FROM,
               from
           })
        }
    }
}

class MenuContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dir: 'left',
            activeDir: 'left'
        }
    }

    render() {
        return (
            <MenuWrapper>
                <MenuHeader>
                    <MenuNav>
                        <MenuNavItem
                            onClick={() => this.handleNavClick('left')}
                            active={this.state.activeDir === 'left'}
                        >分类</MenuNavItem>
                        <MenuNavItem
                            onClick={() => this.handleNavClick('right')}
                            pos="right"
                            active={this.state.activeDir === 'right'}
                        >食材</MenuNavItem>
                        <MenuNavSlider dir={this.state.dir}></MenuNavSlider>
                    </MenuNav>
                </MenuHeader>
                <Search bgcolor='#efefef'></Search>
                <div>
                    <Route path='/home' exact children={props => <MenuCategory {...props} />}/>
                    <Route path='/home/category' children={props => <MenuCategory {...props} />}/>
                    <Route path='/home/material' children={props => <MenuMaterial {...props} />}/>
                </div>
            </MenuWrapper>
        )
    }

    handleNavClick(dir) {
        this.setState({
            dir
        })

        setTimeout(() => {
            this.setState({
                activeDir: dir
            })
        }, 300)

        this.props.history.push(
            dir === 'left' ? '/home/category' : '/home/material',
            { dir }
        )

        this.props.change(dir === 'left' ? 'category' : 'material');
    }
}

export default withRouter(connect(null, mapDispatch)(MenuContainer));