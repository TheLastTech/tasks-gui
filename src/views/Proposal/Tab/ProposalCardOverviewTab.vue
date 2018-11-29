<template>
  <div>
    <h5 class="card-title">
      <a href="#" class="text-fiord-blue">{{ post.title }}</a>
    </h5>
    <p class="card-text d-inline-block mb-3 text-left">{{ post.body }}</p>
    <span class="text-muted  text-left">{{ post.date }}</span>

  </div>
</template>
<script>
  export default {
    name: 'browse-proposal-card-overview-tab',
    props: {
      post: { type: Object },
    },
  };
</script>
