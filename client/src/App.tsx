import { useState, useEffect } from 'react'
import './App.css'
import LoginPage from './components/LoginPage/LoginPage';

function App() {
  const [backendData, setBackendData] = useState();

  useEffect(()=> {
    fetch("/api").then(
      response => response.json().then(
        data=> {
          setBackendData(data);
        }
      )
    )
  })
  return (
    <div>
      <LoginPage/>
    </div>
  )
}

export default App
