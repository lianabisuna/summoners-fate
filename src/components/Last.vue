<template>
  <div class="d-flex align-center justify-center" style="height: 100%;">
    <div :class="[ 'mx-5', this.screen.smAndDown?'wrapper-sm':'wrapper-lg' ]">
      <div class="text-center mb-10 paragraph-4 text-yellow">Mage</div>
      
      <h2 class="mb-5 text-center">The stars are aligned for you as a Mage, Romeo.</h2>

      <div class="text-justify mb-10 overflow-y-auto" style="max-height: 40vh;">Mages are champions who typically possess great reach, ability-based area of effect damage and crowd control, and who use all of these strengths in tandem with each other to trap and destroy enemies from a distance. Specializing in magic damage, often burst damage, and therefore investing heavily in items that allow them to cast stronger and faster spells, mages excel at chaining their abilities together in powerful combos in order to win fights, though their abilities also tend to be difficult to land and can be mitigated, if not avoided completely, by their targets if they react in time.</div>

      <div class="text-center">
        <base-button
          text="Share"
        ></base-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LastPage',

    computed: {
      screen() { return this.$vuetify.breakpoint }
    },
  }
</script>

<style lang="scss" scoped>
  .wrapper-sm {
    max-width: 100vw;
  }

  .wrapper-lg {
    max-width: 40vw;
  }
</style>