import React from 'react'
import { shallow } from 'enzyme'

import { storeFactory, findByTestAttr } from '../test/testUtils'
import Input, { UnconnectedInput } from './Input'

import { guessWord } from './actions'

const setup = (initialState ={}) => {
  // dont need this anymore because of an update to redux
  // const store = storeFactory(initialState)

  // this returns the connected component --> the dive grabs the actual react component inside the connected component
  // dont need the dive anymore because of redux update
  // const wrapper = shallow(<Input store={store} />).dive()

  const wrapper = shallow(<Input {...initialState} />)
  return wrapper
}

// describe('render', () => {
//   describe('the word has not been guessed', () => {
//     let wrapper

//     beforeEach(() => {
//       const initialState = {
//         success: false
//       }

//       wrapper = setup(initialState)
//     })

//     it('renders the component without error', () => {
//       const component = findByTestAttr(wrapper, 'component-input')
//       expect(component.length).toBe(1)
//     })

//     it('renders the input box', () => {
//       const inputBox = findByTestAttr(wrapper, 'input-box')
//       expect(inputBox.length).toBe(1)
//     })

//     it('renders the submit button', () => {
//       const submitButton = findByTestAttr(wrapper, 'submit-button')
//       expect(submitButton.length).toBe(1)
//     })
//   })

//   describe('the word has been guessed', () => {
//     let wrapper

//     beforeEach(() => {
//       const initialState = {
//         success: true
//       }

//       wrapper = setup(initialState)
//     })

//     it('renders the component without error', () => {
//       const component = findByTestAttr(wrapper, 'component-input')
//       expect(component.length).toBe(1)
//     })

//     it('does not render the input box', () => {
//       const inputBox = findByTestAttr(wrapper, 'input-box')
//       expect(inputBox.length).toBe(0)
//     })

//     it('does not render the submit button', () => {
//       const submitButton = findByTestAttr(wrapper, 'submit-button')
//       expect(submitButton.length).toBe(0)
//     })
//   })
// })

describe('redux props', () => {
  test('has success piece of state as prop', () => {
    const success = true
    const wrapper = setup({ success})
    const successProp = wrapper.instance().props.success
    expect(successProp).toBe(success)
  })

  test('guessWord action creator is a function props', () => {
    const wrapper = setup({ guessWord })
    const guessWordProp = wrapper.instance().props.guessWord
    expect(guessWordProp).toBeInstanceOf(Function)
  })
})

describe('guessWord action creator call', () => {
  let guessWordMock
  let wrapper
  const guessedWord = 'train'

  beforeEach(() => {
    // set up all mock stuff for guessword
    guessWordMock = jest.fn()
    const props = {
      guessWord: guessWordMock
    }

    wrapper = shallow(<UnconnectedInput {...props} />)

    // add value to input box
    wrapper.instance().inputBox.current = { value: guessedWord }

    const submitButton = findByTestAttr(wrapper, 'submit-button')
    submitButton.simulate('click', { preventDefault() {} })
  })

  it('calls guessWord once when submit button is clicked', () => {
    const guessWordCallCount = guessWordMock.mock.calls.length
    expect(guessWordCallCount).toBe(1)
  })

  it('calls guessWord with input value as argument', () => {
    const guessWordArg = guessWordMock.mock.calls[0][0]
    expect(guessWordArg).toBe(guessedWord)
  })

  it('clears input box when submitted', () => {
    expect(wrapper.instance().inputBox.current.value).toBe('')
  })
})