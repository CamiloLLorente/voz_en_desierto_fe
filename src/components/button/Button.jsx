import style from './button.module.scss';

function Button({color, text}) {
    return (
        <button className={`${style.button} ${style[color]}`}>
               {text}         
        </button>
    );
}

export default Button;