<template>


  <d-card class="card mb-3">
    <div :class="QADepthClass" v-for="(QuestionLine,Index) in PledgeQA" :key="Index">
      <div class="mr-3">
        <larger-qa-credit-line   :question-line="QuestionLine"/>
      </div>
      <div class="media-body">
        <smaller-qa-credit-line @click="alert('hi')" :question-line="QuestionLine"/>
        <q-a-preview :question-line="QuestionLine"/>
        <reply-to-qa/>

        <q-a-section v-if="QuestionLine.Depth < 1" :PledgeQA="$RpcServer.GetQA(QuestionLine.Depth+1)"/>

      </div>

    </div>

  </d-card>
</template>
<script>

  import QAPreview from '../../QAPreview.vue';
  import ReplyToQa from './ReplyOnQaPage.vue';
  import LargerQaCreditLine from "./LargerQaCreditLine";
  import SmallerQaCreditLine from "./SmallerQaCreditLine";

  export default {
    watch: {
      QADepthClass(newValue, oldValue) {
        debugger;
        return ['media', 'mb-1', 'mt-3'];
      },
    },
    data() {
      return {
        QADepthClass: ['media', 'mb-1'],
      };
    },
    name: 'q-a-section',
    components: {SmallerQaCreditLine, LargerQaCreditLine, ReplyToQa, QAPreview},
    props: {
      PledgeQA: {type: Array, required: true}
    },
  };
</script>
