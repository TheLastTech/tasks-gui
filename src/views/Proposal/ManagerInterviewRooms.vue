<template xmlns:v-for="http://www.w3.org/1999/xhtml">
  <div>
    <d-row class="mb-1">
      <d-col cols="4" lg="2">
        <d-button class="btn btn-block" @click="DecrementSlide">&lt;</d-button>
      </d-col>
      <d-col offset="4" offset-lg="8" cols-lg="2" cols="4" lg="2" >
        <d-button @click="IncrementSlide" class="btn btn-block">&gt;</d-button>
      </d-col>
    </d-row>

    <nav aria-label="Selected Manager" v-if="SelectedManager">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">{{SelectedManager.firstName}} {{SelectedManager.lastName}}</li>
        <li class="breadcrumb-item">{{SelectedManager.email}}</li>
      </ol>
    </nav>


    <carousel style="min-width:50vw" class="h-100" :adjustableHeight="true" :per-page="1" @pageChange="SlideClick" :navigationNextLabel="NextText"
              :value="CurrentPage">
      <slide  class="w-100" v-for="(Manager,idx) in PledgeManagers" :key="idx">
        <img   class="d-lg-none img-fluid rounded mx-auto d-block d-sm-none d-md-none" :src="Manager.avatar"/>
        <d-card    class="card-small card-post card-post--aside card-post--1">

          <div class="d-none d-sm-block   card-post__image"
               :style="{ backgroundImage: 'url(\'' + Manager.avatar + '\')' }">

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
      </slide>

    </carousel>

    <d-modal v-if="ShowOverwriteModal" size="lg" @close="ShowOverwriteModal = false">
      <d-modal-header>
        <d-modal-title>You already have a vote for {{SelectedManager.firstName}} {{SelectedManager.lastName}}, would you
          like to change?
        </d-modal-title>

      </d-modal-header>
      <d-modal-body>
        <d-button-group>
          <d-button @click="OverwriteManagerSelector(SelectedManager)" class="btn-success btn-block"><i
            class="far fa-hand-point-up"></i> Yes
          </d-button>
          <d-button @click="ShowOverwriteModal = false" class="btn-warning btn-block"><i
            class="far fa-hand-point-up"></i> No
          </d-button>
        </d-button-group>
      </d-modal-body>
    </d-modal>
  </div>
</template>

<script>
  import { Carousel, Slide } from 'vue-carousel';

  import QASection from './QASection.vue';

  export default {
    components: { QASection, Carousel, Slide },
    data() {
      return {
        NextText: 'Next Manager',
        ModalSize: 'lg',
        ShowOverwriteModal: false,
        SelectedManager: null,
        CurrentSlide: 0,
        sliding: null,
        CurrentPage: 0,
        UserVotedOn: null,
        PledgeManagers: this.$RpcServer.GetManagers(),
        ShowQa:false,
      };
    },

    mounted() {
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
      ShowQaSection(){
        debugger;
        this.ShowQa = true;
      },
      ShowPreviewSection(){
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
      },
      DecrementSlide() {
        if (this.CurrentSlide === 0) this.CurrentSlide = this.PledgeManagers.length;
        this.CurrentPage = --this.CurrentSlide;
      },
      onSlideStart(slide) {
        this.sliding = true;
      },
      SlideClick(slide) {
        this.CurrentSlide = slide;
        this.$eventHub.$emit('VisibleManagerChange', this.PledgeManagers[slide]);
        this.sliding = false;
      },
    },
  };
</script>
<style>
  .VueCarousel-pagination {
    display: none !important;
  }
</style>
