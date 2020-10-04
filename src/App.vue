<template>
  <v-app>
    <v-main>
      {{token}}
      <Login v-if="!this.$store.getters.isAuthenticated" />
      <product-list v-if="this.$store.getters.isAuthenticated" />

      <!-- <HelloWorld/> -->
    </v-main>
  </v-app>
</template>

<script>
import Login from './components/Login';
import ProductList from './components/ProductList'

// import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    Login,
    ProductList,

    // HelloWorld
  },

  data: () => ({
    //
  }),
  computed: {
    token() {
      return this.$store.state.token;
    }
  }
};
</script>
