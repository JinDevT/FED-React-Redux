import { createStore } from 'redux'; //store를 만들어 주는 함수.


//상태 초기값 정의.
const initialState = {
    counter: 0,
    text: '',
    list: []
};

//액션타입정의(상수)
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';


//액션생성함수 (대부분의 경우 화살표 함수로 작성.)
//액션함수는 소문자로 작성
const increase = () => ({
    type: INCREASE,
    
});

const decrese = () => ({
    type: DECREASE,
});

const changeText = text => ({
    type: CHANGE_TEXT,
    text
});

const addToList = item => ({
    type: ADD_TO_LIST,
    item
});

//리듀서 작성
//state, action 을 파라미터로 가져옴
// state에 기본값 설정: 리덕스에서 초기상태를 만들떄 
// 리듀서를 한번 호출하는데 그 시점에 스테이트가 언디파인드면 디펄트 리턴 언디파인드가 되면서
// 초기상태가 만들어 지지않기 때문.

function reducer(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return {
                ...state, //기존값유지
                counter: state.counter + 1, //기존값에 +1을함
            };
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1
            };
        case CHANGE_TEXT:
            return {
                ...state,
                text: action.text
            };
        case ADD_TO_LIST:
            return {
                ...state,
                list: state.list.concat(action.item) //배열에다 새로운 값을 추가할 떄는 concat을 사용 (불변성을 지키기위해)
            };
        default :
            return state;  // 위에서 처리하지 못하면 기존 state값을 유지하겠다.
    }
}

//store만들기.
const store = createStore(reducer);
console.log(store.getState()); //현재 스토어 안에 상태를 조회.

//리스너
const listner = () => {
    const state = store.getState(); // getState는 잘사용하지않음.
    console.log(state);
};

// 구독
const unsubscribe = store.subscribe(listner);

//액션들을 디스패치
store.dispatch(increase());
store.dispatch(decrese());
store.dispatch(changeText('안녕하세요.'));
store.dispatch(addToList({ id: 1, text: '와우' }));

