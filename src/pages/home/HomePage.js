import React from 'react';
import HeroImageComponent from '../../components/HeroImage';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styles from '../../styles/HomePage.module.css'
import CategoryIcon from '../../components/CategoryIcon';
import Jumbotron from 'react-bootstrap/Jumbotron'


const HomePage = () => {
  const categories = [
    { title: 'Rental', link:
     'https://www.rentalcars.com/?affiliateCode=google_brand&preflang=en&label=rentalcars.com-brand-QMBxf9tHoSbRGoWKQmhm3gS282611385565&ws=&ppc_placement=&ppc_target=&ppc_param1=&ppc_param2=&aceid=&adposition=&ppc_network=g&feeditemid=&ppc_targetid=kwd-29977620&loc_physical_ms=1010561&loc_interest_ms=&ppc_device=c&ppc_devicemodel=&gclid=CjwKCAjw36GjBhAkEiwAKwIWyWcxVJ3HYNlOnshdMW4leffRVdyxHQauQib7e6KGuNgV3POmpbpQtxoCQEAQAvD_BwE' },
    { title: 'Flights', link: 'https://www.skyscanner.net/' },
    { title: 'Safety', link: 'https://www.betterhealth.vic.gov.au/health/healthyliving/travel-safety-tips' },
    { title: 'Tech', link: 'https://www.travelandleisure.com/travel-tips/cool-gadgets/essential-travel-tech-gear' },
    { title: 'Equipment', link: 'https://www.tradeinn.com/trekkinn/en' },
  ];

  
return (
  <div>
      {/* <h1 className={styles.HomeTitle}>POST, PLAN & TRAVEL</h1>
      <Container>
      <div className={styles.boxContainer}>
        {categories.map((category, index) => (
          <div className={styles.box} key={index}>
            <CategoryIcon title={category.title} link={category.link} />
          </div>
        ))}
      </div>
      </Container>
      <HeroImageComponent />
      <Container className={styles.Container} fluid>
        <h2>
          Welcome to Post, Plan & Travel! Embark on a thrilling adventure and explore the world with us.
          Discover curated travel plans by passionate globetrotters. Join our vibrant community and ignite
          your wanderlust. 
        </h2>
      </Container> */}




      <Jumbotron className={styles.JumbotronContainer}>
      <h1 className={styles.HomeTitle}>POST, PLAN & TRAVEL</h1>
      <Container>
      <div className={styles.boxContainer}>
        {categories.map((category, index) => (
          <div className={styles.box} key={index}>
            <CategoryIcon title={category.title} link={category.link} />
          </div>
        ))}
      </div>
      </Container>
      <HeroImageComponent />
        <h4><strong>Join us!</strong></h4>
        <h5>At Post, Plan & Travel, we encourage you to sign up and become a part of our travel community.
            By creating a profile, you can showcase your travel experiences and share your captivating stories
            with fellow adventurers.
        </h5>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>

        <Container className={styles.donationsContainer}>
      <Row>
        <Col md={6}>
          <div className={styles.imageWrapper}>
            <img src="signup-logo.jpg" alt="Image" className={styles.image} />
          </div>
        </Col>
        <Col md={6} className={styles.content}>
        <h3><i className="fa-light fa-earth-americas"></i>Help us help the planet</h3>
          <h3>Help us help the planet</h3>
          <h4>Together, we’ve raised more than $10 million USD for World Central Kitchen’s
            emergency food relief efforts around the world. Donate to their Climate Disaster
            Fund and the Tripadvisor Foundation will match it.</h4>
          <Button variant="dark" 
          href="https://donate.wck.org/give/480256/#!/donation/checkout"
          target="_blank">DONATE</Button>
        </Col>
      </Row>
    </Container>
      </Jumbotron>



      {/* <Container className={styles.donationsContainer}>
      <Row>
        <Col md={6}>
          <div className={styles.imageWrapper}>
            <img src="signup-logo.jpg" alt="Image" className={styles.image} />
          </div>
        </Col>
        <Col md={6} className={styles.content}>
        <h3><i className="fa-light fa-earth-americas"></i>Help us help the planet</h3>
          <h3>Help us help the planet</h3>
          <h4>Together, we’ve raised more than $10 million USD for World Central Kitchen’s
            emergency food relief efforts around the world. Donate to their Climate Disaster
            Fund and the Tripadvisor Foundation will match it.</h4>
          <Button variant="dark" 
          href="https://donate.wck.org/give/480256/#!/donation/checkout"
          target="_blank">DONATE</Button>
        </Col>
      </Row>
    </Container> */}
  </div>
    
  );
};

export default HomePage;





