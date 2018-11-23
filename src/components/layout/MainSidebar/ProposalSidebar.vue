<template>
  <aside :class="['main-sidebar', 'col-12', 'col-md-3', 'col-lg-2', 'px-0', sidebarVisible ? 'open' : '']">
    <div class="main-navbar">
      <nav class="navbar align-items-stretch navbar-light bg-white flex-md-nowrap border-bottom p-0">
        <a class="navbar-brand w-100 mr-0" href="#" style="line-height: 25px;">
          <div class="d-table m-auto">
            <img id="main-logo" class="d-inline-block align-top mr-1" style="max-width: 25px;" src="@/assets/images/logo.png" alt="XMN Tasks">

            <span v-if="!hideLogoText" class="d-none d-md-inline ml-1">Managers For Proposal #</span>
          </div>
        </a>
        <a class="toggle-sidebar d-sm-inline d-md-none d-lg-none" @click="handleToggleSidebar()">
          <i class="material-icons">&#xE5C4;</i>
        </a>
      </nav>
    </div>

    <form action="#" class="main-sidebar__search w-100 border-right d-sm-flex d-md-none d-lg-none">
      <div class="input-group input-group-seamless ml-3">
        <div class="input-group-prepend">
          <div class="input-group-text">
            <i class="fas fa-search"></i>
          </div>
        </div>
        <input class="navbar-search form-control" type="text" placeholder="Search for something..." aria-label="Search">
      </div>
    </form>

    <div class="nav-wrapper">
      <d-nav class="flex-column">
        <li class="nav-item">
          <d-link class="nav-link" @click="GoBack()">
            <div class="item-icon-wrapper">
              <i class="material-icons">arrow_back</i>
            </div>
            <span>Go back</span>

          </d-link>
          <d-link class="nav-link" to="/proposal-managers-list" >
            <div class="item-icon-wrapper">
              <i class="material-icons">person</i>
            </div>
            <span>Manager Overview</span>

          </d-link>
          <d-link class="nav-link" to="/proposal-managers-qa">
            <div class="item-icon-wrapper">
              <i class="material-icons">person</i>
            </div>
            <span>Q/A</span>

          </d-link>
          <d-link class="nav-link" to="/proposal-managers" >
            <div class="item-icon-wrapper">
              <i class="material-icons">person</i>
            </div>
            <span>Manager Applications</span>

          </d-link>

        </li>

      </d-nav>
    </div>
  </aside>
</template>

<script>
  export default {
    name: 'proposal-sidebar',
    props: {
      /**
       * Whether to hide the logo text, or not.
       */
      hideLogoText: {
        type: Boolean,
        default: false,
      },
      /**
       * The menu items.
       */
      items: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        sidebarVisible: false,
      };
    },
    created() {
      this.$eventHub.$on('toggle-sidebar', this.handleToggleSidebar);
    },
    beforeDestroy() {
      this.$eventHub.$off('toggle-sidebar', this.handleToggleSidebar);
    },
    methods: {
      GoBack() {

      },
      ViewPreview(){
        this.$eventHub.$emit('toggle-qa-off', true);
      },
      ViewQa(){
        this.$eventHub.$emit('toggle-on-qa', true);
      },
      handleToggleSidebar() {
        this.sidebarVisible = !this.sidebarVisible;
      },
    },
  };
</script>

<style lang="scss">
  .main-sidebar {
    .item-icon-wrapper {
      display: inline-block;
    }
    .dropdown-menu {
      display: block;
    }
  }
</style>
