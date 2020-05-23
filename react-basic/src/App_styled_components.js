import React, { Component } from 'react';

// import './styled-components/style.css';
// import { Wrapper, Title } from './styled-components/getting-started';
import { Wrapper, Title } from './styled-components/Adapting-based-on-props';
import { Button, TomatoButton } from './styled-components/Extending-Styles';
// import { Link, StyledLink } from './styled-components/Styling-any-components';
// import { Input } from './styled-components/Passed-props';
import { StyledDiv } from './styled-components/Attaching-additional-props';

class App extends Component {

  constructor() {
    super();
    this.state = {
      value: 'aaa'
    }
  }

  render() {
    return (
      // <section>
      //   <h1>hello</h1>
      // </section>
      <Wrapper>
        <Title color="gray">hello</Title>
        <Button as='a'>hello</Button>
        <TomatoButton>world</TomatoButton>
        {/* <Link>hello</Link> */}
        {/* <StyledLink>world</StyledLink> */}
        {/* <Input value="test" defaultValue={this.state.value} placeholder="请输入..."></Input> */}
        {/* <Input inputColor="red"></Input> */}
        <StyledDiv hello="hi"><span>hello</span></StyledDiv>
      </Wrapper> 
    )
  }
}

export default App;
