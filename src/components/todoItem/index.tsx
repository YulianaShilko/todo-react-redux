import './style.scss'

import React from 'react'

import ITodo from '../../interfaces/ITodo'
import Button from '../button'

const TodoItem: React.FC<ITodo> = ({
    onTodoToggle,
    completed,
    name,
    onTodoDelete,
}) => (
    <li
        className="todoItem"
        onClick={onTodoToggle}
        style={{ textDecoration: completed ? 'line-through' : 'none' }}
    >
        {name}
        <Button className="deleteBtn" onClick={onTodoDelete} text="X"></Button>
    </li>
)

export default TodoItem
