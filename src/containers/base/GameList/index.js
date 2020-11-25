import React, { Fragment, useState, useEffect } from 'react';
import {
  Container,
  ContentWrapper,
  ContentList,
  TextContainer,
  ItemWrapper,
  Item,
  OverrlayWrapper,
  OverlayContent,
  Title,
  Text
} from './components';

const GameList = () => {
  return (
    <Fragment>
      <Container>
        <ContentWrapper>
          <TextContainer>
            <Title>Platforms</Title>
            <a>
              <Text>View all Platforms</Text>
            </a>
          </TextContainer>
          <ContentList>
            <ItemWrapper>
              <Item backimg={require('assets/image/item-1.png')}></Item>
              <OverrlayWrapper>
                <OverlayContent>
                  <a>Visit</a>
                </OverlayContent>
              </OverrlayWrapper>
            </ItemWrapper>
            <ItemWrapper>
              <Item backimg={require('assets/image/item-2.png')}></Item>
              <OverrlayWrapper>
                <OverlayContent>
                  <a>Visit</a>
                </OverlayContent>
              </OverrlayWrapper>
            </ItemWrapper>

            <ItemWrapper>
              <Item backimg={require('assets/image/item-3.png')}></Item>
              <OverrlayWrapper>
                <OverlayContent>
                  <a>Visit</a>
                </OverlayContent>
              </OverrlayWrapper>
            </ItemWrapper>

            <ItemWrapper>
              <Item backimg={require('assets/image/item-4.png')}></Item>
              <OverrlayWrapper>
                <OverlayContent>
                  <a>Visit</a>
                </OverlayContent>
              </OverrlayWrapper>
            </ItemWrapper>

            <ItemWrapper>
              <Item backimg={require('assets/image/item-5.png')}></Item>
              <OverrlayWrapper>
                <OverlayContent>
                  <a>Visit</a>
                </OverlayContent>
              </OverrlayWrapper>
            </ItemWrapper>
          </ContentList>

          <TextContainer>
            <Title>Clients</Title>
          </TextContainer>

          <ContentList>
            <ItemWrapper>
              <Item backimg={require('assets/image/item-6.png')}></Item>
              <OverrlayWrapper>
                <OverlayContent>
                  <a>Visit</a>
                </OverlayContent>
              </OverrlayWrapper>
            </ItemWrapper>

            <ItemWrapper>
              <Item backimg={require('assets/image/item-7.png')}></Item>
              <OverrlayWrapper>
                <OverlayContent>
                  <a>Visit</a>
                </OverlayContent>
              </OverrlayWrapper>
            </ItemWrapper>

            <ItemWrapper>
              <Item backimg={require('assets/image/item-8.png')}></Item>
              <OverrlayWrapper>
                <OverlayContent>
                  <a>Visit</a>
                </OverlayContent>
              </OverrlayWrapper>
            </ItemWrapper>

            <ItemWrapper>
              <Item backimg={require('assets/image/item-9.png')}></Item>
              <OverrlayWrapper>
                <OverlayContent>
                  <a>Visit</a>
                </OverlayContent>
              </OverrlayWrapper>
            </ItemWrapper>

            <ItemWrapper>
              <Item backimg={require('assets/image/item-10.png')}></Item>
              <OverrlayWrapper>
                <OverlayContent>
                  <a>Visit</a>
                </OverlayContent>
              </OverrlayWrapper>
            </ItemWrapper>
          </ContentList>
        </ContentWrapper>
      </Container>
    </Fragment>
  );
};

export default GameList;
