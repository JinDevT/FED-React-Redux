import React from 'react';
import Counter from "../components/Counter";
import { useSelector, useDispatch, shallowEqual } from 'react-redux'; 
// useSelector: 상태를 조회할 떄 사용하는 훅
// useDispatch: 액션을 디스패치할 떄 사용하는 훅.
import { increase, decrease, setDiff } from "../modules/counter";

// 컨테이너컴포넌트
// 리덕스에 있는 상태를 조회하고나 액션을 디스패치 할 수있는 컴포넌트

function CounterContainer() {
    // state가 가르키는게 store에서 getState() 했을 떄 받아오는 값.(리덕스의 현재상태)
    
    // 1. useSelector 최적화.
    // shallowEqual를 사용한다. 말 그대로 얕게 비교하는것.
    const { number, diff } = useSelector(
    state => ({
        number: state.counter.number,
        diff: state.counter.diff
    }),
    shallowEqual
    );

    // 2.useSelector 최적화.
    // 여러번 해줘야함.
    const number = useSelector(state => state.counter.number);
    const diff = useSelector(state => state.counter.diff);

    // 1,2 번 둘 다 성능 차이 없다.
    // 예를 들어 리스트가 별로 없으면 최적화 상관이 없으나 리스트가 무한개면
    // 최적화를 하는게 좋다.

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