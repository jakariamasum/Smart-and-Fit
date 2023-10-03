import Style from './Title.module.css';

const Title = ({firstText,middleText,lastText}) => {
    return (
        <div className={Style.programmTitle}>
                <span className='stroke-text'>{firstText}</span>
                <span>{middleText}</span>
                <span className='stroke-text'>{lastText}</span>
            </div>
    );
};

export default Title;