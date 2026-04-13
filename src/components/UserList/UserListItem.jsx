import React from 'react';
import styles from './UserList.module.css';
import Contact from '../Contact';

function UsersListItem(props) {
  const { firstName, lastName, profilePicture, contacts } = props.user;

  return (
    <li>
      <article className={styles.userCard}>
        <div className={styles.imageWrapper}>
          <img src={profilePicture} alt={`${firstName} ${lastName}`} />
        </div>
        <div className={styles.infoSection}>
          <div className={styles.userName}>
            {firstName} {lastName}
          </div>
          <ul className={styles.contactsList}>
            {contacts.map((contact, index) => {
              // Тут вирішив зробити key у вигляді конкатенації contact й index,
              // адже вони в сумі дають наближене до унікального значення (рядок). Інших варіантів не побачив
              return <Contact key={contact + index} href={contact} />;
            })}
          </ul>
        </div>
      </article>
    </li>
  );
}

export default UsersListItem;
