import React, { useState } from 'react'
import Background from "./components/Background/Background"
import Navbar from './components/Navbar/Navbar';
import Hero from "./components/Hero/Hero"
const App = () => {

  let heroData = [
    { text1: "Drive in", text2: "extreme safe and comfort" },
    { text1: "Drive in", text2: "your style" },
    { text1: "We consider", text2: "you" },
  ];
  
  const [heroCount,setHeroCount] = useState(1);
  const [playStatus,setPlaystatus] = useState(false); 
  return (
    <div>
      <Background heroCount={heroCount} playStatus={playStatus} />
      <Navbar />
      <Hero
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
        setPlaystatus={setPlaystatus}
      />
    </div>
  );
}

export default App