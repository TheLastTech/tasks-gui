<template>
  <d-card class="card-small mb-4">

    <d-card-header class="border-bottom">
      <h6 class="m-0">Finance Filters</h6>
    </d-card-header>
    <d-input-group prepend="Token Min/Max&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" append="" class="mb-3">
      <d-input  @input="FilterChanged" :value="FinanceFilter.TokenMin" />
      <d-input @input="FilterChanged" :value="FinanceFilter.TokenMax" />
    </d-input-group>
    <d-input-group prepend="Contributor Min/Max" append="" class="mb-3">
      <d-input  @input="FilterChanged" :value="FinanceFilter.ContributorMin" />
      <d-input @input="FilterChanged"  :value="FinanceFilter.ContributorMax" />
    </d-input-group>
    <d-input-group prepend="Manager Pledges:&nbsp;&nbsp;&nbsp;&nbsp;" append="" class="mb-3">
      <d-input @input="FilterChanged"  type="number" :value="FinanceFilter.Manager" />
    </d-input-group>
  </d-card>

</template>
<script>
/* eslint-disable no-use-before-define,indent */

  export default {


    data() {
      return {
        FinanceFilter: {
          TokenMin: 0,
          TokenMax: 0,
          ContributorMin: 0,
          ContributorMax: 0,
          Manager: 0,
        },
        // from https://medium.com/web-development-zone/a-complete-list-of-computer-programming-languages-1d8bc5a891f
      };
    },

    methods: {
      FilterChanged(){
        this.$emit('FilterChanged', this.FinanceFilter);
      },
    },
    name: 'browse-proposal-card-finance-tab',
  };

</script>
