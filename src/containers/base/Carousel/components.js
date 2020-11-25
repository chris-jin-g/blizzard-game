import styled, { keyframes, css } from 'styled-components';
import media from 'lib/MediaQuery';

export const fadeInAnimation = keyframes`
  0% { 
    opacity: 0;
  }
  10% { 
    opacity: 0.9;
  }
  100% { 
    opacity: 1;
  }
`;

export const fadeOutAnimation = keyframes`
  0% { 
    opacity: 1;
  }
  100% { 
    opacity: 0;
  }
`;

export const backgroundMoving = keyframes`
  0% { 
    background-position: 50% 0;
  }
  10% { 
    background-position: 54% 0;
  }
  100% { 
    background-position: 56% 0;
  }
`;

export const child1Moving = keyframes`
  0% { 
    margin-left: 40px;
    opacity: 0;
  }
  5% { 
    margin-left: 0px;
    opacity: 1;
  }
  100% { 
    margin-left: 0px;
  }
`;

export const child2Moving = keyframes`
  0% { 
    margin-left: 40px;
    opacity: 0;
  }
  5% { 
    margin-left: 40px;
    opacity: 0;
  }
  10% { 
    margin-left: 0px;
    opacity: 1;
  }
  100% { 
    margin-left: 0px;
  }
`;

export const child3Moving = keyframes`
  0% { 
    margin-left: 40px;
    opacity: 0;
  }
  10% { 
    margin-left: 40px;
    opacity: 0;
  }
  15% {
    margin-left: 0px;
    opacity: 1;
  }
  100% { 
    margin-left: 0px;
  }
`;

export const CarouselContainer = styled.div`
  display: flex;
`;

export const Body = styled.div`
  position: relative;
  width: 100%;
  height: 520px;
  overflow-x: hidden;
`;

export const Footer = styled.div``;

export const CarouselItem = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 115vw;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  ${props =>
    props.active
      ? css`
          animation-name: ${fadeInAnimation};
          animation-duration: 6s;
        `
      : css`
          opacity: 0;
        `}

  & >div:first-child {
    ${props =>
      props.active
        ? css`
            animation-name: ${backgroundMoving};
            animation-duration: 6s;
          `
        : css`
            background-position: 50% 0;
          `}
  }

  & > div:last-child > div:first-child {
    ${props =>
      props.active
        ? css`
            animation-name: ${child1Moving};
            animation-duration: 6s;
          `
        : css`
            background-position: 50% 0;
          `}
  }

  & > div:last-child > div:nth-child(2) {
    ${props =>
      props.active
        ? css`
            animation-name: ${child2Moving};
            animation-duration: 6s;
          `
        : css`
            background-position: 50% 0;
          `}
  }

  & > div:last-child > div:last-child {
    ${props =>
      props.active
        ? css`
            animation-name: ${child3Moving};
            animation-duration: 6s;
          `
        : css`
            background-position: 50% 0;
          `}
  }
`;

export const CarouselContent = styled.div`
  position: absolute;
  width: 100vw;
  height: 100%;
  left: 7.5%;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 0 auto;
  padding: 60px;
`;

export const ImgContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: calc(480px + (20px * 2)) auto;
  transform: translateX(0);
  z-index: -1;
  background-color: rgb(10, 23, 29);
  background-size: cover;
  background-image: ${props => (props.backimg ? `url(${props.backimg})` : '')};
`;

export const CarouselLogo = styled.div`
  display: flex;
  flex-wrap: wrap;
  & img {
    height: ${props => (props.height ? props.height : 150)}px;
    width: auto;
  }
`;

export const CarouselTitle = styled.div`
  color: #fff;
  font-size: 3.5rem;
  font-family: 'Blizzard', Helvetica, Arial, sans-serif;
  font-weight: 700;
  text-shadow: 4px 7px 17px rgba(0, 0, 0, 0.8);
  display: block;
  & p {
    margin-bottom: 0;
    line-height: 1.4;
  }
`;

export const LinkButton = styled.div`
  display: inline-block;
  position: relative;
  background-color: #006fb2;
  border: solid 1px #00aeff;
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #fff;
  padding: 10px 40px;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: color 200ms, background-color 200ms, border-color 200ms;
  line-height: normal;
  outline-offset: 2px;
  box-sizing: border-box;
  margin-top: 20px;
  max-width: 230px;
`;

export const NavigateBar = styled.div`
  display: block;
`;

export const NavigateContainer = styled.div`
  max-width: 720px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  ${media.laptop`
    max-width: 600px;
  `}
  ${media.tablet`
    max-width: 520px;
  `}
  ${media.phone`
    max-width: 320px;
  `}
`;

export const IconWrapper = styled.div`
  display: block;
  padding: 10px 0;
  border-bottom: ${props => (props.active ? '2px solid white' : '')};
  & img {
    height: 50px;
    width: auto;
    cursor: pointer;
    &: hover {
      transform: ${props => (props.active ? '' : 'scale(1.1)')};
    }
  }

  ${media.laptop`
    & img {
      height: 40px;
    }
  `}
  ${media.tablet`
    & img {
      height: 35px;
    }
  `}
  ${media.phone`
    & img {
      height: 30px;
    }
  `}
`;

export const AlarmContainer = styled.div`
  display: block;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const AlarmWrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 760px;
  margin: 0 auto;
  color: rgba(255, 255, 255, 0.6);
  font-size: 18px;
  & span {
    color: #079fff;
  }
`;

export const ControlButtonWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 50px;
  tranform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
  cursor: pointer;
  & svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(2);
    & polygon:last-child {
      fill: #079fff;
    }
  }
  &: hover {
    border: 1px solid #079fff;
    & svg polygon:last-child {
      fill: #41b6ff;
    }
    & svg {
      transform: translate(-50%, -50%) scale(2.3);
      & polygon:last-child {
        fill: #41b6ff;
      }
    }
  }
`;
