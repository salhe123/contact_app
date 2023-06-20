<template>
    <div class="flex flex-col items-center justify-center h-screen">
      <h2 class="text-2xl font-bold mb-4">Login</h2>
      <form @submit.prevent="login" class="flex flex-col space-y-4">
        <label for="email" class="text-lg">Email:</label>
        <input type="email" id="email" v-model="email" required
          class="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
        <label for="password" class="text-lg">Password:</label>
        <input type="password" id="password" v-model="password" required
          class="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
        <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          Login
        </button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      login() {
        // Perform login logic using ApolloClient or Axios
        // Call the backend API to authenticate the user with provided email and password
        // Handle success or failure response from the backend
      },
    },
  };
  </script>
  
  <style>
  /* Add Tailwind CSS classes here */
  </style>
  