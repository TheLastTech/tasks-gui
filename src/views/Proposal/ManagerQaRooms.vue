<template xmlns:v-for="http://www.w3.org/1999/xhtml">
  <div>
    <d-row class="mb-1">
      <d-col cols="4" lg="2">
        <d-button class="btn btn-block" @click="DecrementSlide">&lt;</d-button>
      </d-col>
      <d-col offset="4" offset-lg="8" cols-lg="2" cols="4" lg="2">
        <d-button @click="IncrementSlide" class="btn btn-block">&gt;</d-button>
      </d-col>
    </d-row>

    <nav aria-label="Selected Manager" v-if="SelectedManager">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">{{SelectedManager.firstName}} {{SelectedManager.lastName}}</li>
        <li class="breadcrumb-item">{{SelectedManager.email}}</li>
      </ol>
    </nav>



        <q-a-section v-if="Manager.ManagerPledge"  :PledgeQA="Manager.ManagerPledge.PledgeQA"/>



  </div>
</template>

<script>
  import {Carousel, Slide} from 'vue-carousel';

  import QASection from './QASection.vue';

  export default {
    components: {QASection, Carousel, Slide},
    data() {
      return {
        NextText: 'Next Manager',
        ModalSize: 'lg',
        ShowOverwriteModal: false,
        SelectedManager: null,
        CurrentSlide: 0,
        sliding: null,
        Manager:{},
        CurrentPage: 0,
        UserVotedOn: null,
        PledgeManagers: this.$RpcServer.GetManagers(),
        ShowQa: false,
      };
    },

    mounted() {
      this.Manager = this.PledgeManagers[this.CurrentSlide];
      this.$eventHub.$emit('VisibleManagerChange', this.PledgeManagers[0]);
    },

    methods: {
      ShowQaSection() {
        debugger;
        this.ShowQa = true;
      },
      ShowPreviewSection() {
        debugger;
        this.ShowQa = false;
      },
      ShowManagerSelector(Manager) {
        if (this.SelectedManager !== null) {
          this.ShowOverwriteModal = true;
          return;
        }
        this.SelectedManager = Manager;
      },
      IncrementSlide() {
        if (this.CurrentSlide === this.PledgeManagers.length) this.CurrentSlide = -1;

        this.CurrentPage = ++this.CurrentSlide;
        this.Manager = this.PledgeManagers[this.CurrentSlide];
        this.$eventHub.$emit('VisibleManagerChange', this.Manager);

      },
      DecrementSlide() {
        if (this.CurrentSlide === 0) this.CurrentSlide = this.PledgeManagers.length;
        this.CurrentPage = --this.CurrentSlide;
        this.Manager = this.PledgeManagers[this.CurrentSlide];
        this.$eventHub.$emit('VisibleManagerChange', this.Manager);

      },

    },
  };
</script>
<style>
  .VueCarousel-pagination {
    display: none !important;
  }
</style>
