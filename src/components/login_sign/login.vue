<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <h2 class="text-2xl font-bold mb-4">Login</h2>
    <form @submit.prevent="login" class="flex flex-col space-y-4">  
      <input type="email" id="email" placeholder="Email" v-model="email" required
        class="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
      <input type="password" id="password" placeholder="Password" v-model="password" required
        class="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
      <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
        Login
      </button>
    </form>
  </div>
</template>

<script>
import { gql, useMutation } from '@apollo/client';

const LOGIN_MUTATION = useMutation(gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        email
        password
      }
    }
  }
`);

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async login() {
      try {
        const { data } = await this.$apollo.mutate({
          mutation: LOGIN_MUTATION,
          variables: {
            email: this.email,
            password: this.password,
          },
        });
        localStorage.setItem('token', data.login.token);
        localStorage.setItem('userId', data.login.user.id);
        this.$router.push('/');
      } catch (err) {
        console.error(err);
      }
    },
  },
};
</script>

<style>
/* Add Tailwind CSS classes here */
</style>
```

