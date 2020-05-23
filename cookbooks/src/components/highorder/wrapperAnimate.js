import React from 'react';

import { CSSTransition } from 'react-transition-group';

//高阶组件
//本身是个函数，需要传递一个组件进来
//返回一个组件，这个组件被增强了
//有人将这个函数叫做高阶组价
//有人将返回的组件叫高阶组件
export default (Comp) => {
    return class extends React.Component {
        render() {
            let dir = this.props.location.state ? this.props.location.state.dir : 'left';
            return (
                <CSSTransition
                    in={!!this.props.match}
                    classNames={{
                        enter: 'animated',
                        enterActive: dir === 'right' ? 'fadeInRight' : 'fadeInLeft',
                        exit: 'animated',
                        exitActive: dir === 'left' ? 'fadeOutRight' : 'fadeOutLeft'
                    }}
                    timeout={300}
                    mountOnEnter={true}
                    unmountOnExit={true}
                >
                <Comp { ...this.props }></Comp>
                </CSSTransition>
            )
        }
    }
}