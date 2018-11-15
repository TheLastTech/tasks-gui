<template>
  <d-card class="card-small mb-4">
    <d-card-header class="border-bottom">
      <h6 class="m-0">Talent Filters</h6>
    </d-card-header>
    <d-input-group
      prepend="Languages&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
      class="mb-3">
      <d-form-select style="height:25vh ;font-size:30px" multiple :select-size="4" v-model="SkillsSelected"
                     :options="options"/>
    </d-input-group>
  </d-card>
</template>
<script>
import Options from './ConstData/filterSkills';

  export default {

    watch: {
      SkillsSelected(SkillsSelected) {
        this.$emit('FilterChanged', SkillsSelected);
      },
    },
    data() {
      return {
        SkillsSelected: [],
        // from https://medium.com/web-development-zone/a-complete-list-of-computer-programming-languages-1d8bc5a891f
        options: Options,
      };
    },


    name: 'browse-proposal-filter-job-skills',
  };


</script>
