<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    name: 'App',

    data: () => ({
      //
    }),
  };
</script>

<style lang="scss">
  @font-face {
    font-family: "Optimus Princeps";
    src: url("./assets/font/OptimusPrinceps.ttf") format("truetype");
  }

  #app {
    max-height: 100vh;
    max-width: 100vw;
    overflow: hidden;
    background-image:
      /* top, transparent red */ 
      linear-gradient(
        rgba(0, 0, 0, 0.5), 
        rgba(0, 0, 0, 0.5)
      ),
      /* bottom, image */
      url('~@/assets/background.png');
    background-position: center;
    background-size: cover;
    color: #ffffff;
  }

  .paragraph-1 {
    font-size: 1.5em;
  }

  .paragraph-4 {
    font-size: 4em;
    font-family: 'Optimus Princeps';
  }

  .text-yellow {
    color: #e3a746;
  }

  /* Smartphones (portrait and landscape) ----------- */
  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    .paragraph-1 {
      font-size: 1.2em;
    }

    .paragraph-4 {
      font-size: 3em;
    }
  }

  /* iPads (portrait and landscape) ----------- */
  @media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {
    //
  }

  /* Desktops and laptops ----------- */
  @media only screen  and (min-width : 1224px) {
    //
  }
</style>