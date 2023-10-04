import Styles from './Stats.module.css';
import NumberCounter from 'number-counter'
const Stats = ({ value, text }) => {
    return (
        <div className={Styles.container}>
            <span>
                <NumberCounter end={value} start={20} preFix="+" delay='4'/>
            </span>
            <span>{text}</span>
        </div>
    );
};

export default Stats;