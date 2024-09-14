
import React from 'react';
import { DarkModeProvider } from './DarkModeContext';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Popular from '../sections/Popular';
import Services from '../sections/Services';
import Clients from '../sections/Clients';
import Footer from './Footer';

export default function Homepage() {
  return (
    
      <DarkModeProvider>
      <div className="w-full min-h-screen bg-white dark:bg-gray-900">
        <Hero />        {/* Hero Section */}
        <About />       {/* About Section */}
        <Popular />     {/* Popular Section */}
        <Services />    {/* Services Section */}
        <Clients /> 
        <Footer />    {/* Clients Section */}
      </div>

    </DarkModeProvider>
    
  )
}
