import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';

function App() {
  const[initialData, setInitialData] = useState([{}])
  useEffect(()=>{
    fetch('/api').then(
      response => response.json()
      ).then(data => setInitialData(data))

  }, []);
  return (
    <div className="App">
      <h1>{initialData.title}</h1>
      <Button>hello</Button>
      <Button class='btn-primary btn ms-3'>Submit</Button>
      <Button class='btn-success btn ms-3'>Submit</Button>
      <Button class='btn-danger btn ms-3'>Submit</Button>

    </div>
  );
}

export default App;
