import './App.css';
import { Route, Routes } from 'react-router-dom';
import  { Login } from './pages/Login'
import DashBoard from './pages/DashBoard';
import { Register } from './pages/Register';
import Error from './pages/Error';
import { Otp } from './pages/Otp';
import { Header } from './components/Header';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
       <Route path='/' element={<Login/>}/>
       <Route path='/dashboard' element={<DashBoard/>}/>
       <Route path='*' element={<Error/>}/>
       <Route path='/register' element={<Register/>} />
       <Route path='/Otp' element={<Otp/>} />
     </Routes>
    </div>
  );
}

export default App;
