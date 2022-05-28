<template>
  <v-app>
      <router-link to="/">
        <button >Swrap</button>
      </router-link>
    <form  class="login"  v-if="!isHidden">
      <div>
        <v-col class="pa-0"
            cols="12"
            sm="6"
          >
            <v-text-field
              v-model="rename"
              color="purple darken-2"
              label="name"
            ></v-text-field>
          </v-col>
      <v-col class="pa-0" cols="12" sm="6" >
            <v-text-field v-model="relastname" color="purple darken-2" label="relastname"
            ></v-text-field>
          </v-col>
          <!-- email -->
        <v-col class="pa-0"
            cols="12"
            sm="6"
          >
            <v-text-field
              v-model="remail"
              color="purple darken-2"
              label="email"
            ></v-text-field>
          </v-col>
        
      <v-col class="pa-0" cols="12" sm="6" >
            <v-text-field v-model="repassword" color="purple darken-2" label="Password"
            ></v-text-field>
          </v-col>
      <!-- <v-col class="pa-0" cols="12" sm="6" >
            <v-text-field v-model="repass2" color="purple darken-2" label="Password"
            ></v-text-field>
          </v-col> -->
          <div>
              <v-btn @click="register()">Register</v-btn>
              
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
    name: 'Register',
    data() {
      return {
        rename:'user10',
        remail:'user@test.com',
        relastname:'lastuser10',
        repassword:'123',
      }
    },
    methods:{
      async register(){
        
        let regisget = await axios.post("http://localhost:3000/user",{
          name : this.rename,
          email : this.remail,
          lastname:this.relastname,
          password : this.repassword,

        });
        console.log(regisget)
        if(regisget.status ==201){
            localStorage.setItem("user-info",JSON.stringify(result.data))
            this.$router.push("/");
        }
      },
      
      
    },
    mounted(){
      let user = localStorage.getItem('user-info');
      console.log(user)
      if(user){
        this.$router.push("/");
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