<template>
  <carousel :per-page="1" :navigate-to="someLocalProperty" mouse-drag="false" >
    <slide v-for="(Manager,idx) in PledgeManagers" :key="idx">
      <d-card class="card-small card-post card-post--aside card-post--1">
        <div class="card-post__image" :style="{ backgroundImage: 'url(\'' + Manager.avatar + '\')' }">

        </div>
        <d-card-body>
          <h5 class="card-title">
            <small class="muted">{{ Manager.firstName }} {{ Manager.lastName }} -&nbsp;</small>
            <a class="text-fiord-blue" href="#">{{ Manager.ManagerPledge.tokens }} Tokens</a>
            &nbsp; <d-button-group>
            <d-button class="btn-warning"><i class="far fa-hand-point-up"></i> Apply Vote for Manager</d-button>

          </d-button-group> </h5>
          <p class="card-text d-inline-block mb-3">{{ Manager.ManagerPledge.blurb}}</p>
          <span class="text-muted">Submitted: {{ Manager.ManagerPledge.pledgeDate }}</span>


          <d-card-footer class="border-top">
            {{ Manager.ManagerPledge.application }}
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
        slide: 0,
        sliding: null,
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
  };
</script>
