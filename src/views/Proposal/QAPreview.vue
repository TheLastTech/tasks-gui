<template>
  <div><p v-for="(Paragraph,PararaphIndex) in QuestionLine.CommentParagraphs" :key="PararaphIndex">
    {{Paragraph}}

  </p></div>
</template>
<script>
  export default {
    name: 'QAPreview',
    props: {
      QuestionLine: {},
    },
  };
</script>
