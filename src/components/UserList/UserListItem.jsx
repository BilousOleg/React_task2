import { Component } from 'react';
import styles from './UserList.module.css';
import anonymPicture from './anonymPicture.png';
import Contact from '../Contact';

class UserListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isErrorPicture: false,
    };
  }

  // Логіка зміни стану наявності помилки
  setErrorPicture = () => {
    this.setState({ isErrorPicture: true });
  };

  render() {
    const { firstName, lastName, contacts, profilePicture } = this.props.user;
    const { isErrorPicture } = this.state;

    return (
      // Логіка умовного рендеру - необхідна
      firstName &&
      lastName && (
        <li>
          <article className={styles.userCard}>
            <div className={styles.imageWrapper}>
              {/* Знову логіка умовного рендеру - необхнідна */}
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
            <section className={styles.infoSection}>
              <h3 className={styles.userName}>
                {firstName} {lastName}
              </h3>
              <ul className={styles.contactsList}>
                {/* Логіка мапінгу контактів - необхідна, адже треба відображати масив елементів */}
                {/* Була перероблена у зв'язку зі змінами в App */}
                {contacts.map(({ url, service }) => (
                  <Contact key={url} href={url} service={service} />
                ))}
              </ul>
            </section>
          </article>
        </li>
      )
    );
  }
}

export default UserListItem;
