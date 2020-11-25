import styled from 'styled-components';

var bg = require('assets/image/footer-bg.png');

export const Container = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  background-image: url('${bg}');
  padding: 64px;
`;

export const Wrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  text-align: center;
  color: #fff;
  z-index: 0;
`;

export const FooterSector = styled.div`
  & span {
    color: rgba(255, 255, 255, 0.7);
    cursor: pointer;
    &: hover {
      color: rgba(255, 255, 255, 1);
    }
  }
`;

export const FooterLogoContainer = styled.div``;

export const FooterLogo = styled.img`
  cursor: pointer;
`;

export const FooterLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 13px;
`;

export const LinkItem = styled.div`
  padding: 0 14px;
  border-right: 1px solid white;
  line-height: 1;
  &: last-child {
    border-right: none;
  }
  & a {
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const FooterMark = styled.div`
  margin-bottom: 10px;
  & h6 {
    margin-bottom: 0;
    color: rgba(255, 255, 255, 0.5);
    font-size: 12px;
  }
  & p {
    margin-bottom: 0;
    color: rgba(255, 255, 255, 0.5);
    font-size: 13px;
  }
  & span {
    color: rgba(255, 255, 255, 0.7);
    font-size: 14px;
    font-weight: 600;
  }
`;

export const FooterBanner = styled.div`
  margin-top: 30px;
  & img {
    height: 100px;
    width: auto;
    margin: 0px 3px;
  }
`;
