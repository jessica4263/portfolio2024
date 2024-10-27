import styles from "./Contact.module.css";
import {ReactComponent as Star} from "../../assets/star.svg";

function Contact( {sourceText}) {
    return(
        <div className={styles.contactContainer}>
            <Star className={styles.star6}/>
            <h3 id="contact">{sourceText.contact.title}</h3>
            <div>
                <p><span>{sourceText.contact.email}</span> jss.duarte.dev@gmail.com</p>
                <p><span>Github:</span> <a target="_blank" className={styles.link} href="https://github.com/jessica4263">jessica4263</a></p>
                <p><span>{sourceText.contact.phone}</span> +49 1794385742</p>
                <p><span>{sourceText.contact.location}</span> Nürnberg</p>
                <p><span>LinkedIn:</span> <a target="_blank" className={styles.link} href="https://www.linkedin.com/in/jessica-duarte-dev/">Jessica Duarte</a></p>
            </div>
        </div>
    )
}

export default Contact;