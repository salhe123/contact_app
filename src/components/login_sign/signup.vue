<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <h2 class="text-2xl font-bold mb-4">Signup</h2>
    <form @submit.prevent="signup" class="flex flex-col space-y-4">
      <input type="email" id="email" placeholder="username" v-model="username" required
        class="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
      <input type="email" id="email" placeholder="Email" v-model="email" required
        class="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
      <input type="password" id="password" placeholder="password" v-model="password" required
        class="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
      <input type="password" id="confirmPassword" placeholder="Confirm Password" v-model="confirmPassword" required
        class="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
      <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
        Signup
      </button>
    </form>
  </div>
</template>

<script>
import { gql, useMutation } from '@apollo/client';

const SIGNUP_MUTATION = gql`
  mutation Signup($email: String!, $password: String!, $username: String!) {
    signup(email: $email, password: $password, username: $username) {
      token
      user {
        id
        email
      }
    }
  }
`;

export default {
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      username: '',
    };
  },
  methods: {
    async signup() {
      try {
        const { data } = await this.$apollo.mutate({
          mutation: SIGNUP_MUTATION,
          variables: {
            email: this.email,
            password: this.password,
            username: this.username,
          },
        });
        localStorage.setItem('token', data.signup.token);
        localStorage.setItem('userId', data.signup.user.id);
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

This code defines a `SIGNUP_MUTATION` that sends a [signup request](poe://www.poe.com/_api/key_phrase?phrase=signup%20request&prompt=Tell%20me%20more%20about%20signup%20request.)
 to your Hasura GraphQL API using the `signup` mutation. It also defines a `signup` 
 method that uses the `useMutation` hook from Apollo Client to perform the mutation. If the signup is successful,
  the [JWT](poe://www.poe.com/_api/key_phrase?phrase=JWT&prompt=Tell%20me%20more%20about%20JWT.) token and user 
  ID are 
  stored in `localStorage` and the user is redirected to the home page. 
Note that in the `signup` method, you will need to replace the `localStorage` keys with your own keys.