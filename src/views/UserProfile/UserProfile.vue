<template>
  <d-container fluid class="main-content-container px-4">
    <!-- Page Header -->
    <d-row no-gutters class="page-header py-4">
      <d-col col sm="4" class="text-center text-sm-left mb-4 mb-sm-0">
        <span class="text-uppercase page-subtitle">Overview</span>
        <h3 class="page-title">User Profile</h3>
      </d-col>
    </d-row>

    <!-- Content -->
    <d-row>
      <d-col lg="4">
       <user-details :person="User" />
      </d-col>
      <d-col lg="8">
        <user-account-details :person="User" />
      </d-col>
    </d-row>
  </d-container>
</template>

<script>

import UserAccountDetails from './UserAccountDetails.vue';
import UserDetails from './UserDetails.vue';

export default {
  name: 'user-overview',
  components: {
    UserAccountDetails,
    UserDetails,
  },
  data() {
    return {
      User: this.$RpcServer.GetUser(),
    };
  },
};
</script>

