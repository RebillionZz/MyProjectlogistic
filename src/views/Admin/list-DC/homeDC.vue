<template>
    <v-container class="pa-0 pa-md-0"   >
        <v-row no-gutters>
            <v-flex class="d-flex align-center">
                <hamburgur ></hamburgur>
                <v-col cols="8" sm="9" lg="9" md="9" xs="8"   class="search-form mr-lg-2 mr-md-3 pa-0">
                    <label class="for-search" for="searchBar" ><v-img src="../../../assets/Admin/sidebar/toolbar/search.svg" max-height="37" max-width="37"></v-img></label>
                    <input class="input-max" type="text" name="" id="searchBar" placeholder="ໃສ່ລະຫັດ tracking ID" >
                </v-col>
                <userAcoin></userAcoin>
            </v-flex>
        </v-row>
            <div>
            </div>
            <v-flex class="d-flex align-center bg-grey">
                <v-col cols="9" class="d-flex align-center">
                    <div class="home_head"><img class="imgH" src="../../../assets/Admin/homeContent/box-header.svg" ></div>
                    <div class="d-flex align-center ml-2">ການຈັດສົ່ງພັດສະດຸທັງໝົດ</div>
                </v-col>
                <v-col cols="3" class="d-flex justify-end "><img src="../../../assets/Admin/homeContent/date-icon.svg" alt=""></v-col>
            </v-flex>
        
        <v-container pa-2>
            <v-card flat elevation="1"   class="mt-3 mb-8 pa-4" color="white">
            <!-- v-for="card in cards" :key="card.id" -->
            <v-row class="">
                <v-col cols="6" md="3" lg="3" align="center">
                    <v-avatar color="" size="87" class="bg-red">
                        <v-avatar  size="45" color="">
                            <img src="../../../assets/Admin/homeContent/rounded.svg" alt="">
                        </v-avatar>
                    </v-avatar>
                    <v-card-text>
                        <v-flex>ລໍຖ້າດຳເນີນການ</v-flex>
                        <v-flex >
                            <p class="red--text">0 ລາຍການ</p>
                        </v-flex>
                    </v-card-text>
                </v-col>
                <!-- car here -->
                <v-col cols="6" md="3" lg="3" align="center">
                    <v-avatar color="" size="87" class="bg-red">
                        <v-avatar  size="45" color="">
                            <img src="../../../assets/Admin/homeContent/car.svg" alt="">
                        </v-avatar>
                    </v-avatar>
                    <v-card-text>
                        <v-flex>ກຳລັງດຳເນີນການ</v-flex>
                        <v-flex >
                            <p class="red--text">0 ລາຍການ</p>
                        </v-flex>
                    </v-card-text>
                </v-col>
                <v-col cols="6" md="3" lg="3" align="center">
                    <v-avatar color="" size="87" class="bg-red">
                        <v-avatar  size="45" color="">
                            <img src="../../../assets/Admin/homeContent/compeled.svg" alt="">
                        </v-avatar>
                    </v-avatar>
                    <v-card-text>
                        <v-flex>ຈັດສົ່ງສຳເລັດ</v-flex>
                        <v-flex >
                            <p class="red--text">0 ລາຍການ</p>
                        </v-flex>
                    </v-card-text>
                </v-col>
                <v-col cols="6" md="3" lg="3" align="center">
                    <v-avatar color="" size="87" class="bg-red">
                        <v-avatar  size="45" color="">
                            <img src="../../../assets/Admin/homeContent/COD.svg" alt="">
                        </v-avatar>
                    </v-avatar>
                    <v-card-text>
                        <v-flex>COD</v-flex>
                        <v-flex >
                            <p class="red--text">0 ລາຍການ</p>
                        </v-flex>
                    </v-card-text>
                </v-col>
            </v-row>
        </v-card>
        </v-container>
        <!-- Start here table section -->
        
            <v-container  >
                <div>
                <v-row class="mt-3 bg-grey d-flex justify-space-between"
                >
                    <div class="d-flex  flex-wrap align-center " style="">
                        <!-- <img src="../../../assets/Admin/homeContent/box-white.svg" alt="">   -->
                        <div class="pr-2 ">
                            <v-img max-width="30" max-height="30" min-width="10" min-height="10" src="../../../assets/Admin/homeContent/box-white.svg"></v-img>
                        </div>
                        <span class=" py-1">ປະຫວັດການຈັດສົ່ງພັດສະດຸ</span>
                    </div >
                    
                        <div class="red  d-flex px-md-4 px-3 text-center    border-set" >
                            <div class=" pr-md-2 d-none d-sm-flex d-lg-flex">
                                <v-img max-width="20" max-height="20" min-width="10" min-height="10" class="" src="../../../assets/Admin/homeContent/history.svg"></v-img> 
                            </div>
                            <div>ຝາກເຄື່ອງເອງ</div>
                        </div>
                    
                </v-row>
                <!-- table header -->
                <div class=" rounded-t-lg text-center mt-6">
                    <v-row class="rounded-t-lg red ">
                        <v-col cols="12" md="4" class=" py-3">ເລກໃບບິນ</v-col>
                        <v-col md="2" class="d-none d-md-flex py-3 px-2">ໝວດໝູ່</v-col>
                        <v-col md="2" class="d-none d-md-flex py-3 px-2">ວັນທີ</v-col>
                        <v-col md="2" class="d-none d-md-flex py-3 px-2">ສະຖານະ</v-col>
                        <v-col md="2" class="d-none d-md-flex py-3 px-2"></v-col>
                    </v-row>
                <!-- table content -->
                    <v-row v-for="item in items" :key="item.id" class="white" >
                        <v-col cols="6" md="4" class=" ">{{item.bin}}</v-col>
                        <v-col cols="12" md="2" class="d-none d-md-flex pa-2">{{item.group}}</v-col>
                        <v-col cols="12" md="2" class="d-none d-md-flex pa-2">{{item.date}}</v-col>
                        <v-col cols="12" md="2" class="d-none d-md-flex pa-2">{{item.send}}</v-col>
                        <v-col cols="6" md="2" class="pa-2">{{item.morethan}}</v-col>
                    </v-row>
                </div>
                </div>
            </v-container>
            <footerC class="mt-5"></footerC>
    </v-container>
</template>

<script>
import hamburgur from '../../../components/DashTopview/hamburgur.vue'
import userAcoin from '../../../components/DashTopview/userAcoin.vue'
import footerC from '../../../components/footerC.vue'
export default {
    name:'homedc',
    data() {
        return {
            items:[
                {id:1,bin:'VTE12345678901',group:'ເຄື່ອງນຸ່ງຫົ່ມ',date:'13/09/2021',send:'ຈັດສົ່ງສຳເລັດ',morethan:'ເບິ່ງລາຍລະອຽດ >'},
                {id:2,bin:'VTE12345678901',group:'ເຄື່ອງນຸ່ງຫົ່ມ',date:'13/09/2021',send:'ຈັດສົ່ງສຳເລັດ',morethan:'ເບິ່ງລາຍລະອຽດ >'},
                {id:3,bin:'VTE12345678901',group:'ເຄື່ອງນຸ່ງຫົ່ມ',date:'13/09/2021',send:'ຈັດສົ່ງສຳເລັດ',morethan:'ເບິ່ງລາຍລະອຽດ >'},
                {id:4,bin:'VTE12345678901',group:'ເຄື່ອງນຸ່ງຫົ່ມ',date:'13/09/2021',send:'ຈັດສົ່ງສຳເລັດ',morethan:'ເບິ່ງລາຍລະອຽດ >'},
            ]
        };
    },
    components:{
        footerC,
        hamburgur,
        userAcoin
    }
}
</script>

<style lang="scss" scoped>

.bg-grey{
    background: $d-grey !important;
}
.bg-red{
    background-color: $red;
}

.border-set{
    border-radius: 50px; 
    text-align: center;   
    align-items: center;
}
// -----------------------------
.home_head{
    width: 40px;
    height: 40px;
    padding:4px;
    border-radius: 50%;
    background: $dashhead;
    .imgH{
        width: 100%;
        height: 100%;
    }
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
// -------------------------------------------------------End search
@media only screen and (max-width: 768px) {
    *{
        font-size: 16px;
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

