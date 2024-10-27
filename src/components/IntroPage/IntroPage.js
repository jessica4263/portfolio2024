import React, { useState } from 'react';
import styles from './IntroPage.module.css';
import NavBar from '../NavBar/NavBar';
import {ReactComponent as Star} from "../../assets/star.svg";
import bild from "../../assets/portfoliobild.png";

function IntroPage() {

    const [moreText, setMoreText] = useState(false);

    function handleMore(){
        setMoreText(prev => !prev);
    }
    return (
        <div id="aboutme" className={styles.borderIntro}>
            <NavBar />
            <div className={styles.containerIntro}>
                {/* Container for About me and title */}
                <div className={styles.containerInformation}>
                    <h1>Hi!</h1>
                    <h2 className={styles.imJess}>i'm Jessica</h2>
                    {/* Container about me info */}
                    <div>
                        <div>
                            <h4 >About me</h4>
                            <p>Hello there! I’m a software developer transitioning from over 7 years of experience in architecture. 
                                My journey into software development began with the Harvard CS50 course, and I’m currently deepening 
                                my skills in frontend and fullstack development through the Fullstack Engineer course at Codecademy.
                            </p>
                            {moreText && (         
                                <>  
                                    <br />            
                                    <p>
                                        My architectural background has equipped me with a strong design sensibility and robust analytical skills. 
                                        I have collaborated on complex projects within large teams, which has helped me develop effective communication 
                                        and teamwork abilities.
                                    </p>
                                    <br />
                                    <p>
                                        I’ve really enjoyed my journey in software development and look forward to using my design experience and technical 
                                        skills to contribute meaningfully to exciting software projects!
                                    </p>
                                </>   
                            )}
                            <button onClick={handleMore} className={styles.seeMore}>{!moreText ? "See more..." : "See less..."}</button>
                        </div>
                        <br />
                        <div>
                            <h4>Contact</h4>
                            <p><span>Email:</span> jss.duarte.dev@gmail.com</p>
                            <p><span>Github:</span> <a target="_blank" className={styles.link} href="https://github.com/jessica4263">jessica4263</a></p>
                            <p><span>Phone:</span> +49 1794385742</p>
                            <p><span>Location:</span> Nürnberg</p>
                            <p><span>Linkedin:</span> <a target="_blank" className={styles.link} href="https://www.linkedin.com/in/jessica-duarte-dev/">Jessica Duarte</a></p>
                        </div>
                    </div>
                </div>
                {/* Conteiner for profile picture and assets */}
                <div className={styles.imgContainer}>
                    <img className={styles.profileImg} src={bild} />
                    <Star className={styles.star1}/>
                </div>
            </div>
        </div>
    )
}

export default IntroPage;