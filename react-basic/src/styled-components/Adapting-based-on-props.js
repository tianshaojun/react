import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${props => props.color};
`

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`

export {
    Title,
    Wrapper
}