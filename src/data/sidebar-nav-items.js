export default function () {
  return [{
    title: 'User Profile',
    htmlBefore: '<i class="material-icons">person</i>',
    to: {
      name: 'profile',
    },
  }, {
    title: 'Proposal',
    htmlBefore: '<i class="material-icons">view_module</i>',
    to: {
      name: 'proposal',
    },
  }, {
    title: 'Errors',
    htmlBefore: '<i class="material-icons">error</i>',
    to: {
      name: 'errors',
    },
  }];
}
