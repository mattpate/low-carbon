import React, { Component } from 'react'
import Typed from 'react-typed'

import Layout from '../components/layout'
import { ButtonCircle, Flex, Box, Heading, Container } from 'rebass'
import styled from 'react-emotion'
import About from '../components/about'
import Contact from '../components/contact'
import Work from '../components/work'
import Header from '../components/header'
import Banner from '../images/mediabanner.svg'

const options = ['noise', 'fluff', 'cost', 'busy', 'is more.']

class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <HeaderBanner
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          width={1}
        >
          <BannerImage src={Banner} alt="low carbon jargon" />

          <Flex mt={-30} width={1} alignItems="center" justifyContent="center">
            <Box width={1 / 2} ml={-6}>
              <Heading fontSize={[40, 60, 90, 90]} textAlign="right">
                Less
              </Heading>
            </Box>

            <Box ml={3} width={1 / 2}>
              <Typed
                style={{ fontSize: '90px' }}
                strings={options}
                typeSpeed={200}
                backSpeed={80}
                loop={false}
              />
            </Box>
          </Flex>
          <ButtonCircle mt={3} px={4} py={2} fontSize={3} bg="#046fdb">
            A low carbon approach to media and strategy
          </ButtonCircle>
        </HeaderBanner>

        <FullHeight>
          <About />
        </FullHeight>
        <FullHeight>
          <Work />
        </FullHeight>
        <FullHeight>
          <Contact />
        </FullHeight>
      </Layout>
    )
  }
}

export default IndexPage

const FullHeight = styled(Flex)`
  min-height: 800px;
  height: 800px;
  align-items: center;
  position: relative;
`

const HeaderBanner = styled(Flex)`
  min-height: 800px;
  height: 800px;
  position: relative;
  align-items: center;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1) 0%,
    rgba(247, 244, 244, 1) 100%
  );
`
const BannerImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 900px;
  transform: translateX(-50%);
  min-width: 900px;

  @media all and (max-width: 600px) {
    width: 800px;
    min-width: 800px;
    left: 0;
    transform: none;
  }
`
