import Button from '../Button/Button';
import Navbar from '../Navbar/Navbar';
import Stats from '../Stats/Stats';
import styles from './Hero.module.css';
import heart from '../../assets/heart.png';
import calogry from '../../assets/calories.png'
import hero from '../../assets/hero_image.png'
import heroBack from '../../assets/hero_image_back.png'
const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.left}>
                <Navbar />
                <div className={styles.bestClub}>
                    <div></div>
                    <span>the best fit club in town</span>
                </div>
                <div className={styles.heroText}>
                    <div>
                        <span className='stroke-text'>Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal body</span>
                    </div>
                    <div>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nesciunt illum iure commodi voluptas iste cupiditate natus sunt molestiae. Accusamus?</span>
                    </div>
                </div>
                <div className={styles.stats}>
                    <Stats value={100} text={'coaches'} />
                    <Stats value={80} text={'memeber joined'} />
                    <Stats value={50} text={'fitness programm'} />
                </div>
                <div className={styles.btns}>
                    <Button text={'Get Started'} />
                    <Button text={'Learn More'} />
                </div>
            </div>
            <div className={styles.right}>
                <div>
                    <Button text={'Join Now'} />
                </div>
                <div>
                    <img src={heart} alt="heart" />
                    <span>Heart Bit </span>
                    <span>106 bpm</span>
                </div>
                <img src={hero} alt="" className={styles.heroImage} />
                <img src={heroBack} alt="" className={styles.heroBack} />

                <div className={styles.calories}>
                    <img src={calogry} alt="" />
                    <div>
                        <span>Calories burned</span>
                        <span>220 kcal</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;