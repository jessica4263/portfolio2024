import styles from "./Projects.module.css";
import taskmanager from "../../assets/taskmanager_prev.png"
import myplaylist from "../../assets/myplaylist_prev.png";
import ebayClone from "../../assets/ebayclone-progress.png";
import {ReactComponent as Star} from "../../assets/star.svg";

function Projects({sourceText}) {
    return (
        <div className={styles.borderContainer}>
            <Star className={styles.star4} />
            <h2 id="projects" className={styles.title}>Software Projects</h2>
            <div className={styles.projectsContainer}>
                <div className={styles.project}>
                    <h3>Myplaylist</h3>
                    <a target="_blank" href="https://myplaylist-apispotify.netlify.app/"><img src={myplaylist} /></a>
                    <h4>{sourceText.projects.description}</h4>
                    <p>
                    {sourceText.projects.description1}
                    </p>
                    <br/>
                    <h4>{sourceText.projects.tech}</h4>
                    <p>JavaScript | React | JSX | React Hooks | CSS</p>
                    <br/>
                    <h4>GitHub</h4>
                    <a className={styles.link} target="_blank" href="https://github.com/jessica4263/spotify-myplaylist">Myplaylist repository</a>
                </div>
                <div className={styles.project}>
                    <h3>Taskmanager</h3>
                    <a  target="_blank" href="https://www.youtube.com/watch?v=vx5z2O5gV0o"><img src={taskmanager} /></a>
                    <h4>{sourceText.projects.description}</h4>
                    <p>
                    {sourceText.projects.description2}
                    </p>
                    <br/>
                    <h4>{sourceText.projects.tech}</h4>
                    <p>HTML | CSS | Python | Flask | Jinja | JavaScript | SQL </p>
                    <br/>
                    <h4>GitHub</h4>
                    <a className={styles.link} target="_blank" href="https://github.com/jessica4263/cs50x/tree/main/project">taskmanager repository</a>
                </div>
                <div className={styles.project}>
                    <h3>Ebay clone</h3>
                    <img style={{ pointerEvents: 'none', border: '.2rem gray solid' }}  src={ebayClone} />
                    <h4>{sourceText.projects.description}</h4>
                    <p>
                    {sourceText.projects.description3}
                    </p>
                    <br/>
                    <h4>{sourceText.projects.tech}</h4>
                    <p>JavaScript | React | JSX | Redux Toolkit | CSS</p>
                    <br/>
                    <h4>GitHub</h4>
                    <a style={{ color: 'gray' }}target="_blank">Ebay clone repository(in Progress..)</a>
                </div>
            </div>
        </div>
    )
}

export default Projects;