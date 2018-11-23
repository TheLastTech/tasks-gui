<template>
  <d-card class="card-small mb-4">

    <!-- Card Header -->
    <d-card-header class="border-bottom">
      <h6 class="m-0">{{ title }}</h6>
    </d-card-header>

    <d-list-group flush>
      <d-list-group-item class="p-3">
        <d-row>
          <d-col>
            <d-form>
              <d-form-row>

                <!-- First Name -->
                <d-col md="6" class="form-group">
                  <span class="">First Name:</span>
                  <span> {{ person.firstName }} </span>
                </d-col>

                <!-- Last Name -->
                <d-col md="6" class="form-group">
                  <span class="">Last Name:</span>
                  <span> {{ person.lastName }} </span>
                </d-col>

              </d-form-row>

              <d-form-row>

                <!-- Email -->
                <d-col md="6" class="form-group">
                  <span class="">Email:</span>
                  <span> {{ person.email }} </span>
                </d-col>

                <!-- Password -->
                <d-col md="6" class="form-group">
                  <span class="">Favorite Color:</span>
                  <span :style="{backgroundColor:person.color }">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </d-col>

              </d-form-row>


              <d-form-row>

                <!-- Description -->
                <d-col md="12" class="form-group">
                  <span class="">Title</span>
                  <span> {{ person.job}} </span>
                </d-col>
              </d-form-row>

              <d-button type="submit" class="btn-accent btn-block">Invite User to Apply</d-button>

            </d-form>
          </d-col>
        </d-row>
      </d-list-group-item>
    </d-list-group>
  </d-card>
</template>

<script>
  export default {
    name: 'user-account-details',
    props: {
      /**
       * The component title.
       */
      person: {
        type: Object

      },
    },
  };
</script>
