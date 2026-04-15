import { Component } from 'react';
import styles from './UserList.module.css';
// import errorPicture from './errorPicture.png';
import anonymPicture from './anonymPicture.png';
import Contact from '../Contact';

class UserListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isErrorPicture: false,
    };
  }

  setErrorPicture = () => {
    this.setState({ isErrorPicture: true });
  };

  mapContacts = (contact) => {
    // Тут вирішив надати key значення contact, бо воно може бути відносно-унікальним в даному наборі посилань
    return <Contact key={contact} href={contact} />;
  };

  render() {
    const { firstName, lastName, contacts, profilePicture } = this.props.user;
    const { isErrorPicture } = this.state;

    return (
      // Додана перевірка на одночасну наявність імені й прізвища. Якщо таких не виявлено - картка не рендериться
      firstName &&
      lastName && (
        <li>
          <article className={styles.userCard}>
            <div className={styles.imageWrapper}>
              {/* Умовний рендеринг в залежності від того, чи є помилка завантаження, чи ні */}
              {!isErrorPicture ? (
                <img
                  src={profilePicture ? profilePicture : anonymPicture}
                  alt={`${firstName} ${lastName}`}
                  onError={this.setErrorPicture}
                />
              ) : (
                <div className={styles.imgErrorHolder}></div>
              )}
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
      )
    );
  }
}

export default UserListItem;
