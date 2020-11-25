/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useState, useEffect } from 'react';
import Navbar from 'containers/base/Navbar';
import Carousel from 'containers/base/Carousel';
import GameList from 'containers/base/GameList';
import Middlebar from 'containers/base/Middlebar';
import CareerSection from 'containers/base/CareerSection';
import Footer from 'containers/base/Footer';

const Assignmet = () => {
  return (
    <Fragment>
      <Navbar />
      <Carousel />
      <GameList />
      <Middlebar />
      <CareerSection />
      <Footer />
    </Fragment>
  );
};

export default Assignmet;
