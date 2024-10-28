import React, { useState } from "react";
import Menu from "./Menu";
import styles from "./NavBar.module.css";
import {ReactComponent as MenuIcon} from "../../assets/menu-svgrepo-com.svg"
import {ReactComponent as CloseIcon} from "../../assets/close-svgrepo-com.svg"

function NavBar({languageEn, setLanguageEn, sourceText}) {
    const [menuOpen, setMenuOpen] = useState(false);
    
    const handleLanguageToggle = () => {
        setLanguageEn(!languageEn)
    }
    
    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div className={styles.navbarContainer}>
                <div className={styles.languageContainer}>
                    <div
                        onClick={handleLanguageToggle}
                        className={`${styles.language_btn} ${styles.english_btn} ${languageEn ? styles.selected_btn : ''}`}
                    >
                        EN
                    </div>
                    <div 
                        onClick={handleLanguageToggle}
                        className={`${styles.language_btn} ${styles.deutsch_btn} ${!languageEn ? styles.selected_btn : ''}`}
                    >
                        DE
                    </div>
                </div>
                <button className={styles.menu_btn} onClick={handleMenuToggle}>
                    {menuOpen ? <CloseIcon className={styles.icon+ " " + styles.close}/> : <MenuIcon className={styles.icon}/>}
                </button>
            </div>
            <Menu menuOpen={menuOpen} sourceText={sourceText} />
        </>
    );
}

export default NavBar;
