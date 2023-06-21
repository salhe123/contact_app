<script>
import Home from './components/Home.vue';
export default {
  components: {
  },
};

</script>

<template>
<div class="bg-gray-400 min-h-screen">
  <h1 class="ml-5 pt-5">Contacts</h1>
  <div class="flex justify-end mr-5 pt-5">
      <router-link to="/login">
        <h1 class="mr-2">Login</h1>
      </router-link>
      <router-link to="/signup">
        <h1>Signup</h1>
      </router-link>
    </div>
<RouterView></RouterView>
</div>
  
</template>

<style scoped>

</style>
