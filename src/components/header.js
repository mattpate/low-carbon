import React from 'react'
import theme from '../../theme'
import {
  Flex,
  Box,
  Container,
  Button,
  NavLink,
  Row,
  Heading,
  Fixed,
} from 'rebass/emotion'

import styled from 'react-emotion'

import { Link, scroller } from 'react-scroll'

class Header extends React.Component {
  scrollTo(e) {
    scroller.scrollTo('contact', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    })
  }
  render() {
    return (
      <FixedNav top="0" right="0" left="0" py={3}>
        <Container>
          <Flex bg="light-grey" alignItems="center">
            <Box flex="1 0 auto">
              <Row mx={0} my={0}>
                <Heading mr={4} fontSize={4}>
                  LCJ
                </Heading>
                <NavLink mr={4}>
                  <Link duration={900} smooth={true} to="about">
                    About
                  </Link>
                </NavLink>
                <NavLink>
                  <Link duration={900} smooth={true} to="work">
                    Work
                  </Link>
                </NavLink>
              </Row>
            </Box>
            <Box alignSelf="center">
              <HButton
                to="contact"
                onClick={() => this.scrollTo()}
                borderRadius={4}
                bg={theme.colors.primary}
              >
                Contact us 😎
              </HButton>
            </Box>
          </Flex>
        </Container>
      </FixedNav>
    )
  }
}

export default Header

const FixedNav = styled(Fixed)`
  background-color: #ffffff;
  z-index: 99;
  opacity: 0.97;
`
const HButton = styled(Button)`
  cursor: pointer;
  transition: 200ms ease;

  :hover {
    border;none;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.14);
    transform: translateY(-1px);
  }

  :active, :focus {
    border: none;
    box-shadow: inherit;
  }
`
