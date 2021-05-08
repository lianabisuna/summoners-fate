<template>
  <div class="d-flex align-center justify-center mx-2" style="height: 100%;">
    <div style="position: absolute; top: 30px;">
      <v-img
        contain
        src="@/assets/logo.png"
        alt="logo"
        width="70"
        class="mx-auto mb-5"
      ></v-img>
    </div>

    <div class="mx-2">
      <div class="mb-10">
        <text-question
          :counter="page"
          :question="questions[page-1].question"
        ></text-question>
      </div>
      
      <div
        :class="[
          'pa-1',
          screen.smAndDown?'wrapper-sm':'wrapper-lg'
        ]"
        style="overflow-y: auto;"
      >
        <div
          class="mb-5"
          v-for="(choice,key) in questions[page-1].choices"
          :key="key"
        >
          <button-choice
            :active="isActive&&key==activeKey"
            :disable="isActive&&key!==activeKey"
            :letter="letters[key]"
            :text="choice.answer"
            @click="next(key, choice.result)"
          ></button-choice>
        </div>
      </div>
    </div>

    <div style="position: absolute; bottom: 30px; min-width: 300px;">
      <progress-bar></progress-bar>
    </div>
  </div>
</template>

<script>
  import ProgressBar from './Progress';
  import ButtonChoice from './Choice';
  import TextQuestion from './Question';

  export default {
    name: 'QuizPage',

    components: {
      ProgressBar,
      ButtonChoice,
      TextQuestion
    },

    data: () => ({
      isActive: false,
      activeKey: null,
      letters: [ 'W', 'A', 'S', 'D' ],
      questions: [
        {
          question: "How would you describe your playstyle?",
          choices: [
            { answer: "Agressive", result: "fighter" },
            { answer: "Calculated", result: "mage" },
            { answer: "Sneaky", result: "hybrid" },
            { answer: "Tactical", result: "tank" }
          ]
        },
        {
          question: "Which of the following do you excel the most at?",
          choices: [
            { answer: "Farm minions", result: "marksman" },
            { answer: "Heal, shield and protect", result: "controller" },
            { answer: "Get kills", result: "slayer" },
            { answer: "Quick thinking and control", result: "mage" }
          ],
        },
        {
          question: "Imagine you are being chased by the entire enemy team! What would you rather do?",
          choices: [
            { answer: "Try to use my crowd control abilities to stop them.", result: "mage" },
            { answer: "Stealth away and leave them wonder where I went.", result: "slayer" },
            { answer: "Stop and fight them. Might get a kill or two before I die.", result: "fighter" },
            { answer: "Ping for help and try to look for my team.", result: "marksman" }
          ]
        }
      ]
    }),

    computed: {
      screen() { return this.$vuetify.breakpoint },
      component: {
        get() { return this.$store.getters['main/component'] },
        set(val) { this.$store.commit('main/setComponent', val) }
      },
      page: {
        get() { return this.$store.getters['main/page'] },
        set(val) { this.$store.commit('main/setPage', val) }
      },
      total: {
        get() { return this.$store.getters['main/total'] },
        set(val) { this.$store.commit('main/setTotal', val) }
      }
    },

    methods: {
      next(key, role) {
        if (this.page < this.total) {
          this.isActive = true;
          this.activeKey = key;
          this.$store.commit(`main/increaseRole`, role);
          setTimeout(()=>{
            this.isActive = false;
            this.page++;
          }, 500);
        }
        else {
          this.isActive = true;
          this.activeKey = key;
          this.$store.commit(`main/increaseRole`, role);
          setTimeout(()=>{
            this.isActive = false;
            this.component = 'LastPage'
          }, 500);
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper-sm {
    max-width: 100vw;
    max-height: 50vh;
  }

  .wrapper-lg {
    max-width: 70vw;
    max-height: 80vh;
  }
</style>