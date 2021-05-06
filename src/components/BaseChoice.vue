<template>
  <v-tooltip
    left
    color="transparent"
  >
    <template v-slot:activator="{ on, attrs }">
      <div>
        <v-btn
          tile
          dark
          text
          min-width="36"
          max-width="36"
          color="#e3a746"
          :ripple="false"
          :class="[ 'no-bg-hover mr-5', active?'active-letter':'letter' ]"
        >
          {{ letter }}
        </v-btn>
        <v-hover v-slot="{ hover }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            tile
            dark
            :color="hover?'rgba(227,167,70,0.4)':'rgba(227,167,70,0.2)'"
            :class="[ 'text-yellow text-none', { 'active-text':active } ]"
            @click="active=!active"
          >
            {{ text }}
          </v-btn>
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
    -webkit-box-shadow:inset 0px 0px 0px 1px rgba(227,167,70,0.2);
    -moz-box-shadow:inset 0px 0px 0px 1px rgba(227,167,70,0.2);
    box-shadow:inset 0px 0px 0px 1px rgba(227,167,70,0.2);
    color: #e3a746 !important;
  }

  .no-bg-hover::before {
    background-color: transparent !important;
  }
  
  .active-letter {
    background: #e3a746;
    outline: 2px solid #e3a746;
    color: #000000 !important;
  }
  
  .active-text {
    outline: 2px solid #e3a746;
  }

  .text-yellow {
    color: #e3a746 !important;
  }
</style>