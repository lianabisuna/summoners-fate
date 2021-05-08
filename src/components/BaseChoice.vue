<template>
  <v-tooltip
    left
    color="transparent"
  >
    <template v-slot:activator="{ on, attrs }">
      <div class="d-flex align-start justify-center text-center">
        <v-btn
          tile
          dark
          text
          min-width="44"
          max-width="44"
          color="#e3a746"
          :ripple="false"
          :class="[ 'button-letter no-bg-hover mr-5', active?'active-letter':'letter' ]"
          depressed
          large
        >
          {{ letter }}
        </v-btn>
        <v-hover v-slot="{ hover }">
          <div
            v-bind="{...attrs,  ...$attrs}"
            v-on="{...on, ...$listeners}"
            :color="hover?'rgba(227,167,70,0.3)':'rgba(227,167,70,0.1)'"
            :class="[ 'px-3 button-text text-none justify-start d-flex align-center', { 'active-text':active } ]"
            @click="active=!active"
          >
            <span>{{ text }}</span>
          </div>
        </v-hover>
      </div>
    </template>
    <span class="text-caption">press key →</span>
  </v-tooltip>
</template>

<script>
  export default {
    name: 'BaseChoice',

    props: {
      letter: { type: String, default: '' },
      text: { type: String, default: '' }
    },

    data: () => ({
      active: false
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

  .no-bg-hover::before {
    background-color: transparent !important;
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

  /* Smartphones (portrait and landscape) ----------- */
  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    .button-letter, .button-text {
      font-size: 18px !important;
    }
  }
</style>