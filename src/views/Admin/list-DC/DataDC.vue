<template>
    <div class="Body">
        <v-row no-gutters>
            <v-flex class="d-flex align-center">
                <hamburgur ></hamburgur>
                <v-col cols="8" sm="9" lg="9" md="9" xs="8"   class="search-form mr-lg-2 mr-md-3 pa-0  ">
                    <div class="d-none bg-grey mb-4 d-lg-flex">
                        <div class="d-flex align-center">
                            <v-avatar color="red lighten-4 " size="60"><v-img src="../../../assets/Admin/dataContent/mainIcon.svg" max-height="45" max-width="45"></v-img></v-avatar>
                        </div>
                        <h3 class="d-flex  align-center ml-3">ຂໍ້ມູນສາຂາ</h3>
                    </div>
                </v-col>
                <userAcoin></userAcoin>
            </v-flex>
        </v-row>
        <div class="d-flex bg-grey mb-4 d-lg-none">
            <div class="d-flex align-center">
                <v-avatar color="red lighten-4"><v-img src="../../../assets/Admin/dataContent/mainIcon.svg" max-height="35" max-width="35"></v-img></v-avatar>
            </div>
            <h3 class="d-flex  align-center ml-3">ຂໍ້ມູນສາຂາ</h3>
        </div>
        <p class="text-center textHead">ພວກເຮົາມີຫຼາຍສາຂາຄອບຄຸມທົ່ວປະເທດ ແລະ ເປີດໃຫ້ບໍລິການ 365 ມື້ບໍ່ມີພັກ</p>
        <!-- <div>
        <router-link to="/dataCC/1" class="px-2">data1</router-link>
        <router-link to="/dataCC/2" class="px-2">data2</router-link>
        <router-link to="/dataCC/3" class="px-2">data3</router-link>
        <router-link to="/dataCC/4" class="px-2">data4</router-link>

        </div>
        <router-view></router-view>
         -->
        
        



        
        <div class="backW">
            <!-- <v-row no-gutters class="mb-5">
            <v-col cols="3"   class="CurBT pt-2"   >
                <div class=" d-flex align-center flex-column  " >
                    <div class="d-flex justify-center">
                        <img src="../../../assets/Admin/dataContent/VT-Section.svg" alt="" srcset="" class="maps">
                    </div>
                    <div class="text-center text-WE">ນະຄອນຫຼວງວຽງຈັນ</div>
                </div>
            </v-col>
            <v-col cols="3"   class="CurBT "  align-self="center" >
                <div class=" d-flex align-center flex-column  ">
                    <div class="d-flex justify-center">
                        <img src="../../../assets/Admin/dataContent/north-Section.png" alt="" srcset="" class="maps"> 
                    </div>
                    <div class="text-center text-WE PRES py-1">ພາກເໜືອ</div>
                </div>
            </v-col>
            <v-col cols="3"   class="CurBT "  >
                <div class=" d-flex align-center flex-column  ">
                    <div class="d-flex justify-center">
                        <img src="../../../assets/Admin/dataContent/central-Section.png" alt="" srcset="" class="maps"> 
                    </div>
                    <div class="text-center text-WE">ພາກກາງ</div>
                </div>
            </v-col>
            <v-col cols="3"   class="CurBT "  >
                <div class=" d-flex align-center flex-column  ">
                    <div class="d-flex justify-center">
                        <img src="../../../assets/Admin/dataContent/soult-Section.png" alt="" srcset="" class="maps"> 
                    </div>
                    <div class="text-center text-WE ">ພາກໃຕ້</div>
                </div>
            </v-col>
        </v-row> -->
            
            <!-- ------------------------------------------------------------------- -->
            <v-tabs class="mb-5 " height="200" color="red">
            <v-tabs-slider></v-tabs-slider>
            <v-col cols="3"   class=" pt-2" @click="topclick = 1"  >
                <v-tab href="#tab-1"  class="Tab-col">
                    
                    <div class="" >
                        <div class="d-flex ">
                            <img src="../../../assets/Admin/dataContent/VT-Section.svg" alt="" srcset="" class="maps">
                        </div>
                        <div class="text-center text-WE">ນະຄອນຫຼວງວຽງຈັນ</div>
                    </div>
                </v-tab>
            </v-col>
            <v-col cols="3"   class=" pt-2"  @click="topclick = 2" >
                <v-tab href="#tab-2" class="d-flex flex-column">
                    <div class="d-flex ">
                        <img src="../../../assets/Admin/dataContent/north-Section.png" alt="" srcset="" class="maps"> 
                    </div>
                    <div class="text-center text-WE PRES py-1">ພາກເໜືອ</div>
                </v-tab>
            </v-col>

            <v-col cols="3"   class="pt-2"   @click="topclick = 3">
                <v-tab href="#tab-3">
                    <div class=" d-flex  flex-column  ">
                        <div class="d-flex ">
                            <img src="../../../assets/Admin/dataContent/central-Section.png" alt="" srcset="" class="maps"> 
                        </div>
                        <div class="text-center text-WE">ພາກກາງ</div>
                </div>
                </v-tab>
            </v-col>
            <v-col cols="3"   class=" pt-2" @click="topclick = 4"  >
                <v-tab href="#tab-4">
                    <div class=" d-flex align-center flex-column  ">
                    <div class="d-flex ">
                        <img src="../../../assets/Admin/dataContent/soult-Section.png" alt="" srcset="" class="maps"> 
                    </div>
                    <div class="text-center text-WE ">ພາກໃຕ້</div>
                </div>
                </v-tab>
            </v-col>
        </v-tabs>




        <div class="d-flex align-center mb-5">
            <v-col cols="1">
                
            </v-col>
            <v-col cols="10" class="box-search">
                <label for="Location_search" class="icon-search"><v-img src="../../../assets/Admin/sidebar/toolbar/search.svg" max-height="37" max-width="37"></v-img></label>
                <input  type="text" name="" id="Location_search" placeholder="ຄົ້ນຫາດ້ວຍຊື່ສາຂາ, ເມືອງ ຫຼື ແຂວງ" class="input-max box-border sha input-search ">
            </v-col>
            <v-col cols="1">
            </v-col>
        </div>
        
        <v-row  class="px-5" no-gutters >
            <v-col  cols="12" md="4" lg="4" v-for="LocatV in VT" :key="LocatV.id"  class="px-2 py-2" v-show="topclick == 1">
                <v-btn class="d-flex align-center locate_BTN backW sha">
                    <div class="pl-3"><v-img src="../../../assets/Admin/dataContent/gridicons_location.svg" max-height="35" max-width="35"></v-img></div>
                    <div class="pt-1 pl-2">{{LocatV.text}}</div>
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
            
        </v-row>
        </div>
        <footerC class="mt-5 "></footerC>
    </div>
</template>

<script>
import hamburgur from '../../../components/DashTopview/hamburgur.vue'
import userAcoin from '../../../components/DashTopview/userAcoin.vue'
import footerC from '../../../components/footerC.vue'
export default {
    name:'datadc',
    data() {
        return {
            topclick:1,
            footshow:1,
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
    
    methods:{
        demo(id){
            this.$router.push({
                name:"dataCC.edit",
                params:{
                    id:id,
                }
            }).catch(()=>{})
        },
        Location(La){
            console.log(this.Laos = La)
        },
    },
    
    components:{
        footerC,
        hamburgur,
        userAcoin
    },
    computed:{
        
        // ra2:function(){
        //     this.IMG1==false,
        //     this.IMG2==true,
        //     this.IMG3==false,
        //     this.IMG4==false
        // }
        
    }
}
</script>

<style lang="scss" scoped>
.Body{
    min-height: 100%;
}
.Tab-col{
    height: 100%;
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