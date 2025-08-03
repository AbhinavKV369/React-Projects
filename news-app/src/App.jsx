import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Newsboard from './components/Newsboard'

const App = () => {

  const [category, setCategory] = useState("general");
  console.log(category)

  return (
    <div>
      <Navbar setCategory={setCategory} />
      <Newsboard category={category}/>
    </div>
  )
}

export default App