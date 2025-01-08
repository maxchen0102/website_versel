<template>
  <Navbar/>
  <router-view/>
  <FooterDesign/>
</template>

<script>
import Navbar from './components/navbar/Navbar.vue'
import FooterDesign from "./components/footers/FooterDesign.vue";

export default {
  name: 'App',
  components: {
    Navbar,

    FooterDesign,
  }
}
</script>

<style>
.three-col-context  {
  margin: 1.5rem 0.75rem;

}



</style>
