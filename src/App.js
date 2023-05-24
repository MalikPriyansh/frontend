import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/homescreen';
import Register from './screens/register';
import Login from './screens/login';

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login></Login>} />
            <Route path='/home'exact element={<HomeScreen></HomeScreen>} />
            <Route path='/register' element={<Register></Register>} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
