import styles from "./Projects.module.css";
import taskmanager from "../../assets/taskmanager_prev.png"
import myplaylist from "../../assets/myplaylist_prev.png";
import ebayClone from "../../assets/ebayclone-progress.png";
import {ReactComponent as Star} from "../../assets/star.svg";

function Projects() {
    return (
        <div className={styles.borderContainer}>
            <Star className={styles.star4} />
            <h2 id="projects" className={styles.title}>Software Projects</h2>
            <div className={styles.projectsContainer}>
                <div className={styles.project}>
                    <h3>Myplaylist</h3>
                    <a target="_blank" href="https://myplaylist-apispotify.netlify.app/"><img src={myplaylist} /></a>
                    <h4>Description</h4>
                    <p>
                    This project is a music search application that utilizes the Spotify 
                    API to allow users to search for tracks, display albums, and play music. 
                    The app enables users to find their favorite songs, play them, and manage 
                    their playlists. 
                    </p>
                    <br/>
                    <h4>Technologies used:</h4>
                    <p>JavaScript | React | JSX | React Hooks | CSS</p>
                    <br/>
                    <h4>GitHub</h4>
                    <a className={styles.link} target="_blank" href="https://github.com/jessica4263/spotify-myplaylist">Myplaylist repository</a>
                </div>
                <div className={styles.project}>
                    <h3>Taskmanager</h3>
                    <a  target="_blank" href="https://www.youtube.com/watch?v=vx5z2O5gV0o"><img src={taskmanager} /></a>
                    <h4>Description</h4>
                    <p>
                    Task Manager is a web app where you can create and manage task lists. 
                    After signing up or logging in, you'll see your lists on the homepage, 
                    where you can add tasks, change list colors, and edit or delete things easily. 
                    Tasks are saved to a database, and you can check off completed ones. They'll stay 
                    checked even if you log out or refresh the browser. There's also an error page for any mistakes.
                    </p>
                    <br/>
                    <h4>Technologies used:</h4>
                    <p>HTML | CSS | Python | Flask | Jinja | JavaScript | SQL </p>
                    <br/>
                    <h4>GitHub</h4>
                    <a className={styles.link} target="_blank" href="https://github.com/jessica4263/cs50x/tree/main/project">taskmanager repository</a>
                </div>
                <div className={styles.project}>
                    <h3>Ebay clone</h3>
                    <img style={{ pointerEvents: 'none', border: '.2rem gray solid' }}  src={ebayClone} />
                    <h4>Description</h4>
                    <p>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. 
                        It has roots in a piece of classical Latin literature from 45 BC, 
                        making it over 2000 years old. Richard McClintock, a Latin professor 
                        at Hampden-Sydney College in Virginia, looked up one of the more 
                        obscure Latin words, consectetur, from a Lorem Ipsum passage, 
                        and going through the cites of the word in classical literature, 
                        discovered the undoubtable source.
                    </p>
                    <br/>
                    <h4>Technologies used:</h4>
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