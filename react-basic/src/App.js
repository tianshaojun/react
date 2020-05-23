import React, { Component, Fragment } from 'react';

// import Home from './react-router-dom/index';
// import Ani from './animate/Ani';
// import AniRTG from './animate/AniRGT';

// import Counter from './redux/Counter';

// import PostList from './redux/components/postlist/PostList.js';
// import PostForm from './redux/components/postform/PostForm.js';

import MessageList from './context/MessageList';


class App extends Component {
  render() {
    return (
      // <Home></Home>
      // <Ani></Ani>
      // <AniRTG></AniRTG>
      // <Counter></Counter>
      // <Fragment>
      //   <PostList></PostList>
      //   <PostForm></PostForm>
      // </Fragment>
         <Fragment>
            <MessageList></MessageList>
         </Fragment>
    )
  }
}

export default App;
