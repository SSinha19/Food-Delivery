import logo from './logo.svg';
import './App.css';
import Home from './screens/Home';
import{
  BrowserRouter as Router,
  Routes,
  Route
  
}from 'react-router-dom';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Login from './screens/login';
import Signup from './screens/Signup';
import { CartProvider } from './components/ContextReducer';
import Cart from './screens/Cart';
function App() {
  return (
    <CartProvider>
    <Router>
      <div> 
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/createuser" element={<Signup/>}></Route>
        </Routes>
      </div>
    </Router>
    </CartProvider>
    
  );
}

export default App;
