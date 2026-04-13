import { Component } from 'react';
import styles from './UserList.module.css';
import errorPicture from './errorPicture.png';
import anonymPicture from './anonymPicture.png';
import Contact from '../Contact';

class UserListItem extends Component {
  constructor(props) {
    super(props);

    const { profilePicture } = this.props.user;

    this.state = {
      // Або додається зображення, якщо воно є, а якщо немає - anonymPicture
      profilePicture: profilePicture ? profilePicture : anonymPicture,
    };
  }

  setErrorPicture = () => {
    // Було вказано, що "Заглушка може бути div і повинна малюватись замість картинки",
    // але я не зовсім зрозумів, про що йде мова, тому зробив через зміну стану
    this.setState({ profilePicture: errorPicture });
  };

  mapContacts = (contact, index) => {
    // Тут вирішив зробити key у вигляді конкатенації contact й index (бо список незмінний),
    // адже вони в сумі дають наближене до унікального значення (рядок). Інших варіантів не побачив
    return <Contact key={contact + index} href={contact} />;
  };

  render() {
    const { firstName, lastName, contacts } = this.props.user;
    const { profilePicture } = this.state;

    return (
      <li>
        <article className={styles.userCard}>
          <div className={styles.imageWrapper}>
            <img
              src={profilePicture}
              alt={`${firstName} ${lastName}`}
              // Для встановлення заглушки довелося перероблювати компонент на класовий,
              // адже його стан змінюється тоді, коли виникає помилка (а з хуками ще не знайомий)
              onError={this.setErrorPicture}
            />
          </div>
          <div className={styles.infoSection}>
            <div className={styles.userName}>
              {firstName} {lastName}
            </div>
            <ul className={styles.contactsList}>
              {contacts.map(this.mapContacts)}
            </ul>
          </div>
        </article>
      </li>
    );
  }
}

export default UserListItem;
