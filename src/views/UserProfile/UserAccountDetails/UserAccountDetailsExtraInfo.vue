<template>
  <d-col md="6" class="form-group">
    <span  class="UserAccountDetailsEditorLabel">Favorite Color:</span>
    <span :style="{backgroundColor:person.color }">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
  </d-col>
</template>
<script>
  export default {
    name: 'user-account-details-extra-info',
    props: {
      person: {},
    },
  };
</script>
