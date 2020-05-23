import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class Container extends Component {
    static contextTypes = {
        color: PropTypes.string
    }

    render() {
        return (
           <div style={{color: this.context.color}}>
               click
           </div>
        )
    }
}

export default Container;