import './style.scss'

import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addTodo } from '../../actions/actionCreators'
import Button from '../../components/button'
import Input from '../../components/input'

const AddTodo = () => {
    const [userInput, setUserInput] = useState('')
    const dispatch = useDispatch()

    const handleChange = (e: React.FormEvent<HTMLFormElement>) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(addTodo({ name: userInput }))
        setUserInput('')
    }

    return (
        <>
            <form className="formTodo" onSubmit={handleSubmit}>
                <Input
                    value={userInput}
                    type="text"
                    className="inputTodo"
                    onChange={handleChange}
                    placeholder="Enter task..."
                />
                <Button className="addBtn" text="Add" />
            </form>
        </>
    )
}

export default AddTodo
