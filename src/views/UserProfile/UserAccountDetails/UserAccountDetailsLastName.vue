<template>
  <d-col md="6" class="form-group">
    <span v-if="!EditorMode" class="UserAccountDetailsEditorLabel">Last Name:</span>
    <span class="UserAccountDetailsEditorTextButton" v-if="!EditorMode" @click="SwapToEditor"> {{ UpdatedValue || person.lastName}} </span>
    <user-account-details-input-editor
      :hint-text="'Change Your Last Name'"
      :cancel-editor="CancelEditor"
      :editor-mode="EditorMode"
      :save-editor="SaveEditor"
      :initial-value="person.lastName"
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
    name: 'user-account-details-last-name',
    props: {
      person: {},
    },
  };
</script>
