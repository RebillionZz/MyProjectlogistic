<template>
<div>
    <Toolbar/>
    <div class="followitem">
        <v-row>
            <v-col cols="6">
                <div class="fltext">
                                    <h1>ຕິດຕາມພັດສະດຸ</h1>
                <h3 class="mg20">ທ່ານສາມາດກວດສອບພັດສະດຸ<br>ຂອງທ່ານທຸກທີ່ ທຸກເວລາ<br>ບໍ່ວ່າຈະຢູ່ໃສ ເວລາໃດກໍເບິ່ງໄດ້</h3>
                </div>
            </v-col>
            <v-col cols="6">
                <div class="flpic">
                    <img src="../../assets/Frontend/tracking 1.png" alt="">
                </div>
            </v-col>
        </v-row>
    </div>
    <div class="followpart">
        <div class="searchitem">
            <v-text-field
          v-model="search"
          label="ໃສ່ລະຫັດ tracking ID"
          color="red darken-1"
          rounded
          outlined
        ></v-text-field>
        </div>
        <h2 class="hh2">ຕິດຕາມພັດສະດຸຂອງທ່ານ</h2>
        <div>
            <div class="contain">
            
            <div class="Head">ລາຍລະອຽດການຈັດສົ່ງ</div>
            <!-- ລາຍລະອຽດສິນຄ້າ -->
            <div class="Card-detail">
                <!-- Img -->
                <v-row no-gutters class="">
                    <v-col cols="12" md="1" lg="1" class="d-flex justify-center align-center">
                        <div class="Card-detail-box"><img src="../../assets/Admin/HomeDetail/BoxhomeDetail.svg" alt="" srcset=""></div>
                    </v-col>
                    <!-- id -->
                    <v-col cols="12" md="9" lg="9" class="d-flex  align-center  id-item">
                        <div class="Card-img-id">
                            <div class="text-id">{{detail.binID}}</div>
                        </div>
                    </v-col>
                    <!-- Timeline -->
                    <v-col cols="12" md="2" lg="2" class="
                    align-center
                    time-item
                    ">
                        <!-- <div>12/09/2021 - 11:25</div> -->
                        <div>{{detail.date}}</div>
                    </v-col>
                </v-row>
                <div class="box-CDC-COD">
                    <v-row no-gutters>
                        <v-col cols="12" md="1" lg="1"></v-col>
                        <v-col cols="12" md="9" lg="9">
                            <div class="CDC-name">
                                <div class="CDC-name-item">ຜູ້ຝາກ</div>
                                <div class="CDC-name-item ">{{User.name}}</div>
                                <div class="CDC-name-item">22557799</div>
                            </div>
                        </v-col>
                        <v-col cols="12" md="2" lg="2" class="">
                            <div class="COD-name">
                                <div class="COD-name-item">ຜູ້ຮັບ</div>
                                <div class="COD-name-item for-name">{{detail.detail.name_uget}}</div>
                                <div class="COD-name-item">22557799</div>
                            </div>
                        </v-col>
                    </v-row>

                </div>

                <!-- <div class="Card-box-date">
                    <div class="Card-img-id">
                        <div class="Card-detail-box"><img src="../../../../assets/Admin/HomeDetail/BoxhomeDetail.svg" alt="" srcset=""></div>
                        <div class="text-id">{{id}}</div>
                    </div>
                    <div>12/09/2021 - 11:25</div>
                </div>

                <div class="d-flex justify-space-between Card-name">
                    <div class="">
                        <div class="">ຜູ້ຝາກ</div>
                        <div class="">bebe</div>
                        <div class="">22557799</div>

                    </div>
                    <div class="">
                        <div class="">ຜູ້ຮັບ</div>
                        <div class="">bebe</div>
                        <div class="">22557799</div>
                    </div>
                    
                </div> -->
                <!-- ສາຂາ  -->
                <div class="text-center mb-1 mt-3">ສາຂາ</div>
                <div class="SaKha d-flex   align-center ">
                    <v-col cols="1"></v-col>
                    <v-col cols="4" class="">
                        ຕົ້ນທາງ
                    </v-col>
                    <v-col cols="2" class="d-flex justify-center">
                        <div class=""><div class="Arrow-box"><img src="../../assets/Admin/HomeDetail/Arrowlocate.svg" alt=""></div></div>
                    </v-col>
                    <v-col cols="3"></v-col>
                    <v-col cols="2" class="">
                        ປາຍທາງ
                    </v-col>
                </div>
                <!-- ປະເພດ ຊື່ເຄື່ອງນຸ່ງ ນ້ຳໜັກຈຳນວນ ຂະໜາດ ປະຫວັດການຈ່າຍ -->
                <div class="text-center mb-1 mt-3">ປະເພດສິນຄ້າ</div>
                <div class="SaKha d-flex   align-center ">
                    <v-col cols="1"></v-col>
                    <v-col cols="4" class="">
                        ຈຳນວນ
                    </v-col>
                    <v-col cols="2" class="d-flex justify-center">
                        <div class="">ນ້ຳໜັກ</div>
                    </v-col>
                    <v-col cols="3"></v-col>
                    <v-col cols="2" class="">
                        ຂະໜາດ
                    </v-col>
                </div>
                <div class="SaKha d-flex   align-center ">
                    <v-col cols="1"></v-col>
                    <v-col cols="1" class="text-center pr-5">
                        1
                    </v-col>
                    <v-col cols="3" class="">
                        
                    </v-col>
                    <v-col cols="2" class="d-flex justify-center">
                        <div class="">0.37KG</div>
                    </v-col>
                    <v-col cols="3"></v-col>
                    <v-col cols="2" class="">
                        44 cm
                    </v-col>
                </div>

                <!-- Timline -->
                <div class="text-center mb-1 mt-3 Head">ການເຄື່ອນໄຫວຂອງພັດສະດຸ</div>
                <div class="mb-5 TimeLine-card mt-5">
                    <ul class="ul">
                        <li class="line"></li>

                        <li class="list-item  item-container mb-8">
                            <v-col cols="10">
                                <div class="item-container-box ">
                                    <div>ຮັບພັດສະດຸແລ້ວ</div>
                                    <div class="item-container-box-img">
                                        <div class="item-container-box-img-box"><img src="../../assets/Admin/HomeDetail/Getitem.svg" alt="" srcset=""></div>

                                    </div>
                                </div>

                            </v-col>
                            <v-col cols="2" class="d-flex Time-date">
                                <div>12/09/2021 - 14:25</div>

                            </v-col>
                        </li>
                        <li class="list-item   item-container mb-8">
                            <v-col cols="10">
                                <div class="item-container-box ">
                                    <div>ພັດສະດຸຮອດສາຂາ</div>
                                    <div class="item-container-box-img">
                                        <div class="item-container-box-img-box"><img src="../../assets/Admin/HomeDetail/Getitem.svg" alt="" srcset=""></div>

                                    </div>
                                </div>

                            </v-col>
                            <v-col cols="2" class="d-flex Time-date">
                                <div>12/09/2021 - 14:25</div>

                            </v-col>
                        </li>
                        <li class="list-item   item-container mb-8">
                            <v-col cols="10">
                                <div class="item-container-box ">
                                    <div>ກຳລັງຈັດສົ່ງໄປສູນຄັດແຍກນະຄອນຫຼວງວຽງຈັນ</div>
                                    <div class="item-container-box-img">
                                        <div class="item-container-box-img-box"><img src="../../assets/Admin/HomeDetail/Getitem.svg" alt="" srcset=""></div>

                                    </div>
                                </div>

                            </v-col>
                            <v-col cols="2" class="d-flex Time-date">
                                <div>12/09/2021 - 14:25</div>

                            </v-col>
                        </li>
                        <li class="list-item   item-container mb-8">
                            <v-col cols="10">
                                <div class="item-container-box ">
                                    <div>ກຳລັງຈັດສົ່ງໄປສາຂາ ຮ່ອງຄ້າ</div>
                                    <div class="item-container-box-img">
                                        <div class="item-container-box-img-box"><img src="../../assets/Admin/HomeDetail/Getitem.svg" alt="" srcset=""></div>

                                    </div>
                                </div>

                            </v-col>
                            <v-col cols="2" class="d-flex Time-date">
                                <div>13/09/2021 - 14:25</div>

                            </v-col>
                        </li>
                        <li class="list-item  item-container mb-8">
                            <v-col cols="10">
                                <div class="item-container-box ">
                                    <div>ພັດສະດຸຮອດປາຍທາງແລ້ວ</div>
                                    <div class="item-container-box-img">
                                        <div class="item-container-box-img-box"><img src="../../assets/Admin/HomeDetail/Getitem.svg" alt="" srcset=""></div>

                                    </div>
                                </div>

                            </v-col>
                            <v-col cols="2" class="d-flex Time-date">
                                <div>13/09/2021 - 14:25</div>

                            </v-col>
                        </li>
                        <li class="list-item   item-container mb-8">
                            <v-col cols="10">
                                <div class="item-container-box ">
                                    <div>ສຳເລັດການຮັບຝາກ ຂອບໃຈທີ່ໃຊ້ບໍລິການ</div>
                                    <div class="item-container-box-img">
                                        <div class="item-container-box-img-box"><img src="../../assets/Admin/HomeDetail/Getitem.svg" alt="" srcset=""></div>

                                    </div>
                                </div>

                            </v-col>
                            <v-col cols="2" class="d-flex Time-date">
                                <div>13/09/2021 - 14:25</div>

                            </v-col>
                        </li>
                        
                    </ul>
                </div>
            </div>
            </div>
        </div>
    </div>
    <Footer/>
</div>
</template>
<script>
import Toolbar from "../../components/Toolbar.vue";
import Footer from "../../components/Footer.vue";
import HomeView from "../HomeView.vue";
export default {
  name: "homeuser",
  components: {
    Toolbar,
    Footer,
    HomeView,
  },
};
</script>
<style>
.followitem{
    background-color: #E21312;
    color: #FFFFFF;
    text-align: center;
    align-items: center;
}
.hh2{
    text-align: center;
    color: #E21312
}
.followpart{
    text-align: center;
    align-items: center;
    padding: 5%;
}
.fltext{
    padding: 10%;
}
.mg20{
    margin-top: 20px;
}
.flpic{
    padding: 5%;
}
.searchitem{
    margin-top: -7%;
    background: #FFFFFF;
    border-radius: 27px;
}
</style>