import './style.scss'

import { useDispatch } from 'react-redux'

import { removeCompletedTodos } from '../../actions/actionCreators'
import Button from '../button'

const DeleteCompletedTodos = () => {
    const dispatch = useDispatch()

    const deleteCompletedTodo = () => {
        dispatch(removeCompletedTodos())
    }
    return (
        <Button
            className="deleteCompletedBtn"
            text="Delete Completed Todo"
            onClick={deleteCompletedTodo}
        />
    )
}

export default DeleteCompletedTodos
