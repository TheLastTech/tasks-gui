<template>
  <d-col md="6" class="form-group">
    <span v-if="!EditorMode" class="UserAccountDetailsEditorLabel">First Name:</span>
    <span  class="UserAccountDetailsEditorTextButton" v-if="!EditorMode" @click="SwapToEditor"> {{ UpdatedValue || person.firstName}} </span>
    <user-account-details-input-editor
      :hint-text="'Change Your First Name'"
      :cancel-editor="CancelEditor"
      :editor-mode="EditorMode" :save-editor="SaveEditor"
      :initial-value="person.firstName"
      :value-changed="ValueChanged"
    />
  </d-col>

</template>
<script>
  import UserAccountDetailsInputEditor from './editor/UserAccountDetailsInputEditor.vue';
  import UserAccountDetailsEditor from './editor/mixins/UserAccountDetailsEditor';

  export default {
    components: { UserAccountDetailsInputEditor },
    mixins: [UserAccountDetailsEditor],
    name: 'user-account-details-first-name',
    props: {

      person: {},
    },
  };
</script>
