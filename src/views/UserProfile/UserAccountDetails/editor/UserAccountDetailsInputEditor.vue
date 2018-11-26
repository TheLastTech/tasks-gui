<template>
  <div>
    <d-input-group v-if="EditorMode" :prepend="HintText" append="" class="mb-3">
      <d-form-input :value="InitialValue" @input="ValueChanged"/>
    </d-input-group>
    <d-button-group v-if="EditorMode">
      <d-button type="button" class="btn btn-danger" @click="CancelEditor">Cancel</d-button>
      <d-button type="button" class="btn btn-success" @click="SaveEditor">Save</d-button>
    </d-button-group>
  </div>
</template>
<script>
  export default {
    name: 'user-account-details-input-editor',
    props: {
      InitialValue: {},
      HintText: { type: String },
      CancelEditor: {},
      EditorMode: {},
      SaveEditor: {},
      ValueChanged: {},

    },
  };
</script>
