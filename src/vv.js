import logo from './m.svg';
import mp3 from "./audio/s.mp3"
import './vv.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> 
          Весело <code>и</code> вкусно?
        </p>
        <div>
          <audio src={mp3} controls autoPlay loop/>
        </div>
        <a
          className="App-link"
          href="https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D1%88%D0%B8%D0%BD%D0%B3"
          target="_blank"
          rel="noopener noreferrer"
        >
          I'm lovin' it
        </a>
      </header>
    </div>
  );
}

export default App;
