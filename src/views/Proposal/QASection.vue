<template>
  <d-card class="card mb-3">
    <div :class="QADepthClass" v-for="(QuestionLine,Index) in PledgeQA" :key="Index">
      <img class="mr-3" :src="QuestionLine.User.avatar" alt=" ">
      <div class="media-body">
        <q-a-preview :question-line="QuestionLine"/>
        <reply-to-qa/>
        <q-a-section v-if="QuestionLine.Depth < 1" :PledgeQA="$RpcServer.GetQA(QuestionLine.Depth+1)"/>

      </div>

    </div>

  </d-card>
</template>
<script>

  import QAPreview from './QAPreview.vue';
  import ReplyToQa from './ReplyOnQaPage.vue';

  export default {
    watch: {
      QADepthClass(newValue, oldValue) {
        debugger;
        return ['media', 'mt-3'];
      },
    },
    data() {
      return {
        QADepthClass: ['media'],
      };
    },
    name: 'q-a-section',
    components: {ReplyToQa, QAPreview},
    props: {
      PledgeQA: {type: Array, required: true},
    },
  };
</script>
