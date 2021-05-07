<template>
  <component
    :is="component"
  ></component>
</template>

<script>
  import MainPage from '@/components/Main';
  import QuizPage from '@/components/Quiz';
  import LastPage from '@/components/Last';

  export default {
    name: 'Home',

    components: {
      MainPage,
      QuizPage,
      LastPage
    },

    data: () => ({
      //
    }),

    computed: {
      screen() { return this.$vuetify.breakpoint },
      component() { return this.$store.getters['main/component'] }
    }
  }
</script>

<style lang="scss" scoped>
  //
</style>
