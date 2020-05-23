import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const MyLink = ({to}) => {
  return <NavLink to={to}>{to}</NavLink>
}

export default styled(MyLink).attrs({
   activeClassName: props => props.activeClassName
})`
   font-size: 50px;
`

