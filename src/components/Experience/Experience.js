import styles from "./Experience.module.css";
import {ReactComponent as Star} from "../../assets/star.svg";

function Experience({sourceText}) {
    return (
        <div className={styles.experienceBorder}>
            <Star className={styles.star5}/>
            <h2 id="experience">{sourceText.experience.title}</h2>
            <div className={styles.experienceCont}>
                <div className={styles.sectionContainer}>
                    <div className={styles.expTitle}>{sourceText.experience.software}</div>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.textContainer}>
                    <hr />
                    <h5>2024: {sourceText.experience.present}</h5>
                    <p>{sourceText.experience.timeline1}</p>
                    <hr />
                    <h5>2024</h5>
                    <p>{sourceText.experience.timeline2}</p>
                </div>
            </div>
            <div className={styles.experienceCont}>
                <div className={styles.sectionContainer}>
                    <div className={styles.expTitle}>{sourceText.experience.architecture}</div>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.textContainer}>
                    <hr />
                    <h5>2024</h5>
                    <p>
                        {sourceText.experience.timeline3}
                    </p>
                    <hr />
                    <h5>2021-2023</h5>
                    <p>
                        {sourceText.experience.timeline4}
                    </p>
                    <hr />
                    <h5>2018-2021</h5>
                    <p>
                        {sourceText.experience.timeline5}
                    </p>
                    <hr />
                    <h5>2020-2021</h5>
                    <p>
                        {sourceText.experience.timeline6}
                    </p>
                        <hr />
                    <h5>2018</h5>
                    <p>
                        {sourceText.experience.timeline7}
                    </p>
                    <hr />
                    <h5>2017</h5>
                    <p>
                        {sourceText.experience.timeline8}
                    </p>
                    <hr />
                    <h5>2016-2017</h5>
                    <p>
                        {sourceText.experience.timeline9}
                    </p>
                    <hr />
                    <h5>2015</h5>
                    <p>
                        {sourceText.experience.timeline10}
                    </p>
                    <hr />
                    <h5>2015</h5>
                    <p>
                        {sourceText.experience.timeline11}
                    </p>
                    <hr />
                    <h5>2011-2015</h5>
                    <p>
                        {sourceText.experience.timeline12}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Experience;