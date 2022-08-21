export default interface ITodo {
    id?: string
    name: string
    completed?: boolean
    onTodoToggle?: () => void
    onTodoDelete?: () => void
}
