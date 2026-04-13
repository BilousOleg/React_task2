import { Component } from 'react';
import styles from './UserList.module.css';
// import errorPicture from './errorPicture.png';
import anonymPicture from './anonymPicture.png';
import Contact from '../Contact';

class UserListItem extends Component {
  constructor(props) {
    super(props);

    const { profilePicture } = this.props.user;

    this.state = {
      // Або додається зображення, якщо воно є, а якщо немає - anonymPicture
      profilePicture: profilePicture ? profilePicture : anonymPicture,
      isErrorPicture: false,
    };
  }

  // Варіант зі зміною помилкового зображення на дефолтне зображення-заглушку (підміна посилання)
  // setErrorPicture = () => {
  //   this.setState({ profilePicture: errorPicture });
  // };

  setErrorPicture = () => {
    this.setState({ isErrorPicture: true });
  };

  mapContacts = (contact, index) => {
    // Тут вирішив надати key значення contact, бо воно може бути відносно-унікальним в даному наборі посилань
    return <Contact key={contact} href={contact} />;
  };

  render() {
    const { firstName, lastName, contacts } = this.props.user;
    const { profilePicture, isErrorPicture } = this.state;

    return (
      <li>
        <article className={styles.userCard}>
          <div className={styles.imageWrapper}>
            {/* Умовний рендеринг в залежності від того, чи є помилка завантаження, чи ні */}
            {!isErrorPicture ? (
              <img
                src={profilePicture}
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
    );
  }
}

export default UserListItem;
