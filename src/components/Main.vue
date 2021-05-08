<template>
  <div class="d-flex align-center justify-center" style="height: 100%;">
    <div class="text-center mx-2">
      <v-img
        contain
        src="@/assets/logo.png"
        alt="logo"
        width="120"
        class="mx-auto mb-5"
      ></v-img>

      <v-img
        contain
        src="@/assets/banner.png"
        alt="banner"
        :width="screen.smAndDown?'90vw':'500'"
        class="mx-auto"
      ></v-img>

      <div class="my-10 paragraph-1">The rift awaits you, let the stars be your guide.</div>

      <base-button
        text="Start"
        class="mx-auto"
        @click="start"
      ></base-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MainPage',

    computed: {
      screen() { return this.$vuetify.breakpoint },
      component: {
        get() { return this.$store.getters['main/component'] },
        set(val) { this.$store.commit('main/setComponent', val) }
      }
    },

    methods: {
      start() {
        this.component = 'QuizPage';
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>