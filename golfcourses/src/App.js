import logo from './oof.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Your local golf buddy! 
        </p>
        <a
          className="App-link"
          href="https://www.golfnow.com/tee-times/hot-deals#promotedcampaignsonly=false&timemax=42&timemin=10&hotdealsonly=true&date=Jun+23+2023"
          target="_blank"
          rel="noopener noreferrer"
        >
          Golf Now
        </a>
        <br></br>
        <a
          className="App-link"
          href="https://www.golfnow.com/tee-times/hot-deals#promotedcampaignsonly=false&timemax=42&timemin=10&hotdealsonly=true&date=Jun+23+2023"
          target="_blank"
          rel="noopener noreferrer"
        >
         Search for local courses.
        </a>
      </header>
    </div>
  );
}

export default App;
