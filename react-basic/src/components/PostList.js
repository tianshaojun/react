import React, { Component, Fragment } from 'react';

import PostItem from '../components/PostItem';
import Test from '../components/Test';

export default class PostList extends Component {
    constructor() {
        super();
        this.state = {
            postList: ['item1', 'item2', 'item3'],
            isShowTest: true
        }
    }

    render() {
        // console.log('postList render');
        return (
            <Fragment>
                <ul>
                    {
                        this.state.postList.map((value, index) => {
                            return (
                                <PostItem
                                    key={index}
                                    value={value}
                                    index={index}
                                    deleteItem={this.deleteItem.bind(this)}
                                ></PostItem>
                            )
                        })
                    }
                </ul>
                {
                    this.state.isShowTest ? (
                      <Test>
                        <div>hello</div>
                      </Test>
                    ) : null
                }
            </Fragment>
        )
    }

    componentWillReceiveProps(props) {
        console.log('componentWillReceiveProps');
        this.setState({
            postList: [...this.state.postList, props.inputValue]
        })
    }

    componentDidMount() {
        // setTimeout(() => {
        //     this.setState({
        //         postList: [...this.state.postList, 'item4']
        //     })
        // }, 3000);

        setInterval(() => {
        //   this.setState({
        //       isShowTest: false
        //   })
        }, 3000);
    }

    deleteItem(index) {
        // let postList = [...this.state.postList];
        // postList.splice(index, 1);
        // this.setState({
        //     postList
        // })

        //当setState去更新一个状态时
        //如果这个状态要依赖于原状态
        //需要给setState传入一个函数
        this.setState((prevState) => {
            let postList = [...prevState.postList];
            postList.splice(index, 1);
            return {
                postList
            }
        })
    }

}