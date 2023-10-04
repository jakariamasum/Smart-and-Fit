import styles from './Navbar.module.css';
import bar from '../../assets/bars.png'
import { useState } from 'react';
const Navbar = () => {
    const mobile = window.innerWidth <= 768 ? true : false;
    const [open, setOpen] = useState(false);
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
                        <li onClick={()=>setOpen(false)}>Home</li>
                        <li onClick={()=>setOpen(false)}>Programms</li>
                        <li onClick={()=>setOpen(false)}>Why Us</li>
                        <li onClick={()=>setOpen(false)}>Plans</li>
                        <li onClick={()=>setOpen(false)}>Testimonials</li>
                    </ul>
                )
            }
        </div>
    );
};

export default Navbar;