<template xmlns:v-for="http://www.w3.org/1999/xhtml">
  <div v-if="Manager">
    <manager-navigator :decrement-slide="DecrementSlide" :increment-slide="IncrementSlide"/>
    <manager-short-info :selected-manager="SelectedManager"/>
    <manager-mobile-pfp :manager="Manager"/>
    <interview-room :manager="Manager" :show-manager-selector="()=>ShowManagerSelector(Manager)"/>
    <proposal-manager-overwrite-modal  :overwrite-manager="OverwriteManager(Manager)"
                                      :selected-manager="SelectedManager"
                                      :show-overwrite-modal="ShowOverwriteModal"/>
  </div>
</template>

<script>

  import ProposalManagerOverwriteModal from './ProposalManagerOverwriteModal.vue';
  import ManagerNavigator from '../ManagerNavigator.vue';
  import ManagerShortInfo from '../ManagerShortInfo.vue';
  import InterviewRoom from './ManagerApplication.vue';
  import ManagerMobilePfp from '../ManagerMobilePfp.vue';

  export default {
    name:'manager-applications',
    components: {
      ManagerMobilePfp, InterviewRoom, ManagerShortInfo, ManagerNavigator, ProposalManagerOverwriteModal,
    },
    data() {
      return {
        NextText: 'Next Manager',
        ModalSize: 'lg',
        ShowOverwriteModal: false,
        SelectedManager: null,
        CurrentSlide: 0,
        Manager: null,
        sliding: null,
        CurrentPage: 0,
        UserVotedOn: null,
        PledgeManagers: this.$RpcServer.GetManagers(),
        ShowQa: false,
      };
    },

    mounted() {
      [this.Manager] = this.PledgeManagers;
      this.$eventHub.$on('toggle-on-qa', this.ShowQaSection.bind(this));
      this.$eventHub.$on('toggle-qa-off', this.ShowPreviewSection.bind(this));
      this.$eventHub.$emit('VisibleManagerChange', this.PledgeManagers[0]);
    },
    beforeDestroy() {
   //   this.$eventHub.$off('toggle-on-qa', this.ShowQaSection.bind(this));
    //  this.$eventHub.$off('toggle-off-qa', this.ShowPreviewSection.bind(this));
    },
    methods: {
      ShowQaSection() {
        this.ShowQa = true;
      },
      ShowPreviewSection() {
        this.ShowQa = false;
      },
      OverwriteManager(Manager) {
        this.SelectedManager = Manager;
        this.ShowOverwriteModal = false;
      },
      ShowManagerSelector(Manager) {
        if (this.SelectedManager !== null) {
          this.ShowOverwriteModal = true;
          return;
        }
        this.SelectedManager = Manager;
      },
      IncrementSlide() {
        console.log(this.CurrentSlide);
        if (this.CurrentSlide === this.PledgeManagers.length - 1) this.CurrentSlide = -1;

        ++this.CurrentSlide;
        this.Manager = this.PledgeManagers[this.CurrentSlide];
        this.$eventHub.$emit('VisibleManagerChange', this.Manager);
      },
      DecrementSlide() {
        console.log(this.CurrentSlide);
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
