import React from 'react';
import styled from 'styled-components';

const Link = (props) => (
    <div>
      <a className={props.className}>
       {props.children}
      </a>
      <a>
        {props.children}
      </a>
    </div>
)

const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`

export {
  Link,
  StyledLink
}

