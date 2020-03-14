import * as React from 'react';
import './App.css';

interface NameProps {
  name?: string;
}

interface LogoProps {
  url?: string;
}

const Logo: React.SFC<LogoProps> = ({ url = '/logo512.png' }) => (
  <img className="App-logo" alt="logo" src={url} />
);

const Name: React.SFC<NameProps> = ({ name = 'React Developer' }) => (
  <p>
    <strong>{name}</strong>
  </p>
);

export const App: React.SFC = () => (
  <div className="App">
    <header className="App-header">
      <Logo />
      Hello, my name is
      <Name />
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);

export default App;
