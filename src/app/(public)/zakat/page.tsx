import React from 'react';
import ZakatHero from './components/ZakatHero';
import TypesOfZakat from './components/TypesOfZakat';
import SAFZakatHandling from './components/SAFZakatHandling';
import ZakatForm from './components/ZakatForm';

const page = () => {
  return (
    <>
      <ZakatHero />
      <TypesOfZakat />
      <ZakatForm />
    </>
  );
};

export default page;
