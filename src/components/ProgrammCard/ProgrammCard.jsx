import Styles from './ProgrammCard.module.css';
import rightArrow from '../../assets/rightArrow.png'
const ProgrammCard = ({ img, title, desc }) => {
    return (
        <div className={Styles.category}>
            {img}
            <span>{title}</span>
            <span>{desc}</span>
            <div>Join Now <img src={rightArrow} alt="" /></div>
        </div>
    );
};

export default ProgrammCard;