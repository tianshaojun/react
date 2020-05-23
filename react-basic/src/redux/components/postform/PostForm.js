import React, { Component } from 'react';

import { connect } from 'react-redux';

import { ADD } from './actionTypes';

const mapDispatchToProps = (dispatch) => {
    return {
      addItem: (payload) => {
        dispatch({
          type: ADD,
          payload: payload
        })
      }
    }
  }

class PostForm extends Component {
    constructor() {
        super();
        this.state = {
            inputValue: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    render() {
        return (
            <div>
                <input value={this.state.inputValue} onChange={this.handleInputChange} type="text" /><br/>
                <button onClick={() => this.props.addItem(this.state.inputValue)}>add</button>
            </div>
        )
    }
    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }
}

export default connect(null,mapDispatchToProps)(PostForm);