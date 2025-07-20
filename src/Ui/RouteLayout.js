import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const RouteLayout = () => (
  <div>
    <Header />
    <Outlet /> {/* renders the matched route component here */}
    <Footer />
  
  </div>
);

export default RouteLayout;
