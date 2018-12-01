<template>
  <div   >
    <d-dropdown   text="Projects" theme="success">
      <d-dropdown-item    to="/browse-proposals/new" >Live Projects</d-dropdown-item>
      <d-dropdown-item   to="/browse-proposals/Funded" >Funded Projects</d-dropdown-item>
      <d-dropdown-item   to="/browse-proposals/all" >Proposals</d-dropdown-item>

    </d-dropdown>
    <d-nav justified fill>


      <d-nav-item class="nav-link" to="/person/me">Profile</d-nav-item>
      <d-nav-item class="nav-link" to="/person/me">FAQ</d-nav-item>
      <d-nav-item class="nav-link" to="/person/me">Team</d-nav-item>
      <d-nav-item class="nav-link" to="/person/me">Contact</d-nav-item>
    </d-nav>
  </div>
</template>
<script>
  export default {
    name: 'top-nav-bar',
    methods: {

    },

  };
</script>
<style>
  .frank {


  }

</style>
