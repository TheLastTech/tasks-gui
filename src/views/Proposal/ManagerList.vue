<template xmlns:v-for="http://www.w3.org/1999/xhtml">
  <div><table class="table">
    <thead class="thead-light">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Email</th>
      <th scope="col">Pledge</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(Manager,idx) in PledgeManagers" :key="idx">
      <th scope="row">{{idx +1}}</th>
      <td>{{Manager.firstName}}</td>
      <td>{{Manager.lastName}}</td>
      <td>{{Manager.email}}</td>
      <td>{{Manager.ManagerPledge.tokens}}</td>
    </tr>

    </tbody>
  </table>

  </div>
</template>

<script>


  export default {

    data() {
      return {
        NextText: 'Next Manager',
        ModalSize: 'lg',
        ShowOverwriteModal: false,
        SelectedManager: null,
        CurrentSlide: 0,
        sliding: null,
        CurrentPage: 0,
        UserVotedOn: null,
        PledgeManagers: this.$RpcServer.GetManagers(),
        ShowQa: false,
      };
    },

    mounted() {

      this.$eventHub.$emit('VisibleManagerChange', this.PledgeManagers[0]);
    },
    beforeDestroy() {
      this.$eventHub.$off('VisibleManagerChange');

    },
    methods: {
      ShowQaSection() {
        debugger;
        this.ShowQa = true;
      },
      ShowPreviewSection() {
        debugger;
        this.ShowQa = false;
      },
      ShowManagerSelector(Manager) {
        if (this.SelectedManager !== null) {
          this.ShowOverwriteModal = true;
          return;
        }
        this.SelectedManager = Manager;
      },
      IncrementSlide() {
        if (this.CurrentSlide === this.PledgeManagers.length) this.CurrentSlide = -1;

        this.CurrentPage = ++this.CurrentSlide;
      },
      DecrementSlide() {
        if (this.CurrentSlide === 0) this.CurrentSlide = this.PledgeManagers.length;
        this.CurrentPage = --this.CurrentSlide;
      },
      onSlideStart(slide) {
        this.sliding = true;
      },
      SlideClick(slide) {
        this.CurrentSlide = slide;
        this.$eventHub.$emit('VisibleManagerChange', this.PledgeManagers[slide]);
        this.sliding = false;
      },
    },
  };
</script>
<style>
  .VueCarousel-pagination {
    display: none !important;
  }
</style>
