import React, { Fragment } from 'react';
import { Fade } from 'react-slideshow-image';
import {
  Container,
  SlideShow,
  SlideImage,
  SlideItem,
  ContentWrapper,
  Title,
  SubTtile,
  LinkButton
} from './components';

import 'react-slideshow-image/dist/styles.css';

const fadeImages = [
  require('assets/image/slide_fade_1.jpeg'),
  require('assets/image/slide_fade_2.jpeg')
];

const CareerSection = () => {
  return (
    <Fragment>
      <Container>
        <div className="slide-container">
          <Fade>
            <div className="each-fade">
              <div className="image-container">
                <img src={fadeImages[0]} />
              </div>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img src={fadeImages[1]} />
              </div>
            </div>
          </Fade>
        </div>

        {/* <SlideShow>
          <SlideItem>
            <SlideImage backimg={require('assets/image/slide_fade_1.jpeg')} />
          </SlideItem>
          <SlideItem>
            <SlideImage backimg={require('assets/image/slide_fade_2.jpeg')} />
          </SlideItem>
        </SlideShow>
         */}
        <ContentWrapper>
          <Title>CAREERS</Title>
          <SubTtile>Learn more about Careers at Blizzard</SubTtile>
          <LinkButton>Explorer Careers</LinkButton>
        </ContentWrapper>
      </Container>
    </Fragment>
  );
};

export default CareerSection;
