import React from 'react'
import { Flex, Box, Heading, Text, Container } from 'rebass/emotion'
import { Element } from 'react-scroll'

class About extends React.Component {
  render() {
    return (
      <Container maxWidth={800}>
        <Flex width={0} justifyContent="center" alignItems="center">
          <Element name="about">
            <Box>
              <Heading textAlign="center">About</Heading>
              <Text
                py={5}
                fontSize={4}
                lineHeight="copy"
                fontWeight={4}
                color="onyx"
                maxwidth={7}
              >
                Founder of Low Carbon Jargon, David is a cross-skilled
                consultant who employs common sense and low carbon jargon to
                help whoever he works for survive the continually connected
                world we live in. He's a strong believer in the saying 'Less Is
                More' when it comes to impactful storytelling of a brand,
                product or service he works with. In his spare time David sits
                on Livefyre's European Innovation Council and mentors at
                Google's Campus London. He has also volunteered for charities
                Beanstalk and The Prince's Trust.
              </Text>
            </Box>
          </Element>
        </Flex>
      </Container>
    )
  }
}

export default About
