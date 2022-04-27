<template>
    <v-container>

    <v-row no-gutters >
        <v-flex class="d-flex align-center" >
            <!-- MENU ICON -->
            <v-col cols="1" class="d-lg-none d-md-none d-xs-block d-sm-block" >
                <div class="d-flex align-center justify-center ">
                    <img class="HamSide" src="../assets/Admin/sidebar/toolbar/ham.svg" @click="drawer = !drawer">
                </div>
            </v-col>
            <v-col cols="8" sm="9" lg="9" md="9" xs="8"   class="search-form mr-lg-2 mr-md-3" v-if="dataC === 'Show' " >
                <label class="for-search" for="searchBar" ><v-img src="../assets/Admin/sidebar/toolbar/search.svg" max-height="37" max-width="37"></v-img></label>
                <input class="input-max" type="text" name="" id="searchBar" placeholder="ໃສ່ລະຫັດ tracking ID" >
            </v-col>
            <v-col cols="3" sm="2" lg="2" md="2" xs="3"  class=" d-flex align-center pl-1  ">
                
                <div class="d-flex align-center pr-1  border-user">
                    <div class="avataUser"><img class="userIMG" src="../assets/Admin/sidebar/toolbar/userAVATA.png"></div>
                    <!-- <div class="avataUser"><img class="userIMG" src="../assets/Admin/sidebar/toolbar/userAVATA.png"></div> -->
                    <v-menu offset-y>
                        <template v-slot:activator="{ on, attrs }">
                            <div class=" align-center d-none d-md-flex d-lg-flex pl-3" v-bind="attrs" v-on="on">{{userAPI}} <v-flex class="px-1"><img class="d-none d-md-flex  d-lg-flex" src="../assets/Admin/sidebar/toolbar/downARR.svg" width="15px" height="15px" alt="" ></v-flex></div>

                        </template>
                        <!--  -->
                        <div class="User_Dropdown_Conntent pa-5">
                            <div class="d-flex mb-4">
                                <div class="avataUser"><img class="userIMG" src="../assets/Admin/sidebar/toolbar/userAVATA.png"></div>
                                <div class="pl-5">
                                    <div>{{userAPI}} <span>Soudalat</span></div>
                                    <div class="color-grey-text">ເບິ່ງຂໍ້ມູນສ່ວນຕົວ</div>
                                </div>
                            </div>
                            <!--  -->
                            
                            <v-divider color="red"></v-divider>
                            <!-- Content change to col easy and fast control just back -->
                            <router-link to="/UserBunzyC" class="d-flex align-center TTTT justify-space-between" >
                                <div class="my-3  d-flex align-center  ">
                                    <v-avatar color="red lighten-4" size="40" class="pl-1 mr-5"><v-img src="../assets/Admin/sidebar/toolbar/Dropdown/accout.svg" max-height="30" max-width="30"></v-img></v-avatar>
                                    <div class=" pt-1 ">ຂໍ້ມູນບັນຊີ</div>
                                </div>
                                <!-- THis arrow -->
                                <div class=" pt-1  "><v-img src="../assets/Admin/sidebar/toolbar/Dropdown/rightIcon.svg" max-height="25" max-width="25"></v-img></div>
                            </router-link>
                            <router-link to="/contactC" class="d-flex align-center TTTT justify-space-between">
                                <div class="my-3  d-flex align-center ">
                                    <v-avatar color="red lighten-4" size="40" class=" mr-5"><v-img src="../assets/Admin/sidebar/toolbar/Dropdown/service.svg" max-height="25" max-width="25"></v-img></v-avatar>
                                    <div class=" pt-1 ">ຕິດຕໍ່ພວກເຮົາ</div>
                                </div>
                                <!-- THis arrow -->
                                <div class=" pt-1 "><v-img src="../assets/Admin/sidebar/toolbar/Dropdown/rightIcon.svg" max-height="25" max-width="25"></v-img></div>
                            </router-link>
                            <div class="d-flex align-center TTTT justify-space-between">
                                <div class="my-3  d-flex align-center ">
                                    <v-avatar color="red lighten-4" size="40" class=" mr-5"><v-img src="../assets/Admin/sidebar/toolbar/Dropdown/logout.svg" max-height="25" max-width="25"></v-img></v-avatar>
                                    <div class=" pt-1 ">ອອກຈາກລະບົບ</div>
                                </div>
                                <!-- THis arrow -->
                                <div class="pt-1 "><v-img src="../assets/Admin/sidebar/toolbar/Dropdown/rightIcon.svg" max-height="25" max-width="25"></v-img></div>
                            </div>
                        </div>
                    </v-menu>
                    
                </div>
                <!-- COin -->
                <div class="d-flex align-center">
                    <v-flex class="pl-2"><div class="box-coin d-flex align-center"><img class="coinImg" src="../assets/Admin/sidebar/toolbar/coin.svg" max-height="40" max-width="40"></div></v-flex>
                    <div class="d-none d-md-flex d-lg-flex pl-2  align-center" ><div class="d-flex align-center">{{CoinAPI}}  <div class="pl-1">Coin</div></div></div>
                </div>
            </v-col>
        </v-flex>
    </v-row>
    </v-container>
</template>

<script>
export default {
name:'searchbarC',
data() {
    return {
        TEST:[{id:1,text:'Comple'}],
            dataC:'Show',
            drawer: null,
            userAPI:'bebe',
            CoinAPI:'220',
        }
    },
    props:[
        // slide(),
    ]
    ,
    methods:{
        hildeDATAC:function(newItem){
            this.dataC = newItem;
            
        }
    },
    computed:{
            
    }
    }
</script>

<style lang="scss" scoped>
// Gobal
.bg-grey{
    background: $d-grey !important;
}
.bg-red{
    background-color: $red !important;
}
.color-grey-text{
    color: #888888;
}
// end



// search starting

.search-form{
    position: relative;
    width: 100%;
    .input-max{
        width: 100%;
        height: 40px;
        padding-left: 45px;
        background:$bg-footer;
        border-radius: 34px;
        outline: none;
    }
    .for-search{
        position: absolute;
        // left: 10px;
        // top: 0px;
        left: 18px;
        top: 12px;
    }
}
.Background_head{
    background: #FFD9D9;
}
// 


// user
.border-user{
    border-right: 2px solid #ABABAB;
    
}
    .avataUser{
        height: 40px;
        width: 40px;
        // border-radius: 50%;
        .userIMG{
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
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
// Coin
.box-coin{
    width: 25px;
    height:25px;
    .coinImg{
        width: 100%;
        height: 100%;
    }
}



@media only screen and (max-width: 768px) {
    *{
        font-size: 16px;
    .HamSide{
    width: 25px;
    height: 25px;
}
    .search-form{
    position: relative;
    padding-right: 8px;
    
    .input-max{
        width: 100%;
        height: 35px;
        padding-left: 40px;
        background:$bg-footer;
        border-radius: 34px;
        outline: none;
    }
    .for-search{
        position: absolute;
        left: 18px;
        top: 12px;
        width: 30px;
        height: 30px;
    }
}
}
}
@media screen and (max-width: 600px) {
    .search-form{
    position: relative;
    
    padding:0 5px !important;

        .input-max{
        width: 100%;
        height: 35px;
        padding-left: 40px;
        background:$bg-footer;
        border-radius: 34px;
        outline: none;
    }
    .for-search{
        position: absolute;
        left: 12px;
        top: 2px;
        // left: 18px;
        // top: 12px;
        width: 30px;
        height: 30px;
    }
    }
    
}
@media screen and (max-width: 420px) {
    .avataUser{
        height: 35px;
        width: 35px;
    }
    
}
    


</style>