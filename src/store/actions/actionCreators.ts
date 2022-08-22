import { TodoActionTypes } from '../../interfaces/actionTypesInterfaces'
import ITodo from '../../interfaces/ITodo'
import ActionTypes from './actionTypes'

export const addTodo = (todo: ITodo): TodoActionTypes => {
    return {
        type: ActionTypes.ADD_TODO_SUCCESS,
        payload: todo,
    }
}

export const removeTodo = (todo: ITodo): TodoActionTypes => {
    return {
        type: ActionTypes.REMOVE_TODO_SUCCESS,
        payload: todo,
    }
}

export const toggleTodoStatus = (todo: ITodo): TodoActionTypes => {
    return {
        type: ActionTypes.TOGGLE_TODO_STATUS_SUCCESS,
        payload: todo,
    }
}

export const removeAllTodos = () => {
    return {
        type: ActionTypes.REMOVE_ALL_TODO_SUCCESS,
    }
}

export const removeCompletedTodos = () => {
    return {
        type: ActionTypes.REMOVE_COMPLETED_TODO_SUCCESS,
    }
}
