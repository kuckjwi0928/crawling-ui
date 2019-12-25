import React from 'react';
import logo from './logo.svg';
import '~/App.css';
import styled from 'styled-components';

const Test = styled.div`
  display: flex;
  flex: 1;
`

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Test>
          aaaa
        </Test>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
    </div>
  );
}

export default App;