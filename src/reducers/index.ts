import { combineReducers } from 'redux'

import todoReducer from './todoReducer'

const reducer = combineReducers({
    todoReducer,
})

export type RootState = ReturnType<typeof reducer>

export default reducer
