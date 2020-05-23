import React, { Component } from 'react';
import { connect } from 'react-redux';

import CookBookUi from './CookBookUi';

import { loadCategoriesDataAsync, loadListDataAsync } from '../actionCreator.js';

import BScroll from 'better-scroll';

const mapState = (state) => {
    return {
      categories: state.getIn(['cookbook', 'categories']),
      list: state.getIn(['cookbook', 'list'])
    }
}

const mapDispatch = (dispatch) => {
    return {
        loadCategories(scroll) {
            dispatch(loadCategoriesDataAsync(dispatch, scroll));
        },

        loadList(scroll) {
            dispatch(loadListDataAsync(dispatch, scroll));
        }
    }
}

class CookBookContainer extends Component {
    constructor() {
        super();
        this.getScrollId = this.getScrollId.bind(this);
    }
    render() {
        return (
            <CookBookUi setScrollId={this.getScrollId} {...this.props} ></CookBookUi>
        )
    }

    componentDidMount() {
       this.scroll = new BScroll(this.scrollId, {click: true});
       this.props.loadCategories(this.scroll);
       this.props.loadList(this.scroll);
    }

    getScrollId(id) {
        this.scrollId = id;
    }
}

export default connect(mapState,mapDispatch)(CookBookContainer);