import styles from "./Menu.module.css";

function Menu({ menuOpen }) {
    return (
        <div
            className={`${styles.menuContainer} ${menuOpen ? styles.open : ""}`}
        >
            <ul className={styles.menu_link}>
                <li className={styles.link}><a href="#aboutme" >About me</a></li>
                <li className={styles.link}><a href="#software-skills" >Software Skills</a></li>
                <li className={styles.link}><a href="#soft-skills" >Soft Skills</a></li>
                <li className={styles.link}><a href="#projects" >Projects</a></li>
                <li className={styles.link}><a href="#experience" >Experience</a></li>
                <li className={styles.link}><a href="#contact" >Contact</a></li>
            </ul>
        </div>
    );
}

export default Menu;
