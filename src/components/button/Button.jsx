import style from './button.module.scss';

function Button({color, text, onClick}) {
    const handleClickButton = () => {
        onClick();
    }
    return (
        <button className={`${style.button} ${style[color]}`} onClick={handleClickButton}>
               {text}         
        </button>
    );
}

export default Button;