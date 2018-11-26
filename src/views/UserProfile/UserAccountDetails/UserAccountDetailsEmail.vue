<template>
  <d-col md="6" class="form-group">
    <span v-if="!EditorMode" class="UserAccountDetailsEditorLabel">Email:</span>
    <span v-if="!EditorMode" @click="SwapToEditor" class="UserAccountDetailsEditorTextButton"> {{ UpdatedValue || person.email}} </span>
    <user-account-details-input-editor
      :hint-text="'Change Your Email'"
      :cancel-editor="CancelEditor"
      :editor-mode="EditorMode" :save-editor="SaveEditor"
      :initial-value="person.email"
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
    name: 'user-account-details-email',
    props: {
      person: {},
    },

  };
</script>
