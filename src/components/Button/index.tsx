
interface ButtonProps {
    text: string;
    handleOnClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = (props: ButtonProps) => {
     return (
        <button onClick={props.handleOnClick}>{props.text}</button>
     )
}

export default Button;