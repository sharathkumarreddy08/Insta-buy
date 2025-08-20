import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import {  useNavigate } from 'react-router-dom';



export default function ProductGallery(){
    const navigate =useNavigate();
    const[products,setProducts] = useState([]);
    useEffect( () =>{
   async function getProducts() {
    const response = await axios.get('https://api.escuelajs.co/api/v1/products?offset=0&limit=20')
    setProducts(response.data);
   }
   getProducts();
    },[])
    return(
        <div style={{padding:50}}>
         <h3>select a product</h3>
         <div style={{display:'flex',flexWrap:'wrap'}}>
            {products.map((product) =>{
                return(
                    <Card key={product.id} style={{width:'18rem', border:'none',margin:20}}>
                        <Card.Img src={product.images[0]} />
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>$ {product.price}</Card.Text>
                        <Button onClick={()=>navigate(`/Product/${product.id}`,{state:product})} style={{width:120}}>view item</Button>
                    </Card>
                )
            })}
         </div>

        </div>
    )

}