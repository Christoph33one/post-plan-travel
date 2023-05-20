import React from 'react';
import HeroImageComponent from '../../components/HeroImage';
import { Container, Button } from 'react-bootstrap';
import styles from '../../styles/HomePage.module.css'


const HomePage = () => {
  const categories = [
    { title: 'Car Rental', link:
     'https://www.rentalcars.com/?affiliateCode=google_brand&preflang=en&label=rentalcars.com-brand-QMBxf9tHoSbRGoWKQmhm3gS282611385565&ws=&ppc_placement=&ppc_target=&ppc_param1=&ppc_param2=&aceid=&adposition=&ppc_network=g&feeditemid=&ppc_targetid=kwd-29977620&loc_physical_ms=1010561&loc_interest_ms=&ppc_device=c&ppc_devicemodel=&gclid=CjwKCAjw36GjBhAkEiwAKwIWyWcxVJ3HYNlOnshdMW4leffRVdyxHQauQib7e6KGuNgV3POmpbpQtxoCQEAQAvD_BwE' },
    { title: 'Flights', link: 'https://www.skyscanner.net/' },
    { title: 'Safety', link: 'https://www.betterhealth.vic.gov.au/health/healthyliving/travel-safety-tips' },
    { title: 'Tech', link: 'https://www.travelandleisure.com/travel-tips/cool-gadgets/essential-travel-tech-gear' },
    { title: 'Equipment', link: 'https://www.tradeinn.com/trekkinn/en' },
  ];



  return (
    <div>
       <h1>POST, PLAN & TRAVEL</h1>
       <Container>
      <div className={styles.boxContainer}>
        {categories.map((category, index) => (
          <div className={styles.box} key={index}>
            <i className="fas fa-map"></i>
            <a href={category.link} target="_blank">{category.title}</a>
          </div>
        ))}
      </div>
      
    </Container>
      <HeroImageComponent />
      <Container fluid>
        <h3>
          Welcome to Post, Plan & Travel! 
          Get ready for an exhilarating adventure as we take you on a whirlwind tour of the world. 
          Explore a treasure trove of travel plans crafted by passionate globetrotters. 
          Join our vibrant community and let your wanderlust ignite. Embark on a journey of limitless
          possibilities and create extraordinary memories. Unleash the explorer within you and indulge
          in the joy of travel!
        </h3>
      </Container>
     
    </div>
    
  );
};

export default HomePage;





