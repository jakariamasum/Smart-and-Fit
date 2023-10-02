import Styles from './Stats.module.css';

const Stats = ({ value, text }) => {
    return (
        <div className={Styles.container}>
            <span>+{value}</span>
            <span>{text}</span>
        </div>
    );
};

export default Stats;