// import React from 'react';
import PropTypes from 'prop-types';

import React, { Component } from 'react';
// class PostItem extends Component {
//     render() {
//         return (
//             <li>
//                 {this.props.value}
//                 <button onClick={this.props.deleteItem.bind(this, this.props.index)}>删除</button>
//             </li>
//         )
//     }
// }
// export default PostItem;

//无状态组件，函数式组件，影子组件，傻瓜组件，UI组件
// function PostItem({value, index, deleteItem}) {
//     return (
//         <li>
//           {value}
//           <button onClick={deleteItem.bind(this, index)}>删除</button>
//         </li>
//     )
// }

// export default PostItem;

// export default ({value, index, deleteItem}) => {
//     return (
//         <li>
//           {value}
//           <button onClick={deleteItem.bind(this, index)}>删除</button>
//         </li>
//     )
// }

export default class PostItem extends Component {
  constructor() {
    super();
    console.log('parent init');
    this.state = {
      title: ''
    }
  }

  componentWillMount() {
    console.log('parent componentWillMount');
  }

  render() {
    console.log('parent render');
    let {value, index, deleteItem } = this.props;
    return (
      <li>
        { this.state.title } : { value }
        <button onClick={ () => {
          deleteItem(index)
        }}>删除</button>
      </li>
    )
  }

  componentDidMount() {
     console.log('parent componentDidMount');

     setTimeout(() => {
       this.setState({
         title: '标题'
       })
     }, 1000);
  }

  static propTypes = {
    value: PropTypes.string.isRequired,
    index: PropTypes.number,
    deleteItem: PropTypes.func
  }

  static defaultProps = {
    value: 'hello'
  }

  
}

// PostItem.propTypes = {
//    value: PropTypes.string.isRequired,
//    index: PropTypes.number,
//    deleteItem: PropTypes.func
// }

// PostItem.defaultProps = {
//     value: 'hello'
// }
