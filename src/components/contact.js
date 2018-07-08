import React from 'react'
import { Flex, Box, Heading, Text, Container, Button } from 'rebass/emotion'
import { Element } from 'react-scroll'
import { css } from 'react-emotion'
import { Form, Text as Txt, TextArea } from 'react-form'

const validateEmail = email =>
  !email || email.trim() === '' ? 'Email is a required field' : null

const asyncValidate = value =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      // Simulate username check
      if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        resolve({ error: 'That is not an email', success: null })
      }
    }, 2000)
  )

class Contact extends React.Component {
  render() {
    return (
      <Container maxWidth={900} width={0}>
        <Element name="contact" style={{ width: '100%' }}>
          <Flex width={0}>
            <Box width={1 / 2} textAlign="left" pr={4}>
              <Heading textAlign="left">Let's work together</Heading>
              <Text fontSize={3} mt={3} lineHeight="copy">
                Looking for a wordsmith for your next project? Get in touch with
                the little form over there 🎉
              </Text>
            </Box>

            <Box mt={5} width={1 / 2} textAlign="left" pl={4}>
              <Form>
                {formApi => {
                  console.log(formApi)
                  return (
                    <form onSubmit={formApi.submitForm} id="contactform">
                      <Txt
                        field="name"
                        id="name"
                        validate={validateEmail}
                        asyncValidate={asyncValidate}
                        className={InputField}
                        placeholder="Your name..."
                      />
                      {formApi.errors ? formApi.errors.name : ''}

                      <Txt
                        field="email"
                        id="email"
                        validate={validateEmail}
                        asyncValidate={asyncValidate}
                        className={InputField}
                        placeholder="Your email..."
                      />

                      <TextArea
                        field="message"
                        id="message"
                        validate={validateEmail}
                        asyncValidate={asyncValidate}
                        className={InputField}
                        placeholder="Anything you'd like to say?"
                        rows="6"
                      />
                      <Button
                        py={3}
                        borderRadius={2}
                        fontSize={3}
                        px={4}
                        type="submit"
                      >
                        Submit
                      </Button>
                    </form>
                  )
                }}
              </Form>
            </Box>
          </Flex>
        </Element>
      </Container>
    )
  }
}

export default Contact

const InputField = css`
  border: 2px solid #efefef;
  border-radius: 8px;
  padding: 8px 16px;
  min-height: 60px;
  font-size: 16px;
  display: block;
  margin: 16px 0;
  width: 100%;

  :focus {
    outline: none;
  }
`
