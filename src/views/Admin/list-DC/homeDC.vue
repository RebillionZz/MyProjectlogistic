<template>
    <v-container class="pa-4 pa-md-0"   >
        <v-toolbar  flat class="bg-grey">
            <v-toolbar-items class="d-flex align-center">
                <v-avatar color="red lighten-4" size="40"><v-img src="../../../assets/Admin/homeContent/box-header.svg" max-height="30" max-width="30"></v-img></v-avatar>
            </v-toolbar-items>
            <v-toolbar-title class="d-flex align-center ml-2">ການຈັດສົ່ງພັດສະດຸທັງໝົດ</v-toolbar-title>
            <v-spacer></v-spacer>
            <img src="../../../assets/Admin/homeContent/date-icon.svg" alt="">
        </v-toolbar>
        <v-container pa-2>
            <v-card flat elevation="1"   class="mt-8 mb-8 pa-4" color="white">
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
        
            <v-container pa-4 >
                <div>
                <v-row class="mt-3 bg-grey"
                >
                    <v-col cols="8" class="d-flex  flex-wrap align-center " style="">
                        <!-- <img src="../../../assets/Admin/homeContent/box-white.svg" alt="">   -->
                        <div class="pr-3 pr-sm-2">
                            <v-img max-width="30" max-height="30" min-width="10" min-height="10" src="../../../assets/Admin/homeContent/box-white.svg"></v-img>
                        </div>
                        <span class=" py-1">ປະຫວັດການຈັດສົ່ງພັດສະດຸ</span>
                    </v-col>
                    <v-spacer></v-spacer>
                    <div class="red  d-flex px-md-4 px-3    border-set" >
                        <div class=" pr-md-2 d-none d-sm-flex d-lg-flex">
                            <v-img max-width="20" max-height="20" min-width="10" min-height="10" class="" src="../../../assets/Admin/homeContent/history.svg"></v-img> 
                        </div>
                        ຝາກເຄື່ອງເອງ
                    </div>
                </v-row>
                <!-- table header -->
                <v-card class=" rounded-t-lg text-center mt-6" elevation="1">
                    <v-row class="rounded-t-lg red ">
                        <v-col cols="12" md="4" class=" py-3">ເລກໃບບິນ</v-col>
                        <v-col md="2" class="d-none d-md-flex py-3 px-2">ໝວດໝູ່</v-col>
                        <v-col md="2" class="d-none d-md-flex py-3 px-2">ວັນທີ</v-col>
                        <v-col md="2" class="d-none d-md-flex py-3 px-2">ສະຖານະ</v-col>
                        <v-col md="2" class="d-none d-md-flex py-3 px-2"></v-col>
                    </v-row>
                <!-- table content -->
                    <v-row v-for="item in items" :key="item.bin" class="white" >
                        <v-col cols="6" md="4" class=" ">{{item.bin}}</v-col>
                        <v-col cols="12" md="2" class="d-none d-md-flex pa-2">{{item.group}}</v-col>
                        <v-col cols="12" md="2" class="d-none d-md-flex pa-2">{{item.date}}</v-col>
                        <v-col cols="12" md="2" class="d-none d-md-flex pa-2">{{item.send}}</v-col>
                        <v-col cols="6" md="2" class="pa-2">{{item.morethan}}</v-col>
                    </v-row>
                </v-card>
                <!-- <table>
                    <tr>
                        <th>ໝວດໝູ່</th>
                        <th>ວັນທີ</th>
                        <th>ສະຖານະ</th>
                        <th></th>
                    </tr>
                    <tr v-for="item in items" :key="item.bin">
                        <td>{{item.bin}}</td>
                        <td>{{item.group}}</td>
                        <td>{{item.date}}</td>
                        <td>{{item.send}}</td>
                    </tr>
                </table> -->
                </div>
            </v-container>
    </v-container>
</template>

<script>
export default {
    name:'homeDC',
    data() {
        return {
            items:[
                {bin:"VTE12345678901",group:"ເຄື່ອງນຸ່ງຫົ່ມ",date:"13/09/2021",send:"ຈັດສົ່ງສຳເລັດ",morethan:"ເບິ່ງລາຍລະອຽດ >"},
                {bin:"VTE12345678901",group:"ເຄື່ອງນຸ່ງຫົ່ມ",date:"13/09/2021",send:"ຈັດສົ່ງສຳເລັດ",morethan:"ເບິ່ງລາຍລະອຽດ >"},
                {bin:"VTE12345678901",group:"ເຄື່ອງນຸ່ງຫົ່ມ",date:"13/09/2021",send:"ຈັດສົ່ງສຳເລັດ",morethan:"ເບິ່ງລາຍລະອຽດ >"},
                {bin:"VTE12345678901",group:"ເຄື່ອງນຸ່ງຫົ່ມ",date:"13/09/2021",send:"ຈັດສົ່ງສຳເລັດ",morethan:"ເບິ່ງລາຍລະອຽດ >"},
            ]
        };
    },
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
</style>

