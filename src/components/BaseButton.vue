<template>
  <v-tooltip
    right
    color="transparent"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        tile
        :x-large="screen.lgAndUp"
        :large="screen.smAndDown"
        class="button"
        v-on="{...on, ...$listeners }"
        v-bind="{...attrs, ...$attrs}"
        :color="blue?'#0BC6E3':'#e3a746'"
      >
        {{ text }}
      </v-btn>
    </template>

    <span
      v-if="screen.lgAndUp"
      class="text-caption"
    >
      press <strong>Enter</strong> ↵
    </span>
  </v-tooltip>
</template>

<script>
  export default {
    name: 'BaseButton',

    computed: {
      screen() { return this.$vuetify.breakpoint },
    },

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

  /* Smartphones (portrait and landscape) ----------- */
  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    .button {
      font-size: 22px !important;
    }
  }
</style>