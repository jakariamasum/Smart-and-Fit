import Style from './PlansCard.module.css';
import tick from '../../assets/whiteTick.png'
import Button from '../Button/Button';
const PlansCard = ({icon,name,price,features}) => {
    return (
        <div className={Style.plan}>
            {icon}
            <span>{name}</span>
            <span>{price}</span>
            <div className={Style.features}>
                {
                    features.map((feature,i)=>(
                        <div className={Style.feature}>
                            <img src={tick} alt="" />
                            <span>{feature}</span>
                        </div>
                    ))
                }

            </div>
            <div>
                <span>See More {'->'}</span>
            </div>
            <div>
                <Button text={'Join Now'}/>
            </div>
        </div>
    );
};

export default PlansCard;