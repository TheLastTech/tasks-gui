<template>
  <d-card class="card-small mb-4">

    <!-- Card Header -->
    <d-card-header class="border-bottom">
      <h6 class="m-0 UserAccountDetailsHeader">{{ person.firstName }} {{ person.lastName }} ({{ person.job }})</h6>
    </d-card-header>

    <d-list-group flush>
      <d-list-group-item class="p-3">
        <d-row>
          <d-col>
            <d-form>
              <d-form-row>

                <!-- First Name -->
                <user-account-details-first-name :person="person"/>

                <!-- Last Name -->
                <user-account-details-last-name :person="person"/>

              </d-form-row>

              <d-form-row>

                <!-- Email -->
                <user-account-details-email :person="person"/>

                <!-- Threw this in for a random data field -->
                <user-account-details-extra-info :person="person"/>

              </d-form-row>


              <d-form-row>

                <!-- Job Title -->
                <user-account-details-job-title :person="person"/>
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
  import UserAccountDetailsFirstName from './UserAccountDetails/UserAccountDetailsFirstName.vue';
  import UserAccountDetailsLastName from './UserAccountDetails/UserAccountDetailsLastName.vue';
  import UserAccountDetailsEmail from './UserAccountDetails/UserAccountDetailsEmail.vue';
  import UserAccountDetailsExtraInfo from './UserAccountDetails/UserAccountDetailsExtraInfo.vue';
  import UserAccountDetailsJobTitle from './UserAccountDetails/UserAccountDetailsJobTitle.vue';

  export default {
    name: 'user-account-details',
    components: {
      UserAccountDetailsJobTitle,
      UserAccountDetailsExtraInfo,
      UserAccountDetailsEmail,
      UserAccountDetailsLastName,
      UserAccountDetailsFirstName,
    },
    props: {
      /**
       * The component title.
       */
      person: {
        type: Object, required: true,

      },
    },
  };
</script>
