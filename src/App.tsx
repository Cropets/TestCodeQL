import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  function vulnerableFunction(userInput: string) {
    eval(userInput);
}

let userInput = "alert('Hello, world!');";

vulnerableFunction(userInput);

function filterScript(html) {
  var scriptRegex = /<script\b[^>]*>([\s\S]*?)<\/script>/gi;
  var match;
  while ((match = scriptRegex.exec(html)) !== null) {
      html = html.replace(match[0], match[1]);
  }
  return html;
}

useEffect( () => {
  filterScript("<script>")
}, []);

return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
