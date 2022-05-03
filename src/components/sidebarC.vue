<template>
    <v-app class="bg-grey position-app">
        <v-navigation-drawer app  v-model="$store.state.drawer">
        <v-list>
                <v-list-item>
                    <v-list-item-title class="d-flex flex-column justify-center pt-3">
                        <v-list-item-title class="logo pl-3 "><img width="100px" src="../assets/Admin/sidebar/HalLogo.png" alt=""></v-list-item-title>
                        <v-list-item-content class="point">HAL logistic</v-list-item-content>
                        <!-- <v-btn @click="$store.state.userAVT = !$store.state.userAVT">{{$store.state.userAVT}}</v-btn> -->
                        <!-- <v-btn @click="$store.state.drawer = !$store.state.drawer">{{$store.state.drawer}}</v-btn> -->
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        <!-- end logo -->

        <!-- start list logo not working -->
            
                <sidebarviewC></sidebarviewC>
    </v-navigation-drawer>


    <!-- container Toolbar main -->
    <v-container > <!-- This important for change Search And remove add new Icon this section remove col add to Search Comment -->
        <!-- <searchbarC ></searchbarC> -->
    </v-container>
    <v-container>
        <router-view></router-view>

        <!-- <footerC class="mt-5"></footerC> -->
    </v-container>
    <transition name="fade_mobile">
        <div class="userbox_mobile"  v-if="$store.state.userAVT" >



        <div class="AA pt-3 px-3" >
                            <div class="back_icon" @click="$store.state.userAVT = !$store.state.userAVT"><img src="../assets/Admin/UserInfo/back-icon.svg" alt="" srcset=""></div>
                            <div class="d-flex mb-4" @click="$store.state.userAVT = !$store.state.userAVT">
                                <div class="avataUser"><img class="userIMG" src="../assets/Admin/sidebar/toolbar/userAVATA.png"></div>
                                <div class="pl-5">
                                    <div>{{userAPI}} <span>Soudalat</span></div>
                                    <router-link to="/userinfoc"  style="text-decoration: none;   color: #888888;">ເບິ່ງຂໍ້ມູນສ່ວນຕົວ</router-link>
                                </div>
                            </div>
                            <!--  -->
                            
                            <v-divider color="red"></v-divider>
                            <!-- Content change to col easy and fast control just back -->
                            <div @click="$store.state.userAVT = !$store.state.userAVT">
                                <router-link to="/userbunzyc"  class="d-flex align-center TTTT justify-space-between" style="text-decoration: none;  color:#222222;" >
                                    <div class="my-3  d-flex align-center  ">
                                        <v-avatar color="red lighten-4" size="40" class="pl-1 mr-5"><v-img src="../assets/Admin/sidebar/toolbar/Dropdown/accout.svg" max-height="30" max-width="30"></v-img></v-avatar>
                                        <div class=" pt-1 ">ຂໍ້ມູນບັນຊີ</div>
                                    </div>
                                    <!-- THis arrow -->
                                    <div class=" pt-1  "><v-img src="../assets/Admin/sidebar/toolbar/Dropdown/rightIcon.svg" max-height="25" max-width="25"></v-img></div>
                                </router-link>
                            </div>

                            <div @click="$store.state.userAVT = !$store.state.userAVT">
                                <router-link to="/contactc"  class="d-flex align-center TTTT justify-space-between" style="text-decoration: none;  color:#222222;">
                                    <div class="my-3  d-flex align-center ">
                                        <v-avatar color="red lighten-4" size="40" class=" mr-5"><v-img src="../assets/Admin/sidebar/toolbar/Dropdown/service.svg" max-height="25" max-width="25"></v-img></v-avatar>
                                        <div class=" pt-1 ">ຕິດຕໍ່ພວກເຮົາ</div>
                                    </div>
                                    <!-- THis arrow -->
                                    <div class=" pt-1 "><v-img src="../assets/Admin/sidebar/toolbar/Dropdown/rightIcon.svg" max-height="25" max-width="25"></v-img></div>
                                </router-link>
                            </div>
                            <div class="d-flex align-center TTTT justify-space-between" @click="$store.state.userAVT = !$store.state.userAVT" style="text-decoration: none;  color:#222222;">
                                <div class="my-3  d-flex align-center ">
                                    <v-avatar color="red lighten-4" size="40" class=" mr-5"><v-img src="../assets/Admin/sidebar/toolbar/Dropdown/logout.svg" max-height="25" max-width="25"></v-img></v-avatar>
                                    <div class=" pt-1 ">ອອກຈາກລະບົບ</div>
                                </div>
                                <!-- THis arrow -->
                                <div class="pt-1 "><v-img src="../assets/Admin/sidebar/toolbar/Dropdown/rightIcon.svg" max-height="25" max-width="25" min-width="20" min-height="20"></v-img></div>
                            </div>
                        </div>
    </div>
    </transition>
    </v-app>
</template>

<script>
// import footerC from '../components/footerC.vue'
import searchbarC from './searchbarC.vue'
// import hamburgur from './DashTopview/hamburgur.vue'
import sidebarviewC from '../views/Admin/sidebarviewC.vue'

export default {
    name:'sidebarc',
    data() {
        return {
            
            userAPI:'bebe',
            // drawer2:$store.state.drawer,
            hello:'hi',
            TEST:[{id:1,text:'Comple'}],
            
        }
    },
    components:{
        searchbarC,
        sidebarviewC,
        // hamburgur,
        // footerC
    }
    ,
    methods:{
    },
    computed:{
            
    }
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
.TTTT{
    cursor: pointer;
    width: 100% !important;
    &:hover{
        color: $red !important;
    }
}
// -----------------------------------------------------
.v-application--is-ltr .v-list-group--no-action > .v-list-group__items > .v-list-item{
    padding-left:24px;
}
.theme--light.v-list-item--active::before{
    opacity: 0;
}
.theme--light.v-list-item--active::before:hover{
    opacity: 0;
}
.theme--light.v-list-item--active:hover::before{
    opacity: 0;

}
.v-list-item--active .v-list-item{
    background: red;
}
.v-application a {
    color: #E21312;
}

// 
.logo{
    cursor: pointer;
}

// class active
.svg_width{
        width: 20px;
        
    }
.clickBR{
    border-right: 4px solid $red;
}
.clickBR-G{
    border-right: 4px solid $red;
}
.bg-grey{
    background: $d-grey !important;
}
.bg-red{
    background-color: $red !important;
}
.color-grey-text{
    color: #888888;
}

// Toolbar for-search

.user-AVA{
    width: 45px;
    height: 45px;
    border-radius: 50%;
}

.toolbar-mb-pd{
    padding-top:6px;
}
.User_Dropdown_Conntent{
    background: #FFFFFF;
}
.TTTT{
    cursor: pointer;
    width: 220px;
    &:hover{
        color: $red;
    }
}
@media screen and (max-width: 1024px) {
    
}
@media only screen and (max-width: 768px) {
    *{
        font-size: 16px;
    
}
}
@media screen and (max-width: 600px) {
    
    
}
    
</style>