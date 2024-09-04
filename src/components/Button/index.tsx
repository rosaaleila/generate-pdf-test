import './index.css';

interface ButtonProps {
    text: string;
    class?: string;
    handleOnClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = (props: ButtonProps) => {
     return (
        <button className={props.class ? `${props.class} customBtn` : 'customBtn'} onClick={props.handleOnClick}>{props.text}</button>
     )
}

export default Button;