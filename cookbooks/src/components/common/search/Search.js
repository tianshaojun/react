import React, { Component } from 'react';

import {
    SearchContainer,
    SearchContent
} from './styledComponent.js';

import search from 'images/search.png';

class Search extends Component {
    render() {
        return (
            <SearchContainer>
                <SearchContent { ...this.props }>
                    <img src={search} alt="" />
                    <span>想吃什么搜这里，川菜</span>
                </SearchContent>
            </SearchContainer>
        )
    }
}

export default Search;