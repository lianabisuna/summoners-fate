<template>
  <div :class="[ 'd-flex', this.screen.smAndDown?'wrapper-sm':'wrapper-lg' ]">
    <v-progress-linear
      color="#0BC6E3"
      value="100"
      height="8"
      class="mr-2"
    ></v-progress-linear>
    
    <v-progress-linear
      color="#0BC6E3"
      value="100"
      height="8"
      class="mr-2"
    ></v-progress-linear>

    <v-progress-linear
      color="#0BC6E3"
      value="100"
      height="8"
      class="mr-2"
    ></v-progress-linear>

    <v-progress-linear
      color="#c1c1c1"
      value="100"
      height="8"
    ></v-progress-linear>
  </div>
</template>

<script>
  export default {
    name: 'ProgressBar',

    computed: {
      screen() { return this.$vuetify.breakpoint }
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper-sm {
    max-width: 100vw;
  }

  .wrapper-lg {
    min-width: 100%;
  }
</style>