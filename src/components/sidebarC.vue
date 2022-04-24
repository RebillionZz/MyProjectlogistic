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
                        <div>{{LG321.text}}</div>
                        <v-list-item-title >
                            
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
        <searchbarC></searchbarC>
    </v-container>
    <!-- container view -->
    <v-container>
        <!-- {{data_CSearch}} -->
        <router-view></router-view>
    </v-container>
        
    
    </v-app>
</template>

<script>
import searchbarC from './searchbarC.vue'
export default {
    name:'sidebarC',
    data() {
        return {
            // D_search:true,
            // D_data:false,
            TEST:[{id:1,text:'Comple'}],
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
                {id:6,text:'ພັດສະດຸທີ່ຂ້ອຍສົ່ງເຖິງຂ້ອຍ',icon:'ICON',imgG2:'../assets/Admin/sidebar/COD.svg',route:'/myItemGetC'}
                
            ],
            listG321:[
                {id:7
                ,text:'ພັດສະດຸທີ່ຂ້ອຍສົ່ງອອກ',icon:'ICON',imgG2:'../assets/Admin/sidebar/COD.svg',route:'/myItempushC'},
            ],
        }
    },
    components:{
        searchbarC
    }
    ,
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
.v-application--is-ltr .v-list-group--no-action > .v-list-group__items > .v-list-item{
    padding-left:24px;
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
// @media screen and (max-width: 1024px) {
    
// }
@media only screen and (max-width: 768px) {
    *{
        font-size: 16px;
    
}
}
@media screen and (max-width: 600px) {
    
    
}
    
</style>