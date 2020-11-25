import styled, { keyframes, css } from 'styled-components';

export const delayAnimation = keyframes`
  0% { 
    opacity: 0;
    margin-top: -20px;
  }
  100% { 
    opacity: 0;
    margin-top: -20px;
  }
`;

export const menuAnimation = keyframes`
  0% { 
    opacity: 0;
    margin-top: -20px;
  }
  100% { 
    opacity: 1;
    margin-top: 0px;
  }
`;

export const Nav = styled.div`
  position: relative;
  box-sizing: border-box;
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  color: #fff;
  z-index: 1;
  background-color: #0b0d12;
  border-bottom: solid 1px rgba(255, 255, 255, 0.15);
`;

export const NavbarContainer = styled.div`
  position: relative;
  max-width: 1600px;
  margin: 0 auto;
`;

export const NavbarDesktop = styled.div`
  position: relative;
  height: 60px;
  padding: 0 30px;
  white-space: nowrap;
  display: flex;
  justify-content: space-between;
`;

export const NavbarItems = styled.div``;

export const LogoLink = styled.a`
  position: relative;
  display: inline-block;
  height: 60px;
  margin-right: 30px;
`;

export const NavbarLink = styled.a`
  position: relative;
  display: inline-block;
  height: 60px;
  padding: 0;
  margin-right: 30px;
  color: rgba(255, 255, 255, 0.7);
  background: transparent;
  text-decoration: none;
  font-size: 20px;
  text-transform: uppercase;
  font-family: 'Blizzard', Helvetica, Arial, sans-serif;
  line-height: 1.4;
  white-space: nowrap;
  transition: color 200ms, background-color 200ms, border-color 200ms;
  &: hover {
    color: rgba(255, 255, 255, 1);
    & svg {
      & polygon:last-child {
        fill: rgba(255, 255, 255, 1);
      }
    }
  }
`;

export const DropdownIcon = styled.div`
  display: inline-block;
  margin-left: 6px;
  & svg {
    transform: ${props => (props.active ? 'rotate(270deg)' : 'rotate(90deg)')};
    & polygon:last-child {
      fill: rgba(255, 255, 255, 0.7);
    }
  }
`;

export const NavbarLabel = styled.div`
  display: inline-block;
  line-height: 60px;
  height: 60px;
  box-sizing: border-box;
  vertical-align: baseline;
`;

export const NavbarLeft = styled.div`
  display: flex;
`;

export const NavbarRight = styled.div`
  display: flex;
`;

export const LogoImg = styled.img`
  height: 100%;
`;

export const GameMenuContainer = styled.div`
  position: absolute;
  width: 100vw;
  background-color: rgba(26, 32, 43, 0.97);
  outline: 1px solid rgba(255, 255, 255, 0.2);
  display: ${props => (props.active ? 'flex' : 'none')};
  top: 60px;
  z-index: 3;
`;

export const LeftContainer = styled.div`
  width: 70%;
  padding: 5px 15px;
  margin: 10px 0px;
  border-right: 1px solid rgba(255, 255, 255, 0.2);
`;

export const RightContainer = styled.div`
  width: 30%;
  padding: 15px;
`;

export const MenuTitle = styled.div`
  height: 20px;
  margin-bottom: 10px;
  padding: 0px 20px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
`;

export const ItemContainer = styled.div`
  display: flex;
  padding: 10px 70px;
  min-height: 120px;
`;

export const ItemWrapper = styled.div`
  display: block;
  margin: 0px 15px;
  cursor: pointer;
  & img {
    height: 80px;
    width: auto;
  }
  & p {
    margin-bottom: 0px;
    line-height: 1.1;
    text-align: center;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.7);
  }
  animation-name: ${props =>
    props.menuKey
      ? css`
          ${delayAnimation}, ${menuAnimation}
        `
      : ''};
  animation-duration: ${props =>
      props.menuKey ? `${props.menuKey * 0.15}` : 0}s,
    0.5s;
  animation-delay: 0s,
    ${props => (props.menuKey ? `${props.menuKey * 0.15}` : 0)}s;
`;

export const CloseMenu = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 2;
  background-color: transparent;
  display: ${props => (props.show ? 'block' : 'none')};
`;
