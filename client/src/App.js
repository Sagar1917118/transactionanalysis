
import './App.css';
import Login from "./Components/Login"
import Dashboard from './Components/Dashboard';
import {Route,Routes} from "react-router-dom"
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
      </Routes>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
