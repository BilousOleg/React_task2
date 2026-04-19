import { FaFacebookF, FaTwitter, FaInstagram, FaLink } from 'react-icons/fa';
import styles from './Contact.module.css';

// Мапа іконок, адже треба якось зв'язати ідентифікатор контакту з компонентом-іконкою
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
        {/* Необхідне обчислення (якщо це так можна назвати) у вигляді отримання необхідної іконки */}
        {iconMap[service]}
      </a>
    </li>
  );
}

export default Contact;
