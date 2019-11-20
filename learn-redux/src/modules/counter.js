
// 액션타입
const SET_DIFF = 'counter/SET_DIFF';  // 모듈이름/변수명 : 모듈이름을 쓰는 이유는 중복을 피하기위해.
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션생성함수
export const setDiff = diff => ({ 
    type: SET_DIFF, 
    diff
});
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// 초기값
const initialState = {
    number: 0,
    diff: 1
};

// 리듀서에서는 state 와 action을 파라미터로 받아옴.
// state에는 기본값 설정해줘야함.
export default function counter(state = initialState, action) {
    switch (action.type) {
        case SET_DIFF:
            return {
                ...state,
                diff: action.diff
            };
        case INCREASE:
            return {
                ...state,
                number: state.number + state.diff
            };
        case DECREASE:
            return {
                number: state.number - state.diff
            };
        default:
            return state;
    }
}
