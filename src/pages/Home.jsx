import React,{useEffect,useState} from 'react';

import {motion} from "framer-motion"

import Helmet from '../components/Helmet/Helmet'
import { Container,Row,Col } from 'reactstrap';
import "../styles/Home.css"
import ProductList from '../UI/ProductList';
import products from '../assets/data/products'

import heroImg from '../assets/images/hero-img.png'
import { Link } from 'react-router-dom';
import Service from '../services/Service';
import counterImg from '../assets/images/counter-timer-img.png'
import Clock from '../UI/Clock';

const Home = () => {
    const [trendingProducts,setTrendingProducts]= useState([])
    const [bestSalesProducts,setBestSalesProducts]= useState([])
    
    const[mobileProducts,setMobileProducts]=useState([])
    
    const[wirelessProducts,setWirelessProducts]=useState([])

    


    const year=new Date().getFullYear()


    useEffect(()=>{
        const filteredTrendingProducts =products.filter((item) => item.category === "chair");

        const filteredBestSalesProducts =products.filter((item) => item.category === "sofa");

        const filteredMobileProducts =products.filter((item) => item.category === "mobile");

        const filteredWirelessProducts =products.filter((item) => item.category === "wireless");

        


        setTrendingProducts(filteredTrendingProducts);
        setBestSalesProducts(filteredBestSalesProducts);

        setMobileProducts(filteredMobileProducts);
        setWirelessProducts(filteredWirelessProducts)


    },[]);


    return (
        
       <Helmet title={"Home"} >
        
        <section className="hero_section">

            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <div className="hero_content">
                          <p className="hero_subtitle">
                            Trending products in {year}
                          </p>
                          <h2>Make Your Interior More Minimalistic & Mordern</h2>
                          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi provident, saepe atque sequi, dignissimos quaerat qui error laudantium possimus minima ex labore vel officia illo consequatur obcaecati aspernatur est hic.</p>
                          <motion.button whileTap={{scale: 1.2}} className="buy_btn"><Link to='/shop'>SHOP NOW</Link></motion.button>
                        </div>

                    </Col>
                    <Col lg='6' md='6'>
                        <motion.div whileHover={{scale: 1.1}} className="hero_img">

                            <img src={heroImg} alt="" />

                        </motion.div>
                    
                    </Col>
                </Row>
            </Container>
        </section>
        <section className='service'><Service></Service></section>
        
        <section className="trending_products">
            <Container>
                <Row>
                    <Col lg="12"className="text-center">
                        <h2 className="section_title">
                        Trending products    
                        </h2>
                    </Col>
                    <ProductList data={trendingProducts}/>
                </Row>
            </Container>
        </section>
        <section className="best_sales">
            <Container>
            <Row>
                    <Col lg="12"className="text-center">
                        <h2 className="section_titleNew">
                         Best Sales  
                        </h2>
                    </Col>

                    <ProductList data={bestSalesProducts}/>
                    
                </Row>
            </Container>
        </section>
        <section className="timer_count">
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <div className="clock_top_content">
                            <h4 className="text-white fs-6 mb-2">Limited Offer</h4>
                            <h3 className="text-white fs-5 mb-3">Quality Arm Chair</h3>
                        </div>
                     <Clock/>
                     <motion.button whileTap={{scale: 1.2}} className="buy-btn store_btn">
                        <Link to="/shop">Visit Store</Link>
                     </motion.button>
                    </Col>
                    <Col lg='6' md='6' className='text-end'>
                        <img src={counterImg} alt="" />
                    </Col>
                </Row>
            </Container>
        </section>


        <div className="new-arrovals">
            <Container>
                <Row>
                    <Col lg="12" className="text-center">
                        <h2 className="section_title">New Arrivals</h2>
                    </Col>
                   <ProductList data={mobileProducts}/>
                   <ProductList data={wirelessProducts}/>
                    
                </Row>
            </Container>
        </div>
      
       </Helmet>
    );
};

export default Home;

