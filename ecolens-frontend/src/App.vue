<template>
  <v-app>
    <v-main>
      <Navbar/>
      <EcoLensContainer/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';
import Navbar from './components/Navbar.vue';
import EcoLensContainer from './components/EcoLensContainer.vue';

export default Vue.extend({
  name: 'App',

  components: {
    EcoLensContainer,
    Navbar
  }
});
</script>


