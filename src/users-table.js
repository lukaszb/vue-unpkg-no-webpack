export default {
  template: `
  <table class="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>E-mail</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users">
        <td>{{ getFullUserName(user) }}</td>
        <td><a :href="getMailTo(user.email)">{{ user.email }}</a></td>
      </tr>
    </tbody>
  </table>
  `,
  computed: {
    users() {
      return [
        { name: { first: 'jane', last: 'doe' }, email: 'jane.doe@example.com' },
        { name: { first: 'rolf', last: 'hegdal' }, email: 'rolf.hegdal@example.com' },
      ]
    },
  },
  methods: {
    getMailTo(email) {
      return `mailto:${email}`
    },
    getFullUserName({ name }) {
      return `${capfirst(name.first)} ${capfirst(name.last)}`
    },
  }
}

function capfirst(text) {
  return text[0].toUpperCase() + text.substr(1)
}
