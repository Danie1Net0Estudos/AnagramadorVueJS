import Vue from 'vue';

Vue.directive('instruction', {
  bind(el, binding) {
    el.addEventListener('click', function () {
      let paragraph = el.parentElement.childNodes[0];
      let instructions = binding.value;
      let instruction = paragraph.innerHTML;

      if (binding.arg == 'previous') {
        for (let i = 0; i < instructions.length; i++) {
          if (paragraph.innerHTML == instructions[i] && i != 0)
            instruction = instructions[i - 1];
        }
      }

      if (binding.modifiers.next) {
        for (let i = 0; i < instructions.length; i++) {
          if (paragraph.innerHTML == instructions[i] && (i + 1) != instructions.length)
            instruction = instructions[i + 1];
        }
      }

      paragraph.innerHTML = instruction;
    });
  }
})
