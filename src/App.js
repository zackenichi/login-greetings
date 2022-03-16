import background from './assets/bg2.png';
import Greeting from './components/molecules/Greeting.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={background} alt="logo" className="bg-image" />
      </header>
      <Greeting />
    </div>
  );
}

export default App;
