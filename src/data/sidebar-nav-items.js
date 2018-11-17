export default function () {
  return [{
    title: 'User Profile',
    htmlBefore: '<i class="material-icons">person</i>',
    to: {
      name: 'profile',
    },
  }, {
    title: 'Proposals',
    htmlBefore: '<i class="material-icons">view_module</i>',
    to: {
      name: 'browse-proposals',
    },
  }];
}
