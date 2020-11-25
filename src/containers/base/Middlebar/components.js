import styled from 'styled-components';
var bg = require('assets/image/content-background.png');

export const Container = styled.div`
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  min-height: 60px;
  align-items: center;
  background-color: #05284b;
  & a {
    padding: 0 30px;
    &:first-child {
      border-right: 1px solid rgba(255, 255, 255, 0.1);
    }
  }
`;

export const ContentWrapper = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: #00aeff;
  & span {
    font-size: 17px;
    color: rgba(255, 255, 255, 0.6);
    &: hover {
      color: rgba(255, 255, 255, 0.8);
    }
  }
`;
