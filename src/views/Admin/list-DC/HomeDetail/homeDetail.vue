<template>
    <div class="contain">
        <div class="Head">ລາຍລະອຽດການຈັດສົ່ງ</div>
        <!-- ລາຍລະອຽດສິນຄ້າ -->
        <div class="Card-detail">
            <!-- Img -->
            <v-row no-gutters class="">
                <v-col cols="12" md="1" lg="1" class="d-flex justify-center align-center">
                    <div class="Card-detail-box"><img src="../../../../assets/Admin/HomeDetail/BoxhomeDetail.svg" alt="" srcset=""></div>
                </v-col>
                <!-- id -->
                <v-col cols="12" md="9" lg="9" class="d-flex  align-center  id-item">
                    <div class="Card-img-id">
                        <div class="text-id">{{bin}}</div>
                    </div>
                </v-col>
                <!-- Timeline -->
                <v-col cols="12" md="2" lg="2" class="
                align-center
                time-item
                ">
                    <div>12/09/2021 - 11:25</div>
                </v-col>
            </v-row>
            <div class="box-CDC-COD">
                <v-row no-gutters>
                    <v-col cols="12" md="1" lg="1"></v-col>
                    <v-col cols="12" md="9" lg="9">
                        <div class="CDC-name">
                            <div class="CDC-name-item">ຜູ້ຝາກ</div>
                            <div class="CDC-name-item ">bebe</div>
                            <div class="CDC-name-item">22557799</div>
                        </div>
                    </v-col>
                    <v-col cols="12" md="2" lg="2" class="">
                        <div class="COD-name">
                            <div class="COD-name-item">ຜູ້ຮັບ</div>
                            <div class="COD-name-item for-name">bebe</div>
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
            <div class="text-center mb-1 mt-10">ສາຂາ</div>
                    <div class="pl-10"><div class="Arrow-box"><img src="../../../../assets/Admin/HomeDetail/Arrowlocate.svg" alt=""></div></div>
            <div class="SaKha d-flex   align-center px-16">
                <v-col cols="1"></v-col>
                <v-col cols="9">
                    ຕົ້ນທາງ
                </v-col>
                <v-col cols="2">
                    ປາຍທາງ
                </v-col>
            </div>
            <!-- ປະເພດ ຊື່ເຄື່ອງນຸ່ງ ນ້ຳໜັກຈຳນວນ ຂະໜາດ ປະຫວັດການຈ່າຍ -->
        </div>
    </div>
</template>

<script>
export default {
    name:'homeDetail',
    data() {
        return {
            id:this.$route.params.id,
            bin:this.$route.params.bin,
        }
    },
    methods:{
        currentDateTime() {
            const current = new Date();
            const date = current.getFullYear()+'-'+(current.getMonth()+1)+'-'+current.getDate();
            const time = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
            const dateTime = date +' '+ time;

            return dateTime;
            }
    }
}
</script>

<style lang="scss" scoped>
.contain{
    background: #FFFFFF;
    padding:8px 24px;
    border-radius: 4px;
    .Head{
        color: $red;
        margin-top: 12px;
        text-align: center;
    }
    .Card-detail{
        padding: 12px;
        position: relative;
       

    }
}

                .Arrow-box{
                            border: 1px solid $red;
                            border-radius: 50%;
                            width: 35px;
                            height:35px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            
                            top: 50%;
                            img{
                                width: 70%;
                                height:70%;

                            }
                        }
                .Card-detail-box{
                    
                    background: $red;
                    width: 50px;
                    height: 50px;
                    padding: 7px;
                    border-radius: 50%;
                    img{
                        width:100%;
                        height:100%;
                    }
                }
                .id-item{
                    display: flex;
                    justify-content: none;
                }
                .time-item{
                    display: flex;
                    justify-content: none;
                }
.CDC-name{
    display: block;

}
.COD-name{
    display: block;

}
.box-CDC-COD{
    padding: 0px;
}
@media only screen and (max-width: 768px) {
    *{
        font-size: 16px;
    }
    
    .Head{
        margin-top: 2px;
    }
    .id-item{
        margin-top: 8px;
        display: flex;
        justify-content: center;
    }
    .time-item{
        margin-top: 8px;
        display: flex;
        justify-content: center;
    }
    .CDC-name{
        display: flex;
        justify-content: center;
        text-align: center;
        .CDC-name-item{
            padding: 0 8px;
        }
    }
    .COD-name{
        display: flex;
        justify-content: center;
        text-align: center;
        .COD-name-item{
            padding: 0 8px;
        }
    }
    .for-name{
        margin-left: 8px;
    }
}
@media screen and (max-width: 600px) {
    *{
        font-size: 14px;
    }
    
    
}
</style>