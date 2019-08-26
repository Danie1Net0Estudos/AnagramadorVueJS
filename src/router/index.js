import Vue from 'vue'
import Router from 'vue-router'
import AnagrammerComponent from "@/components/AnagrammerComponent";
import InstructionsComponent from '@/components/InstructionsComponent';
import AnagramSearchComponent from '@/components/AnagramSearchComponent';

Vue.use(Router)

export const routes = [
  {
    path: '/',
    name: 'anagramador',
    component: AnagrammerComponent,
    description: 'Anagramador'
  },
  {
    path: '/instrucoes',
    name: 'instrucoes',
    component: InstructionsComponent,
    description: 'Instruções'
  },
  {
    path: '/buscar',
    name: 'buscar',
    component: AnagramSearchComponent,
    description: 'Buscar Anagrama'
  }
];

export default new Router({
  mode: 'history',
  routes
});
