import React, { Fragment, useState, useEffect } from 'react';
import {
  Nav,
  NavbarContainer,
  NavbarDesktop,
  LogoLink,
  NavbarItems,
  NavbarLink,
  DropdownIcon,
  NavbarLabel,
  NavbarLeft,
  NavbarRight,
  LogoImg,
  GameMenuContainer,
  LeftContainer,
  MenuTitle,
  ItemContainer,
  ItemWrapper,
  RightContainer,
  CloseMenu
} from './components';
const Navbar = () => {
  const [showMenu, setShowmenu] = useState(false);
  const onShowMenu = () => {
    setShowmenu(!showMenu);
  };
  return (
    <Fragment>
      <Nav>
        <NavbarContainer>
          <NavbarDesktop>
            <NavbarLeft>
              <LogoLink>
                <LogoImg src={require('assets/image/logo.png')} alt="logo" />
              </LogoLink>
              <NavbarItems>
                <NavbarLink onClick={() => onShowMenu()}>
                  <NavbarLabel>GAMES</NavbarLabel>
                  <DropdownIcon active={showMenu}>
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
                  </DropdownIcon>
                </NavbarLink>
                <NavbarLink>
                  <NavbarLabel>SHOP</NavbarLabel>
                </NavbarLink>
                <NavbarLink>
                  <NavbarLabel>NEWS</NavbarLabel>
                </NavbarLink>
                <NavbarLink>
                  <NavbarLabel>CAREERS</NavbarLabel>
                </NavbarLink>
              </NavbarItems>
            </NavbarLeft>
            <NavbarRight>
              <NavbarLink>
                <NavbarLabel>Support</NavbarLabel>
              </NavbarLink>
            </NavbarRight>
          </NavbarDesktop>
        </NavbarContainer>
      </Nav>

      <GameMenuContainer active={showMenu}>
        <LeftContainer>
          <MenuTitle></MenuTitle>
          <ItemContainer>
            <ItemWrapper menuKey={1}>
              <img
                src={require('assets/image/menu-icon-1.png')}
                alt="menu-icon"
              ></img>
              <div>
                <p>MONOGON:</p>
                <p>ECHOES</p>
              </div>
            </ItemWrapper>
            <ItemWrapper menuKey={2}>
              <img
                src={require('assets/image/menu-icon-2.png')}
                alt="menu-icon"
              ></img>
              <div>
                <p>CIVILCONTRACT</p>
              </div>
            </ItemWrapper>
            <ItemWrapper menuKey={3}>
              <img
                src={require('assets/image/menu-icon-3.png')}
                alt="menu-icon"
              ></img>
              <div>
                <p>OVERDOSED</p>
              </div>
            </ItemWrapper>
            <ItemWrapper menuKey={4}>
              <img
                src={require('assets/image/menu-icon-4.png')}
                alt="menu-icon"
              ></img>
              <div>
                <p>UNANNOUNCED</p>
              </div>
            </ItemWrapper>
          </ItemContainer>
        </LeftContainer>
        <RightContainer>
          <MenuTitle>Platforms</MenuTitle>
          <ItemContainer>
            <ItemWrapper menuKey={5}>
              <img
                src={require('assets/image/menu-icon-5.png')}
                alt="menu-icon"
              ></img>
              <div>
                <p>Marketplace</p>
              </div>
            </ItemWrapper>
            <ItemWrapper menuKey={6}>
              <img
                src={require('assets/image/menu-icon-6.png')}
                alt="menu-icon"
              ></img>
              <div>
                <p>DISCORD</p>
              </div>
            </ItemWrapper>
          </ItemContainer>
        </RightContainer>
      </GameMenuContainer>

      <CloseMenu show={showMenu} onClick={() => onShowMenu()} />
    </Fragment>
  );
};

export default Navbar;
