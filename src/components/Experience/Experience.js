import styles from "./Experience.module.css";
import {ReactComponent as Star} from "../../assets/star.svg";

function Experience() {
    return (
        <div className={styles.experienceBorder}>
            <Star className={styles.star5}/>
            <h2 id="experience">Experience</h2>
            <div className={styles.experienceCont}>
                <div className={styles.sectionContainer}>
                    <div className={styles.expTitle}>Software Development</div>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.textContainer}>
                    <hr />
                    <h5>2024: Present</h5>
                    <p>Completed a Frontend Development course and am currently enrolled in a Fullstack Development course on Codecademy</p>
                    <hr />
                    <h5>2024</h5>
                    <p>Completed the CS50 course (Introduction to Computer Science) online from Harvard University</p>
                </div>
            </div>
            <div className={styles.experienceCont}>
                <div className={styles.sectionContainer}>
                    <div className={styles.expTitle}>Architecture</div>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.textContainer}>
                    <hr />
                    <h5>2024</h5>
                    <p>Working as a freelance architect and founding StudioDezimeter. 
                        Creation of the branding image, website, and content for 
                        the company’s social media.
                    </p>
                    <hr />
                    <h5>2021-2023</h5>
                    <p>Employed as an Architect and as a student at Plus3Architekten in Regensburg. Involved in various projects, 
                        including hospital renovations, structural improvements, design, and planning. 
                        LPH 01-08.</p>
                    <hr />
                    <h5>2018-2021</h5>
                    <p>Master of Arts in Architecture at Ostbayerische Technische Hochschule Regensburg.</p>
                    <hr />
                    <h5>2020-2021</h5>
                    <p>Working student at "conceptk" architectural firm in Regensburg. Analysis of German school facilities, 
                        including comparisons and proposals for changes. LPH 01-02.</p>
                        <hr />
                    <h5>2018</h5>
                    <p>Assistance as a working student at Hueber Architekten in Regensburg. 
                        Creation of 3D modeling and visualizations for various projects. 
                        LPH 03.</p>
                    <hr />
                    <h5>2017</h5>
                    <p>Freelance architect in Tijuana, Mexico. Implementation of projects 
                        such as spa room redesigns, restaurant interior renovations, 
                        and design for a medical office building. LPH 01-08.</p>
                    <hr />
                    <h5>2016-2017</h5>
                    <p>Worked as an architect and then as a project manager at the construction 
                        company "Galacon" in Tijuana, Mexico. Contributed to various residential, commercial, 
                        and industrial projects, including design, planning, 3D modeling, and rendering, 
                        as well as interior design and building expansions. LPH 01-05.</p>
                    <hr />
                    <h5>2015</h5>
                    <p>Internship at "Amorphica Design" architectural firm in Tijuana, Mexico. 
                        Worked on a residential project in La Paz, Mexico, including 3D 
                        modeling and rendering. LPH 03.</p>
                    <hr />
                    <h5>2015</h5>
                    <p>Erasmus exchange program at the University of Innsbruck in Tyrol, Austria.</p>
                    <hr />
                    <h5>2011-2015</h5>
                    <p>Integrated Architecture Studies (Diploma) from Universidad Autónoma de 
                        Baja California in Tijuana, Mexico.</p>
                </div>
            </div>
        </div>
    )
}

export default Experience;