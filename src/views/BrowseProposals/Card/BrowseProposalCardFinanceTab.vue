<template>

  <table class="table table-responsive-sm table-responsive-md w-100">
    <thead class="bg-light">
    <tr>
      <th scope="col" class="border-0">#</th>
      <th scope="col" class="border-0">Funding Name</th>
      <th scope="col" class="border-0">Funding Type</th>
      <th scope="col" class="border-0">Tokens Needed</th>
      <th scope="col" class="border-0">Tokens</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>1</td>
      <td>Scss Developer</td>
      <td>Graphics</td>
      <td>125</td>
      <td>0</td>
    </tr>
    </tbody>
  </table>


</template>
<script>
  /* eslint-disable no-use-before-define,indent */

  export default {

    props: {
      post: { type: Object },
    },
    data() {
      return {
        LanguagesSelected: [],
        // from https://medium.com/web-development-zone/a-complete-list-of-computer-programming-languages-1d8bc5a891f
      };
    },

    methods: {
// eslint-disable-next-line no-unused-vars
      FilterData(NewValue) {
      },
      runFilter(Item, Filters) {
        return Filters.split(',').find(Filter => Item.value.toLowerCase().indexOf(Filter.toLowerCase()) >= 0);
      },
    },
    name: 'browse-proposal-card-finance-tab',
  };

</script>
