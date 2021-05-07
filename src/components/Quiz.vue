<template>
  <div class="d-flex align-center justify-center" style="height: 100%;">
    <div style="position: absolute; top: 30px;">
      <v-img
        contain
        src="@/assets/logo.png"
        alt="logo"
        width="80"
        class="mx-auto mb-5"
      ></v-img>
    </div>

    <div style="min-width: 50vw;" class="mx-5">
      <div class="mb-10">
        <base-question
          counter="1"
          question="What kind of role are you into?"
        ></base-question>
      </div>

      <div class="ml-10">
        <div class="mb-5">
          <base-choice
            letter="W"
            text="Mage"
            min-width="50%"
            @click="showResult"
          ></base-choice>
        </div>

        <div class="mb-5">
          <base-choice
            letter="A"
            text="Assasin"
            min-width="50%"
          ></base-choice>
        </div>

        <div class="mb-5">
          <base-choice
            letter="S"
            text="Tank"
            min-width="50%"
          ></base-choice>
        </div>

        <div>
          <base-choice
            letter="D"
            text="Marksman"
            min-width="50%"
          ></base-choice>
        </div>
      </div>
    </div>

    <div style="position: absolute; bottom: 30px;">
      <v-progress-linear value="15"></v-progress-linear>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'QuizPage',

    computed: {
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

</style>