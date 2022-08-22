import './style.scss'

import { useDispatch } from 'react-redux'

import { removeAllTodos } from '../../store/actions/actionCreators'
import Button from '../button'

const DeleteAllTodos = () => {
    const dispatch = useDispatch()

    const removeAllTodo = () => {
        dispatch(removeAllTodos())
    }
    return (
        <Button
            className="deleteAllBtn"
            text="Delete All Todo"
            onClick={removeAllTodo}
        />
    )
}

export default DeleteAllTodos
