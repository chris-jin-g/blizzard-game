import React, { Fragment } from 'react';
import { Container, ContentWrapper } from './components';

const Middlebar = () => {
  return (
    <Fragment>
      <Container>
        <a>
          <ContentWrapper>
            <span>We are currently hiring, apply today</span>
          </ContentWrapper>
        </a>
        <a>
          <ContentWrapper>
            <span>Stay Connected: &nbsp;</span>
            Discord
          </ContentWrapper>
        </a>
      </Container>
    </Fragment>
  );
};

export default Middlebar;
