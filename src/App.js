import logo from './logo.svg';
import './App.css';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import AddProduct from './components/AddProduct';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/addp" element={<AddProduct />}></Route>

      </Routes>
   

      </Router>
      
      
    </div>
  );
}

export default App;
