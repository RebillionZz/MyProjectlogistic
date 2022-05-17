<template>
  <v-app>
    
    <form @submit.prevent="userPage()" class="login">
      <div>
        <v-col class="pa-0"
            cols="12"
            sm="6"
          >
            <v-text-field
              v-model="name"
              color="purple darken-2"
              label="First name"
            ></v-text-field>
          </v-col>
      <v-col class="pa-0"
            cols="12"
            sm="6"
          >
            <v-text-field
              v-model="password"
              color="purple darken-2"
              label="Password"
            ></v-text-field>
          </v-col>
          <v-btn @click="userPage()">Login</v-btn>
      </div>
    </form>
    <!-- <router-link to="/sidebarc/" class="d-flex justify-center">Go DashBoard</router-link> -->
    <div>
      <v-btn outlined color="red darken-1" dark>
        <router-link to="/homepage" class="d-flex justify-center">Geust Login</router-link>
      </v-btn>
    </div>
  </v-app>
  
</template>

<script>

// import DashbordView from '../views/Admin/DashbordView.vue'
  export default {
    name: 'HomeView',
    data() {
      return {
        name:'user',
        password:''
      }
    },
    methods:{
      userPage(){
        if(this.name == 'user' & this.password =='1'){
          this.$router.push("/sidebarc/");
          
          // console.log('ok')
        }else{
          console.log('no no no')
        }
      }
    },
    components: {
      // DashbordView
    },
  }
</script>
<style lang="scss" scoped>
.login{
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 10%;
}
</style>