import React, { Component, Fragment } from 'react';

import hlc from './HighLevelComponent';
import NormalComponent from './NormalComponent';

class Text extends Component {
    constructor(props) {
      console.log('child init');
      super(props);
      this.state = {
        msg: 'hi'
      }
      this.handleInputChange = this.handleInputChange.bind(this);
    }

    shouldComponentUpdate(nextState, nextProps) {
      console.log('child shouldComponentUpdate');
      if(nextState.msg === this.state.msg){
        return false;
      }else{
        return true;
      }
    }

    componentWillUpdate() {
       console.log('child componentWillUpdate');
    }

    render() {
        console.log('child render');
        return (
          <Fragment>
            <div>
              {this.state.msg} {this.props.children}
              <input type="text" value={this.state.msg} onChange={this.handleInputChange} />
            </div>
            {
              hlc(NormalComponent)
            }
          </Fragment>
        )
    }

    componentDidUpdate() {
       console.log('child componentDidUpdate');
    }

    componentDidMount() {
       console.log('child componentDidMount');
       setTimeout(() => {
          this.setState({
            msg: 'hiha'
          })
       },2000)
    }

    componentWillUnmount() {
      console.log('componentWillUnmount');
    }

    handleInputChange(e) {
      this.setState({
        msg: e.target.value
      }, () => {
        console.log(this.state.msg);
      })
    }

  }

export default Text;