<template>
  <main>
    <div class="container text-center mt-5">
      <h1 class="mb-4">Como Jogar</h1>
      
      <instruction :instructions="instructions"/>
    </div>
  </main>
</template>

<script>
  import InstructionComponent from './InstructionComponent';
  
  export default {
    name: "InstructionsComponent",
    
    components: {
      instruction: InstructionComponent
    },
    
    data() {
      return {
        instructions: [
          'Clique no botão referente a letra desejada para criar um anagrama',
          'Espere que a palavra seja formada para que suas letras voltem',
          'Clique no botão limpar para começar a escrever uma outra palavra'
        ]
      };
    }
  }
</script>
