<template>
  <d-link :to="`/person/${User.firstName}`">
    {{ User.firstName }} {{ User.lastName }}
  </d-link>
</template>
<script>
  export default {
    name: 'manager-profile-link',
    props: {
      User: {},
    },
  };
</script>
