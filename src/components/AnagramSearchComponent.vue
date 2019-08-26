<template>
  <main>
    <div class="container mt-5">
      <h1 class="text-center">Buscar Anagrama</h1>
      
      <form @submit.prevent="fetchAnagram()">
        <div class="form-row mt-3">
          <div class="col-12">
            <label>Selecione os parâmetros da busca:</label>
          </div>
        </div>
        
        <div class="form-row">
          <div class="col-8">
            <input class="form-control" placeholder="Buscar Anagrama" type="text" v-model="word" v-on:keypress="validKey($event)">
          </div>
          <div class="col-2">
            <input class="form-control" max="7" min="3" placeholder="Mínimo" type="number" v-model="minLength">
          </div>
          <div class="col-2">
            <input class="form-control" max="7" min="3" placeholder="Máximo" type="number" v-model="maxLength">
          </div>
        </div>
      
        <div class="form-row mt-3">
          <div class="col-12">
            <button class="btn btn-primary float-right" type="submit">Buscar</button>
          </div>
        </div>
      </form>
  
      <ul class="text-center mt-5">
        <li v-for="anagram in anagrams">
          <div class="word">
            {{ anagram }}
          </div>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
  import AnagrammerService from '@/services/AnagrammerService';
  
  export default {
    name: "AnagramSearchComponent",
    
    data() {
      return {
        word: '',
        minLength: 3,
        maxLength: 7,
        anagrams: []
      }
    },
    
    methods: {
      fetchAnagram() {
        this.service.findAnagram(this.word, this.minLength, this.maxLength)
          .then((anagrammer) => this.anagrams = anagrammer.anagrams);
      },

      validKey(event) {
        if (!/^[a-zA-Z]$/.test(event.key))
          event.preventDefault();
      }
    },
    
    created() {
      this.service = new AnagrammerService(this.$resource);
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
</style>
