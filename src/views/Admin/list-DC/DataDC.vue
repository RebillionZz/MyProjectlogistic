<template>
    <div class="Body dashboard-container-wrap">
        <v-row no-gutters class="hide-overflow">
            <v-flex class="d-flex align-center">
                <hamburgur ></hamburgur>
                <v-col cols="8"  lg="8" md="8" sm="7"    class="search-form mr-lg-2 mr-md-3 pa-0  ">
                    <div class="d-none bg-grey mb-4 d-lg-flex d-xl-flex">
                        <div class="d-flex align-center">
                            <v-avatar color="red lighten-4 " size="60"><v-img src="../../../assets/Admin/dataContent/mainIcon.svg" max-height="45" max-width="45"></v-img></v-avatar>
                        </div>
                        <h3 class="d-flex  align-center ml-3">ຂໍ້ມູນສາຂາ</h3>
                    </div>
                </v-col>
                <userAcoin ></userAcoin>
            </v-flex>
        </v-row>
        <div class="d-flex bg-grey mb-4 d-lg-none">
            <div class="d-flex align-center">
                <v-avatar color="red lighten-4"><v-img src="../../../assets/Admin/dataContent/mainIcon.svg" max-height="35" max-width="35"></v-img></v-avatar>
            </div>
            <h3 class="d-flex  align-center ml-3">ຂໍ້ມູນສາຂາ</h3>
        </div>
        <p class="text-center textHead">ພວກເຮົາມີຫຼາຍສາຂາຄອບຄຸມທົ່ວປະເທດ ແລະ ເປີດໃຫ້ບໍລິການ 365 ມື້ບໍ່ມີພັກ</p>
        <button @click="dataA">TEST</button>
        



        
        <div class="backW">
           
            
            <!-- ------------------------------------------------------------------- -->
            <!-- <v-tabs class="mb-5 " v-model="tab"   color="red" >
            <v-tabs-slider></v-tabs-slider>
            
            <v-tab href="#tab-1">
                ນະຄອນຫຼວງວຽງຈັນ
            </v-tab>
            <v-tab href="#tab-2">
                ພາກເໜືອ
            </v-tab>
            <v-tab href="#tab-3">
                ພາກກາງ
            </v-tab>
            <v-tab href="#tab-4">
                ພາກໃຕ້
            </v-tab>



            <v-tab-items v-model="tab">
                <v-tab-item  reverse-transition>
                    
                </v-tab-item>
                <v-tab-item  reverse-transition>
                    TEST2
                </v-tab-item>
                <v-tab-item  reverse-transition>
                    TEST3
                </v-tab-item>
                <v-tab-item  reverse-transition>
                    TEST4
                </v-tab-item>
            </v-tab-items>
        </v-tabs> -->


        <v-tabs v-model="tab" height="150" background-color="" slider-color="red " slider-size="border" color="red" centered fixed-tabs>
            <v-tabs-slider ></v-tabs-slider>
                <v-tab href="#tab-1" class="test">
                    ນະຄອນຫຼວງວຽງຈັນ
                </v-tab>
                <v-tab href="#tab-2" class="test">
                    ພາກເໜືອ
                </v-tab>
                <v-tab href="#tab-3" class="test">
                    ພາກກາງ
                </v-tab>
                <v-tab href="#tab-4" class="test">
                    ພາກໃຕ້
                </v-tab>

            
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
                        <v-col  cols="12" md="4" lg="4" v-for="(LocatV, index) in maps" v-show="index < 10" :key="LocatV.id"  class="px-2 py-2" >
                            <v-btn class="d-flex align-center locate_BTN backW sha">
                                <div class="pl-3"><v-img src="../../../assets/Admin/dataContent/gridicons_location.svg" max-height="35" max-width="35"></v-img></div>
                                <div class="pt-1 pl-2">{{LocatV.name}}</div>
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-tab-item>


                <v-tab-item value="tab-2" >

                    <v-row no-gutters class="px-5">
                        <v-col  cols="12" md="4" lg="4" v-for="(LocatV, index) in maps" v-show="index < 20" :key="LocatV.id"  class="px-2 py-2" >
                            <v-btn class="d-flex align-center locate_BTN backW sha">
                                <div class="pl-3"><v-img src="../../../assets/Admin/dataContent/gridicons_location.svg" max-height="35" max-width="35"></v-img></div>
                                <div class="pt-1 pl-2">{{LocatV.name}}</div>
                            </v-btn>
                        </v-col>
                    </v-row>

                </v-tab-item>


                <v-tab-item value="tab-3" >
                    <v-row no-gutters class="px-5">
                        <v-col  cols="12" md="4" lg="4" v-for="(LocatV, index) in maps" v-show="index < 25" :key="LocatV.id"  class="px-2 py-2" >
                            <v-btn class="d-flex align-center locate_BTN backW sha">
                                <div class="pl-3"><v-img src="../../../assets/Admin/dataContent/gridicons_location.svg" max-height="35" max-width="35"></v-img></div>
                                <div class="pt-1 pl-2">{{LocatV.name}}</div>
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-tab-item>
                <v-tab-item value="tab-4" >


                    <v-row no-gutters class="px-5">
                        <v-col  cols="12" md="4" lg="4" v-for="(LocatV, index) in maps" v-show="index < 30" :key="LocatV.id"  class="px-2 py-2" >
                            <v-btn class="d-flex align-center locate_BTN backW sha">
                                <div class="pl-3"><v-img src="../../../assets/Admin/dataContent/gridicons_location.svg" max-height="35" max-width="35"></v-img></div>
                                <div class="pt-1 pl-2">{{LocatV.name}}</div>
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-tab-item>
            </v-tabs-items>
        </v-tabs>
        <!-- <div class="d-flex align-center mb-5">
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
        </div> -->
    
        <!-- <v-row  class="px-5" no-gutters >
            <v-col  cols="12" md="4" lg="4" v-for="LocatV in maps" :key="LocatV.id"  class="px-2 py-2" v-show="topclick == 1">
                <v-btn class="d-flex align-center locate_BTN backW sha">
                    <div class="pl-3"><v-img src="../../../assets/Admin/dataContent/gridicons_location.svg" max-height="35" max-width="35"></v-img></div>
                    <div class="pt-1 pl-2">{{LocatV.name}}</div>
                </v-btn>
            </v-col>

            <v-col cols="12" md="4" lg="4" v-for="LocatC in CT" :key="LocatC.id"  class="px-2 py-2" v-show="topclick == 2" >
                <v-btn class="d-flex align-center locate_BTN backW sha">
                    <div class="pl-3"><v-img src="../../../assets/Admin/dataContent/gridicons_location.svg" max-height="35" max-width="35"></v-img></div>
                    <div class="pt-1 pl-2">{{LocatC.text}}</div>
                </v-btn>
            </v-col>
            <v-col cols="12" md="4" lg="4" v-for="LocatN in NT" :key="LocatN.id"  class="px-2 py-2" v-show="topclick == 3">
                <v-btn class="d-flex align-center locate_BTN backW sha">
                    <div class="pl-3"><v-img src="../../../assets/Admin/dataContent/gridicons_location.svg" max-height="35" max-width="35"></v-img></div>
                    <div class="pt-1 pl-2">{{LocatN.text}}</div>
                </v-btn>
            </v-col>
            <v-col cols="12" md="4" lg="4" v-for="LocatS in ST" :key="LocatS.id"  class="px-2 py-2"  v-show="topclick == 4">
                <v-btn class="d-flex align-center locate_BTN backW sha">
                    <div class="pl-3"><v-img src="../../../assets/Admin/dataContent/gridicons_location.svg" max-height="35" max-width="35"></v-img></div>
                    <div class="pt-1 pl-2">{{LocatS.text}}</div>
                </v-btn>
            </v-col>
            <v-col cols="12" md="4" lg="4"   class="px-2 py-2"  v-show="topclick == 5">
                <v-btn class="d-flex align-center locate_BTN backW sha">
                    <div class="pl-3"><v-img src="../../../assets/Admin/dataContent/gridicons_location.svg" max-height="35" max-width="35"></v-img></div>
                </v-btn>
            </v-col> -->
            
        <!-- </v-row> -->
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
// import { ref, onMounted } from "vue";
import Vue from 'vue'
export default {
    name:'datadc',
    data() {
        return {
            search:"",
            topclick:1,
            footshow:1,
            tab:null,
            // Search:"",
            VT:
                [
                    {id:1,text:"ເມືອງ ຈັນທະບູລີ"},
                    {id:2,text:"ເມືອງ ໄຊເສດຖາ"},
                    {id:3,text:"ເມືອງ ສີໂຄດຕະບອງ"},
                    {id:4,text:"ເມືອງ ສີສັດຕະນາກ"},
                    {id:5,text:"ເມືອງ ຫາດຊາຍຟອງ"},
                    {id:6,text:"ເມືອງ ນາຊາຍທອງ"},
                    {id:7,text:"ເມືອງ ໄຊທານີ"},
                    {id:8,text:"ເມືອງ ສັງທອງ"},
                    {id:9,text:"ເມືອງ ໃໝ່ປາກງື່ມ"},
                ],
                NT:
                [
                    {id:10,text:"ຜົ້ງສາລີ"},
                    {id:11,text:"ຫຼວງພະບາງ"},
                    {id:12,text:"ອຸດົມໄຊ"},
                    {id:13,text:"ບໍ່ແກ້ວ"},
                    {id:14,text:"ຫຼວງພະບາງ"},
                    {id:15,text:"ຫົວພັນ"},
                    {id:16,text:"ໄຊຍະບູລີ"},
                ],
                ST:
                [
                    {id:17,text:"ນະຄອມຫຼວງ"},
                    {id:18,text:"ຊຽງຂວາງ"},
                    {id:19,text:"ວຽງຈັນ"},
                    {id:20,text:"ບໍລິຄຳໄຊ"},
                    {id:21,text:"ຄຳມ່ວນ"},
                    {id:22,text:"ສະຫວັນນະເຂດ"},
                ],

                CT:
                [
                    {id:23,text:"ສາລະວັນ"},
                    {id:24,text:"ເຊກອງ"},
                    {id:25,text:"ຈຳປາສັກ"},
                    {id:26,text:"ອັດຕະປື"},
                ],

                    // Laos:VTP,
            items:[
                {
                    id:1,
                    name:'demo1'
                },
                {
                    id:2,
                    name:'demo2'
                }
            ]
        }
    },
    // mounted:{
    //     SearchLocation()
    // }
    // ,
    computed:{
        maps(){
            // console.log(this.$store.state.mapState)
            return this.$store.state.mapState
            
        }
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
        dataA(){
            console.log(this.$store.state.mapState)
        }
        

    },
    mounted(){
        Vue.axios.get('https://hal.hal-logistics.la/api/v1/listing/branches?')
        .then((resp)=>{
            this.lists = resp.data;
            console.warn(resp.data)
        })
        this.$store.dispatch("mapAction");
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
.border{
    
}
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