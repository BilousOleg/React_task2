import './App.css';
import usersArray from './data';
import UserList from './components/UserList';

function App() {
  return (
    <>
      <UserList usersArray={usersArray} />
    </>
  );
}

export default App;
