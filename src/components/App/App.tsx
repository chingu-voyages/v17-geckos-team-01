import * as React from 'react';
import './App.css';

// PropTypes can be setup as Interfaces
// interface NameProps {
//   name?: string;
// }

// interface LogoProps {
//   url?: string;
// }

// `type` seems to be better for props and state however

type LogoProps = {
  url?: string;
};

type NameProps = {
  name?: string;
};


/*
 url and name are given a default prop here as a default function parameter
 instead of defining `defaultProps`
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters
*/
const Logo: React.SFC<LogoProps> = ({ url = '/logo512.png' }) => (
  <img className="App-logo" alt="logo" src={url} />
);

const Name: React.SFC<NameProps> = ({ name = 'React Developer' }) => (
  <p>
    <strong>{name}</strong>
  </p>
);

const App: React.SFC = () => (
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
