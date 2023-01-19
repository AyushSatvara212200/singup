import './App.css';
import Signup from './signup'
import Login from './login';
import { Route, Routes } from 'react-router';
import Home from './homepage'
import Mainpage from './mainpage';
import { useState } from 'react';

function App() {

  const [userLogin , setUserLogin] = useState({});

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login setUserLogin={setUserLogin}/>} />
        <Route path='/mainpage' element={userLogin && userLogin._id ? <Mainpage /> : <Login setUserLogin={setUserLogin}/>} />
      </Routes>

    </>
  );
}

export default App;
