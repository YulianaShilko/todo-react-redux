interface InputProps {
    type: string
    placeholder: string
    className: string
    value: string
    onChange: (e: any) => void
}

const Input = ({
    type,
    placeholder,
    className,
    value,
    onChange,
}: InputProps) => {
    return (
        <input
            type={type}
            className={className}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
        />
    )
}

export default Input
