import React, { Component } from 'react';

export default class PostForm extends Component {
    constructor() {
        super();
        this.state = {
          inputValue: 'test'
        }
    }
    
    render() {
        return (
            <div>
                <textarea
                    value={this.state.inputValue}
                    onChange={this.handleInput.bind(this)}
                    name="" id="" cols="30" rows="10"
                ></textarea>
                <br />
                <button onClick={ () => {
                    this.props.receiveValue(this.state.inputValue)
                }}>发布</button>
            </div>
        )
    }

    submit(e) {
        // this.setState({
        //   inputValue: ''
        // })
        // this.props.receiveValue(this.state.inputValue);
    }

    handleInput(e) {
        this.setState({
          inputValue: e.target.value
        })
    }

}