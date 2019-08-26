<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <router-link :to="'/'" class="navbar-brand">Anagramador</router-link>
      
        <button class="navbar-toggler" data-target="#navbar" data-toggle="collapse" type="button">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbar">
          <div class="navbar-nav ml-auto">
            <router-link :to="route.path" class="nav-item nav-link" v-bind:key="route.description" v-for="route in routes" v-show="route.path != '/'">
              {{ route.description }}
            </router-link>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
  import { routes } from '@/router';
  
  export default {
    name: "HeaderComponent",
    
    data() {
      return {
        routes: routes
      }
    }
  }
</script>
