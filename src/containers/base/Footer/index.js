import React, { Fragment, useState, useEffect } from 'react';
import {
  Container,
  Wrapper,
  FooterSector,
  FooterLogoContainer,
  FooterLogo,
  FooterLinkWrapper,
  LinkItem,
  FooterMark,
  FooterBanner
} from './components';

const Footer = () => {
  return (
    <Fragment>
      <Container>
        <Wrapper>
          <FooterSector>
            <span>English (US)</span>
          </FooterSector>
          <FooterLogoContainer>
            <a>
              <FooterLogo src={require('assets/image/logo.png')} />
            </a>
          </FooterLogoContainer>
          <FooterLinkWrapper>
            <LinkItem>
              <a>CAREERS</a>
            </LinkItem>
            <LinkItem>
              <a>ABOUT</a>
            </LinkItem>
            <LinkItem>
              <a>CONTACT US</a>
            </LinkItem>
            <LinkItem>
              <a>PRESS</a>
            </LinkItem>
          </FooterLinkWrapper>

          <FooterMark>
            <h6>©2020 CAPITALGAMINGRP STUDIOS ALL RIGHTS RESERVED.</h6>
            <p>
              All <span>trademarks</span> referenced herein are the properties
              of their respective owners.
            </p>
          </FooterMark>

          <FooterLinkWrapper>
            <LinkItem>
              <a>PRIVACY</a>
            </LinkItem>
            <LinkItem>
              <a>TERMS</a>
            </LinkItem>
          </FooterLinkWrapper>

          <FooterBanner>
            <img src={require('assets/image/footer-banner-1.png')}></img>
            <img src={require('assets/image/footer-banner-2.png')}></img>
          </FooterBanner>
        </Wrapper>
      </Container>
    </Fragment>
  );
};

export default Footer;
