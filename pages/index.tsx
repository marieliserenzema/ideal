import BlocImage from '@/components/BlocImage/BlocImage';
import Footer from '@/components/Footer/Footer';
import NavBar from '@/components/NavBar/Navbar';
import OurOffer from '@/components/OurOffer/OurOffer';
import OurReason from '@/components/OurReason/OurReason';
import Schedule from '@/components/Schedule/Schedule';
import SocialMedia from '@/components/SocialMedia/SocialMedia';
import React from 'react';

const Home = () => {
  return (
    <div>
      <NavBar />
      <BlocImage />
      <OurReason />
      <OurOffer />
      <Schedule />
      <SocialMedia />
      <Footer />
    </div>
  )
};

export default Home;
