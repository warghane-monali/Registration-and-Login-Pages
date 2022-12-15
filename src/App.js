import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Registration from './Components/Registeration';
import Login from './Components/Login';
import Home from './Home';
import './App.css';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Register' element ={<Registration/>}/>
      <Route path='/login' element={<Login />}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
