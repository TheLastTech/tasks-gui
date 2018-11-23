<template>
  <d-row class="mb-1">
    <d-col cols="4" lg="2">
      <d-button class="btn btn-block  btn-manager-selector" @click="DecrementSlide">&lt;</d-button>
    </d-col>
    <d-col offset="4" offset-lg="8" cols-lg="2" cols="4" lg="2">
      <d-button @click="IncrementSlide" class="btn btn-block btn-manager-selector">&gt;</d-button>
    </d-col>
  </d-row>
</template>
<script>
  export default {
    name: 'manager-navigator',
    props: {
      DecrementSlide: {},
      IncrementSlide: {},


    },
  };
</script>
