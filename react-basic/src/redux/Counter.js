import React, { Component } from 'react';

import store from './store.js';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);

        this.state = {
            count: store.getState()
        }

        store.subscribe(this.changeCount.bind(this));
    }
    render() {
        return (
            <div>
                <button onClick={this.decrement}>-</button>&nbsp;
                {this.state.count}
                &nbsp;<button onClick={this.increment}>+</button>
            </div>
        )
    }
    decrement() {
        store.dispatch({
            type: 'decrement'
        })
    }
    increment() {
        store.dispatch({
            type: 'increment'
        })
    }
    changeCount() {
        this.setState({
            count: store.getState()
        })
    }
}

export default Counter;