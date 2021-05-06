<template>
  <div class="d-flex align-center">
    <v-btn
      tile
      x-large
      :color="blue?'#0BC6E3':'#e3a746'"
      class="text-none button"
    >
      {{ text }}
    </v-btn>
    <span class="text-caption ml-5">press <strong>Enter</strong> ↵</span>
  </div>
</template>

<script>
  export default {
    name: 'BaseButton',

    props: {
      text: { type: String, default: '' },
      blue: { type: Boolean, default: false }
    }
  }
</script>

<style lang="scss" scoped>
  .button {
    font-size: 23px !important;
    color: #193352 !important;
    letter-spacing: normal;
    font-weight: bold;
    outline: 2px solid #ffffff;
  }
</style>