import axios from "axios";
import { useEffect, useState } from "react";

import { Button, Card, Col, Row } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom"


export default function ProductDetails({cartItems,handleAddToCart}){
    const navigate =useNavigate();
    const location = useLocation();
    const {title,price,images,description,category,id}=location.state;

    const[otherProducts,setOtherProducts] = useState([]);
    useEffect(()=>{
        async function getData(){
            const response = await axios.get(`https://api.escuelajs.co/api/v1/categories/${category.id || 1}/products?limit=20&offset=0`)
            setOtherProducts(response.data);
  
        } 
        getData();
    },[category.id])
    return(
        <div style={{padding:50}}>
        <Row>
            <Col lg={2}>
            <div>
                {images.map(image =>{
                    return(
                        <img src={image} alt='' width={150} style={{marginBottom:20,borderRadius:8}}/>
                    )
                })}
            </div>
            </Col>
            <Col lg={4}>
            <div>
                <img src={images[0]} alt='' width={350} style={{marginBottom:20,borderRadius:8}} />
                <h4>{title}</h4>
                <div style={{color:'#216ad9'}}> $ {price}</div>
                <div>{description}</div>
                <Button style={{marginTop:30}}  onClick={()=>{
                    if (id in cartItems){
                        const currentItem = cartItems[id];
                        handleAddToCart({[id]:{title,price,quantity:currentItem.quantity + 1}})
                    }  else{
                        handleAddToCart({[id]:{title,price,quantity:1}})
                    }
                    //navigate('/cart')
                }}>Add to cart</Button>
            </div>
            </Col>

            <Col>
            <div style={{display:'flex',flexWrap:'wrap'}}>
                <h2>other product in same category</h2>
            {otherProducts.map((product)=>{
                if(product.id === id)return
                 return(
                    <Card key={product.id} style={{width:'7rem', border:'none',margin:20}}>
                        <Card.Img src={product.images[0]} />
                        <Card.Title>{product.title.split(" ")[0]}</Card.Title>
                        <Card.Text>$ {product.price}</Card.Text>
                        <Button onClick={()=>navigate(`/Product/${product.id}`,{state:product})} style={{width:120}}>view item</Button>
                    </Card>
                )
            })}
            </div>
            </Col>
        </Row>
        </div>
    )
}