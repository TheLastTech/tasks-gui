<template>
  <d-card class="card-small mb-4">
    <d-card-header class="border-bottom">
      <h6 class="m-0">Language Filters</h6>
    </d-card-header>
    <d-input-group prepend="Search (ex : C#,perl)" append="" class="mb-3">
      <d-form-input :id="FilterData" @input="FilterData"/>
    </d-input-group>
    <d-input-group prepend="Languages&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" class="mb-3">
    <d-form-select style="height:50vh ;font-size:30px" multiple :select-size="4" v-model="LanguagesSelected"
                   :options="options"/>
    </d-input-group>
  </d-card>
</template>
<script>
  /* eslint-disable no-use-before-define,indent */
import Options from './ConstData/filterlanguages';

  export default {

    watch: {
      LanguagesSelected(LanguagesSelected) {
        this.$emit('FilterChanged', LanguagesSelected);
      },
    },
    data() {
      return {
        LanguagesSelected: [],
        // from https://medium.com/web-development-zone/a-complete-list-of-computer-programming-languages-1d8bc5a891f
        options: Options,
      };
    },

    methods: {
      FilterData(NewValue) {
        this.options = Options.filter(A => this.runFilter(A, NewValue));
      },
      runFilter(Item, Filters) {
        return Filters.split(',').find(Filter => Item.value.toLowerCase().indexOf(Filter.toLowerCase()) >= 0);
      },
    },
    name: 'browse-proposal-filter-language-type',
  };

</script>
