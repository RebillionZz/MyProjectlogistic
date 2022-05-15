<template>
  <v-app>
    <router-link to="/register">
        <button >Swrap</button>
      </router-link>
    <form  class="login " >
      <div>
        <v-col class="pa-0"
            cols="12"
            sm="6"
          >
            <v-text-field
              v-model="email"
              color="purple darken-2"
              label="email"
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
          <div>
              <v-btn @click.prevent="userPage()">Login</v-btn>
              
          </div>
      </div>
    </form>
    
    
    <!-- <router-link to="/sidebarc/" class="d-flex justify-center">Go DashBoard</router-link> -->
  </v-app>
  
</template>

<script>

// import DashbordView from '../views/Admin/DashbordView.vue'
import axios from 'axios'
  export default {
    name: 'HomeView',
    data() {
      return {
        email:'Johnny@test.com',
        password:'',
        rename:'user10',
        remail:'user@test.com',
        relastname:'lastuser10',
        repassword:'123',
        isHidden: false
      }
    },
    methods:{
      
      async userPage(){
        const result =await axios.get(
            `http://localhost:3000/user?email=${this.email}&password=${this.password}`
        )
        console.log(result)
        if(result.status==200 && result.data.length>0){ 

          console.log(result)
          localStorage.setItem("user-info",JSON.stringify(result.data[0]))
          this.$router.push("/sidebar");
          
          console.log('ok')
        }else{
          console.log('no no no')
        }
      },
      
      
    },
    mounted(){
      let user = localStorage.getItem('user-info');
      console.log(user)
      if(user){
        this.$router.push("/Sidebar");
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