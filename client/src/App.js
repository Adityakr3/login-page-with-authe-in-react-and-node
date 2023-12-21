import "./App.css";
import { Route, Routes } from "react-router-dom";
import { UserName } from "./pages/UserName";
import DashBoard from "./pages/DashBoard";
import { Register } from "./pages/Register";
import {Recovery} from "./pages/Recovery";
import { Reset } from "./pages/Reset";
import PageNotFound from "./pages/PageNotFound";
import {Password} from "./pages/Password";
import { Header } from "./components/Header";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserName/>} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/pagenotfound" element={<PageNotFound />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recovery" element={<Recovery />}></Route>
        <Route path="/Reset" element={<Reset />}></Route>
        <Route path="/password" element={<Password />}></Route>
      </Routes>
    </div>
  );
}

export default App;




