import { v1 as uuidV1 } from 'uuid'

import ActionTypes from '../actions/actionTypes'
import { TodoActionTypes } from '../interfaces/actionTypesInterfaces'
import ITodo from '../interfaces/ITodo'

interface ITodoReducerInterface {
    todos: ITodo[]
}

export const initialState: ITodoReducerInterface = {
    todos: [],
}

// eslint-disable-next-line @typescript-eslint/default-param-last
const todoReducer = (state = initialState, action: TodoActionTypes) => {
    switch (action?.type) {
        case ActionTypes.ADD_TODO_SUCCESS:
            return {
                ...state,
                todos: state.todos.concat({
                    ...action.payload,
                    ...{
                        id: action.payload.id ?? uuidV1(),
                    },
                }),
            }
        case ActionTypes.TOGGLE_TODO_STATUS_SUCCESS:
            return {
                ...state,
                todos: state.todos.map((todo: ITodo) =>
                    todo.id === action.payload.id
                        ? { ...todo, completed: !todo.completed }
                        : todo
                ),
            }
        case ActionTypes.REMOVE_TODO_SUCCESS:
            return {
                todos: state.todos.filter(
                    (todo: ITodo) => todo.id !== action.payload.id
                ),
            }
        case ActionTypes.REMOVE_ALL_TODO_SUCCESS:
            return { ...state, todos: [] }
        case ActionTypes.REMOVE_COMPLETED_TODO_SUCCESS:
            return {
                todos: state.todos.filter(
                    (todo: ITodo) => todo.completed !== true
                ),
            }
        default:
            return state
    }
}

export default todoReducer
