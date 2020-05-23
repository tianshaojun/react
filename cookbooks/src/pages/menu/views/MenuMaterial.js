import React, { Component } from 'react';

import Menu from 'components/common/menu/MenuContainer.js';

class MenuMaterial extends Component {
    render() {
        return (
            <Menu {...this.props}></Menu>
        )
    }
}

export default MenuMaterial;