import './App.css';
import {Badge, Button, Navbar} from 'react-bootstrap';
import logo from "./Assests/logo.png"
import Home from './Components/Home';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import {Routes,Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProductGallery from './Components/ProductGallery';
import ProductDetails from './Components/ProductDetails';
import Cart from './Components/Cart';
import CheckOut from './Components/CheckOut';

function App() {
  const navigate = useNavigate();
  const [user,setUser] = useState('');
  const[cartItems,setCardItems]=useState({});

  useEffect(()=>{
  const userEmail=localStorage.getItem('userEmail');
  if(userEmail){
    setUser(userEmail);
  }
    },[]);
    const handleAddToCart = (item) =>{
      setCardItems({...cartItems,...item})
    }

  return (
    <div>
      <Navbar className='instabuy-navbar'>
        <Navbar.Brand onClick={()=>navigate('/')}>
        <img alt='' src={logo}  width={30} height={30} className='d-inline-block align-top'/>
        {''}
        InstaBuy!
        </Navbar.Brand>
          <Navbar.Collapse className='justify-content-end'>
            {user && <Button onClick={()=>navigate('/cart')}>Cart &nbsp; {Object.keys(cartItems).length > 0 && ( <Badge bg='sucess'>{Object.keys(cartItems).length}</Badge>)}</Button>}
              &nbsp;&nbsp;&nbsp;
            <Button onClick={()=>navigate('/Login')}>{user ? 'Logout' :'Login'}</Button>
          </Navbar.Collapse>
      </Navbar>
      <Routes>
        <Route path='/' element={<Home user={user}/>}/>
        <Route path='/Login' element={<Login setUser={setUser}/>}/>
        <Route path='/SignUp' element={<SignUp setUser={setUser}/>}/>
        <Route path='/Product' element ={<ProductGallery/>} />
         <Route path='/Product/:id' element ={<ProductDetails handleAddToCart={handleAddToCart}cartItems={cartItems}/>} />
         <Route path='/cart' element={<Cart cartItems={cartItems}/>}/>
         <Route path='checkout' element={<CheckOut/>}/>

      </Routes>
     {/* <Home/> */}
      
    </div>
  );
}

export default App;
