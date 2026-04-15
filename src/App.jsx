import { Component } from 'react';
import './App.css';
import usersArray from './data';
import UserList from './components/UserList';

// Переписав на класовий компонент для можливості змінити стан і перевірити
// прокидання пропсів у залежних компонентах і, відповідно, їх ререндер
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: usersArray,
    };
  }

  // Суто перевірочний метод, який змінює стан усіх елементів
  // масиву і, відповідно, задає  його компонентів-елементів
  // changeProps = () => {
  //   const { users } = this.state;
  //   const newUsers = users.map((u) => {
  //     u.profilePicture =
  //       'https://m.media-amazon.com/images/M/MV5BMTM3OTUwMDYwNl5BMl5BanBnXkFtZTcwNTUyNzc3Nw@@._V1_.jpg';
  //     return u;
  //   });
  //   this.setState({
  //     users: newUsers,
  //   });
  // };

  render() {
    return (
      <>
        {/* Кнопка для застосування перевірочного метода */}
        {/* <button onClick={this.changeProps}>Click me!</button> */}
        <UserList usersArray={usersArray} />
      </>
    );
  }
}

export default App;
