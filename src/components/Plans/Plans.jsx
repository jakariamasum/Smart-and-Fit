import Title from '../Title/Title';
import Style from './Plans.module.css';
import {plansData} from '../../data/plansData'
import PlansCard from '../PlansCard/PlansCard';
const Plans = () => {
    return (
        <div className={Style.container}>
            <div className={`make-blur ${Style.leftBlur}`}></div>
            <div className={`make-blur ${Style.rightBlur}`}></div>
            <Title firstText={'ready to start'} middleText={'your journey'} lastText={'now withus'}/>
            <div className={Style.plans}>
                {
                    plansData.map((plan,i)=>(
                        <PlansCard icon={plan.icon} name={plan.name} price={plan.price} features={plan.features}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Plans;