import React from "react";
import { AppProvider } from "./components/provider/App-Provider";
import Mui_Mode from "./components/mui/Mui_Mode";
// import Application from "./components/appliocation/Application";
// import Skills from "./components/skills/Skills";
// import Count from "./components/count/Count";
// import "./App.css";
function App() {
  return (
    <div className="App">
      {/* <Application /> */}
      {/* <Skills skills={["HTML", "CSS"]} /> */}

      {/* <Count /> */}

      <AppProvider>
        <Mui_Mode />
      </AppProvider>
    </div>
  );
}

export default App;
