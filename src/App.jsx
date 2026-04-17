import { Component } from 'react';
import './App.css';
import usersArray from './data';
import UserList from './components/UserList';

// По-суті переніс getService з Contact сюди
function getKeyFromUrl(url) {
  if (url.includes('facebook')) return 'facebook';
  if (url.includes('twitter')) return 'twitter';
  if (url.includes('instagram')) return 'instagram';
  return 'default';
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: usersArray.map(this.mapUsers),
    };
  }

  // Метод для додавання мапи ('посилання контакту': 'рядок-ідентифікатор контакту'))
  mapUsers(user) {
    const contactsMap = new Map();

    for (const url of user.contacts) {
      const keyWord = getKeyFromUrl(url);
      contactsMap.set(url, keyWord);
    }

    return { ...user, contactsMap: contactsMap };
  }

  render() {
    return (
      <>
        <UserList usersArray={this.state.users} />
      </>
    );
  }
}

export default App;
