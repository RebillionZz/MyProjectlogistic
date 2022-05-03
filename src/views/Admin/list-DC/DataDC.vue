<template>
    <div>
        <v-row no-gutters>
            <v-flex class="d-flex align-center">
                <hamburgur ></hamburgur>
                <v-col cols="8" sm="9" lg="9" md="9" xs="8"   class="search-form mr-lg-2 mr-md-3 pa-0  ">
                    <label class="for-search" for="searchBar" ><v-img src="../../../assets/Admin/sidebar/toolbar/search.svg" max-height="37" max-width="37"></v-img></label>
                    <input class="input-max" type="text" name="" id="searchBar" placeholder="ໃສ່ລະຫັດ tracking ID" >
                </v-col>
                <userAcoin></userAcoin>
            </v-flex>
        </v-row>
        <div class="d-flex bg-grey mb-4 d-lg-none">
            <div class="d-flex align-center">
                <v-avatar color="red lighten-4"><v-img src="../../../assets/Admin/dataContent/mainIcon.svg" max-height="35" max-width="35"></v-img></v-avatar>
            </div>
            <h3 class="d-flex  align-center ml-3">ຄິດໄລ່ຄ່າຂົນສົ່ງ</h3>
        </div>
        <p class="text-center textHead">ພວກເຮົາມີຫຼາຍສາຂາຄອບຄຸມທົ່ວປະເທດ ແລະ ເປີດໃຫ້ບໍລິການ 365 ມື້ບໍ່ມີພັກ</p>
        <v-container class="backW">
            <v-row no-gutters class="mb-5">
            <v-col cols="3"   class="CurBT pt-2 BT"   >
                <div class=" d-flex align-center flex-column  " >
                    <div class="d-flex justify-center">
                        <!-- <v-img src="../../../assets/Admin/dataContent/VT-Section.svg" max-height="180" max-width="180" sm-max-width="10" content-class></v-img> -->
                        <img src="../../../assets/Admin/dataContent/VT-Section.svg" alt="" srcset="" class="maps">
                    </div>
                    <div class="text-center text-WE">ນະຄອນຫຼວງວຽງຈັນ</div>
                </div>
            </v-col>
            <v-col cols="3"   class="CurBT "  align-self="center" >
                <div class=" d-flex align-center flex-column  ">
                    <div class="d-flex justify-center">
                        <!-- <v-img src="../../../assets/Admin/dataContent/north-Section.svg" max-height="180" max-width="180" content-class></v-img> -->
                        <img src="../../../assets/Admin/dataContent/north-Section.svg" alt="" srcset="" class="maps"> 
                    </div>
                    <div class="text-center text-WE PRES py-1">ພາກເໜືອ</div>
                </div>
            </v-col>
            <v-col cols="3"   class="CurBT "  >
                <div class=" d-flex align-center flex-column  ">
                    <div class="d-flex justify-center">
                        <!-- <v-img src="../../../assets/Admin/dataContent/central-Section.svg" max-height="180" max-width="180" content-class></v-img> -->
                        <img src="../../../assets/Admin/dataContent/central-Section.svg" alt="" srcset="" class="maps"> 
                    </div>
                    <div class="text-center text-WE">ພາກກາງ</div>
                </div>
            </v-col>
            <v-col cols="3"   class="CurBT "  >
                <div class=" d-flex align-center flex-column  ">
                    <div class="d-flex justify-center">
                        <!-- <v-img src="../../../assets/Admin/dataContent/soult-Section.svg" max-height="180" max-width="180" content-class></v-img> -->
                        <img src="../../../assets/Admin/dataContent/soult-Section.svg" alt="" srcset="" class="maps"> 
                    </div>
                    <div class="text-center text-WE ">ພາກໃຕ້</div>
                </div>
            </v-col>
        </v-row>
            <!--  -->
        <div class="d-flex align-center mb-5">
            <v-col cols="1">
                
            </v-col>
            <v-col cols="10" class="box-search">
                <label for="Location_search" class="icon-search"><v-img src="../../../assets/Admin/sidebar/toolbar/search.svg" max-height="37" max-width="37"></v-img></label>
                <input type="text" name="" id="Location_search" placeholder="ຄົ້ນຫາດ້ວຍຊື່ສາຂາ, ເມືອງ ຫຼື ແຂວງ" class="input-max box-border sha input-search ">
            </v-col>
            <v-col cols="1">

            </v-col>
        </div>
        <!--  -->
        <v-row  class="px-5" no-gutters >
            <v-col cols="12" md="4" lg="4" v-for="LOCAT in Locations" :key="LOCAT.id"  class="px-2 py-2"  >
                <button class="d-flex align-center locate_BTN backW sha">
                    <div class="pl-3"><v-img src="../../../assets/Admin/dataContent/gridicons_location.svg" max-height="35" max-width="35"></v-img></div>
                    <div class="pt-1 pl-2">{{LOCAT.text}}</div>
                </button>
            </v-col>
            
        </v-row>
        </v-container>
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
            Locations:[
                {id:1,text:"ສາຍນ້ຳເງິນ"},
                {id:2,text:"ຫົວຂົວ (ນາຊາຍທອງ)"},
                {id:3,text:"ດົງສ້າງຫີນ (ຫຼັກ 15)"},
                {id:4,text:"ສາຍນ້ຳເງິນ"},
                {id:5,text:"ຫົວຂົວ (ນາຊາຍທອງ)"},
                {id:6,text:"ດົງສ້າງຫີນ (ຫຼັກ 15)"},
                {id:7,text:"ສາຍນ້ຳເງິນ"},
                {id:8,text:"ຫົວຂົວ (ນາຊາຍທອງ)"},
                {id:9,text:"ດົງສ້າງຫີນ (ຫຼັກ 15)"},
                {id:10,text:"ສາຍນ້ຳເງິນ"},
                {id:11,text:"ຫົວຂົວ (ນາຊາຍທອງ)"},
                {id:12,text:"ດົງສ້າງຫີນ (ຫຼັກ 15)"},
            ],
        }
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
// 
.locate_BTN{
    border-radius: 28px;
    height: 45px;
    width: 100%;
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
.CurBT{
    cursor: pointer;
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