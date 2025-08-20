import  Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel'  
import CarouselOneImg from '../Assests/CarouselOneImg.png';
import CarouselTwoImg from '../Assests/CarouselTwoImg.png';
import CarouselThreeImg from '../Assests/CarouselThreeImg.png';
import { Button } from 'react-bootstrap';
import CompanyOneImg from '../Assests/company-1.png';
import CompanyTwoImg from '../Assests/company-2.png';
import CompanyThreeImg from '../Assests/company-3.png';
import CompanyFourImg from '../Assests/company-4.png';
import CompanyFiveImg from '../Assests/company-5.png';
import CompanySixImg from '../Assests/company-6.png';
import { useNavigate } from 'react-router-dom';




function Home({user}){
    const navigate = useNavigate('');

    const handleCTAClick = () =>{
        if(user){
       navigate('/Product')
        }else{
            navigate('/Login')
        }
    }

    return(
        <div className='home-container'>
        <Carousel>
            <Carousel.Item>
                <Row>
            <Col>
            <div style={{padding:100}}>
            <h3 style={{fontWeight:700}}><i>SHOP WITH UTMOST</i></h3>
            <h2 style={{color:'#216ad9', fontWeight:700}}><i>STYLE</i></h2>
            <h6 style={{marginBottom:20}}>shop with latest trendy products</h6>
            <div style={{marginBottom:20}}>
            <Button style={{width:180}} onClick={handleCTAClick}>Browser Products</Button>
            </div>
            <div>
                <h6>products are available here:</h6>
                <img src={CompanyOneImg} style={{height:50}}/>
                <img src={CompanyTwoImg} style={{height:50}}/>
                 <img src={CompanyThreeImg} style={{height:50}}/>
                <img src={CompanyFourImg} style={{height:50}}/>
                <img src={CompanyFiveImg} style={{height:50}}/>
                <img src={CompanySixImg} style={{height:50}}/>
            </div>
           </div>
            </Col>
            <Col> <img src={CarouselOneImg} style={{height:'80vh' ,width:'45vw'}} />
            </Col>
                </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
            <Col>
             <div style={{padding:100}}>
            <h3 style={{fontWeight:700}}><i>SHOP WITH UTMOST</i></h3>
            <h2 style={{color:'#216ad9', fontWeight:700}}><i>STYLE</i></h2>
           <h6 style={{marginBottom:20}}>shop with latest trendy products</h6>
            <div style={{marginBottom:20}}>
            <Button style={{width:180}} onClick={handleCTAClick}>Browser Products</Button>
            </div>
            <div>
                <h6>products are available here:</h6>
                <img src={CompanyOneImg} style={{height:50}}/>
                <img src={CompanyTwoImg} style={{height:50}}/>
                 <img src={CompanyThreeImg} style={{height:50}}/>
                <img src={CompanyFourImg} style={{height:50}}/>
                <img src={CompanyFiveImg} style={{height:50}}/>
                <img src={CompanySixImg} style={{height:50}}/>
            </div>
           </div>
            </Col>
            <Col> <img src={CarouselTwoImg} style={{height:'80vh',width:'45vw'}} /></Col>
                    </Row>
                </Carousel.Item>
                 <Carousel.Item>
                <Row>
            <Col>
             <div style={{padding:100}}>
            <h3 style={{fontWeight:700}}><i>SHOP WITH UTMOST</i></h3>
            <h2 style={{color:'#216ad9', fontWeight:700}}><i>DISCOUNTS</i></h2>
            <h6 style={{marginBottom:20}}>shop with latest trendy products</h6>
            <div style={{marginBottom:20}}>
            <Button style={{width:180}} onClick={handleCTAClick}>Browser Products</Button>
            </div>
            <div>
                <h6>products are available here:</h6>
                <img src={CompanyOneImg} style={{height:50}}/>
                <img src={CompanyTwoImg} style={{height:50}}/>
                 <img src={CompanyThreeImg} style={{height:50}}/>
                <img src={CompanyFourImg} style={{height:50}}/>
                <img src={CompanyFiveImg} style={{height:50}}/>
                <img src={CompanySixImg} style={{height:50}}/>
            </div>
           </div>
            </Col>
            <Col> <img src={CarouselThreeImg} style={{height:'80vh',width:'45vw'}}/></Col>
                </Row>
                </Carousel.Item>
                
        </Carousel>
        </div>
    )
}
export default Home;