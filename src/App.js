// import logo from "./logo.svg";
import "./App.css";
import MyFirst from "./NewWeb/FirstLesson.jsx";
import Logo from "./NewWeb/Logo.js";
import Sections from "./NewWeb/Sections.jsx";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <p style={{backgroundColor:"red"}}>something</p> */}

      <header>
        <Logo />
        <MyFirst />
      </header>

      <main>
        <nav className="inform"></nav>        
       <Sections />
        <nav className="inform"></nav>
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
