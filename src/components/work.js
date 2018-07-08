import React from 'react'
import styled, { css } from 'react-emotion'
import { Flex, Box, Heading, Text, Relative, Container } from 'rebass'
import { Element } from 'react-scroll'

import Impossible from '../images/impossible.svg'
import Samsung from '../images/samsung.png'
import Google from '../images/google.png'
import Moto from '../images/motorola.png'

class Work extends React.Component {
  renderClient() {
    const clients = [Samsung, Google, Moto]

    return clients.map(client => {
      return <img className={clientImage} key={client} src={client} />
    })
  }
  render() {
    return (
      <Element name="work" style={{ width: '100%' }}>
        <HeaderBanner mt={0} width={1} justifyContent="center">
          <FlexContainer width={1} justifyContent="center">
            <Flex
              pt={5}
              width={1 / 2}
              flexDirection="column"
              justifyContent="flex-end"
            >
              <Workbg src={Impossible} />
            </Flex>
            <Flex
              pt={0}
              width={1 / 2}
              flexDirection="column"
              alignItems="flex-start"
              alignSelf="flex-start"
            >
              <Heading textAlign="left">High impact story telling</Heading>
              <Text
                py={2}
                fontSize={4}
                lineHeight="copy"
                fontWeight={4}
                color="onyx"
                maxwidth={7}
              >
                LCJ has worked with brands from all sectors
              </Text>
              <Flex width={1} pt={5}>
                {this.renderClient()}
              </Flex>
            </Flex>
          </FlexContainer>
        </HeaderBanner>
      </Element>
    )
  }
}

export default Work

const HeaderBanner = styled(Flex)`
  min-height: 600px;
  height: 600px;
  align-items: stretch;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1) 0%,
    rgba(247, 244, 244, 0.6) 100%
  );
`

const FlexContainer = styled(Flex)`
  max-width: 900px;
`

const Workbg = styled.img`
  width: 450px;
  height: auto;
  position: absolute;
`

const clientImage = css`
  width: 120px;
  height: 100%;
  margin-right: 32px;
`
