<template>
  <div>
    <d-btn v-d-toggle.talent-filters :class="TalentButtonClass">Talent Filters</d-btn>
    <d-collapse id="talent-filters" @show="TalentFilterOpen" @hide="ShowTalentFilter">
      <browse-proposal-filter-job-skills
        @FilterChanged="JobSkillFilterChanged"/>
    </d-collapse>
    <d-btn v-d-toggle.language-filters :class="LanguageButtonClass">Language Filters</d-btn>
    <d-collapse id="language-filters" @show="LanguageFilterOpen" @hide="ShowLanguageFilter">
      <browse-proposal-filter-language-type
        @FilterChanged="LanguageFiltersChanged"/>
    </d-collapse>
    <d-btn v-d-toggle.finance-filter :class="FinanceButtonClass">Finance Filters</d-btn>
    <d-collapse id="finance-filter" @show="FinanceFilterOpen" @hide="ShowFinanceFilter" >
      <browse-proposal-filter-finance
        @FilterChanged="FinanceFiltersChanged"/>
    </d-collapse>

  </div>

</template>

<script>


  import BrowseProposalFilterLanguageType from './Filters/BrowseProposalFilterLanguageType.vue';
  import BrowseProposalFilterFinance from './Filters/BrowseProposalFilterFinance.vue';
  import BrowseProposalFilterJobSkills from './Filters/BrowseProposalFilterJobSkills.vue';

  export default {
    components: { BrowseProposalFilterJobSkills, BrowseProposalFilterFinance, BrowseProposalFilterLanguageType },

    methods: {
      TalentFilterOpen() {
        this.TalentButtonClass = ['btn-block', 'btn-danger'];
      },
      ShowTalentFilter() {
        this.TalentButtonClass = ['btn-primary'];
      },
      LanguageFilterOpen() {
        this.LanguageButtonClass = ['btn-block', 'btn-danger'];
      },
      ShowLanguageFilter() {
        this.LanguageButtonClass = ['btn-primary'];
      },
      FinanceFilterOpen() {
        this.FinanceButtonClass = ['btn-block', 'btn-danger'];
      },
      ShowFinanceFilter() {
        this.FinanceButtonClass = ['btn-primary'];
      },
      JobSkillFilterChanged(NewValue) {
        this.$emit('JobSkillFiltersChanged', NewValue);
      },
      LanguageFiltersChanged(NewValue) {
        this.$emit('LanguageFiltersChanged', NewValue);
      },
      FinanceFiltersChanged(NewValue) {
        this.$emit('FinanceFiltersChanged', NewValue);
      },
    },
    data() {
      return {
        TalentButtonClass: [],
        LanguageButtonClass: [],
        FinanceButtonClass: [],
      };
    },
  };
</script>
