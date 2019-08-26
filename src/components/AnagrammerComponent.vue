<template>
  <main>
    <div class="container mt-5">
      <h1 class="text-center mb-4">Vamos Jogar!</h1>
      
      <div class="alert alert-success mt-3" v-show="message">
        {{ message }}
      </div>
    
      <div class="text-center mt-3">
        <button @click="insertLetter(letter, index)" class="btn btn-info" v-for="(letter, index) in letters" v-show="removedButtons.indexOf(index) < 0">
          {{ letter }}
        </button>
      </div>
    
      <div class="text-center">
        <p class="mt-3">{{ anagram }}</p>
      
        <button @click="clearAnagram" class="btn btn-secondary">Limpar</button>
      </div>
    
      <div class="text-center words">
        <ul>
          <li v-for="word in hiddenWords">
            <div class="word" v-show="wordsFound.indexOf(word.anagram) > -1">
              {{ word.anagram }}
            </div>
          
            <div class="word representation" v-show="wordsFound.indexOf(word.anagram) == -1">
              {{ word.wordRepresentation }}
            </div>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
  import AnagrammerService from '@/services/AnagrammerService';

  export default {
    name: "AnagrameerComponent",
    
    data() {
      return {
        letters: [],
        words: [],
        hiddenWords: [],
        wordsFound: [],
        removedButtons: [],
        anagram: '',
        message: ''
      };
    },
    
    methods: {
      insertLetter(letter, index) {
        this.anagram += letter;
        this.removedButtons.push(index);
        
        if (this.words.indexOf(this.anagram) > -1 && this.wordsFound.indexOf(this.anagram) == -1){
          this.wordsFound.push(this.anagram);

          if (this.wordsFound.length == 1)
            this.message = 'Parabéns, você encontrou seu primeiro anagrama.';

          if (this.wordsFound.length == (this.words.length -1))
            this.message = 'Vamos lá, falta só uma.'

          if (this.wordsFound.length == this.words.length)
            this.message = 'Parabéns, você encontrou todos os anagramas!';

          setTimeout(() => this.message = '', 2500);
          this.clearAnagram();
        }
      },
      
      clearAnagram() {
        this.anagram = '';
        this.removedButtons.length = 0;
      }
    },

    created() {
      this.service = new AnagrammerService(this.$resource);
      this.service.generateAnagram(3, 7).then((anagrammer) => {
        this.letters = anagrammer.letters;
        this.words = anagrammer.anagrams;
        this.hiddenWords = this.service.hideWords(this.words);
      });
    }
  }
</script>

<style scoped>
  li {
    list-style: none;
    display: inline;
  }
  
  .word {
    width: 25%;
    display: inline-block;
    float: left;
    font-size: 20px;
    color: steelblue;
    margin-bottom: 15px;
  }
  
  .representation {
    color: dimgray;
  }
</style>
