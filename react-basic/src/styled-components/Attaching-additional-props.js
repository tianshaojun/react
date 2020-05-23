import styled from 'styled-components';

const StyledDiv = styled.div.attrs({
    title: 'aaa',
    id: 'bbb',
    // 'data-src': (props) => props.hello
})`
    font-size: 100px;
    > span {
        font-size: 50px;
    }
    & > span {
        font-size: 25px;
    }
`

export {
    StyledDiv
}