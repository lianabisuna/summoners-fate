<template>
  <v-tooltip
    :disabled="hideTooltip"
    left
    color="transparent"
  >
    <template v-slot:activator="{ on, attrs }">
      <div class="d-flex align-center justify-center text-center">
        <v-btn
          tile
          dark
          text
          :large="screen.lgAndUp"
          depressed
          :ripple="false"
          :min-width="screen.smAndDown?'38':'44'"
          :max-width="screen.smAndDown?'38':'44'"
          :height="screen.smAndDown?'38':'44'"
          color="#e3a746"
          :class="[
            'button-letter mr-3',
            isActive?'active-letter':'letter',
            { 'unclickable':isDisabled }
          ]"
        >
          {{ letter }}
        </v-btn>

        <v-hover v-slot="{ hover }">
          <div
            v-bind="{...attrs,  ...$attrs}"
            v-on="{...on, ...$listeners}"
            :color="hover?'rgba(227,167,70,0.3)':'rgba(227,167,70,0.1)'"
            :class="[
              'button-text text-none px-3 justify-start d-flex align-center',
              { 'active-text':isActive, 'unclickable':isDisabled }
            ]"
            @click="isActive=true"
            v-html="text"
          ></div>
        </v-hover>
      </div>
    </template>

    <span
      v-if="screen.lgAndUp"
      class="text-caption"
    >
      press key →
    </span>
  </v-tooltip>
</template>

<script>
  export default {
    name: 'BaseChoice',

    props: {
      disable: { type: Boolean, default: false },
      active: { type: Boolean, default: false },
      letter: { type: String, default: '' },
      text: { type: String, default: '' },
      hideTooltip: { type: Boolean, default: false }
    },

    watch: {
      // active or isActive
      active(val) {
        this.isActive = val;
      },

      isActive(val) {
        this.$emit('input', val)
      },
      // disable or isDisabled
      disable(val) {
        this.isDisabled = val;
      },

      isDisabled(val) {
        this.$emit('input', val)
      }
    },

    computed: {
      screen() { return this.$vuetify.breakpoint }
    },

    data: () => ({
      isActive: false,
      isDisabled: false
    })
  }
</script>

<style lang="scss" scoped>
  .letter {
    -webkit-box-shadow:inset 0px 0px 0px 1px #e3a746;
    -moz-box-shadow:inset 0px 0px 0px 1px #e3a746;
    box-shadow:inset 0px 0px 0px 1px #e3a746;
    color: #e3a746 !important;
  }
  
  .active-letter {
    background: #e3a746;
    outline: 3px solid #e3a746;
    color: #000000 !important;
  }
  
  .active-text {
    outline: 3px solid #e3a746 !important;
  }

  .button-text {
    color: #e3a746 !important;
    font-size: 22px !important;
    outline: 1px solid #e3a746;
    min-height: 44px;
    width: 100%;
    cursor: pointer;
    background: rgba(227,167,70,0.1);
  }

  .button-text:hover {
    background: rgba(227,167,70,0.3);
  }

  .button-letter {
    font-size: 22px !important;
  }

  .button-letter::before {
    background-color: transparent !important;
  }

  /* Smartphones (portrait and landscape) ----------- */
  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    .button-letter, .button-text {
      font-size: 18px !important;
      min-height: 38px;
    }
  }

  .unclickable {
    pointer-events: none !important;
    opacity: 0.4;
  }
</style>