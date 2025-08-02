import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate();
  return (
    <div >
      <h1>404 - Page not found</h1>
      <br />    
        <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default NotFound