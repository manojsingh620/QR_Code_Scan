import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Home from './pages/Home';


function App() {
  return (
    <>
    {/* <Home/> */}
    <Outlet/>
    </>
  );
}

export default App;
