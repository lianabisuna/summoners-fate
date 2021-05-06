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
    height: 100vh;
    width: 100%;
    background: #000000;
    color: #ffffff;
  }
</style>