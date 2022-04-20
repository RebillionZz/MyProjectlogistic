<template>
  <v-app>
    
    <router-link to="/DashbordView" class="d-flex justify-center">Go DashBoard</router-link>
    <router-link to="/homepage" class="d-flex justify-center">Go User page</router-link>
  </v-app>
  
</template>

<script>

// import DashbordView from '../views/Admin/DashbordView.vue'
  export default {
    name: 'HomeView',
    components: {
      // DashbordView
    },
  }
</script>
