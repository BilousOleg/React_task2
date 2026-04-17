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

  setErrorPicture = () => {
    this.setState({ isErrorPicture: true });
  };

  mapContacts = (contact, contactsMap) => {
    return (
      <Contact
        key={contact}
        href={contact}
        service={contactsMap.get(contact)}
      />
    );
  };

  render() {
    const { firstName, lastName, contacts, profilePicture, contactsMap } =
      this.props.user;
    const { isErrorPicture } = this.state;

    return (
      firstName &&
      lastName && (
        <li>
          <article className={styles.userCard}>
            <div className={styles.imageWrapper}>
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
                {contacts.map((contact) => {
                  this.mapContacts(contact, contactsMap);
                })}
              </ul>
            </section>
          </article>
        </li>
      )
    );
  }
}

export default UserListItem;
