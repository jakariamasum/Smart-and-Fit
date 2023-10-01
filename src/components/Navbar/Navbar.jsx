import styles from './Navbar.module.css';
const Navbar = () => {
    return (
        <div className={styles.header}>
            <h2>Smart and Fit</h2>
            <ul className={styles.navmenu}>
                <li>Home</li>
                <li>Programms</li>
                <li>Why Us</li>
                <li>Plans</li>
                <li>Testimonials</li>
            </ul>
        </div>
    );
};

export default Navbar;