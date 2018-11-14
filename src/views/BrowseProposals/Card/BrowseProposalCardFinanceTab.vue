<template>
  <d-card class="card-small mb-4">

    <d-card-header class="border-bottom">
      <h6 class="m-0">Finance Filters</h6>
    </d-card-header>
    <d-input-group prepend="Token Min/Max&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" append="" class="mb-3">
      <d-input value="1"/>
      <d-input value="10000"/>
    </d-input-group>
    <d-input-group prepend="Contributor Min/Max" append="" class="mb-3">
      <d-input value="1"/>
      <d-input value="10000"/>
    </d-input-group>
    <d-input-group prepend="Manager Pledges:&nbsp;&nbsp;&nbsp;&nbsp;" append="" class="mb-3">
      <d-input value="10000" :type="number"/>
    </d-input-group>
  </d-card>

</template>
<script>
  /* eslint-disable no-use-before-define,indent */

  export default {


    data() {
      return {
        LanguagesSelected: [],
        // from https://medium.com/web-development-zone/a-complete-list-of-computer-programming-languages-1d8bc5a891f
      };
    },

    methods: {
      FilterData(NewValue) {
      },
      runFilter(Item, Filters) {

        return Filters.split(',').find(Filter => Item.value.toLowerCase().indexOf(Filter.toLowerCase()) >= 0)

      },
    },
    name: 'browse-proposal-card-finance-tab',
  };

</script>
