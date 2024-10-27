import React, { useState } from 'react';
import styles from './IntroPage.module.css';
import NavBar from '../NavBar/NavBar';
import { ReactComponent as Star } from "../../assets/star.svg";
import bild from "../../assets/portfoliobild.png";

function IntroPage({ languageEn, setLanguageEn ,sourceText}) {

    const [moreText, setMoreText] = useState(false);

    function handleMore() {
        setMoreText(prev => !prev);
    }
    return (
        <div id="aboutme" className={styles.borderIntro}>
            <NavBar languageEn={languageEn} setLanguageEn={setLanguageEn} sourceText={sourceText} />
            <div className={styles.containerIntro}>
                {/* Container for About me and title */}
                <div className={styles.containerInformation}>
                    <h1>{sourceText.intro.greet}</h1>
                    <h2 className={styles.imJess}>{sourceText.intro.name}</h2>
                    {/* Container about me info */}
                    <div>
                        <div>
                            <h4 >{sourceText.intro.about}</h4>
                            <p>
                                {sourceText.intro.about_text}
                            </p>
                            {moreText && (
                                <>
                                    <br />
                                    <p>
                                        {sourceText.intro.more_p1}
                                    </p>
                                    <br />
                                    <p>
                                        {sourceText.intro.more_p2}
                                    </p>
                                </>
                            )}
                            <button onClick={handleMore} className={styles.seeMore}>{!moreText ? sourceText.intro.see_more : sourceText.intro.see_less}</button>
                        </div>
                        <br />
                        <div>
                            <h4>{sourceText.intro.contact}</h4>
                            <p><span>{sourceText.intro.email}</span> jss.duarte.dev@gmail.com</p>
                            <p><span>{sourceText.intro.github}</span> <a target="_blank" className={styles.link} href="https://github.com/jessica4263">jessica4263</a></p>
                            <p><span>{sourceText.intro.phone}</span> +49 1794385742</p>
                            <p><span>{sourceText.intro.location}</span> Nürnberg</p>
                            <p><span>LinkedIn:</span> <a target="_blank" className={styles.link} href="https://www.linkedin.com/in/jessica-duarte-dev/">Jessica Duarte</a></p>
                        </div>
                    </div>
                </div>
                {/* Conteiner for profile picture and assets */}
                <div className={styles.imgContainer}>
                    <img className={styles.profileImg} src={bild} />
                    <Star className={styles.star1} />
                </div>
            </div>
        </div>
    )
}

export default IntroPage;