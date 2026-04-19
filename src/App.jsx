import { Component } from 'react';
import './App.css';
import usersArray from './data';
import UserList from './components/UserList';

// Функція отримання ідентифікатора посилання - необхідна (Хоча може бути винесена в окремий файл)
function getService(url) {
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

  // Логіка мапінгу списку - основна. Тут, у user.contacts, елементи-рядки з посиланнями
  // перероблюються на об'єкти, щоб прибрати зайві витяги з мапи, яка була до цього, в наступних компонентах
  mapUsers(user) {
    return {
      ...user,
      contacts: user.contacts.map((url) => ({
        url,
        service: getService(url),
      })),
    };
  }

  render() {
    return <UserList usersArray={this.state.users} />;
  }
}

export default App;
