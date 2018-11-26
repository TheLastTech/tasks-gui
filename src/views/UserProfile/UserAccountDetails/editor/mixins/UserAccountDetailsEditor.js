export default {
  methods: {
    ValueChanged(e) {
      this.NewValue = e;
    },
    CancelEditor() {
      this.EditorMode = false;
    },
    SaveEditor() {
      this.UpdatedValue = this.NewValue;
      this.EditorMode = false;
    },
    SwapToEditor() {
      if (!this.EditorMode) {
        this.EditorMode = true;
      }
    },
  },
  data() {
    return {
      UpdatedValue: null,
      EditorMode: false,
      NewValue: '',
    };
  },
};
