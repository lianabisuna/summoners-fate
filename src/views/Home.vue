<template>
  <div class="d-flex align-center justify-center" style="height: 100%;">
    <div>
      <h1>Home</h1>
      <base-question
        counter="1"
        question="How should I call you, summoner?"
      ></base-question>
      <base-choice
        letter="W"
        text="Answer"
      ></base-choice>
      <base-button
        text="Let stars guide you ➜"
      ></base-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home'
  }
</script>
