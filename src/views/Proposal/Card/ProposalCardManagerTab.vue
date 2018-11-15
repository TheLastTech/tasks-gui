<template>
  <d-list-group style="overflow:scroll; max-height:50vh" >
    <d-list-group-item :key="idx" v-for="(Manager, idx) in PledgeManager">
      <d-row>
        <d-col lg="12" sm="12" class="mb-4">
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
                <d-badge :key="badgeindex" v-for="(Badge,badgeindex) in Manager.ManagerPledge.badges">{{ Badge }}</d-badge>
              </d-card-footer>
            </d-card-body>

          </d-card>
        </d-col>
      </d-row>
    </d-list-group-item>

  </d-list-group>
</template>
<script>
  export default {
    props: {
      PledgeManager: { type: Array },
    },
    mounted() {
      console.log(this.PledgeManagers);
    },
    name: 'browse-proposal-card-manager-tab',
  };
</script>
