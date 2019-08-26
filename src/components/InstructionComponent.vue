<template>
  <div>
    <p>{{ instructions[0] }}</p>
    <button class="btn btn-primary" v-instruction:previous="instructions">Anterior</button>
    <button class="btn btn-primary" v-instruction.next="instructions">Próxima</button>
  </div>
</template>

<script>
  export default {
    name: "InstructionComponent",
    props: ['instructions']
  }
</script>
