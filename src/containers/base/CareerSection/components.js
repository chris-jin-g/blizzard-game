import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const SlideShow = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0;
  padding: 0;
  z-index: -1;
`;

export const SlideItem = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 1;
`;

export const SlideImage = styled.div`
  background-image: ${props => (props.backimg ? `url(${props.backimg})` : '')};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-position: center top;
  background-repeat: no-repeat;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  margin: 0 auto;
  padding: 56px;
  position: absolute;
  z-index: 2;
  top: 50%;
  transform: translate(80px, -47%);
`;

export const Title = styled.h1`
  font-size: 2.75rem;
  font-family: 'Blizzard', Helvetica, Arial, sans-serif;
  font-weight: 300;
  line-height: 1.5;
  color: #fff;
  margin-bottom: 0px;
`;

export const SubTtile = styled.h2`
  font-size: 1.5rem;
  font-family: 'Blizzard', Helvetica, Arial, sans-serif;
  font-weight: 300;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.8);
`;

export const LinkButton = styled.a`
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
  margin-top: 32px;
  max-width: 230px;
`;
