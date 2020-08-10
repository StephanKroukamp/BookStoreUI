<template>
  <div>
    <div>
      <label>Email</label>
      <input v-model="email" type="text">
    </div>
    <div>
      <label>Password</label>
      <input v-model="password" type="text">
    </div>
    <div>
      <button @click="signIn()">
        Sign In
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: 'administrator@bookstore.co.za',
      password: '@Test1234'
    }
  },
  methods: {
    async signIn () {
      try {
        await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password
          }
        })
      } catch (e) {
      }
    }
  }
}
</script>
