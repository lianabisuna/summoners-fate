<template>
  <v-tooltip
    right
    color="transparent"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        v-on="on"
        tile
        x-large
        :color="blue?'#0BC6E3':'#e3a746'"
        class="button"
      >
        {{ text }}
      </v-btn>
    </template>
    <span class="text-caption">press <strong>Enter</strong> ↵</span>
  </v-tooltip>
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
    font-size: 25px !important;
    color: #193352 !important;
    letter-spacing: 0.5px;
    font-weight: 800;
    outline: 2px solid #ffffff;
  }
</style>