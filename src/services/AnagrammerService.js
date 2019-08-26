export default class AnagrammerService {

  constructor(resource) {
    this._resource = resource('static/json/dictionary.json');
    this._words = [];
  }

  dictionary() {
    return this._resource
      .query()
      .then(
        (res) => res.json(),
        (err) => {
        throw new Error('Dicionário não encontrado');
      });
  }

  generateAnagram(min, max, baseWord = '') {
    return this.dictionary().then((words) => {
      this._words = words;
      if (baseWord.length == 0)
        baseWord = this._getWordByLength(max);
      let letters = baseWord.split('');
      let anagrams = this._findWords(baseWord, min, max);
      anagrams = anagrams.sort((p1, p2) => p1.length - p2.length);
      letters = letters.sort((l1, l2) => Math.random());

      return {letters, anagrams};
    });
  }

  findAnagram(word, min = 3, max = 7) {
    return this.generateAnagram(min, word.length, word.toUpperCase());
  }

  hideWords(words) {
    let anagrams = [];

    words.forEach((anagram) => {
      anagrams.push({
        wordRepresentation: anagram.replace(/[abcdefghijklmnopqrstuvwxyz]/ig, '*'),
        anagram
      });
    });

    return anagrams;
  }

  _getWordByLength(max) {
    let wordsWithMaxLength = this._words.filter((word) => word.length == max);
    let index = Math.floor(Math.random() * wordsWithMaxLength.length);

    return wordsWithMaxLength[index];
  }

  _findWords(baseWord, min, max) {
    return this._words.filter(
      (word) => {
        return word.length >= min && word.length <= max && this._hasAllLetters(baseWord, word) && !this._hasMoreLetters(baseWord, word);
      }
    );
  }

  _hasAllLetters(baseWord, word) {
    let has = true;

    word.split('').forEach((letter) => {
      if (!baseWord.includes(letter))
        has = false;
    });

    return has;
  }

  _hasMoreLetters(baseWord, word) {
    let has = false;

    baseWord.split('').forEach((letter) => {
      if ((word.match(new RegExp(letter, 'g')) || []).length > (baseWord.match(new RegExp(letter, 'g'))|| []).length)
        has = true;
    });

    return has;
  }

}
