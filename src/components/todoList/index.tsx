import './style.scss'

import React from 'react'

import ITodo from '../../interfaces/ITodo'
import TodoItem from '../todoItem'

interface ITodoListProps {
    todos: ITodo[]
    onTodoClick: (todo: ITodo) => void
    onTodoDelete: (todo: ITodo) => void
}

const TodoList: React.FC<ITodoListProps> = ({
    todos,
    onTodoClick,
    onTodoDelete,
}) => {
    return (
        <ul className="todoListWrapper">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    {...todo}
                    onTodoToggle={() => onTodoClick(todo)}
                    onTodoDelete={() => onTodoDelete(todo)}
                />
            ))}
        </ul>
    )
}

export default TodoList
