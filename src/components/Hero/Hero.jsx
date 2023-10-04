import Button from '../Button/Button';
import Navbar from '../Navbar/Navbar';
import Stats from '../Stats/Stats';
import styles from './Hero.module.css';
import heart from '../../assets/heart.png';
import calogry from '../../assets/calories.png'
import hero from '../../assets/hero_image.png'
import heroBack from '../../assets/hero_image_back.png'
import {motion} from 'framer-motion'
const Hero = () => {
    const transition= {type:'spring',duration:3}
    const mobile= window.innerWidth<=768?true:false;
    return (
        <div className={styles.hero}>
            <div className={`make-blur ${styles.blur}`}></div>
            <div className={styles.left}>
                <Navbar />
                <div className={styles.bestClub}>
                    <motion.div 
                    initial={{left:mobile?'120px':'158px'}}
                    whileInView={{left:'8px'}}
                    transition={{...transition,type:'tween'}}

                    >
                    </motion.div>
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
                <motion.div
                 initial={{right:'-1rem'}}
                 whileInView={{right:'4rem'}}
                 transition={transition}
                 >
                    <img src={heart} alt="heart" />
                    <span>Heart Bit </span>
                    <span>106 bpm</span>
                </motion.div>
                <img src={hero} alt="" className={styles.heroImage} />
                <motion.img
                initial={{right:'11rem'}}
                whileInView={{right:'20rem'}}
                transition={transition}
                src={heroBack} alt="" className={styles.heroBack} />

                <motion.div 
                initial={{right:"37rem"}}
                whileInView={{right:'28rem'}}
                transition={transition}
                className={styles.calories}>
                    <img src={calogry} alt="" />
                    <div>
                        <span>Calories burned</span>
                        <span>220 kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;