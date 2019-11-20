//프리젠이션컴포넌트
//redux store에 직접 접근하지않고 필요한 값 또는 함수를 프롭스로 받아와서 사용하는 컴포넌트
// UI를 선언하는거에 집중하고 필요한 값이나 함수는 프롭스로 받아와서 사용

import React from 'react';

function Counter({ number, diff, onIncrease, onDecrease, onSetDiff }) {
    const onChange = e => {
        onSetDiff(parseInt(e.target.value, 10));
    }
    return(
        <div>
            <h1>{number}</h1>
            <div>
                <input type="number" value={diff} onChange={onChange}/>
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
            </div>
            
        </div>
    );
}

export default Counter;