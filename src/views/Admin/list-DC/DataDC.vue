<template>
    <div class="Body dashboard-container-wrap">
        <v-row no-gutters class="hide-overflow d-flex align-center">
            <!-- <v-flex class="d-flex align-center"> -->
                <hamburgur ></hamburgur>
                <v-col cols="8"  lg="9" md="9" sm="9" xs="8"    class="search-form  pa-0  ">
                    <div class="d-none bg-grey mb-4 d-lg-flex d-xl-flex">
                        <div class="d-flex align-center">
                            <v-avatar color="red lighten-4 " size="60"><v-img src="../../../assets/Admin/dataContent/mainIcon.svg" max-height="45" max-width="45"></v-img></v-avatar>
                        </div>
                        <h3 class="d-flex  align-center ml-3">ຂໍ້ມູນສາຂາ</h3>
                    </div>
                </v-col>
                <userAcoin ></userAcoin>
            <!-- </v-flex> -->
        </v-row>
        <div class="d-flex bg-grey mb-4 d-lg-none">
            <div class="d-flex align-center">
                <v-avatar color="red lighten-4"><v-img src="../../../assets/Admin/dataContent/mainIcon.svg" max-height="35" max-width="35"></v-img></v-avatar>
            </div>
            <h3 class="d-flex  align-center ml-3">ຂໍ້ມູນສາຂາ</h3>
        </div>
        <p class="text-center textHead">ພວກເຮົາມີຫຼາຍສາຂາຄອບຄຸມທົ່ວປະເທດ ແລະ ເປີດໃຫ້ບໍລິການ 365 ມື້ບໍ່ມີພັກ</p>
        <!-- <button @click="testD()">TEST</button> -->
        



        
        <div class="backW">
           
            
            <!-- ------------------------------------------------------------------- -->


        <v-tabs v-model="tab" height="150"  slider-color="red " slider-size="2"  color="red"  >
            <v-tabs-slider ></v-tabs-slider>
            <v-col cols="3">
                 <v-tab href="#tab-1" class="mapImg-container">
                    ນະຄອນຫຼວງວຽງຈັນ
                </v-tab>
            </v-col>
            <v-col cols="3">
                 <v-tab href="#tab-2" class="mapImg-container">
                    ພາກເໜືອ
                </v-tab>
            </v-col>
            <v-col cols="3">
                 <v-tab href="#tab-3" class="mapImg-container">
                    ພາກກາງ
                </v-tab>
            </v-col>
            <v-col cols="3">
                 <v-tab href="#tab-4" class="mapImg-container">
                    ພາກໃຕ້
                </v-tab>
            </v-col>
            
        </v-tabs>


        <div class="d-flex align-center my-5">
            <v-col cols="1">
                
            </v-col>
            <v-col cols="10" class="box-search">
                <form >
                    <label for="Location_search" class="icon-search"><v-img src="../../../assets/Admin/sidebar/toolbar/search.svg" max-height="37" max-width="37"></v-img></label>
                    <input   v-model="search" @click="SearchLocation" type="text" name="" id="Location_search" placeholder="ຄົ້ນຫາດ້ວຍຊື່ສາຂາ, ເມືອງ ຫຼື ແຂວງ" class="input-max box-border sha input-search ">
                </form>
            </v-col>
            <v-col cols="1">
            </v-col>    
        </div>




        <v-tabs class="">
            <v-tabs-items v-model="tab">


                <v-tab-item value="tab-1" >
                    <v-row no-gutters class="px-5">
                        <v-col  cols="12" md="4" lg="4" v-for="LocatV in filtersitem" @click="mapDetail(LocatV.id)"  :key="LocatV.id"  class="px-2 py-2" >
                            <v-btn class="d-flex align-center locate_BTN backW sha">
                                <div class="pl-3"><v-img src="../../../assets/Admin/dataContent/gridicons_location.svg" max-height="35" max-width="35"></v-img></div>
                                <div class="pt-1 pl-2">{{LocatV.name}}</div>
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-tab-item>


                <v-tab-item value="tab-2" >

                    <v-row no-gutters class="px-5">
                        <v-col  cols="12" md="4" lg="4" v-for="LocatV in filtersitem" @click="mapDetail(LocatV.id)"  :key="LocatV.id"  class="px-2 py-2" >
                            <v-btn class="d-flex align-center locate_BTN backW sha">
                                <div class="pl-3"><v-img src="../../../assets/Admin/dataContent/gridicons_location.svg" max-height="35" max-width="35"></v-img></div>
                                <div class="pt-1 pl-2">{{LocatV.name}}</div>
                            </v-btn>
                        </v-col>
                    </v-row>

                </v-tab-item>


                <v-tab-item value="tab-3" >
                    <v-row no-gutters class="px-5">
                        <v-col  cols="12" md="4" lg="4" v-for="LocatV in filtersitem" @click="mapDetail(LocatV.id)"  :key="LocatV.id"  class="px-2 py-2" >
                            <v-btn class="d-flex align-center locate_BTN backW sha">
                                <div class="pl-3"><v-img src="../../../assets/Admin/dataContent/gridicons_location.svg" max-height="35" max-width="35"></v-img></div>
                                <div class="pt-1 pl-2">{{LocatV.name}}</div>
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-tab-item>
                <v-tab-item value="tab-4" >


                    <v-row no-gutters class="px-5">
                        <v-col  cols="12" md="4" lg="4" v-for="LocatV in filtersitem" @click="mapDetail(LocatV.id)"  :key="LocatV.id"  class="px-2 py-2" >
                            <v-btn class="d-flex align-center locate_BTN backW sha">
                                <div class="pl-3"><v-img src="../../../assets/Admin/dataContent/gridicons_location.svg" max-height="35" max-width="35"></v-img></div>
                                <div class="pt-1 pl-2">{{LocatV.name}}</div>
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-tab-item>
            </v-tabs-items>
        </v-tabs>
        
        </div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <footerC class="mt-5 "></footerC>
    </div>
</template>

<script>
import hamburgur from '../../../components/DashTopview/hamburgur.vue'
import userAcoin from '../../../components/DashTopview/userAcoin.vue'
import footerC from '../../../components/footerC.vue'
// import { ref } from "vue";
// import Vue from 'vue'
import axios from 'axios'
export default {
    name:'datadc',
    data() {
        return {
            search:"",
            topclick:1,
            footshow:1,
            tab:null,
            // Search:"",

            mapsData:[],
            // mapsData:[],
            // dataMaps:this.$store.state.mapState,
            test:null
        }
    },
     async mounted(){
            await axios.get('http://localhost:3000/maps')
                .then(resp => {
                    this.mapsData = resp.data
                    })
         },
     
//         // http://localhost:3000/maps
        
    
// ,
        // created(){
        //         mapAction({){
        //             axios.get('http://localhost:3000/maps')
        //                 .then((resp)=>
        //                     commit('Set_MapState',resp.data)
                            
        //                 )
        //                 .catch(err => console.error('eror map data khub'))
        //             }
            
        // },
    computed:{
        
        
        filtersitem(){
            
            return this.mapsData.filter(LocatV => LocatV.name.includes(this.search))
        },
    },


    
    methods:{
        
        
        SearchLocation(){
            if (this.search != ""){
                this.topclick == 5
                console.log(this.topclick == 5)
            }
            else{
                return console.log(this.topclick)
            }
        },
        mapDetail(id){
            this.$router.push({
                name:'maps',
                params:{
                    id:id,
                    mapsData:this.mapsData
                }
            })
        }
        ,
        testD(){
            // console.log(this.$store.state.mapState)
            console.log(this.mapsData)
        }

    },
   
    
    components:{
        footerC,
        hamburgur,
        userAcoin
    },
}
</script>

<style lang="scss" scoped>

.mapImg-container{
    width: 100%;
    height: 100%;
}

.Tab-col{
    height: 100%;
}
// .border{
    
// }
.v-btn__content2{

    justify-content: start;
}

// 
.locate_BTN{
    border-radius: 28px;
    height: 45px;
    width: 100%;
    justify-content: start !important;
    // padding-right: -30px;
    box-shadow: 0px 0px 5px 0px #ababab;
}
// 

.color-red{
    color: $red;
}
.backL{
    background: $red !important;
}
.backW{
    background: #FFFFFF !important;
}
.bg-grey{
    background: $d-grey !important;
}
// 
.BT{
    border-bottom: 3px solid $red;
}
.textHead{
    letter-spacing: 0.5px;
    font-size: 18px;
}
.box-border{
    border :1px solid #888888;
    border-radius: 28px;
}
.input-max{
    width: 100%;
    height: 45px;
    padding-left: 50px;
    outline: none;
    font-size: 20px;
    padding-top: 5px;
}
// search position
.box-search{
    position: relative;
    .icon-search{
        position: absolute;
        left: 10px;
        top: 3px;
    }
}
::placeholder {
    font-size: 18px;
    }
.maps{
    width: 100%;
    height: 100%;
     object-fit: cover;
}
.text-WE{
    font-weight: bold;
    font-size: 18px;
}
.PRES{
    padding-top: 2px;
}
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
        left: 8px;
        top:0px;
    }
}
@media only screen and (max-width: 768px) {
    *{
        font-size: 16px;
    }
    .textHead{
        letter-spacing: 0.5px;
    font-size: 16px;
}
    
    .text-WE{
        // font-weight: bold;
    font-size: 16px ;
    }
    .search-form{
        position: relative;
        padding-right: 8px;
        
        .input-max{
            width: 100%;
            height: 35px;
            padding-left: 40px;
            
            border-radius: 34px;
        }
        .for-search{
            position: absolute;
            left: 8px;
            top:2px;
            width: 30px;
            height: 30px;
        }
    }
    input::placeholder{
    font-size: 14px;
}
}
@media screen and (max-width: 600px) {
    *{
        font-size: 14px;
    }
    // form checkbox mobile
    .textHead{
        letter-spacing: 0.3px;
        font-size: 16px;
    }
    // line-height: ;
    .maps{
        width: 100%;
        height: 100%;
    }
    .text-WE{
        // font-weight: bold;
    font-size: 14px ;
    }
    .input-max{
        width: 100%;
        height: 45px;
        padding-left: 50px;
        outline: none;
        font-size: 14px;
        padding-top: 0px;
        }
        ::placeholder {
        font-size: 14px;
        }
    .search-form{
        padding:0 5px !important;
            .input-max{
            height: 35px;
        }
        .for-search{
            position: absolute;
            left: 12px;
            top: 2px;
            width: 30px;
            height: 30px;
        }
    }
}
</style>