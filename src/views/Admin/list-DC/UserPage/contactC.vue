<template>
    <v-container>
                <v-row no-gutters class=" my-5 hide-overflow ">
                    <v-flex class="d-flex align-center ">
                        <hamburgur ></hamburgur>
                        <v-col cols="8"  lg="8" md="8"   class="search-form mr-lg-2 mr-md-3 pa-0 ">
                            <v-flex class="d-none align-center bg-grey d-lg-flex d-md-flex d-xl-flex">
                                <v-col cols="12" class="d-flex align-center">
                                    <div class="home_head"><img class="imgH" src="../../../../assets/Admin/UserInfo/Contact/ContactLogo.svg" ></div>
                                    <div class="d-flex align-center ml-2">ຕິດຕໍ່ພວກເຮົາ</div>
                                </v-col>
                            </v-flex>
                        </v-col>
                        <userAcoin></userAcoin>
                    </v-flex>
                </v-row>
                <v-flex class="d-flex align-center bg-grey d-lg-none d-md-none d-xl-none">
                    <v-col cols="12" class="d-flex align-center">
                        <div class="home_head"><img class="imgH" src="../../../../assets/Admin/UserInfo/Contact/ContactLogo.svg" ></div>
                        <div class="d-flex align-center ml-2">ຕິດຕໍ່ພວກເຮົາ</div>
                    </v-col>
                </v-flex>
                <!-- form contact show -->
                <div class="box-contact mt-5">
                    <div class=" d-flex justify-center pt-3">
                        <div class="Logo  "><img class="Hal" src="../../../../assets/Admin/UserInfo/Contact/hal logo2 2.png" alt="" srcset=""></div>
                    </div>
                    <div class="text-center mb-3">ຮຸ່ງອາລຸນ ຂົນສົ່ງດ່ວນ</div>
                    <v-divider color="red"></v-divider>
                    <!-- Contact to PC laptop min-max 600-->
                    <div class="d-none d-md-block d-lg-block d-sm-block  mt-3 pl-3 mb-10">
                        <v-container>
                            <div class="d-flex">
                                <v-col cols="7">
                                    <div class="d-flex align-center">
                                        <div class="b30"><img class="bc30" src="../../../../assets/Admin/UserInfo/Contact/house.svg" alt=""></div>
                                        <div class="pt-1 pl-2">ບ້ານ ຈອມມະນີ</div>
                                    </div>
                                </v-col>
                                <v-col cols="5">
                                    <div class="d-flex align-center">
                                        <div class="b30"><img class="bc30" src="../../../../assets/Admin/UserInfo/Contact/facebook.svg" alt=""></div>
                                        <div class="pt-1 pl-2">HAL Logistics </div>
                                    </div>
                                </v-col>
                            </div>
                            <!-- NEXT ROW -->
                            <div class="d-flex">
                                <v-col cols="7">
                                    <div class="d-flex align-center">
                                        <div class="b30"></div>
                                        <div class="pt-1 pl-2">ເມືອງ ໄຊເສດຖາ</div>
                                    </div>
                                </v-col>
                                <v-col cols="5">
                                    <div class="d-flex align-center">
                                        <div class="b30"></div>
                                        <div class="pt-1 pl-2">ຮຸ່ງອາລຸນ ຂົນສົ່ງດ່ວນ </div>
                                    </div>
                                </v-col>
                            </div>
                            <!-- NEXT ROW -->
                            <div class="d-flex">
                                <v-col cols="7">
                                    <div class="d-flex align-center">
                                        <div class="b30"></div>
                                        <div class="pt-1 pl-2">ແຂວງ ນະຄອນຫຼວງວຽງຈັນ</div>
                                    </div>
                                </v-col>
                                <v-col cols="5">
                                    <div class="d-flex align-center">
                                        <div class="b30"><img class="bc30" src="../../../../assets/Admin/UserInfo/Contact/Gmail.svg" alt=""></div>
                                        <div class="pt-1 pl-2">hal.lao.2008@gmail.com </div>
                                    </div>
                                </v-col>
                            </div>
                            <!-- NEXT ROW -->
                            <div class="d-flex">
                                <v-col cols="7">
                                    <div class="d-flex align-center">
                                        <div class="b30"><img class="bc30" src="../../../../assets/Admin/UserInfo/Contact/contactTell.svg" alt=""></div>
                                        <div class="pt-1 pl-2 d-flex">ສາຍດ່ວນ : <div class="numred pl-2">1419</div> </div>
                                    </div>
                                </v-col>
                                
                            </div>
                            <!-- NEXT ROW -->
                            <div class="d-flex">
                                <v-col cols="7">
                                    <div class="d-flex align-center">
                                        <div class="b30"></div>
                                        <div class="pt-1 pl-2 ">
                                            <div class="">ສຳຮອງ : 020 55538210</div>
                                            <div class="pl-14">020 55538211</div>
                                            </div>
                                    </div>
                                </v-col>
                                <v-col cols="5">
                                    <div class="d-flex align-center">
                                        <div class="b30"><img class="bc30" src="../../../../assets/Admin/UserInfo/Contact/Web.svg" alt=""></div>
                                        <div class="pt-1 pl-2">https://hal-logistics.la</div>
                                    </div>
                                </v-col>
                            </div>
                            <!-- NEXT ROW -->
                        </v-container>
                    </div>
                    <div class="mobile-contact mt-3  mb-10">
                        <v-col cols="12">
                            <div class="d-flex align-center mb-2">
                                <div class="b30"><img class="bc30" src="../../../../assets/Admin/UserInfo/Contact/house.svg" alt=""></div>
                                <div class="pt-1 pl-2">ບ້ານ ຈອມມະນີ ເມືອງ ໄຊເສດຖາ ແຂວງ ນະຄອນຫຼວງວຽງຈັນ</div>
                            </div>
                        </v-col>
                        <v-col cols="12">
                            <div class="d-flex align-center mb-2">
                                <div class="b30"><img class="bc30" src="../../../../assets/Admin/UserInfo/Contact/contactTell.svg" alt=""></div>
                                <div class="pt-1 pl-2">ສາຍດ່ວນ: 1419 ສຳຮອງ:020 55538210,020 55538211</div>
                            </div>
                        </v-col>
                        <v-col cols="12">
                            <div class="d-flex align-center mb-2">
                                <div class="b30"><img class="bc30" src="../../../../assets/Admin/UserInfo/Contact/facebook.svg" alt=""></div>
                                <div class="pt-1 pl-2">HAL Logistics , ຮຸ່ງອາລຸນ ຂົນສົ່ງດ່ວນ</div>
                            </div>
                        </v-col>
                        <v-col cols="12">
                            <div class="d-flex align-center mb-2">
                                <div class="b30"><img class="bc30" src="../../../../assets/Admin/UserInfo/Contact/Gmail.svg" alt=""></div>
                                <div class="pt-1 pl-2">hal.lao.2008@gmail.com</div>
                            </div>
                        </v-col>
                        <v-col cols="12">
                            <div class="d-flex align-center">
                                <div class="b30"><img class="bc30" src="../../../../assets/Admin/UserInfo/Contact/Web.svg" alt=""></div>
                                <div class="pt-1 pl-2">https://hal-logistics.la</div>
                            </div>
                        </v-col>
                    </div>
                </div>
                <footerC class="mt-5"></footerC>
        </v-container>
</template>

<script>
import hamburgur from '../../../../components/DashTopview/hamburgur.vue'
import userAcoin from '../../../../components/DashTopview/userAcoin.vue'
import footerC from '../../../../components/footerC.vue'
export default {
    name:'contactc',
    components:{
        hamburgur,
        userAcoin,
        footerC
    }
}
</script>

<style lang="scss" scoped>
    .home_head{
    width: 50px;
    height: 50px;
    padding:8px;
    border-radius: 50%;
    background: $dashhead;
    .imgH{
        width: 100%;
        height: 100%;
    }
}
// box contact show

.box-contact{
    background: #ffffff;
    padding: 4px 16px; //mobile 12 left and right
    border-radius: 5px;
    .Logo{
        height: 90px;
        width: 100px;
        .Hal{
            width: 100%;
            height:100%;
        }
    }

}
.b30{
    width: 25px;
    height: 25px;
    .bc30{
        width: 100%;
        height: 100%;
    }
}
.numred{
    color: $red;
}
// edn
.mobile-contact{
    display: none;

}
@media only screen and (max-width: 768px) {
    *{
        font-size: 16px;
    
}
}
@media screen and (max-width: 600px) {
    *{
        font-size: 14px;
    }
    // form checkbox mobile
    .mobile-contact{
    display: block;

}
}
</style>