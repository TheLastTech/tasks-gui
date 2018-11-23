<template>
  <div class="d-block d-sm-block d-md-none text-center">
    <img :src="QuestionLine.User.avatar" class="mx-auto"><h5 class="text-manager-qa-section-name text-muted   ">{{
    QuestionLine.User.firstName }} {{ QuestionLine.User.lastName }}</h5>
    <span class="text-muted  ">Total Comments: {{ Math.floor(Math.random() * 1000) +1 }}</span>
  </div>
</template>
<script>
  export default {
    name: 'smaller-qa-credit-line',
    props: {
      QuestionLine: {},
    },
  };
</script>
