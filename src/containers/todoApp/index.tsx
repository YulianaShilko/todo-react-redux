import { useDispatch, useSelector } from 'react-redux'

import Header from '../../components/header'
import TodoList from '../../components/todoList'
import ITodo from '../../interfaces/ITodo'
import {
    removeTodo,
    toggleTodoStatus,
} from '../../store/actions/actionCreators'
import { RootState } from '../../store/reducers'
import AddTodo from '../addTodo'
import DeleteTodo from '../deleteTodo'

const TodoApp = () => {
    const todos: ITodo[] = useSelector(
        (state: RootState) => state.todoReducer.todos
    )

    const dispatch = useDispatch()

    const handleRemoveTodo = (todo: ITodo): void => {
        dispatch(removeTodo(todo))
    }

    const handleToggleTodoStatus = (todo: ITodo): void => {
        dispatch(toggleTodoStatus(todo))
    }

    return (
        <>
            <Header />
            <AddTodo />
            <TodoList
                todos={todos}
                onTodoDelete={handleRemoveTodo}
                onTodoClick={handleToggleTodoStatus}
            />
            <DeleteTodo />
        </>
    )
}

export default TodoApp
