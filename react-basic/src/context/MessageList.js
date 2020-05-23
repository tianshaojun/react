import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import Message from './Message.js';

class Container extends Component {
    static childContextTypes = {
        color: PropTypes.string
    }

    getChildContext() {
        return { color: 'purple' }
    }

    render() {
        return (
            <Message>
               00000
            </Message>
        )
    }
}

export default Container;