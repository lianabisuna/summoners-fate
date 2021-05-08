<template>
  <div class="d-flex align-center justify-center">
    <v-avatar
      color="#0BC6E3"
      size="20"
      class="mr-5"
    >
      <span class="white--text text-caption">{{ counter }}</span>
    </v-avatar>
    <span class="question">{{ question }}</span>
  </div>
</template>

<script>
  export default {
    name: 'BaseQuestion',

    props: {
      counter: { type: [String, Number], default: '' },
      question: { type: String, default: '' }
    }
  }
</script>

<style lang="scss" scoped>
  .question {
    font-size: 25px;
  }

  .counter {
    color: #0BC6E3;
  }

  /* Smartphones (portrait and landscape) ----------- */
  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    .question {
      font-size: 20px;
    }
  }
</style>