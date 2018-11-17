<template xmlns:v-for="http://www.w3.org/1999/xhtml">
  <carousel :per-page="1"   :navigationNextLabel="NextText" :value="CurrentPage">
    <slide v-for="(Manager,idx) in PledgeManagers" :key="idx">
      <d-card class="card-small card-post card-post--aside card-post--1">
        <div class="card-post__image" :style="{ backgroundImage: 'url(\'' + Manager.avatar + '\')' }">

        </div>
        <d-card-body>
          <h5 class="card-title">
            <small class="muted">{{ Manager.firstName }} {{ Manager.lastName }} -&nbsp;</small>
            <a class="text-fiord-blue" href="#">{{ Manager.ManagerPledge.tokens }} Tokens</a>
            &nbsp; <d-button-group>
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
              <d-button class="btn-warning btn-block"><i class="far fa-hand-point-up"></i> Apply Vote for Manager</d-button>

            </d-button-group>
          </d-card-footer>
        </d-card-body>

      </d-card>
    </slide>

  </carousel>

</template>

<script>
  import { Carousel, Slide } from 'vue-carousel';
  import { RpcServer } from '@/rpc/rpc';

  export default {
    components: { Carousel, Slide },
    data() {
      return {
        NextText: 'Next Manager',
        MouseDrag: false,
        sliding: null,
        CurrentPage: 0,
        PledgeManagers: RpcServer.GetManagers(),
      };
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true;
      },
      onSlideEnd(slide) {
        this.sliding = false;
      },
    },
    name: 'browse-proposal-card-manager-tab',
  };
</script>
