<template>
  <d-modal v-if="ShowOverwriteModal" size="lg"  >
    <d-modal-header>
      <d-modal-title>You already have a vote for {{SelectedManager.firstName}} {{SelectedManager.lastName}}, would
        you
        like to change?
      </d-modal-title>

    </d-modal-header>
    <d-modal-body>
      <d-row class="mb-1">
        <d-col cols="4" lg="2">
          <d-button class="btn btn-block" @click="OverwriteManager">Yes</d-button>
        </d-col>
        <d-col offset="4" offset-lg="8" cols-lg="2" cols="4" lg="2">
          <d-button @click="ShowOverwriteModal = false" class="btn btn-block btn-warning">No</d-button>
        </d-col>
      </d-row>
    </d-modal-body>
  </d-modal>
</template>
<script>
  export default {
    name: 'proposal-manager-overwrite-modal',
    props: {

      OverwriteManager: {},
      SelectedManager: {},

      ShowOverwriteModal: { type: Boolean },

    },

  };
</script>
