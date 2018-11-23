<template>
  <nav aria-label="Selected Manager" v-if="SelectedManager">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">{{SelectedManager.firstName}} {{SelectedManager.lastName}}</li>
      <li class="breadcrumb-item">{{SelectedManager.email}}</li>
    </ol>
  </nav>
</template>
<script>
  export default {
    name: 'manager-short-info',
    props: {
      SelectedManager: { type: Object },
    },
  };
</script>
