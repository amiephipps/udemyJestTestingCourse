import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttr, checkProps } from '../test/testUtils'
import GuessedWords from './GuessedWords'

const defaultProps = {
  guessedWords: [
    {
      guessedWord: 'train', letterMatchCount: 3
    }
  ]
}

// this sets up a shallow wrapper for the guessed words component
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }

  return shallow(<GuessedWords {...setupProps} />)
}

// `test` or `it` are interchangable
it('does not throw warning or error with expected props', () => {
  checkProps(GuessedWords, defaultProps)
})



// describe is a way to group tests, and keep them organized, documents it as well - whoever looks at this will know what you are trying to test
describe('if there are no words guessed', () => {
  let wrapper

  // beforeEach will run before each test runs!
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] })
  })

  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words')

    expect(component.length).toBe(1)
  })

  test('renders instructions to guess a word', () => {
    const instructions = findByTestAttr(wrapper, 'guess-instructions')

    expect(instructions.text()).not.toBe(1)
  })
})



describe('if there are words guessed', () => {

})