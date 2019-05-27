export function getLetterMatchCount(guessedWord, secretWord) {
  console.log(secretWord, 'secret word in function')
  const secretLetters = secretWord.split('');
  const guessedLetterSet = new Set(guessedWord);
  return secretLetters.filter(letter => guessedLetterSet.has(letter)).length;
}