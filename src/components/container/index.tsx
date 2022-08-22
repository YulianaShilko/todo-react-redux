import './style.scss'

interface ContainerProps {
    children: JSX.Element
}

const Container = ({ children }: ContainerProps) => (
    <div className="container">{children}</div>
)

export default Container
