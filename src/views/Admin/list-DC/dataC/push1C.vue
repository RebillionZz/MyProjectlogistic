<template>
    <div class="mt-5 " >
        <!-- box and item -->
        <div v-for="IT in itemUser" :key="IT.id" class="Bin-card mb-5">
            <v-row no-gutters class="mb-3" >
                <!--  -->
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
                <!-- Date -->
            </v-row>
            <div class="ml-6">
                    <!-- timeline Circle -->
                <!-- <div class="timeline-zone"> -->
                    <div class="timeline-zone">
                        <div class="line"></div>
                        <div class="line-1">
                            {{IT.startItem}}
                        </div>
                        <div class="line-2">
                            {{IT.endItem}}
                        </div>
                        
                    </div>
                <!-- </div> -->
                
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name:'push1c',
    data() {
        return {
            itemUser:[
                {id:1,itemName:'ເຄື່ອງນຸ່ງຫົ່ມ',aboutItem:'VTE12345678910',itemTime:'13/09/2021 - 14:20',startItem:'ຮ່ອງຄ້າ',endItem:'ໂພນສະອາດ'},
                {id:2,itemName:'ເຄື່ອງນຸ່ງຫົ່ມ2',aboutItem:'VTE123456789102',itemTime:'13/09/2021 - 14:20',startItem:'ຮ່ອງຄ້າ',endItem:'ໂພນສະອາດ'},
                {id:3,itemName:'ເຄື່ອງນຸ່ງຫົ່ມ3',aboutItem:'VTE12345678910',itemTime:'13/09/2021 - 14:20',startItem:'ຮ່ອງຄ້າ',endItem:'ໂພນສະອາດ'},
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
.Bin-card{
    background: #FFFFFF;
    padding: 16px;
    border-radius: 6px;
    // height: 200px;
    
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
    }
    .line-2{
        padding-left: 48px;
        font-size: 16px;
        position: relative;
        // height: 110px;
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








@media only screen and (max-width: 768px) {
    *{
        font-size: 16px;
    }
    
//     .Line{
//     width: 1.3px;
//     background: $ab-grey;
//     height: 40px;
//     margin-left: 5.4px;
// }
}
@media screen and (max-width: 600px) {
    *{
        font-size: 14px;
}
    .Bin-card{
        padding: 8px;
    }
    .img-box{
    width: 40px;
    height: 40px;
}
    
    
}
</style>