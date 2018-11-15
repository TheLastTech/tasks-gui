<template>
  <d-card class="card-small">

    <!-- Form Example -->
    <d-card-header class="border-bottom">
      <h6 class="m-0">Pledge Tokens to this Project</h6>
    </d-card-header>

    <d-list-group flush>
      <d-list-group-item class="p-3">
        <d-row>
          <d-col>
            <d-form>
              <d-form-row>

                <d-col md="6" class="form-group">
                  <label for="feInputCity">Token Amount</label>
                  <d-input id="feInputCity" />
                </d-col>
                <d-col md="4" class="form-group">
                  <label for="feInputState">Pledge Role</label>
                  <d-select id="feInputState">
                    <option>Investor</option>
                    <option>Manager</option>
                    <option>Talent</option>
                  </d-select>
                </d-col>
                <d-col md="2" class="form-group">
                  <label for="feInputZip">Agree</label>
                  <d-checkbox> <a href="#">Token Policy</a>.</d-checkbox>

                </d-col>

              </d-form-row>
              <d-button class="btn-block btn-info"  type="button">Pledge!</d-button>
            </d-form>
          </d-col>
        </d-row>
      </d-list-group-item>
    </d-list-group>

  </d-card>
</template>
<script>
  export default {
    props: {
      post: {type: Object },
    },
    name: 'browse-proposal-card-pledge-tab',
  };
</script>
