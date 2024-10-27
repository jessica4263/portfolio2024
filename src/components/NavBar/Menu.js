import styles from "./Menu.module.css";

function Menu({ menuOpen, sourceText }) {
    return (
        <div
            className={`${styles.menuContainer} ${menuOpen ? styles.open : ""}`}
        >
            <ul className={styles.menu_link}>
                <li className={styles.link}><a href="#aboutme" >{sourceText.menu.aboutme}</a></li>
                <li className={styles.link}><a href="#software-skills" >{sourceText.menu.software_skills}</a></li>
                <li className={styles.link}><a href="#soft-skills" >{sourceText.menu.soft_skills}</a></li>
                <li className={styles.link}><a href="#projects" >{sourceText.menu.projects}</a></li>
                <li className={styles.link}><a href="#experience" >{sourceText.menu.experience}</a></li>
                <li className={styles.link}><a href="#contact" >{sourceText.menu.contact}</a></li>
            </ul>
        </div>
    );
}

export default Menu;
