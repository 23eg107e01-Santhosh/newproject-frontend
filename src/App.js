import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Reg from './Reg';
import Home from './Home';

function App() {
  return (
    <>
      <h1>I am app</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/reg" element={<Reg/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
