<template>
  <footer class="main-footer d-flex p-2 px-3 bg-white border-top">
    <div :class="[contained ? 'container' : 'container-fluid']">
      <div class="row">
        <ul class="nav">
          <li v-for="(item, idx) in menuItems" :key="idx" class="nav-item">
            <d-link class="nav-link" :to="item.to">{{ item.title }}</d-link>
          </li>
        </ul>
        <span class="copyright ml-auto my-auto mr-2">{{ copyright }}</span>
      </div>
    </div>
  </footer>
</template>

<script>
  const defaultMenuItems = [{
    title: 'Home',
    to: '#',
  }, {
    title: 'Search',
    to: '/browse-proposals',
  }, {
    title: 'My Profile',
    to: '/person/me',
  }, {
    title: 'Youtube',
    to: 'https://youtube.com',
  }, {
    title: 'Twitter',
    to: 'https://twitter.com/iamrodrigue',
  }, {
    title: 'Reddit',
    to: 'https://reddit.com',
  }, {
    title: 'Github',
    to: 'https://github.com/xmnservices/',
  }, {
    title: 'Support',
    to: 'help@react-coder.com',
  }];

  export default {
    name: 'main-footer',
    props: {
      /**
       * The footer menu items.
       */
      menuItems: {
        type: Array,
        default() {
          return defaultMenuItems;
        },
      },
      /**
       * The copyright information.
       */
      copyright: {
        type: String,
        default: 'Copyright © 2018 XMN Services',
      },
      /**
       * Whether the footer should be wrapped in a container, or not.
       */
      contained: {
        type: Boolean,
        default: false,
      },
    },
  };
</script>
