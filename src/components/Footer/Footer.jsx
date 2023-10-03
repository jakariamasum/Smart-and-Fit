import Styles from './Footer.module.css';
import logo from '../../assets/logo.png'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
import instagram from '../../assets/instagram.png'
const Footer = () => {
    return (
        <div className={Styles.container}>
            <hr />
            <div className={Styles.footer}>
                <div className={Styles.socialLinks}>
                    <img src={github} alt="" />
                    <img src={linkedin} alt="" />
                    <img src={instagram} alt="" />
                </div>
                <div className={Styles.logo}>
                    <span>Smart and Fit</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;