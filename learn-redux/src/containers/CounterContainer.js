import React from 'react';
import Counter from "../components/Counter";
import { useSelector, useDispatch } from 'react-redux'; 
// useSelector: 상태를 조회할 떄 사용하는 훅
// useDispatch: 액션을 디스패치할 떄 사용하는 훅.
import { increase, decrease, setDiff } from "../modules/counter";

// 컨테이너컴포넌트
// 리덕스에 있는 상태를 조회하고나 액션을 디스패치 할 수있는 컴포넌트

function CounterContainer() {
    // state가 가르키는게 store에서 getState() 했을 떄 받아오는 값.(리덕스의 현재상태)
    const { number, diff } = useSelector(state => ({
        number: state.counter.number,
        diff: state.counter.diff
    }));

    const dispatch = useDispatch();

    // 액션생성함수들이 호출되면 액션객체를 만들어져서 디스패치됨.
    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    const onSetDiff = diff => dispatch(setDiff(diff));
    return(
        <Counter 
            number={number}
            diff={diff}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onSetDiff={onSetDiff}
        />
    );
}

export default CounterContainer;