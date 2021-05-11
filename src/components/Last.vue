<template>
  <div
    class="d-flex align-center justify-center"
    style="height: 100%;"
  >
    <div
      :class="[
        'mx-5',
        screen.smAndDown?'wrapper-sm':'wrapper-lg'
      ]"
    >
      <div class="text-center mb-10 paragraph-4 text-yellow text-capitalize">{{ role }}</div>
      
      <div
        class="mb-10 overflow-y-auto"
        style="max-height: 70vh;"
      >
        <div class="mb-5 text-center paragraph-1">The stars are aligned for you as a {{ role }}, {{ name }}.</div>

        <div class="text-justify" v-text="roles[role].summary"></div>
      </div>

      <div class="text-center d-flex align-center justify-center">
        <div
          v-for="(champion,key) in roles[role].champions"
          :key="key"
        >
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <a
                :href="`https://na.leagueoflegends.com/en-us/champions/${champion.file}`"
                target="_blank"
              >
                <v-img
                  :src="require(`@/assets/champion/${champion.file}.png`)"
                  :alt="champion.name"
                  v-bind="attrs"
                  v-on="on"
                  :width="screen.smAndDown?'50':'70'"
                  :class="key+1!==roles[role].champions.length?'mr-5':''"
                ></v-img>
              </a>
            </template>

            <span class="text-capitalize">{{ champion.name }}</span>
          </v-tooltip>
        </div>
      </div>

      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <a
            href="#" 
            onclick="
              window.open(
                'https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(location.href), 
                'facebook-share-dialog', 
                'width=626,height=436'); 
              return false;
            "
            style="position: absolute;"
            class="facebook"
          >
            <v-icon
              v-bind="attrs"
              v-on="on"
              size="50"
              color="#1877f2"
            >
              mdi-facebook
            </v-icon>
          </a>
        </template>

        <span>Share on Facebook</span>
      </v-tooltip>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LastPage',

    data: () => ({
      roles: {
        controller: {
          summary: "Controllers assist their allies with potent utility and keep enemies at bay with crowd control. Weak when alone, supports are capable of massively amplifying their teammates' power to become the strongest class in group combat, supplying crucial utility or crowd control at clutch moments to save allies from death and enable takedowns on the enemy team. Supports typically start out by assisting the marksman in lane, as their own power is less dependent on items to function well, but over time their contribution expands as they lend aid to their entire team with both their spells and effective, yet affordable, items.",
          champions: [
            { name: 'soraka', file: 'soraka' },
            { name: 'thresh', file: 'thresh' },
            { name: 'seraphine', file: 'seraphine' },
            { name: 'yuumi', file: 'yuumi' }
          ]
        },
        fighter: {
          summary: "Fighters are a diverse group of short-ranged combatants who excel at both dealing and surviving damage. With easy access to heavy, continuous damage and a host of innate defenses, fighters thrive in extended fights as they seek out enemies to take down, but their limited range puts them at constant risk of being kept at bay by their opponents via crowd control, range and mobility.",
          champions: [
            { name: 'camille', file: 'camille' },
            { name: 'sett', file: 'sett' },
            { name: 'illaoi', file: 'illaoi' },
            { name: 'irelia', file: 'irelia' }
          ]
        },
        mage: {
          summary: "Mages are champions who typically possess great reach, ability-based area of effect damage and crowd control, and who use all of these strengths in tandem with each other to trap and destroy enemies from a distance. Specializing in magic damage, often burst damage, and therefore investing heavily in items that allow them to cast stronger and faster spells, mages excel at chaining their abilities together in powerful combos in order to win fights.",
          champions: [
            { name: 'lux', file: 'lux' },
            { name: 'ahri', file: 'ahri' },
            { name: 'vladimir', file: 'vladimir' },
            { name: 'veigar', file: 'veigar' }
          ]
        },
        marksman: {
          summary: "Marksmen are ranged champions whose power almost exclusively revolves around their basic attacks: using their reach to land massive continuous damage from a distance, marksmen are capable of taking down even the toughest of opponents when positioned behind the safety of their team, and excel at securing map objectives such as Dragon, Baron Nashor and turrets.",
          champions: [
            { name: 'ashe', file: 'ashe' },
            { name: 'twitch', file: 'twitch' },
            { name: 'miss fortune', file: 'miss-fortune' },
            { name: 'ezreal', file: 'ezreal' }
          ]
        },
        slayer: {
          summary: "Slayers are highly mobile champions who specialize in single target burst damage. What they generally lack in resilience, they more than make up for with their ability to quickly cover large distances, kill priority targets and retreat just as fast. Epitomizing a high risk, high reward playstyle, assassins are natural opportunists, and prefer to strike when their targets are alone and vulnerable, rather than engage them in a direct assault, favoring damage oriented item builds to capitalize on their offensive capabilities.",
          champions: [
            { name: 'akali', file: 'akali' },
            { name: 'zed', file: 'zed' },
            { name: 'shaco', file: 'shaco' },
            { name: 'kayn', file: 'kayn' }
          ]
        },
        tank: {
          summary: "Tanks are tough melee champions who sacrifice damage in exchange for powerful crowd control. While able to engage enemies in combat, a tank's purpose isn't usually to kill opponents; rather, tanks excel at disrupting enemies and diverting focus to themselves, allowing them to lock down specific targets, as well as remove threats from their allies.",
          champions: [
            { name: 'leona', file: 'leona' },
            { name: 'malphite', file: 'malphite' },
            { name: 'tahm kench', file: 'tahm-kench' },
            { name: 'galio', file: 'galio' }
          ]
        },
        hybrid: {
          summary: "Hybrids are a diverse group of champions who do not 'fit into a neat little box' in regards to other class specifications. As a consequence, many Hybrids exhibit 'zone control' either as a dominant or secondary attribute.",
          champions: [
            { name: 'teemo', file: 'teemo' },
            { name: 'singed', file: 'singed' },
            { name: 'gnar', file: 'gnar' },
            { name: 'zilean', file: 'zilean' },
          ]
        }
      }
    }),

    computed: {
      screen() { return this.$vuetify.breakpoint },
      role() { return this.$store.getters['main/role'] },
      name() { return this.$store.getters['main/name'] }
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

  .facebook {
    top: 50%; right: 20%;
  }

  /* Smartphones (portrait and landscape) ----------- */
  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    .facebook {
      top: 2%; right: 2%;
    }
  }
</style>