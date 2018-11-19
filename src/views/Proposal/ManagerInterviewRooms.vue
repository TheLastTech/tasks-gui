<template xmlns:v-for="http://www.w3.org/1999/xhtml">
  <div v-if="Manager">
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


    <img class="d-lg-none img-fluid rounded mx-auto d-block d-sm-none d-md-none" :src="Manager.avatar"/>
    <d-card class="card-small card-post card-post--aside card-post--1">

      <div class="d-none d-sm-block   card-post__image"
           :style="{ minWidth:'15vw',  backgroundImage: 'url(\'' + Manager.avatar + '\')' }">

      </div>
      <d-card-body>
        <h5 class="card-title">
          <small class="muted">{{ Manager.firstName }} {{ Manager.lastName }} -&nbsp;</small>
          <a class="text-fiord-blue" href="#">{{ Manager.ManagerPledge.tokens }} Tokens</a>
          &nbsp;
          <d-button-group>
            <d-button href="https://twitter.com/intent/tweet?button_hashtag=ThisProjectName&ref_src=twsrc%5Etfw"
                      data-show-count="false">
              <i class="fab fa-2x fa-twitter"></i>
            </d-button>
            <d-button href="https://linkedin.com/">
              <i class="fab fa-2x fa-linkedin"></i>
            </d-button>

          </d-button-group>

        </h5>
        <p class="card-text d-inline-block mb-3">{{ Manager.ManagerPledge.blurb}}</p>
        <span class="text-muted">Submitted: {{ Manager.ManagerPledge.pledgeDate }}</span>


        <d-card-footer class="border-top">
          <p v-for="(Paragraph,idx) in Manager.ManagerPledge.application" :key="idx">
            {{Paragraph }}
          </p>

          <d-button @click="ShowManagerSelector(Manager)" class="btn-warning btn-block"><i
            class="far fa-hand-point-up"></i> Vote for Manager
          </d-button>


        </d-card-footer>
      </d-card-body>

    </d-card>

    <proposal-manager-overwrite-modal :manager="Manager" :overwrite-manager="OverwriteManager(Manager)"
                                      :selected-manager="SelectedManager"
                                      :show-overwrite-modal="ShowOverwriteModal"/>
  </div>
</template>

<script>
  import {Carousel, Slide} from 'vue-carousel';
  import ProposalManagerOverwriteModal from "./ProposalManagerOverwriteModal";

  export default {
    components: {ProposalManagerOverwriteModal},
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

      this.Manager = this.PledgeManagers[0];
      this.$eventHub.$on('toggle-on-qa', this.ShowQaSection.bind(this));
      this.$eventHub.$on('toggle-qa-off', this.ShowPreviewSection.bind(this));
      this.$eventHub.$emit('VisibleManagerChange', this.PledgeManagers[0]);
    },
    beforeDestroy() {
      this.$eventHub.$off('VisibleManagerChange');
      this.$eventHub.$off('toggle-on-qa');
      this.$eventHub.$off('toggle-off-qa');
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
