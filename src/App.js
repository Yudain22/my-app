import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Info from './chapter07/Info';

function App() {
  const [visible, setVisible]=useState(false);
  return (
    <div>
      <button onClick={()=> 
        setVisible(!visible)
      }>
      {visible ? "숨기기":"보이기"}
      </button>
      <hr />
      {visible && <Info/>}
      {/* visible이 True 이면 && <Info/>  if문이라고 생각하면 됨*/}
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
