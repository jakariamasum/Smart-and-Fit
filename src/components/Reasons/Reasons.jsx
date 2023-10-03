import Style from './Reasons.module.css';
import Image1 from '../../assets/image1.png'
import Image2 from '../../assets/image2.png'
import Image3 from '../../assets/image3.png'
import Image4 from '../../assets/image4.png'
import tick from '../../assets/tick.png'
import nike from '../../assets/nike.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
const Reasons = () => {
    return (
        <div className={Style.reasons}>
            <div className={Style.left}>
                <img src={Image1} alt="" />
                <img src={Image2} alt="" />
                <img src={Image3} alt="" />
                <img src={Image4} alt="" />
            </div>
            <div className={Style.right}>
                <span>some reasons</span>
                <div>
                    <span className='stroke-text'>why </span>
                    <span>choose us?</span>
                </div>
                <div className={Style.details}>
                    <div>
                        <img src={tick} alt="" />
                        <span>over 100+ expert coaches</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>train smarter and faster than before</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>1 free programm for new member</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>reliable partner</span>
                    </div>
                </div>
                <div className={Style.partners}>
                    <span>our partners</span>
                    <div>
                        <img src={nb} alt="" />
                        <img src={adidas} alt="" />
                        <img src={nike} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reasons;