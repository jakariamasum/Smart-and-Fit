import Navbar from '../Navbar/Navbar';
import styles from './Hero.module.css';
const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.left}>
                <Navbar/>
            </div>
            <div className={styles.right}>Right</div>
        </div>
    );
};

export default Hero;