import { Component } from 'react';
import styles from './UserList.module.css';
import UserListItem from './UserListItem';

class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: props.usersArray,
    };
  }

  mapUser = (u) => {
    return <UserListItem key={u.id} user={u}></UserListItem>;
  };

  render() {
    const { users } = this.state;
    return <ul className={styles.userList}>{users.map(this.mapUser)}</ul>;
  }
}

export default UserList;
