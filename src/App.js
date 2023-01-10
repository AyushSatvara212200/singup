import './App.css';
import Signup from './signup'
import Login from './login';
import { Route, Routes } from 'react-router';
import Home from './homepage'

function App() {
 

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    
    </>
  );
}

export default App;
