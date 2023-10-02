import Styles from './Button.module.css';

const Button = ({ text }) => {
    return (
        <div className={Styles.btn}>
            {text}
        </div>
    );
};

export default Button;