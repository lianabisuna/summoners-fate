<template>
  <div
    :class="[
      'd-flex',
      screen.smAndDown?'wrapper-sm':'wrapper-lg'
    ]"
  >
    <v-progress-linear
      v-for="key in total"
      :key="key"
      :color="key<page?'#0BC6E3':'#c1c1c1'"
      value="100"
      height="8"
      :class="[ key+1!==total.length?'mr-2':'' ]"
    ></v-progress-linear>
  </div>
</template>

<script>
  export default {
    name: 'ProgressBar',

    computed: {
      screen() { return this.$vuetify.breakpoint },
      page: {
        get() { return this.$store.getters['main/page'] },
        set(val) { this.$store.commit('main/setPage', val) }
      },
      total: {
        get() { return this.$store.getters['main/total'] },
        set(val) { this.$store.commit('main/setTotal', val) }
      }
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