import logo from '../logo.svg';

export default function About(){
    return <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Ini About
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>
}