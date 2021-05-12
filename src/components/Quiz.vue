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

    <div
      v-if="stage=='quiz'"
      class="mx-2"
    >
      <div
        :class="[
          'mb-10',
          screen.smAndDown?'wrapper-sm':'wrapper-lg'
        ]"
      >
        <text-question
          :counter="page"
          :question="questions[page-1].question"
        ></text-question>
      </div>
      
      <v-row
        :class="[
          'pa-1',
          screen.smAndDown?'wrapper-sm':'wrapper-lg'
        ]"
        style="overflow-y: auto;"
      >
        <v-col
          v-for="(choice,key) in questions[page-1].choices"
          :key="key"
          cols="12" sm="12" md="12" :lg="sizes[questions[page-1].size].cols" :xl="sizes[questions[page-1].size].cols"
          :class="[
            'py-0',
            key+1!==questions[page-1].length?`mb-5 ${sizes[questions[page-1].size].class}`:''
          ]"
        >
          <button-choice
            :hide-tooltip="questions[page-1].size!=='lg'"
            :active="isActive&&key==activeKey"
            :disable="isActive&&key!==activeKey"
            :letter="letters[questions[page-1].type][key]"
            :text="choice.answer"
            @click="next(key, choice.result)"
          ></button-choice>
        </v-col>
      </v-row>
    </div>

    <div
      v-else
      class="mx-2"
    >
      <div class="mb-10">
        <text-question
          question="How do I call you, summoner?"
        ></text-question>
      </div>
      
      <div
        :class="[
          'pa-1',
          screen.smAndDown?'wrapper-sm':'wrapper-lg'
        ]"
        style="overflow-y: auto;"
      >
        <div class="text-center">
          <v-text-field
            v-model="name"
            x-large
            outlined
            autofocus
            dark
            centered
            color="#e3a746"
            class="text-center justify-center"
          ></v-text-field>

          <base-button
            v-if="name"
            text="Next"
            @click="confirm"
          ></base-button>
        </div>
      </div>
    </div>

    <div
      v-if="stage=='quiz'"
      style="position: absolute; bottom: 30px; min-width: 300px;"
    >
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
      // letter choices
      letters: {
        sm: ['Y', 'N'],
        md: [ 'W', 'A', 'S', 'D' ],
        lg: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
      },
      sizes: {
        sm: {
          class: 'pr-3',
          cols: '4'
        },
        md: {
          class: 'pr-2',
          cols: '6'
        },
        lg: {
          class: '',
          cols: '12'
        }
      },
      questions: [
        {
          question: "You're being harassed online, how will you deal with it?",
          type: 'md', size: 'md',
          choices: [
            { answer: "File a report", result: "mage" },
            { answer: "Gather screenshots", result: "slayer" },
            { answer: "Debate or defend", result: "tank" },
            { answer: "Block and unfollow", result: "hybrid" }
          ]
        },
        {
          question: "How do you deal with anger?",
          type: 'md', size: 'lg',
          choices: [
            { answer: "&#8220;I know we're both tired but I'd appreciate a little help.&#8221;", result: "marksman" },
            { answer: "...zzz...", result: "tank" },
            { answer: "<i>After five minutes</i>...&#8221;I-I'm sorry...&#8221;", result: "controller" },
            { answer: "*BURNS EVERYONE*", result: "fighter" }
          ]
        },
        {
          question: "The Magical Pill",
          type: 'md', size: 'md',
          choices: [
            { answer: "Invisibility", result: "slayer" },
            { answer: "Shape shift", result: "hybrid" },
            { answer: "Read minds", result: "mage" },
            { answer: "Teleport", result: "fighter" }
          ]
        },
        {
          question: "What element would be your bending power?",
          type: 'md', size: 'md',
          choices: [
            { answer: "Earth", result: "tank" },
            { answer: "Air", result: "controller" },
            { answer: "Water", result: "mage" },
            { answer: "Fire", result: "fighter" }
          ]
        },
        {
          question: "Which of these resembles you most?",
          type: 'md', size: 'lg',
          choices: [
            { answer: "Agressive, adventurous and impatient", result: "tank" },
            { answer: "Practical, stubborn and persistent", result: "controller" },
            { answer: "Intimate, honest and realist", result: "marksman" },
            { answer: "Extrovert, playful and inconsistent", result: "hybrid" }
          ]
        },
        {
          question: "You won the lottery, what would you do with the money?",
          type: 'lg', size: 'sm',
          choices: [
            { answer: "Family", result: "controller" },
            { answer: "Save", result: "fighter" },
            { answer: "Donate", result: "mage" },
            { answer: "Business", result: "marksman" },
            { answer: "Security", result: "slayer" },
            { answer: "Education", result: "tank" },
            { answer: "Travel", result: "hybrid" }
          ]
        },
        {
          question: "Equip yourself in a zombie apocalypse.",
          type: 'md', size: 'md',
          choices: [
            { answer: "First Aid Kit", result: "controller" },
            { answer: "Knife", result: "fighter" },
            { answer: "Flashlight", result: "marksman" },
            { answer: "Phone", result: "hybrid" }
          ]
        },
        {
          question: "This might be the reason you'll get behind the bars.",
          type: 'md', size: 'md',
          choices: [
            { answer: "Bullying", result: "mage" },
            { answer: "Adultery", result: "hybrid" },
            { answer: "Murder", result: "marksman" },
            { answer: "Corruption", result: "tank" }
          ]
        },
        {
          question: "Spirit Animal",
          type: 'md', size: 'md',
          choices: [
            { answer: "Monkey", result: "controller" },
            { answer: "Bird", result: "mage" },
            { answer: "Snake", result: "slayer" },
            { answer: "Bear", result: "fighter" }
          ]
        },
        {
          question: "At parties, I tend to be the...",
          type: 'md', size: 'md',
          choices: [
            { answer: "loner", result: "fighter" },
            { answer: "life of the party", result: "marksman" },
            { answer: "missing in action", result: "slayer" },
            { answer: "designated driver", result: "controller" }
          ]
        },
        {
          question: "You're alone in the house and you hear noises while you're sleeping in the middle of the night, what will you do?",
          type: 'md', size: 'lg',
          choices: [
            { answer: "Dial 9-1-1", result: "marksman" },
            { answer: "Observe and investigate", result: "controller" },
            { answer: "Pretend to sleep but hold onto a hammer", result: "mage" },
            { answer: "Record everything on a live video", result: "hybrid" }
          ]
        },
        {
          question: "What would be the best spot for vacation?",
          type: 'md', size: 'md',
          choices: [
            { answer: "Beach", result: "fighter" },
            { answer: "Mountain", result: "hybrid" },
            { answer: "Staycation", result: "marksman" },
            { answer: "Travel", result: "slayer" }
          ]
        },
        {
          question: "What scares you the most?",
          type: 'md', size: 'md',
          choices: [
            { answer: "Alone at home", result: "marksman" },
            { answer: "Buried alive", result: "fighter" },
            { answer: "Being a burden", result: "controller" },
            { answer: "Short life", result: "tank" }
          ]
        },
        {
          question: "You're losing in a war, what would be your alternative plan?",
          type: 'md', size: 'md',
          choices: [
            { answer: "Surprise attack", result: "slayer" },
            { answer: "Use smoke screen to escape", result: "controller" },
            { answer: "Disguise", result: "mage" },
            { answer: "Poison attack", result: "hybrid" }
          ]
        },
        {
          question: "What would you die for?",
          type: 'md', size: 'md',
          choices: [
            { answer: "Love", result: "controller" },
            { answer: "Dignity", result: "tank" },
            { answer: "Money", result: "slayer" },
            { answer: "Family", result: "mage" }
          ]
        }
      ]
    }),

    computed: {
      screen() { return this.$vuetify.breakpoint },
      stage: {
        get() { return this.$store.getters['main/stage'] },
        set(val) { this.$store.commit('main/setStage', val) }
      },
      name: {
        get() { return this.$store.getters['main/name'] },
        set(val) { this.$store.commit('main/setName', val) }
      },
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

    mounted() {
      var me = this;

      window.addEventListener("keypress", e => {
        if (me.name && me.stage=='main')
          if (e.key == 'Enter')
            me.confirm();
      });

      window.addEventListener("keypress", e => {
        if (me.stage=='quiz') {
          var question = me.questions[me.page-1]
          var type = question.type;
          var letters = me.letters[type];

          letters.forEach((letter, letterIndex) => {
            var choice = question.choices.find((choice, choiceIndex) => choiceIndex == letterIndex);
            var letterString = e.key==letter || e.key==letter.toLowerCase();
            
            if (letterString && !me.isActive)
              me.next(letterIndex, choice.result);
          });
        }
      });
    },

    methods: {
      confirm() {
        this.stage = 'quiz';
      },
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
            this.stage = 'last';
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
    max-width: 60vw;
    max-height: 80vh;
  }
</style>