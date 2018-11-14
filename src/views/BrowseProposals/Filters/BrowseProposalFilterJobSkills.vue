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
  const Options = [
    { value: 'Graphics', text: 'Graphics: Styling(sass,css,jss) and Image editors are your playground' },
    { value: 'Production', text: 'Production: Video and content production to make users laugh and draw people in' },
    { value: 'Frontend Logic', text: 'Frontend Logic: You are the gateway the user sees into the product' },
    { value: 'Data', text: 'Data: Beyond simple queries, you are a data wizard.' },
    { value: 'Backend Logic', text: 'Backend Logic: Security and structured, you build a fortress of good code.' },
    { value: 'Personnel/Accounting', text: 'Personal/Accounting: The paperwork monster will not slay itself.' }];

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
