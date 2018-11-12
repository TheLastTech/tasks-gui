<template>
  <d-container fluid class="main-content-container offset-lg-2 offset-md-3 px-4 pb-4">
    <!-- Page Header -->
    <d-row no-gutters class="page-header py-4">
      <!-- Page Title -->
      <d-col col sm="4" class="text-center text-sm-left mb-4 mb-sm-0">
        <span class="text-uppercase page-subtitle">Login</span>
        <h3 class="page-title">Login</h3>
      </d-col>
    </d-row>

    <d-row>
      <!-- Editor -->
      <d-col lg="9" md="12">
        <LoginBox />
      </d-col>


    </d-row>
  </d-container>
</template>

<script>
  /* eslint-disable */
import LoginBox from '@/components/login/LoginBox.vue';


import 'quill/dist/quill.snow.css';

export default {
  components: {
    LoginBox:LoginBox
  },
};
</script>
