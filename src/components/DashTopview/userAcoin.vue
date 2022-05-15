<template>
    <v-col cols="4" sm="3" lg="4" md="4" xs="3"  class=" d-flex align-center pl-1 justify-md-end justify-lg-end justify-center">
                <!-- box user-Dropdown and slide -->
                <div class="d-flex align-center pr-1  border-user">
                    <div class="avataUser d-none d-lg-block d-md-block"><img class="userIMG " src="@/assets/Admin/sidebar/toolbar/userAVATA.png"></div>
                    <div @click="$store.state.userAVT = !$store.state.userAVT" class="avataUser d-block d-lg-none- d-md-none">
                        
                        <img class="userIMG" src="@/assets/Admin/sidebar/toolbar/userAVATA.png">

                    </div>
                    <!--  -->
                    <v-menu offset-y>
                        <template v-slot:activator="{ on, attrs }">

                            <div class=" align-center d-none d-md-flex d-lg-flex pl-3" v-bind="attrs" v-on="on">{{userGet.name}} <v-flex class="px-1"><img class="d-none d-md-flex  d-lg-flex" src="@/assets/Admin/sidebar/toolbar/downARR.svg" width="15px" height="15px" alt="" ></v-flex></div>

                        </template>
                        <!--  -->
                        <div class="User_Dropdown_Conntent pa-5">
                            <div class="d-flex mb-4">
                                <div class="avataUser"><img class="userIMG" src="@/assets/Admin/sidebar/toolbar/userAVATA.png"></div>
                                <div class="pl-5">
                                    <div>{{this.userGet.name}} <span>{{this.userGet.lastname}}</span></div>
                                    <router-link to="/userinfoc"  style="text-decoration: none;   color: #888888;">ເບິ່ງຂໍ້ມູນສ່ວນຕົວ</router-link>
                                </div>
                            </div>
                            <!--  -->
                            
                            <v-divider color="red"></v-divider>
                            <!-- Content change to col easy and fast control just back -->
                            <router-link to="/userbunzyc" class="d-flex align-center TTTT justify-space-between" style="text-decoration: none;  color:#222222;" >
                                <div class="my-3  d-flex align-center  ">
                                    <v-avatar color="red lighten-4" size="40" class="pl-1 mr-5"><v-img src="@/assets/Admin/sidebar/toolbar/Dropdown/accout.svg" max-height="30" max-width="30"></v-img></v-avatar>
                                    <div class=" pt-1 ">ຂໍ້ມູນບັນຊີ</div>
                                </div>
                                <!-- THis arrow -->
                                <div class=" pt-1  "><v-img src="@/assets/Admin/sidebar/toolbar/Dropdown/rightIcon.svg" max-height="25" max-width="25"></v-img></div>
                            </router-link>
                            <router-link to="/contactc" class="d-flex align-center TTTT justify-space-between" style="text-decoration: none;  color:#222222;">
                                <div class="my-3  d-flex align-center ">
                                    <v-avatar color="red lighten-4" size="40" class=" mr-5"><v-img src="@/assets/Admin/sidebar/toolbar/Dropdown/service.svg" max-height="25" max-width="25"></v-img></v-avatar>
                                    <div class=" pt-1 ">ຕິດຕໍ່ພວກເຮົາ</div>
                                </div>
                                <!-- THis arrow -->
                                <div class=" pt-1 "><v-img src="@/assets/Admin/sidebar/toolbar/Dropdown/rightIcon.svg" max-height="25" max-width="25"></v-img></div>
                            </router-link>
                            <div class="d-flex align-center TTTT justify-space-between" style="text-decoration: none;  color:#222222;" @click="logout()">
                                <div class="my-3  d-flex align-center ">
                                    <v-avatar color="red lighten-4" size="40" class=" mr-5"><v-img src="@/assets/Admin/sidebar/toolbar/Dropdown/logout.svg" max-height="25" max-width="25"></v-img></v-avatar>
                                    <div class=" pt-1 ">ອອກຈາກລະບົບ</div>
                                </div>
                                <!-- THis arrow -->
                                <div class="pt-1 "><v-img src="@/assets/Admin/sidebar/toolbar/Dropdown/rightIcon.svg" max-height="25" max-width="25" min-width="20" min-height="20"></v-img></div>
                            </div>
                        </div>
                    </v-menu>
                    
                </div>
                <!-- COin -->
                <div class="d-flex align-center">
                    <v-flex class="pl-2"><div class="box-coin d-flex align-center"><img class="coinImg" src="@/assets/Admin/sidebar/toolbar/coin.svg" max-height="40" max-width="40"></div></v-flex>
                    <div class="d-none d-md-flex d-lg-flex pl-2  align-center" ><div class="d-flex align-center">{{userGet.coin}}  <div class="pl-1">Coin</div></div></div>
                </div>
            </v-col>
</template>

<script>
// import axios from 'axios'
export default {
    name:'userAcoin',
    data() {
        return {
            // userAPI:'bebe',
            // CoinAPI:'220',
            userGet:[],
        };
    },
    created(){
        // const res  = await axios.get('http://localhost:3000/user')
        // console.log('alert',res);
        // const user = localStorage.getItem('user-info',)
        // console.log('user',user)
        var user = JSON.parse(localStorage.getItem("user-info"));
        this.userGet = user;
        console.log(this.userGet.name)

    },
    methods:{
        logout(){
            this.$store.dispatch("clearStore");
        }
    },
    mounted(){
    },

}
</script>

<style lang="scss" scoped>
.fade_mobile-enter-active, .fade_mobile-leave-active{
    transition:  .3s ease-in-out;
    right: 0%;
}
.fade_mobile-enter, .fade_mobile-leave-to{
    opacity: 0;
    right: -100%;
}
.back_icon{
    width: 25px;
    height: 25px;
    margin-bottom:10px;
    img{
        width: 100%;
        height: 100%;
    }
}
.AA{
    width: 100%;
}
.avataUser{
        height: 50px;
        width: 50px;
        border-radius: 100%;
        .userIMG{
            width: 100%;
            height: 100%;
            border-radius: 100%;
        }
    }
.position-app{
    position: relative;
    width: 100%;
}
.userbox_mobile{
    position:absolute;
    background:#E5E5E5;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 10;
}
.border-user{
    border-right: 2px solid #ABABAB;
    
}
.TTTT{
    cursor: pointer;
    width: 100% !important;
    &:hover{
        color: $red !important;
    }
}
.box-coin{
    width: 25px;
    height:25px;
    .coinImg{
        width: 100%;
        height: 100%;
    }
}
.User_Dropdown_Conntent{
    background: #FFFFFF;
}
@media only screen and (max-width: 768px) {
    *{
        font-size: 16px;
    
}
}
@media screen and (max-width: 420px) {
    .avataUser{
        height: 35px;
        width: 35px;
    }
    
}
</style>