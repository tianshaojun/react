import React, { Component, Fragment } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import "./ani.css";

class Ani extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      list: [
        <div>hello</div>
      ]
    }
  }

  render() {
    return (
      <Fragment>
        <TransitionGroup>
            {
              this.state.list.map((value, index) => {
                return (
                    <CSSTransition
                      key={index}
                      // in={this.state.show}
                      timeout={300}
                      classNames="fade"
                      //  unmountOnExit={true}
                      // appear={true}
                      //  onEntered={(el) => {
                      //     el.style.fontSize='50px';
                      //  }}
                    >
                    { value }
                    </CSSTransition>
                )
              })
            }
        </TransitionGroup>
        <div>
          <button onClick={this.showHideDiv.bind(this)}>click</button>
        </div>
      </Fragment>
    )
  }

  showHideDiv() {
    //console.log(this.state.show);
    this.setState((prevState) => {
      // console.log(prevState);
      return {
        show: !prevState.show,
        list: [...prevState.list, <div>hello</div>]
      }
    })
  }
}

export default Ani;

