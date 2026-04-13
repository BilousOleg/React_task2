import { FaFacebookF, FaTwitter, FaInstagram, FaLink } from 'react-icons/fa';
import styles from './Contact.module.css';

// Напевно, найскладніша частина, адже довелося шукати пакет з іконками та додавати їх у відповідності з посиланням

// Вирішив створити словник співвідношення назваІконки: компонентІконки
const iconMap = new Map([
  ['facebook', FaFacebookF],
  ['twitter', FaTwitter],
  ['instagram', FaInstagram],
  ['default', FaLink],
]);

// Функція, яка визначає ключ для словника з посилання
// Не знаю, чи варто залишати функцію та словник саме тут, але поки так
// (хоча їх наявність тут робить компоненту 2 відповідальності, але вони при цьому стосуються тільки нього)
function getService(href) {
  if (href.includes('facebook')) {
    return 'facebook';
  } else if (href.includes('twitter')) {
    return 'twitter';
  } else if (href.includes('instagram')) {
    return 'instagram';
  } else {
    return 'default';
  }
}

function Contact(props) {
  const { href } = props;

  const service = getService(href);
  // Уніфікована назва іконки для будь-якого з перелічених у словнику компонентів-іконок
  const Icon = iconMap.get(service);

  return (
    <li className={styles.contact}>
      <a className={styles.contactLink} href={href}>
        <Icon />
      </a>
    </li>
  );
}

export default Contact;
