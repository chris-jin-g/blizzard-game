import React, { Fragment, useState, useEffect } from 'react';
import {
  CarouselContainer,
  Body,
  Footer,
  CarouselItem,
  CarouselContent,
  ImgContainer,
  CarouselLogo,
  CarouselTitle,
  LinkButton,
  NavigateBar,
  NavigateContainer,
  IconWrapper,
  AlarmContainer,
  AlarmWrapper,
  ControlButtonWrapper
} from './components';

const navigateIcons = [
  require('assets/image/navigate-1.png'),
  require('assets/image/navigate-2.png'),
  require('assets/image/navigate-3.png'),
  require('assets/image/navigate-4.png'),
  require('assets/image/navigate-5.png'),
  require('assets/image/navigate-6.png')
];

const Carousel = () => {
  const [activeNum, setActiveNum] = useState(1);
  const [timeId, setTimeId] = useState();
  useEffect(() => {
    startInterval();
  }, [activeNum]);

  const startInterval = () => {
    const timeout = setTimeout(() => {
      if (activeNum == 6) setActiveNum(1);
      else setActiveNum(activeNum + 1);
    }, 6000);
    setTimeId(timeout);
    return () => {
      clearTimeout(timeout);
    };
  };

  const changeNavigation = id => {
    clearTimeout(timeId);
    setActiveNum(id + 1);
  };

  return (
    <Fragment>
      <AlarmContainer>
        <AlarmWrapper>
          Server Status: <span>&nbsp;ONLINE&nbsp;&nbsp;&nbsp;</span> Upcoming
          event, Holloween server 1 event
        </AlarmWrapper>
      </AlarmContainer>
      <CarouselContainer>
        <Body>
          <ControlButtonWrapper onClick={() => changeNavigation(activeNum)}>
            <svg
              width="8px"
              height="12px"
              viewBox="0 0 8 12"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsxlink="http://www.w3.org/1999/xlink"
            >
              <title>keyboard_arrow_right</title>
              <desc>Created with Sketch.</desc>
              <g
                id="Icons"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="Outlined"
                  transform="translate(-550.000000, -2464.000000)"
                >
                  <g
                    id="Hardware"
                    transform="translate(100.000000, 2404.000000)"
                  >
                    <g
                      id="Outlined-/-Hardware-/-keyboard_arrow_right"
                      transform="translate(442.000000, 54.000000)"
                    >
                      <g>
                        <polygon
                          id="Path"
                          points="0 0 24 0 24 24 0 24"
                        ></polygon>
                        <polygon
                          id="🔹-Icon-Color"
                          fill="white"
                          points="8.59 16.59 13.17 12 8.59 7.41 10 6 16 12 10 18"
                        ></polygon>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </ControlButtonWrapper>
          <CarouselItem active={activeNum === 1 ? true : false}>
            <ImgContainer backimg={require('assets/image/slider-1.png')} />
            <CarouselContent>
              <CarouselLogo height={120}>
                <img
                  src={require('assets/image/slider-logo-1.png')}
                  alt="carousel-logo"
                ></img>
              </CarouselLogo>
              <CarouselTitle>THE 0.1 RELEASE</CarouselTitle>
              <LinkButton>Buy Now</LinkButton>
            </CarouselContent>
          </CarouselItem>

          <CarouselItem active={activeNum === 2 ? true : false}>
            <ImgContainer backimg={require('assets/image/slider-2.png')} />
            <CarouselContent>
              <CarouselLogo height={200}>
                <img
                  src={require('assets/image/slider-logo-2.png')}
                  alt="carousel-logo"
                ></img>
              </CarouselLogo>
              <CarouselTitle>OVERDOSED COMING SOON</CarouselTitle>
              <LinkButton>Learn More</LinkButton>
            </CarouselContent>
          </CarouselItem>

          <CarouselItem active={activeNum === 3 ? true : false}>
            <ImgContainer backimg={require('assets/image/slider-3.png')} />
            <CarouselContent>
              <CarouselLogo height={170}>
                <img
                  src={require('assets/image/slider-logo-3.png')}
                  alt="carousel-logo"
                ></img>
              </CarouselLogo>
              <CarouselTitle>
                <p>MONOGON: ECHOES</p>
                <p>COMING SOON</p>
              </CarouselTitle>
              <LinkButton>Learn More</LinkButton>
            </CarouselContent>
          </CarouselItem>

          <CarouselItem active={activeNum === 4 ? true : false}>
            <ImgContainer backimg={require('assets/image/slider-4.png')} />
            <CarouselContent>
              <CarouselLogo height={120}></CarouselLogo>
              <CarouselTitle>
                <p>UE4 MARKETPLACE</p>
                <p>SALE NOW</p>
              </CarouselTitle>
              <LinkButton>Visit</LinkButton>
            </CarouselContent>
          </CarouselItem>

          <CarouselItem active={activeNum === 5 ? true : false}>
            <ImgContainer backimg={require('assets/image/slider-5.png')} />
            <CarouselContent>
              <CarouselLogo height={120}></CarouselLogo>
              <CarouselTitle>
                <p>BRING YOUR TALENT TO</p>
                <p>THE TEAM</p>
              </CarouselTitle>
              <LinkButton>Learn More</LinkButton>
            </CarouselContent>
          </CarouselItem>

          <CarouselItem active={activeNum === 6 ? true : false}>
            <ImgContainer backimg={require('assets/image/slider-6.png')} />
            <CarouselContent>
              <CarouselLogo height={120}></CarouselLogo>
              <CarouselTitle>
                <p>WORK WITH MIXED </p>
                <p>REALITY PROJECTS</p>
              </CarouselTitle>
              <LinkButton>Buy Now</LinkButton>
            </CarouselContent>
          </CarouselItem>
        </Body>
        <Footer></Footer>
      </CarouselContainer>
      <NavigateBar>
        <NavigateContainer>
          {navigateIcons.map((icon, id) => {
            return (
              <IconWrapper
                active={activeNum === id + 1 ? true : false}
                onClick={() => changeNavigation(id)}
              >
                <img src={icon} alt="navigate"></img>
              </IconWrapper>
            );
          })}
        </NavigateContainer>
      </NavigateBar>
    </Fragment>
  );
};

export default Carousel;
