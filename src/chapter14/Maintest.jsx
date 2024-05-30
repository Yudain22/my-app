import React from "react";
import ThemeTest from "./ThemeTest";

const ThemeContext=React.createContext('dark');
function Maintest(props) {
  return (
    <div>
      <p>안녕하세요 테마변경</p>
      {/* <ThemeTest text="dark" /> */}
      <ThemeContext.Provider value="dark">
        <ThemeTest />
      </ThemeContext.Provider>
    </div>
  );
}

export default Maintest;