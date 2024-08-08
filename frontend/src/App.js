import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Home from './pages/Home';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
    <ToastContainer position="top-center"/>
    <Outlet/>
    </>
  );
}

export default App;
