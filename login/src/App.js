import './App.css';
import Login from './components/Login';
import UserProvider from './components/Autentificar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserProvider>
          <Login />
        </UserProvider>
      </header>
    </div>
  );
}

export default App;