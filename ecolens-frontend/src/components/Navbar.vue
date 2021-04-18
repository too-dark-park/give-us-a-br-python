<template>
    <nav class="navalicious">
        <span class="cheese-items">
            <a href="#main-section">EcoLens</a>
            <a href="#form-section">Analyse</a>
            <a href="#about-section">About</a>
        </span>
    </nav>    
</template>

<script lang="ts">
import{ Vue, Component } from 'vue-property-decorator'
@Component({})
export default class Navbar extends Vue{
    
}
</script>

<style scoped>
.navalicious {
  text-transform: uppercase;
  background-color: #76e2f5;
  min-height: 40px;
  padding: 10px;
  text-align: right;
  position: fixed;
  width: 100%;
  font-weight: 600;
  z-index: 999;
}

.navalicious a {
  color: #311881;
  text-decoration: none;
  letter-spacing: 15px;
  margin-right: 30px;
}

.navalicious a:hover {
  color: #ffeabf;
}

.cheese-items {
    padding-right: 20px;
}


</style>