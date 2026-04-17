import styles from './UserList.module.css';
import UserListItem from './UserListItem';

// Переробив компонент на функціональний, адже все одно не користуюся його станом
function UserList({ usersArray }) {
  return (
    <ul className={styles.userList}>
      {usersArray.map((u) => (
        <UserListItem key={u.id} user={u} />
      ))}
    </ul>
  );
}

export default UserList;
