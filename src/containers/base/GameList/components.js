import styled, { keyframes } from 'styled-components';
var bg = require('assets/image/content-background.png');

export const buttonAnimation = keyframes`
  0% { 
    opacity: 0;
    margin-top: 60px;
  }
  100% {
    margin-top: 20px;
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  background-image: url('${bg}');
  background-position: top center;
  background-repeat: no-repeat;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  background-size: auto 100%;
`;

export const ContentWrapper = styled.div`
  position: relative;
  max-width: 1328px;
  width: 100%;
  margin: 0 auto;
  padding: 16px;
`;

export const TextContainer = styled.div`
  margin: 0 12px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const ContentList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1104px;
  margin: 0 auto;
`;

export const ItemWrapper = styled.div`
  display: inline-block;
  position: relative;
  cursor: auto;
  width: 192px;
  height: 240px;
  margin: 12px;
  outline: 1px solid #b8b1b196;
`;

export const Item = styled.div`
  background-image: ${props => (props.backimg ? `url(${props.backimg})` : '')};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-position: bottom center;
  background-size: cover;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
`;

export const OverrlayWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  &: hover {
    background-color: rgba(0, 0, 0, 0.7);
    border: 1px solid #26baff;
    & > div {
      visibility: visible;
      animation-name: ${buttonAnimation};
      animation-duration: 0.3s;
    }
  }
`;

export const OverlayContent = styled.div`
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
  visibility: hidden;
  height: 40px;
  & a {
    color: white;
    letter-spacing: 1.2px;
  }
`;

export const Title = styled.h2`
  font-size: 2.3rem;
  font-family: 'Blizzard', Helvetica, Arial, sans-serif;
  font-weight: 300;
  line-height: 1.5;
  color: #fff;
`;

export const Text = styled.span`
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #fff;
  &: hover {
    color: #00aeff;
  }
`;
