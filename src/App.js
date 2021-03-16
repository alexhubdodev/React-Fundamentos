import React from 'react';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Routers from './router';

export default (props) =>(
    <React.StrictMode>
    <Header />
    <Routers />
    <Footer />
  </React.StrictMode>
);
