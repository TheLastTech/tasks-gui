<template>
  <d-card class="card-small card-post card-post--aside card-post--1">

    <div class="d-none d-sm-block   card-post__image"
         :style="{ minWidth:'15vw',  backgroundImage: 'url(\'' + manager.avatar + '\')' }">

    </div>
    <d-card-body>
      <h5 class="card-title">
        <small class="muted">{{ manager.firstName }} {{ manager.lastName }} -&nbsp;</small>
        <a class="text-fiord-blue" href="#">{{ manager.ManagerPledge.tokens }} Tokens</a>
        &nbsp;
        <d-button-group>
          <d-button class="btn-manager-interview-twitter" href="https://twitter.com/intent/tweet?button_hashtag=ThisProjectName&ref_src=twsrc%5Etfw"
                    data-show-count="false">
            <i class="fab fa-2x fa-twitter"></i>
          </d-button>
          <d-button class="btn-manager-interview-linkedin" href="https://linkedin.com/">
            <i class="fab fa-2x fa-linkedin"></i>
          </d-button>

        </d-button-group>

      </h5>
      <p class="card-text d-inline-block mb-3">{{ manager.ManagerPledge.blurb}}</p>
      <span class="text-muted">Submitted: {{ manager.ManagerPledge.pledgeDate }}</span>


      <d-card-footer class="border-top">
        <p v-for="(Paragraph,idx) in manager.ManagerPledge.application" :key="idx">
          {{Paragraph }}
        </p>

        <d-button @click="ShowManagerSelector" class="btn-select-manager-for-position btn-block"><i
          class="far fa-hand-point-up"></i> Vote for Manager
        </d-button>


      </d-card-footer>
    </d-card-body>

  </d-card>
</template>
<script>
  export default {
    name: 'manager-application',
    props: {
      manager: {},
      ShowManagerSelector: {},

    },
  };
</script>
