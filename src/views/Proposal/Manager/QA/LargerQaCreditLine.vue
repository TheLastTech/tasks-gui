<template>
  <div class="d-none d-sm-none d-md-block text-center ">
    <img :src="QuestionLine.User.avatar" class="mx-auto">
    <h5 class="text-manager-qa-section-name text-muted  ">
      <manager-profile-link :user="QuestionLine.User"/>
    </h5>
    <span class="text-muted  ">Total Comments: {{ Math.floor(Math.random() * 1000) +1 }}</span>
  </div>
</template>
<script>


  import ManagerProfileLink from './ManagerProfileLink';

  export default {
    name: 'larger-qa-credit-line',
    components: { ManagerProfileLink },
    props: {
      QuestionLine: {},
    },

  };
</script>
