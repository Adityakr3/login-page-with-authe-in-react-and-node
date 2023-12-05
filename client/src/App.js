import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import  Login from './pages/Login'
import DashBoard from './pages/DashBoard';
import Register from './pages/Register'; 
import Error from './pages/Error';
function App() {
  return (
    <div className="App">
     <Routes>
       <Route path='/' element={<Login/>}/>
       <Route path='/dashboard' element={<DashBoard/>}/>
       <Route path='*' element={<Error/>}/>
       <Route path='/register' element={<Register/>} />
     </Routes>
    </div>
  );
}

export default App;
