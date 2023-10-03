import Styles from './Testimonials.module.css';
import { testimonialsData } from '../../data/testimonialsData'
import { useState } from 'react';
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
const Testimonials = () => {
    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;
    return (
        <div className={Styles.testimonials}>
            <div className={Styles.left}>
                <span>Testimonials</span>
                <span className='stroke-text'>what they</span>
                <span>say about</span>
                <span>
                    {
                        testimonialsData[selected].review
                    }
                </span>
                <span>
                    <span style={{color:'orange'}}>
                        {testimonialsData[selected].name}
                    </span>{" "} - {testimonialsData[selected].status}
                </span>
            </div>
            <div className={Styles.right}>
                <div></div>
                <div></div>
                <img src={testimonialsData[selected].image} alt="" />
                <div className={Styles.arrows}>
                    <img onClick={() => {
                        selected === 0 ? setSelected(tLength - 1) : setSelected(prev => prev - 1)
                    }} src={leftArrow} alt="" />
                    <img onClick={() => {
                        selected === 0 ? setSelected(tLength - 1) : setSelected(prev => prev + 1)
                    }} src={rightArrow} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Testimonials;