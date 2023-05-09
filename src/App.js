import { useState } from "react";
import "./App.css";
import { AppBridge } from "./PhaserApp/AppBridge";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HighScoreBoard from "./components/HighScoreBoard";
import ScoreBoard from "./components/ScoreBoard";
import Scores from "./components/Scores";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div id="App" className="App">
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      {isLoggedIn && <AppBridge width={1350} height={750} />}
      <HighScoreBoard />
      <ScoreBoard />
      <About />
      <Footer />
    </div>
  );
}

export default App;
