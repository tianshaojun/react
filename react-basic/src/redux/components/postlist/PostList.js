import React, { Component } from 'react';
import randomString from 'random-string';

import { connect } from 'react-redux';

import { loadData } from './actionCreator';

const mapState = (state) => {
    // console.log(state);
    return {
        list: state.list.loadList,
        loadlist: state.form.postList
    }
}

const mapDispatch = (dispatch) => {
   return {
       load(payload) {
        // dispatch 可以传入一个plain object 和 传入一个函数
        // 如果传入的plain object 会直接交给store,接着调用reducer
        // 如果传入的是个函数，去执行函数
        dispatch(loadData(dispatch));
       }
   }
}

class PostList extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.loadlist.map((value, index) => {
                        return <li key={randomString()}>{value}</li>
                    })
                }
                {
                    this.props.list.map((value, index) => {
                        return <li key={randomString()}>{value}</li>
                    })
                }
            </ul>
        )
    }

    componentDidMount() {
       this.props.load();
    }
}

export default connect(mapState, mapDispatch)(PostList);