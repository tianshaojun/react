import React, { Component, Fragment} from 'react';

import PostList from './components/PostList';
import PostForm from './components/PostForm';

class App extends Component {
  constructor() {
     super();
     this.state = {
       inputValue: ''
     }
  }

  render() {
    return (
      <Fragment>
        <PostList inputValue={this.state.inputValue}></PostList>
        <PostForm receiveValue={this.receiveValue.bind(this)}></PostForm>
      </Fragment>
    )
  }

  submit(e) {
    this.setState({
      postList: [...this.state.postList, this.state.inputValue],
      inputValue: ''
    })
  }

  handleInput(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  receiveValue(inputValue) {
    this.setState({
      inputValue
    })
  }

}

export default App;
