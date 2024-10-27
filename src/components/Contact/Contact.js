import styles from "./Contact.module.css";
import {ReactComponent as Star} from "../../assets/star.svg";

function Contact() {
    return(
        <div className={styles.contactContainer}>
            <Star className={styles.star6}/>
            <h3 id="contact">Contact me!</h3>
            <div>
                <p><span>Email:</span> jss.duarte.dev@gmail.com</p>
                <p><span>Github:</span> <a target="_blank" className={styles.link} href="https://github.com/jessica4263">jessica4263</a></p>
                <p><span>Phone:</span> +49 1794385742</p>
                <p><span>Location:</span> Nürnberg</p>
                <p><span>Linkedin:</span> <a target="_blank" className={styles.link} href="https://www.linkedin.com/in/jessica-duarte-dev/">Jessica Duarte</a></p>
            </div>
        </div>
    )
}

export default Contact;