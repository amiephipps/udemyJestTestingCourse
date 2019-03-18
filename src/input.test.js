import React from 'react'
import { shallow } from 'enzyme'

import { storeFactory, findByTestAttr } from '../test/testUtils'
import { Input } from './Input'


const setup = (initialState ={}) => {
  // dont need this anymore because of an update to redux
  // const store = storeFactory(initialState)

  // this returns the connected component --> the dive grabs the actual react component inside the connected component
  // dont need the dive anymore because of redux update
  // const wrapper = shallow(<Input store={store} />).dive()


  const wrapper = shallow(<Input {...initialState} />)
  return wrapper
}

describe('render', () => {
  describe('the word has not been guessed', () => {
    let wrapper

    beforeEach(() => {
      const initialState = {
        success: false
      }

      wrapper = setup(initialState)
    })

    it('renders the component without error', () => {
      const component = findByTestAttr(wrapper, 'component-input')
      expect(component.length).toBe(1)
    })

    it('renders the input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box')
      expect(inputBox.length).toBe(1)
    })

    it('renders the submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button')
      expect(submitButton.length).toBe(1)
    })
  })

  describe('the word has been guessed', () => {
    let wrapper

    beforeEach(() => {
      const initialState = {
        success: true
      }

      wrapper = setup(initialState)
    })

    it('renders the component without error', () => {
      const component = findByTestAttr(wrapper, 'component-input')
      expect(component.length).toBe(1)
    })

    it('renders the input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box')
      expect(inputBox.length).toBe(0)
    })

    it('renders the submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button')
      expect(submitButton.length).toBe(0)
    })
  })
})

describe('update state', () => {

})