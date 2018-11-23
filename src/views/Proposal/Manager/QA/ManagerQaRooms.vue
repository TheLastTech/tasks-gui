<template xmlns:v-for="http://www.w3.org/1999/xhtml">
  <div>
    <manager-navigator :decrement-slide="DecrementSlide" :increment-slide="IncrementSlide"/>


    <manager-short-info :selected-manager="SelectedManager"/>


    <q-a-section v-if="Manager.ManagerPledge" :PledgeQA="Manager.ManagerPledge.PledgeQA"/>


  </div>
</template>

<script>


  import QASection from './QASection.vue';
  import ManagerNavigator from '../ManagerNavigator.vue';
  import ManagerShortInfo from '../ManagerShortInfo.vue';

  export default {
    name: 'manager-qa-room',
    components: {
      ManagerShortInfo,
      ManagerNavigator,
      QASection,
    },
    data() {
      return {
        NextText: 'Next Manager',
        ModalSize: 'lg',
        ShowOverwriteModal: false,
        SelectedManager: null,
        CurrentSlide: 0,
        sliding: null,
        Manager: {},
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
