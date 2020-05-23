import React, { Component } from 'react';

class NormalComponent extends Component {
    render() {
        return (
            <div>
                {this.props.title}, {this.props.msg}
            </div>
        )
    }
}

export default NormalComponent;