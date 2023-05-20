import React from 'react';
import { Container } from 'react-bootstrap';
import HeroImageComponent from '../../components/HeroImage';


const HomePage = () => {
  return (
    <div>
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





