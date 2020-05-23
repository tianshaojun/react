import React  from 'react';

export default (NormalComp) => {
    let title = 'hello';
    let msg = 'world';
    return <NormalComp title={title} msg={msg}></NormalComp>
}