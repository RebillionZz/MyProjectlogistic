<template>
    <div class="mt-5 Bin-card">
        <!-- box and item -->
        <v-row no-gutters class="mb-3">
            <!--  -->
            <v-flex class="d-flex justify-space-between align-center">
                <div class="d-flex align-center">
                    <img class="img-box" src="../../../../assets/Admin/PushGET/PushC/BoxForStep.svg" alt="">
                    <div class="pl-3">
                        <div>ເຄື່ອງນຸ່ງຫົ່ມ</div>
                        <div>VTE12345678910</div>
                    </div>
                </div>
                <div class="date-card">13/09/2021 - 14:20</div>
            </v-flex>
            <!-- Date -->
        </v-row>
        <div class="ml-6">
                <!-- timeline Circle -->
            <div>
                <!-- <div class="Circle1">
                </div>
                    <v-divider vertical />
                
                <v-flex class="Circle2"></v-flex> -->
                <v-stepper fa>
                    <v-stepper-step step=""></v-stepper-step>
                </v-stepper>
            </div>
            
        </div>
            <!-- About item with Circle -->
    </div>
</template>

<script>
export default {
    name:'push1C',
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
.Circle1{
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: $ab-grey;
}
.Circle2{
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: $ab-grey;
}
.Line{
    width: 1.3px;
    background: $ab-grey;
    height: 40px;
    margin-left: 5.4px;
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
    .Bin-card{
        padding: 8px;
    }
    .img-box{
    width: 40px;
    height: 40px;
}
}
}
</style>