import { FaFacebookF, FaTwitter, FaInstagram, FaLink } from 'react-icons/fa';
import styles from './Contact.module.css';

// Вирішив, що об'єкту тут буде достатньо, замість мапи
const iconMap = {
  facebook: <FaFacebookF />,
  twitter: <FaTwitter />,
  instagram: <FaInstagram />,
  default: <FaLink />,
};

function Contact({ href, service }) {
  return (
    <li className={styles.contact}>
      <a className={styles.contactLink} href={href}>
        {iconMap[service]}
      </a>
    </li>
  );
}

export default Contact;
