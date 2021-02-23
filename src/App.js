import logo from './1280px-GameStop.png';
import Sheet from './Sheet.js';
import './App.css';

function App() {
  return (
    <html>
      <body>
        <header>
          <img src={logo} className="mainLogo" alt="Gamestop Finance logo"></img>
        </header>
        <div className="container">
          <Sheet sheetType="dashboard"/>
        </div>
      </body>
    </html>
  );
}

export default App;
