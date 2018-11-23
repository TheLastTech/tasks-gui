<template>
  <d-card class="card-small mb-4 pt-3"  >

    <!-- Card Header -->
    <d-card-header class="border-bottom text-center">

      <!-- User Avatar -->
      <div class="mb-3 mx-auto">
        <img class="rounded-circle" :src="person.avatar" :alt="person.firstName" width="110">
      </div>

      <!-- User Name -->
      <h4 class="mb-0">{{ person.firstName }} {{ person.lastName }}</h4>

      <!-- User Job Title -->
      <span class="text-muted d-block mb-2">{{ person.job }}</span>

      <!-- User Follow -->
      <d-button pill outline size="sm" class="mb-2"><i class="material-icons mr-1">person_add</i> Follow</d-button>

    </d-card-header>



  </d-card>
</template>

<script>
  const defaultUserDetails = {
    name: 'Arian Kooshesh',
    avatar: require('@/assets/images/avatars/ari.jpg'),
    jobTitle: 'UI Lead Developer',
    performanceReportTitle: 'Workload',
    performanceReportValue: 74,
    metaTitle: 'Description',
    metaValue: 'I build da webpages that make you de monies',
  };

  export default {
    name: 'user-details',
    props: {
      /**
       * The user details.
       */
      person: {
        type: Object,

      },
    },
  };
</script>
