import React from 'react';
import Hero from '../components/Hero';
import Advant from '../components/Advant';
import CategoryBlock from '../components/CategoryBlock';
import Conditions from '../components/Conditions';
import Contacts from '../components/Contacts';

const Home = () => {
  return (
    <main className="main">
      <Hero />
      <Advant />
      <CategoryBlock />
      <Conditions />
      <Contacts />
    </main>
  );
};

export default Home;
