<template>
  <d-card>

    <d-card-body>
      <d-row>
        <d-col md="6">

        </d-col>

        <d-col md="6">
          <d-img   :src="SlackImage"/>
        </d-col>
        <d-col   md="6">
        <d-img
          :src="LinkedInImage" />
      </d-col>
      </d-row>

    </d-card-body>


  </d-card>

</template>
<script>
  export default {
    name: 'browse-proposal-card-share-tab',
    data() {
      return {
        LinkedInImage: require('@/assets/images/linkedin_512.png'),
        SlackImage: require('@/assets/images/slack-lead1.jpg'),
        TwitterImage: require('@/assets/images/twitter_512.png')
      };
    },
  };


</script>
