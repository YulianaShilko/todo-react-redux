import ActionTypes from '../store/actions/actionTypes'
import ITodo from './ITodo'

interface IAddTodoAction {
    type: typeof ActionTypes.ADD_TODO_SUCCESS
    payload: ITodo
}

interface IToggleTodoAction {
    type: typeof ActionTypes.TOGGLE_TODO_STATUS_SUCCESS
    payload: ITodo
}

interface IRemoveTodoAction {
    type: typeof ActionTypes.REMOVE_TODO_SUCCESS
    payload: ITodo
}

interface IRemoveAllTodoAction {
    type: typeof ActionTypes.REMOVE_ALL_TODO_SUCCESS
}

interface IRemoveCompletedTodoAction {
    type: typeof ActionTypes.REMOVE_COMPLETED_TODO_SUCCESS
}

export type TodoActionTypes =
    | IAddTodoAction
    | IRemoveTodoAction
    | IToggleTodoAction
    | IRemoveAllTodoAction
    | IRemoveCompletedTodoAction
