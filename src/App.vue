<template>
  <Navbar/>
  <router-view/>
  <FooterDesign/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/modules/Navbar.vue'
import Carousel from "./components/Carousel.vue";
import Footer from "./components/Footer.vue";
import ThreeColumn from "./components/modules/ThreeColumn.vue";
import FeaturePic from "./components/modules/FeaturePic.vue";
import HomePage from "./components/HomePage.vue";
import FooterNormal from "./components/footers/FooterNormal.vue";
import FooterDesign from "./components/footers/FooterDesign.vue";

export default {
  name: 'App',
  components: {
    HelloWorld,
    Navbar,
    Carousel,
    Footer,
    ThreeColumn,
    FeaturePic,
    HomePage,
    FooterNormal,
    FooterDesign

  }
}
</script>

<style>
.three-col-context  {
  margin: 1.5rem 0.75rem;

}



</style>
