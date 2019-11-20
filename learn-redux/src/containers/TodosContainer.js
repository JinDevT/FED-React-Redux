import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Todos from '../components/Todos';
import { addTodo, toggleTodo } from '../modules/todos';

// props 를 가져올 필요 없음.
function TodosContainer() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    
    // 재사용할 수 있도록 useCallback 사용.
    const onCreate = useCallback(text => dispatch(addTodo(text)), [dispatch]) ;
    const onToggle = useCallback(id => dispatch(toggleTodo(id)), [dispatch]);

    return <Todos 
        todos={todos}
        onCreate={onCreate}
        onToggle={onToggle}
    />
}

export default TodosContainer;