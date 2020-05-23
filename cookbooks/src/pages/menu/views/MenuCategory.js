import React, { Component } from 'react';

import Menu from 'components/common/menu/MenuContainer.js';

class MenuCategory extends Component {
    render() {
        return (
            <Menu {...this.props}></Menu>
        )
    }
}

export default MenuCategory;