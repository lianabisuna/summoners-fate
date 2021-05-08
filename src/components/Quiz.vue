<template>
  <div class="d-flex align-center justify-center mx-2" style="height: 100%;">
    <div style="position: absolute; top: 30px;">
      <v-img
        contain
        src="@/assets/logo.png"
        alt="logo"
        width="70"
        class="mx-auto mb-5"
      ></v-img>
    </div>

    <div class="mx-2">
      <div class="mb-10">
        <base-question
          counter="1"
          question="What kind of role are you into?"
        ></base-question>
      </div>
      
      <div :class="[ 'pa-1', this.screen.smAndDown?'wrapper-sm':'wrapper-lg' ]" style="overflow-y: auto;">
        <div class="mb-5">
          <base-choice
            letter="W"
            text="Marksman"
            @click="showResult"
          ></base-choice>
        </div>

        <div class="mb-5">
          <base-choice
            letter="A"
            text="Support"
          ></base-choice>
        </div>

        <div class="mb-5">
          <base-choice
            letter="S"
            text="Assasin"
          ></base-choice>
        </div>

        <div>
          <base-choice
            letter="D"
            text="Mage"
          ></base-choice>
        </div>
      </div>
    </div>

    <div style="position: absolute; bottom: 30px; min-width: 300px;">
      <progress-bar></progress-bar>
    </div>
  </div>
</template>

<script>
  import ProgressBar from './Progress';

  export default {
    name: 'QuizPage',

    components: {
      ProgressBar
    },

    computed: {
      screen() { return this.$vuetify.breakpoint },
      component: {
        get() { return this.$store.getters['main/component'] },
        set(val) { this.$store.commit('main/setComponent', val) }
      }
    },

    methods: {
      showResult() {
        this.component = 'LastPage'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper-sm {
    max-width: 100vw;
    max-height: 50vh;
  }

  .wrapper-lg {
    max-width: 70vw;
    max-height: 80vh;
  }
</style>