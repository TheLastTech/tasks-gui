<template>
  <div class="d-block d-sm-block d-md-none text-center">
    <img :src="User.avatar" class="mx-auto">
    <manager-profile-link :user="User"/>
    <span class="text-muted  ">Total Comments: {{ Math.floor(Math.random() * 1000) +1 }}</span>
  </div>
</template>
<script>
  import ManagerProfileLink from './ManagerProfileLink.vue';

  export default {
    name: 'smaller-qa-credit-line',
    components: { ManagerProfileLink },
    props: {
      User: { type: Object, required: true },
    },
  };
</script>
