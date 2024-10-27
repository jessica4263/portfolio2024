import styles from "./SoftwareSkills.module.css";
import {ReactComponent as Star} from "../../assets/star.svg";

function SoftwareSkills({sourceText}) {
    return (
        <div className={styles.borderSkills}>
            <div style={{ width: 'auto', height:'auto'}}>
                <Star className={styles.star2} />
                <h2 id="software-skills" className={styles.title}>Software Skills</h2>
            </div>
            <div className={styles.skillsContainer}>
                <div className={styles.topicContainer}>
                    <h4>{sourceText.software.general}</h4>
                    <ul className={styles.indivSkillsContainer}>
                        <li>Git</li>
                        <li>Visual Studio</li>
                        <li>Markdown</li>
                        <li>Windows Terminal</li>
                        <li>Github</li>
                        <li>NPM</li>
                        <li>Webpack</li>
                    </ul>
                </div>
                <div className={styles.topicContainer}>
                    <h4>Front-end</h4>
                    <ul className={styles.indivSkillsContainer}>
                        <li>CSS</li>
                        <li>HTML</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>Redux</li>
                        <li>Redux Toolkit</li>
                        <li>React Hook Form</li>
                        <li>React Router</li>
                    </ul>
                </div>
                <div className={styles.topicContainer}>
                    <h4>Back-end</h4>
                    <ul className={styles.indivSkillsContainer}>
                        <li>C</li>
                        <li>Python</li>
                        <li>Flask</li>
                        <li>SQL</li>
                        <li>Sqlite</li>
                        <li>MySQL</li>
                        <li>Jinja</li>
                    </ul>
                </div>
                <div className={styles.topicContainer}>
                    <h4>Design</h4>
                    <ul className={styles.indivSkillsContainer}>
                        <li>Photoshop</li>
                        <li>Illustrator</li>
                        <li>Canva</li>
                        <li>Wordpress</li>
                    </ul>
                </div>
                <div className={styles.topicContainer}>
                    <h4>{sourceText.software.architecture}</h4>
                    <ul className={styles.indivSkillsContainer}>
                        <li>ArchiCAD</li>
                        <li>Lumion</li>
                        <li>Rhinoceros</li>
                        <li>RIB</li>
                    </ul>
                </div>
            </div>
            <Star className={styles.star3} />
            <h2 id="soft-skills" className={styles.title}>Soft Skills</h2>
            <ul className={styles.softSkillsContainer}>
                <li>{sourceText.soft.skill1}</li>
                <li>{sourceText.soft.skill2}</li>
                <li>{sourceText.soft.skill3}</li>
                <li>{sourceText.soft.skill4}</li>
                <li>{sourceText.soft.skill5}</li>
                <li>{sourceText.soft.skill6}</li>
                <li>{sourceText.soft.skill7}</li>
                <li>{sourceText.soft.skill8}</li>
            </ul>
        </div>
    );
}

export default SoftwareSkills;