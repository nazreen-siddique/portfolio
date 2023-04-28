import Portfolio from "./components/portfolio/Portfolio";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import './app.scss'
import { useState } from "react";
import Menu from "./menu/Menu";
import Expertise from "./components/Expertise/Expertise";

function App() {
  const [menuOpen ,setMenuOpen] = useState(false)
  return (
    <div className="app">                             
    <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <div className="sections">
      <Intro />
      <Portfolio  />
      <Expertise/>
      <Works  />
      <Contact/>

    </div>


    </div>
  );
}

export default App;
