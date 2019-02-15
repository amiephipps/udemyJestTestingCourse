import { correctGuess, actionTypes } from './'

describe('correctGuess', () => {
  test('returns an action with type `CORRECT_GUESS`', () => {
    const action = correctGuess()

    // this will do a deep equal check - not just shallow
    expect(action).toEqual({ type: actionTypes.CORRECT_GUESS })
  })
})