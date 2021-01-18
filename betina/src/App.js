import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';
import HomepageImage from './components/HomepageImage'

function App() {
  return (
    <div className="App">
      <header className="App-header">
	    <HomepageImage />
        <p>
          Welcome to Alice, your new best friend.
        </p>
      </header>
      <body>
        <h2>The Components way</h2>
        <Login />
        <br />
        <Logout />
      </body>
    </div>
  );
}

export default App;
