<template>
    <div id="App">
      <Nav />
      <nav-second />
      <router-view />
      <TheFooter/>
    </div>
  </template>
  
  <script>
import Nav from './components/layouts/Nav.vue';
import navSecond from './components/layouts/nav-second.vue';
import TheFooter from './components/layouts/TheFooter.vue';

  // import SwiperSlider from './components/SwiperSlider';
  export default {
      name: "App",
      components: {
    Nav,
    navSecond,
    TheFooter
}
  }
  </script>

  <style>
  
  </style>
  