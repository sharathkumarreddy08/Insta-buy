import { Row,Col,Form,Button } from 'react-bootstrap';
import SignUpImg from '../Assests/SignUpImg.png';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useState } from 'react';

function SignUp({setUser}){
     const[email,setEmail] = useState('');
    const navigate=useNavigate('');
    return(
       <div style={{backgroundColor:'#216ad9'}}>
        <Row>
            <Col style={{padding:100}}>
            
            <h2 style={{color:'white'}}>InstaBug!</h2>
            <h3 style={{color:'white'}}>one place for all your needs</h3>
              <Form>
                <div style={{ width:'70%',display:'flex', justifyContent:'space-between'}}>
      <Form.Group style={{width:'49%'}} className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" onChange={(e)=>setEmail(e.currentTarget.value)} placeholder="Enter email" />
      </Form.Group>

      <Form.Group style={{width:'49%'}} className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      </div>
         
      <Form.Group style={{width:'70%'}} className="mb-3" controlId="formBasicPassword">
        <Form.Control type="text" placeholder="Enter full name" />
      </Form.Group>
      
       <Button 
       onClick={()=>{
        localStorage.setItem('userEmail',email);
        setUser(email);
        navigate('/');
       }}
        style={{width:'70%', marginBottom:20,backgroundColor:'#216ad9',borderWidth:1,borderColor:'white'}} variant="primary" type="submit">
        Join the club 
      </Button>
        <div style={{color:'white'}}>
              Already a member? <Link to="/Login" style={{ color: 'white' }}>click here</Link>        </div>
      </Form>
            </Col>
            <Col>
            <img src={SignUpImg} style={{height:'80vh'}} alt=''/>
            </Col>
        </Row>
       </div>
    )

}
export default SignUp;