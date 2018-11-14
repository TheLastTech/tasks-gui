<template>
  <div>
    <d-btn v-d-toggle.language-filters variant="primary">Language Filters</d-btn>
    <d-collapse id="language-filters">
      <browse-proposal-filter-language-type
        @FilterChanged="LanguageFiltersChanged"/>
    </d-collapse>
    <d-btn v-d-toggle.my-collapse variant="primary">Finance Filters</d-btn>
    <d-collapse id="my-collapse">
      <browse-proposal-card-finance-tab
        @FilterChanged="FinanceFiltersChanged"/>
    </d-collapse>
  </div>

</template>

<script>


import BrowseProposalFilterLanguageType from './BrowseProposalFilterLanguageType.vue';
import BrowseProposalCardFinanceTab from './BrowseProposalCardFinanceTab.vue';

export default {
  components: { BrowseProposalCardFinanceTab, BrowseProposalFilterLanguageType },

  methods: {
    LanguageFiltersChanged(NewValue) {
      this.$emit('LanguageFiltersChanged', NewValue);
    },
    FinanceFiltersChanged(NewValue) {
      this.$emit('LanguageFiltersChanged', NewValue);
    },
  },
};
</script>
