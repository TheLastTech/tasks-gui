<template>

  <d-form>
    <d-form-row>

      <d-col md="4" class="form-group">
        <label for="feInputCity">Token Amount</label>
        <d-input id="feInputCity"/>
      </d-col>
      <d-col md="4" class="form-group">
        <label for="feInputState">Pledge Role</label>
        <d-select id="feInputState">
          <option>Investor</option>
          <option>Manager</option>
          <option>Talent</option>
        </d-select>
      </d-col>
      <d-col md="4" sm="12" class="form-group">
        <label for="feInputZip">Agree</label>
        <d-checkbox><a href="#">Token Policy</a>.</d-checkbox>

      </d-col>

    </d-form-row>
    <d-button class="btn-block btn-info" type="button">Pledge!</d-button>
  </d-form>

</template>
<script>
  export default {
    props: {
      post: { type: Object },
    },
    name: 'browse-proposal-card-pledge-tab',
  };
</script>
