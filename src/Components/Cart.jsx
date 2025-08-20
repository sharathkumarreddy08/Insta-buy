import { Row,Col, Button } from "react-bootstrap"
import {Table} from 'react-bootstrap';
import cartImage from '../Assests/cartImage.png';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Cart({cartItems}){
    const navigate =useNavigate();
    const[totalPrice,setTotalPrice]=useState(0);
    const[totalQuantity,setTotalQuantity]=useState(0);

    useEffect(() =>{
      let tempPrice = 0;
      let tempQuantity = 0;
      Object.keys(cartItems).forEach((cartItemId) =>{
        const details = cartItems[cartItemId];
        tempQuantity += details.quantity;
        tempPrice += details.quantity * details.price
      });
      setTotalQuantity(tempQuantity);
      setTotalPrice(tempPrice);
    },[cartItems])
    return(
        <div style={{margin:60}}>
            <Row>
                <Col>
                   <h3>your cart:</h3>
                   <div>
                   <Table style={{marginTop:20}}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>price</th>
                        </tr>
                    </thead>
                    <tbody>
                      {Object.keys(cartItems).map((cartItemId)=>{
                        const itemDetails = cartItems[cartItemId]
                        return(
                            <tr>
                                <td>{itemDetails.title}</td>
                                <td>{itemDetails.quantity}</td>
                                <td>{itemDetails.quantity * itemDetails.price}</td>
                            </tr>
                        )
                      })}
                      <tr>
                        <td>Total</td>
                        <td>{totalQuantity}</td>
                        <td>{totalPrice}</td>
                      </tr>
                    </tbody>
                   </Table>
                   </div>
                   <Button onClick={()=> navigate('/CheckOut')}>checkout</Button>
                </Col>

                <Col>
                <img src={cartImage} alt="" height={500}/>
                </Col>
            </Row>
        </div>
    )
}