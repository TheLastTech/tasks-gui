<template>
  <div class="d-none d-sm-none d-md-block text-center ">
    <img :src="QuestionLine.User.avatar" class="mx-auto">
    <h5 class="text-manager-qa-section-name text-muted  ">
      <d-link :to="`/person/${QuestionLine.User.firstName}`">
        {{ QuestionLine.User.firstName }} {{ QuestionLine.User.lastName }}
      </d-link>
    </h5>
    <span class="text-muted  ">Total Comments: {{ Math.floor(Math.random() * 1000) +1 }}</span>
  </div>
</template>
<script>


  export default {
    name: 'larger-qa-credit-line',
    props: {
      QuestionLine: {},
    },

  };
</script>
