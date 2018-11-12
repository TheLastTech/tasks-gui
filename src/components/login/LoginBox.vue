<template>
  <d-card class="card-small mb-3">
    <d-card-body>
      <d-form class="add-new-post">
        <d-input v-model="LoginForm.Username" size="lg" class="mb-3" placeholder="Username"/>
        <d-input v-model="LoginForm.Password" size="lg" type="password" class="mb-3" placeholder="Password"/>
        <d-button size="lg" class="btn-block" type="button" v-on:click="LoginClick">Login</d-button>
      </d-form>
    </d-card-body>
  </d-card>
</template>

<script>
  import RPCHelper from '@/rpc/rpc.js';
  import router from '@/router.js'
  export default {
    data() {
      return {
        LoginForm: {
          Username: '',
          Password: ''
        }
      }
    },
    methods: {
      LoginClick() {
        let {Username, Password} = this.LoginForm;
        let Success =RPCHelper.Login(Username, Password);
        if(Success)
          router.go('/dashboard');
      }
    },
    name: 'login',
    mounted() {
    },
  };
</script>

