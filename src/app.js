import UsersTable from './users-table.js'


const app = new Vue({
  el: '#app',
  components: { UsersTable },
  template: `
  <UsersTable>foo</UsersTable>
  `
})
console.log(" => app created")