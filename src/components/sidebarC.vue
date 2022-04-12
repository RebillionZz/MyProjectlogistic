<template>
    <v-app class="bg-grey">
        <v-navigation-drawer app  v-model="drawer">
        <v-list>
                <v-list-item>
                    <v-list-item-title class="d-flex flex-column justify-center pt-3">
                        <v-list-item-title class="logo pl-3 "><img width="100px" src="../assets/Admin/sidebar/HalLogo.png" alt=""></v-list-item-title>
                        <v-list-item-content class="point">HAL logistic</v-list-item-content>
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        <!-- end logo -->
        <!-- start list logo not working -->
        <v-list-item 
                v-for="LG1 in listG1" :key="LG1.id" :to="LG1.route" active-class="clickBR" @click="hildeDATAC('Show')"
                >
                    <v-list-item-icon><img src="" class="svg_width" alt="" srcset=""></v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>
                            {{LG1.text}}
                        </v-list-item-title>
                    </v-list-item-content>
        </v-list-item>
                <!-- Group my item -->
                <v-list-group :value="false" no-action >
                    
                    <template v-slot:activator >
                        <v-list-item-icon><img src="../assets/Admin/sidebar/COD.svg" class="svg_width" alt="" srcset=""></v-list-item-icon>
                        <v-list-item-content>
                            
                            <v-list-item-title>ພັດສະດຸຂອງຂ້ອຍ</v-list-item-title>
                        </v-list-item-content>
                    </template>
                    <!-- <v-list-item :value="true" active-class="clickBR-G">
                        <v-list-item-content>
                            <v-list-item-title>ພັດສະດຸທີ່ຂ້ອຍສົ່ງອອກ</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item :value="true" active-class="clickBR-G">
                        <v-list-item-content>
                            <v-list-item-title>ພັດສະດຸທີ່ສົ່ງເຖິງຂ້ອຍ</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item> -->
                    <v-list-item 
                v-for="LG321 in listG321" :value="true" :key="LG321.id" :to="LG321.route"  active-class="clickBR"  @click="hildeDATAC('Show')"
                >
                    <v-list-item-icon><v-img max-width="30" max-height="30" ></v-img></v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="LG321.text">
                            
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                    <v-list-item 
                v-for="LG322 in listG322" :value="true" :key="LG322.id" :to="LG322.route"  active-class="clickBR"  @click="hildeDATAC('Show')"
                >
                    <v-list-item-icon><v-img max-width="30" max-height="30" ></v-img></v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>
                            {{LG322.text}}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                </v-list-group>
                <!-- end group  and start loop list 2-->
                <v-list-item 
                v-for="LG2 in listG2" :key="LG2.id" :to="LG2.route" active-class="clickBR"  @click="hildeDATAC('Show')"
                >
                    <v-list-item-icon><v-img max-width="30" max-height="30" :src="LG2.imgG2"></v-img></v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>
                            {{LG2.text}}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <!-- @click="RemoveToolbar()" -->
                <v-list-item  v-for="LG3 in listG3" :key="LG3.id" :to="LG3.route" active-class="clickBR" @click="hildeDATAC('Not')"
                >
                    <v-list-item-icon><v-img max-width="28" max-height="28" src="../assets/Admin/sidebar/treeData.svg"></v-img></v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>
                            {{LG3.text}}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
    </v-navigation-drawer>


    <!-- container Toolbar main -->
    <v-container > <!-- This important for change Search And remove add new Icon this section remove col add to Search Comment -->
        <v-toolbar dense flat class="bg-grey toolbar-mb-pd ">
        <!-- search -->

        <v-row class="d-flex align-center">
            <!-- MENU ICON -->
            <v-col cols="1" class="d-lg-none d-xs-block d-sm-block max-test"><v-img max-height="27" max-width="27" src="../assets/Admin/sidebar/toolbar/ham.svg" @click="drawer = !drawer"></v-img></v-col>
            <v-col cols="8" class="search-form mr-lg-2 mr-md-3  pushICONHAM" v-if="dataC === 'Show' " >
                <label for="searchBar" class="for-search"><v-img src="../assets/Admin/sidebar/toolbar/search.svg" max-height="37" max-width="37"></v-img></label>
                <input type="text" name="" id="searchBar" placeholder="ໃສ່ລະຫັດ tracking ID" class="input-max">
            </v-col>
            <v-col cols="8" v-if="dataC === 'Not' " >
                <div class="d-lg-flex align-center d-none">
                    <v-avatar class="Background_head" size="60"><v-img src="../assets/Admin/dataContent/mainIcon.svg" max-height="40" max-width="40"></v-img></v-avatar>
                    <h2 class="pl-3">ຂໍ້ມູນສາຂາ</h2>
                </div>
            </v-col>
            <v-col cols="3" class=" d-flex align-center Push_User ">
                
                <div class="d-flex align-center boar-grey pr-1  border-user">
                    <v-avatar size="40"><v-img src="../assets/Admin/sidebar/toolbar/userAVATA.png"></v-img></v-avatar>
                    <div class=" align-center d-none d-md-flex d-lg-flex pl-3">{{userAPI}} <v-flex class="px-1"><img src="../assets/Admin/sidebar/toolbar/downARR.svg" width="15px" height="15px" alt="" class="d-none d-md-flex  d-lg-flex"></v-flex></div>
                    
                </div>
                <div class="d-flex align-center">
                    <v-flex class="pl-2"><v-avatar size="31" class=""><v-img src="../assets/Admin/sidebar/toolbar/coin.svg" max-height="40" max-width="40"></v-img></v-avatar></v-flex>
                    <div class="d-none d-md-block d-lg-block pl-2 " >{{CoinAPI}}   Coin</div>
                </div>
            </v-col>
        </v-row>
        </v-toolbar>
    </v-container>
    <!-- container view -->
    <v-container>
        {{data_CSearch}}
        <router-view></router-view>
    </v-container>
        
    
    </v-app>
</template>

<script>
export default {
    name:'sidebarC',
    data() {
        return {
            // D_search:true,
            // D_data:false,
            
            dataC:'Show',
            drawer: null,
            userAPI:'bebe',
            CoinAPI:'220',
            listG1:[
                {id:1,text:'ໜ້າຫຼັກ',icon:'ICON',imgS:'../assets/Admin/sidebar/home.svg',route:'/sidebarC'},
                {id:2,text:'ຝາກເຄື່ອງເອງ',icon:'ICON',imgS:'../assets/Admin/sidebar/home.svg',route:'/sendDC'},
            ],
            listG2:[
                {id:3,text:'ຄິດໄລ່ຄ່າຂົນສົ່ງ',icon:'ICON',imgG2:'../assets/Admin/sidebar/COD.svg',route:'/priceDC'},
                {id:4,text:'COD',icon:'ICON',imgG2:'../assets/Admin/sidebar/COD.svg',route:'/CODDC'},
                // {id:3,text:'ຂໍ້ມູນສາຂາ',icon:'ICON',imgG2:'../assets/Admin/sidebar/COD.svg',route:'/DataDC'},
            ],
            listG3:[
                {id:5,text:'ຂໍ້ມູນສາຂາ',icon:'ICON',imgG2:'../assets/Admin/sidebar/COD.svg',route:'/DataDC'},
            ],
            listG322:[
                {id:6,text:'ພັດສະດຸທີ່ຂ້ອຍສົ່ງອອກ',icon:'ICON',imgG2:'../assets/Admin/sidebar/COD.svg',route:'/myItempushC'},
            ],
            listG321:[
                {id:7,text:'ພັດສະດຸທີ່ຂ້ອຍສົ່ງເຖິງຂ້ອຍ',icon:'ICON',imgG2:'../assets/Admin/sidebar/COD.svg',route:'/myItemGetC'}
            ],
        }
    },
    methods:{
        // hide_DataC(){
        //     data_CSearch =  !data_CSearch;
        //     data_C = !data_C;
        // }
        hildeDATAC:function(newItem){
            this.dataC = newItem;
            
        }
    },
    computed:{
            
    }
}
</script>





<style lang="scss" scoped>
.max-test{
    max-width: 30px !important;
    
}
.logo{
    cursor: pointer;
}

// class active
.svg_width{
        width: 20px;
        
    }
.clickBR{
    border-right: 4px solid $red;
    // color: $red;
}
.clickBR-G{
    border-right: 4px solid $red;
    // padding-left: 12px;
}
.bg-grey{
    background: $d-grey !important;
}
.bg-red{
    background-color: $red !important;
}

// Toolbar for-search
.search-form{
    position: relative;
    
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
        left: 10px;
        top: 0px;
    }
}
.Background_head{
    background: #FFD9D9;
}
.user-AVA{
    width: 45px;
    height: 45px;
    border-radius: 50%;
}
.border-user{
    border-right: 2px solid #ABABAB;
    
}
.Push_User{
    margin-left: 0px;
}
.toolbar-mb-pd{
    padding-top:6px;
}
// @media screen and (max-width: 1024px) {
    
// }
@media only screen and (max-width: 768px) {
    *{
        font-size: 16px;
    .pushICONHAM{
        margin-left: 12px;
    }
    .Push_User{
        margin-left: 16px;
    }
}
}
@media screen and (max-width: 600px) {
    .search-form{
    // position: relative;
    
    padding:0 5px !important;

        .input-max{
            // width: 100%;
            height: 35px;
            padding-left: 45px;
            // background:$bg-footer;
            border-radius: 34px;
            outline: none;
        }
        .for-search{
            position: absolute;
            left: 15px;
            top: -3px;
        }
    }
    .pushICONHAM{
        margin-left: 0px;
    }
    .Push_User{
        margin-left: 0px;
    }
}
    
</style>