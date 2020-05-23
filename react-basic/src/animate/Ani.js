import React, { Component, Fragment } from 'react';

import "./ani.css";

class Ani extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
    }

    render() {
        return (
            <Fragment>
              <div className={this.state.show ? 'show' : 'hide'}>
                hello
              </div>
              <div>
                <button onClick={this.showHideDiv.bind(this)}>click</button>
              </div>
            </Fragment>
        )
    }

    showHideDiv() {
      //console.log(this.state.show);
      this.setState((prevState) => {
        //console.log(prevState);
          return {
              show: !prevState.show
          }
      })
    }
}

export default Ani;

