<template>
  <d-col md="12" class="form-group">
    <span v-if="!EditorMode" class="UserAccountDetailsEditorLabel">Title:</span>
    <span class="UserAccountDetailsEditorTextButton" v-if="!EditorMode" @click="SwapToEditor"> {{ UpdatedValue || person.job}} </span>
    <user-account-details-input-editor
      :hint-text="'Change Your Job Title'"
      :cancel-editor="CancelEditor"
      :initial-value="person.job"
      :editor-mode="EditorMode" :save-editor="SaveEditor"
      :value-changed="ValueChanged"
    />
  </d-col>
</template>
<script>
  import UserAccountDetailsInputEditor from './editor/UserAccountDetailsInputEditor.vue';
  import UserAccountDetailsEditor from './editor/mixins/UserAccountDetailsEditor';

  export default {
    mixins: [UserAccountDetailsEditor],
    name: 'user-account-details-job-title',
    components: { UserAccountDetailsInputEditor },
    props: {
      person: {},
    },
    data() {
      return {};
    },
    methods: {},
  };
</script>
