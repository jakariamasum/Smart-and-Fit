import styles from './Navbar.module.css';
import bar from '../../assets/bars.png'
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
const Navbar = () => {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        function handleResize() {
            const isMobile = window.innerWidth <= 768;
            setOpen(false);
            setMobile(isMobile);
        }

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [mobile, setMobile] = useState(window.innerWidth <= 768);
    return (
        <div className={styles.header}>
            <h2>Smart and Fit</h2>
            {
                open === false && mobile === true ? (
                    <div style={{ backgroundColor: 'var(--appColor)', borderRadius: '5px', padding: '0.5rem' }}>
                        <img src={bar} alt="" style={{ width: '1.5rem', height: '1.5rem' }} onClick={() => setOpen(true)} />
                    </div>
                ) : (
                    <ul className={styles.navmenu}>
                        <li onClick={() => setOpen(false)}>
                            <Link to='home' spy={true} smooth={true} onClick={() => setOpen(false)}>Home</Link>
                        </li>
                        <li onClick={() => setOpen(false)}>
                            <Link to='programms' spy={true} smooth={true} onClick={() => setOpen(false)}>Programms</Link>
                        </li>
                        <li onClick={() => setOpen(false)}>
                            <Link to='reasons' spy={true} smooth={true} onClick={() => setOpen(false)}>Why Us</Link>
                        </li>
                        <li onClick={() => setOpen(false)}>
                            <Link to='plans' spy={true} smooth={true} onClick={() => setOpen(false)}>Plans</Link>
                        </li>
                        <li onClick={() => setOpen(false)}>
                            <Link to='testimonials' spy={true} smooth={true} onClick={() => setOpen(false)}>Testimonials</Link>
                        </li>
                    </ul>
                )
            }
        </div>
    );
};

export default Navbar;