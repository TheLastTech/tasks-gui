<template>
  <div class="mb-3 text-center">

    <d-button class="col-3 btn-manager-qa-thread-reply" @click="ToggleEditor">Reply</d-button>


    <d-card-body :class="EditorHideClass">
      <d-form class="">
        <div ref="editor" class="add-new-post__editor mb-1"></div>
      </d-form>
    </d-card-body>
  </div>
</template>

<script>
  import Quill from 'quill';

  export default {
    name: 'reply-on-qa-page',
    data() {
      return {
        ShowEditor: false,
        EditorHideClass: ['invisible', 'd-none'],
      };
    },
    methods: {
      ToggleEditor() {
        this.EditorHideClass = this.EditorHideClass.length > 0 ? [] : ['invisible', 'd-none'];
      },
    },
    mounted() {
      const toolbarOptions = [
        [{ header: [1, 2, 3, 4, 5, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        [{ header: 1 }, { header: 2 }],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ script: 'sub' }, { script: 'super' }],
        [{ indent: '-1' }, { indent: '+1' }],
      ];

      // Init the Quill RTE
      new Quill(this.$refs.editor, {
        modules: {
          toolbar: toolbarOptions,
        },
        placeholder: 'Words can be like x-rays if you use them properly...',
        theme: 'snow',
      });
    },
  };
</script>

