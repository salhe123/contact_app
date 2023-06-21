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
  export default {
    data() {
      return {
        email: '',
        password: '',
        confirmPassword: '',
      };
    },
    methods: {
      signup() {
        // Perform signup logic using ApolloClient or Axios
        // Call the backend API to create a new user with provided email and password
        // Handle success or failure response from the backend
      },
    },
  };
  </script>
  
  <style>
  /* Add Tailwind CSS classes here */
  </style>
  