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
</style>