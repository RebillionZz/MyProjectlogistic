<template>
    <div class="mt-5 " >
        <!--  ບິນສ້າງເອງ-->
        <div v-for="IT in itemUser" :key="IT.id" class="Bin-card mb-5">
            <v-row no-gutters class="mb-3" >
                <!-- ສ່ວນຊື່ສິນຄ້ານ ແລະ ລະຫັດສິນຄ້າ, ໄອດີ -->
                <v-flex class="d-flex justify-space-between align-center">
                    <div class="d-flex align-center">
                        <img class="img-box" src="../../../../assets/Admin/PushGET/PushC/BoxForStep.svg" alt="">
                        <div class="pl-3">
                            <div>{{IT.itemName}}</div>
                            <div>{{IT.aboutItem}}</div>
                        </div>
                    </div>
                    <div class="date-card">{{IT.itemTime}}</div>
                </v-flex>
                <!-- Date District ຕົ້ນທາງປາຍທາງ-->
            </v-row>
            <div class="ml-6">
                    <div class="timeline-zone">
                        <div class="line"></div>
                        <div class="line-1">
                            {{IT.startWay}}
                        </div>
                        <div class="line-2">
                            {{IT.endWay}}
                        </div>
                        
                    </div>
                
                
            </div>
            
        </div>
            <!-- ຈົບພາກສ່ວນຈໍໃຫຍ່ -->


            <!-- ພາກສ່ວນ ໂທລະສັບ -->
        <div v-for="mobile in itemUserMobile" :key="mobile.id" class="Mobile-Card mb-5">
            <v-row no-gutters class="mb-3" >
                <!-- ສ່ວນຊື່ສິນຄ້ານ ແລະ ລະຫັດສິນຄ້າ, ໄອດີ -->
                <v-flex class="d-flex justify-space-between align-center">
                    <div class="d-flex align-center">
                        <img class="img-box" src="../../../../assets/Admin/PushGET/PushC/BoxForStep.svg" alt="">
                        <div class="pl-3">
                            <div>{{mobile.itemName}}</div>
                            <div>{{mobile.aboutItem}}</div>
                        </div>
                    </div>
                    <!-- <div class="date-card">{{IT.itemTime}}</div> -->
                </v-flex>
                <!-- Date District ຕົ້ນທາງປາຍທາງ-->
            </v-row>
            <div class="ml-3    ">
                <div class="d-flex justify-space-between align-center line-container">
                    <div class="lineMobile"></div>
                    <div class="startMobile">{{mobile.startWay}}</div>
                    <div class="endMobile">{{mobile.endWay}}</div>
                </div>
                <div class="mt-4">{{mobile.itemTime}}</div>
            </div>
            <!-- ພາກສ່ວນ ໂທລະສັບ -->
            

        </div>
    </div>
</template>

<script>
export default {
    name:'push1c',
    data() {
        return {
            itemUser:[
                {id:1,itemName:'ເຄື່ອງນຸ່ງຫົ່ມ',aboutItem:'VTE12345678910',itemTime:'13/09/2021 - 14:20',startWay:'ຮ່ອງຄ້າ',endWay:'ໂພນສະອາດ'},
                {id:2,itemName:'ເຄື່ອງນຸ່ງຫົ່ມ2',aboutItem:'VTE123456789102',itemTime:'13/09/2021 - 14:20',startWay:'ຮ່ອງຄ້າ',endWay:'ໂພນສະອາດ'},
                {id:3,itemName:'ເຄື່ອງນຸ່ງຫົ່ມ3',aboutItem:'VTE12345678910',itemTime:'13/09/2021 - 14:20',startWay:'ຮ່ອງຄ້າ',endWay:'ໂພນສະອາດ'},
            ],
            itemUserMobile:[
                {id:4,itemName:'ເຄື່ອງນຸ່ງຫົ່ມ',aboutItem:'VTE12345678910',itemTime:'13/09/2021 - 14:20',startWay:'ຮ່ອງຄ້າ',endWay:'ໂພນສະອາດ'},
                {id:5,itemName:'ເຄື່ອງນຸ່ງຫົ່ມ2',aboutItem:'VTE123456789102',itemTime:'13/09/2021 - 14:20',startWay:'ຮ່ອງຄ້າ',endWay:'ໂພນສະອາດ'},
                {id:6,itemName:'ເຄື່ອງນຸ່ງຫົ່ມ3',aboutItem:'VTE12345678910',itemTime:'13/09/2021 - 14:20',startWay:'ຮ່ອງຄ້າ',endWay:'ໂພນສະອາດ'},
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
// / Global
.color-red{
    color: $red;
}
.backL{
    background: $red !important;
}
.bg-grey{
    background: $d-grey !important;
}
// End
    .img-box{
        width: 60px;
        height: 60px;
    }
    .date-card{
        color: #ABABAB;
    }
// PC card
.Bin-card{
    background: #FFFFFF;
    padding: 16px;
    border-radius: 6px;
    // height: 200px;
    display: block;
    
}
// Mobile Card
.Mobile-Card{
    background: #FFFFFF;
    padding: 16px;
    border-radius: 6px;
    display: none;
}
// ----------------------------Timeline Zone---------------------------------

.timeline-zone{
    position: relative;
    width: 100%;
    
    .line{
        width: 1.5px;
        background-color: #ABABAB;
        height: 70%;
        top: 10px;
        left: 5px;
        position: absolute;
        z-index: 0;
    }
    .line-1{
        padding-left: 48px;
        font-size: 16px;
        position: relative;
        // height: 110px;
        padding-bottom: 10px;
        margin-bottom: 20px;
    }
    .line-1::before{
        content: '';
        display: block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        border:none;
        background: #ABABAB;
        padding: 2.5px;
        position: absolute;
        top: 6px;
        left: 0.5px;
        z-index: 10;
    }
    .line-2{
        padding-left: 48px;
        font-size: 16px;
        position: relative;
        margin-bottom: 20px;
    }
    .line-2::before{
        content: '';
        display: block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        border:none;
        background: #ABABAB;
        padding: 2.5px;
        position: absolute;
        top: 6px;
        left: 0.5px;
    }
}
// Timeline Mobile







@media only screen and (max-width: 768px) {
    *{
        font-size: 16px;
    }
    .Bin-card{
    display: block;
    
}

}
@media screen and (max-width: 600px) {
    *{
        font-size: 14px;
}
    .Bin-card{
        padding: 8px;
        display: none;
    }
    .img-box{
    width: 40px;
    height: 40px;
}
    .Mobile-Card{
        display: block;
    }
    .line-container{
        position:relative;
    }
    // line
    .lineMobile{
        height: 2px;
        position:absolute;
        background: #ABABAB;
        width:100%;
        bottom: -6px;
        z-index:1;
    }
    // Circle
    .startMobile::after{
        content: '';
        display: block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        border:none;
        background: #ABABAB;
        padding: 2px;
        position: absolute;
        bottom: -10px;
        left: 0px;
        z-index: 10;
    }
    .endMobile::before{
        content: '';
        display: block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        border:none;
        background: #ABABAB;
        padding: 2px;
        position: absolute;
        bottom: -10px;
        right: 0px;
        z-index: 10;
    }
    
}
</style>