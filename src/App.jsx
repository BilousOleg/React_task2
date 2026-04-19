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
      users: this.prepareUsers(usersArray),
    };
  }

  // Метод для перероблення contacts з урахуванням необхідних властивостей,
  // які повинні мати об'єкти юзерів, щоб вони були відрендерені
  // можна винести в окрему функцію, але в цьому не впевнений
  prepareUsers = (usersArray) =>
    // Повертаємо результат reduce
    usersArray.reduce((acc, user) => {
      // Якщо є необхідні властивості (вказано хоча б ім'я та прізвище), об'єкт буде додано
      if (user.firstName && user.lastName) {
        // Додаємо об'єкт до масиву
        acc.push({
          ...user,
          contacts: user.contacts.map((url) => ({
            url,
            service: getService(url),
          })),
        });
      }
      // Повертаємо акумулятор (масив об'єктів)
      return acc;
    }, []);

  render() {
    return <UserList usersArray={this.state.users} />;
  }
}

export default App;
