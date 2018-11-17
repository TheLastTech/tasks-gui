<template xmlns:v-for="http://www.w3.org/1999/xhtml">
  <div>
    <d-row>
      <d-col md="6" lg="6" sm="6"  >
        <d-button class="btn btn-dark btn-block" @click="DecrementSlide">&lt;</d-button>
      </d-col>
      <d-col md="6" lg="6" sm="6"   >
        <d-button @click="IncrementSlide" class="btn btn-dark btn-block">&gt;</d-button>
      </d-col>
    </d-row>
    <carousel :per-page="1" @pageChange="SlideClick" :navigationNextLabel="NextText" :value="CurrentPage">
      <slide style="min-width:50vw" v-for="(Manager,idx) in PledgeManagers" :key="idx">
        <img class="d-lg-none img-fluid rounded mx-auto d-block d-sm-none d-md-none" :src="Manager.avatar"/>
        <d-card class="card-small card-post card-post--aside card-post--1">

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
              <d-button-group>
                <d-button class="btn-warning btn-block"><i class="far fa-hand-point-up"></i> Apply Vote for Manager
                </d-button>

              </d-button-group>
            </d-card-footer>
          </d-card-body>

        </d-card>
      </slide>

    </carousel>
  </div>
</template>

<script>
  import {Carousel, Slide} from 'vue-carousel';
  import {RpcServer} from '@/rpc/rpc';
  import Bus from '@/bus/bus.js';

  export default {
    components: {Carousel, Slide},
    data() {
      return {
        NextText: 'Next Manager',

        CurrentSlide: 0,
        sliding: null,
        CurrentPage: 0,
        PledgeManagers: RpcServer.GetManagers(),
      };
    },
    mounted() {
      Bus.$emit('VisibleManagerChange', this.PledgeManagers[0]);

    },
    beforeDestroy() {

    },
    methods: {
      IncrementSlide() {
        this.CurrentPage = ++this.CurrentSlide;
      },
      DecrementSlide() {
        if (this.CurrentSlide === 0) this.CurrentSlide = this.PledgeManagers.length
        this.CurrentPage = --this.CurrentSlide;
      },
      onSlideStart(slide) {
        this.sliding = true;
      },
      SlideClick(slide) {
        this.CurrentSlide = slide;
        Bus.$emit('VisibleManagerChange', this.PledgeManagers[slide]);
        this.sliding = false;
      },
    },
  };
</script>
