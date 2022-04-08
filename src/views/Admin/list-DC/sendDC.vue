<template>
    <v-container>
            <!-- Important this component background red name not are the same other component -->
            
                
                <v-stepper flat v-model="e1" class="v_step_header">
                
                <v-stepper-header class="v_step_header bg-grey">
                    <v-stepper-step :complete="e1 >1" step="1" color="red"><span class="step111" >ສ້າງບິນດ້ວຍຕົນເອງ</span></v-stepper-step>
                    <v-divider color="red"></v-divider>
                    <v-stepper-step :complete="e1 >2" step="2" color="red"><span :class="{step111:dew}" :dew="false">ລາຍລະອຽດອໍເດີ້</span></v-stepper-step>
                    <v-divider :class="{backL:dew}" :dew="false"></v-divider>
                    <v-stepper-step :complete="e1 > 3" step="3 " color="red" :class="{step111:dew2}" :dew2="false"></v-stepper-step>
                    
                </v-stepper-header>
                
                <v-stepper-items rounded>
                    <!-- step 1 -->
                    <v-stepper-content step="1">
                        <div class="px-0 px-md-2" >
                            <!-- form 1 -->
                            <form>
                                <h4 class="text-center pt-2">ຂໍ້ມູນຜູ້ຮັບ</h4>
                                
                                <v-col cols="12" class="mb-6">
                                    <input type="text" name="" id="" placeholder="ຊື່ຜູ້ຮັບ" class="input-max box-border">
                                </v-col>
                                
                                <div class="d-flex align-center">
                                    <v-col cols="4" lg="2" md="2" class="pa-0"><v-select :label="slecteritem" :items="slecteritems" dense flat outlined class="rounded-pill " solo  ></v-select></v-col>
                                    <v-col cols="8" lg="10" md="10"><input type="number" name="" id="" placeholder="ເບີໂທຜູ້ຕິດຕໍ່" class="input-max box-border"></v-col>
                                </div>
                                
                                <v-col cols="12"  class="mb-6">
                                    <input type="text" name="" id="" placeholder="ທີ່ຢູ່ປັດຈຸບັນຂອງຜູ້ຮັບ" class="input-max box-border">
                                </v-col>

                                <!-- form 2 -->
                                <h4 class="text-center ">ຂໍ້ມູນພັດສະດຸ</h4>
                                <!-- checkbox 1 if comback take it out -->
                                <div>
                                        <!-- <v-row flat class=" mb-6 shadow-box">
                                        <v-col cols="4"  class="d-flex align-center text-center     border-R ">
                                            <v-flex class="" >ປະເພດພັດສະດຸ</v-flex>
                                        </v-col>
                                        <v-col cols="4" md="3"  class="d-flex align-center">
                                                <v-checkbox label="ພັດສະດຸທົ່ວໄປ" class="pl-5 "  hide-details ></v-checkbox>
                                        </v-col>
                                        <v-col cols="4" class="d-flex align-center">
                                            <v-checkbox label="ເອກະສານ" class="pl-1  " hide-details  ></v-checkbox>
                                        </v-col>
                                    </v-row>
                                check box2
                                <v-row flat class=" mb-6 shadow-box">
                                        <v-col cols="4"  class="d-flex align-center text-center     border-R ">
                                            <v-flex class="">ບໍລິການເສີມ</v-flex>
                                        </v-col>
                                        <v-col cols="8"  class="d-flex align-center">
                                                    <div class="pl-md-10 pl-sm-10"><v-checkbox label="COD" class="pl-1"></v-checkbox></div>
                                                    <div class="pl-md-15 pl-sm-15"><v-checkbox label="ປະກັນໄພ" class="pl-1"></v-checkbox></div>
                                                    <div class="pl-md-16 pl-sm-16"><v-checkbox label="CDC" class="pl-1"></v-checkbox></div>
                                        </v-col>
                                </v-row>
                                <v-row flat class="d-flex align-center ">
                                    <v-col cols="5" class="pl-md-2 test55 "><v-select label="ເລືອກຕົ້ນທາງ" flat outlined dense single-line :items="startWays" class="rounded-pill "></v-select></v-col>
                                    <v-col cols="7" class="test55 ">
                                        <v-row class=" ">
                                            <div class="pl-lg-5"><v-avatar size="30" class=""><v-img src="../../../assets/Admin/sendContent/Arrow.svg" ></v-img></v-avatar></div>
                                            <v-select label="ເລືອກປາຍທາງ" flat outlined dense solo :items="endWays" class="rounded-pill px-3"></v-select>
                                        </v-row>
                                        </v-col>
                                </v-row> -->
                                </div>



                                <div>
                                    <v-col cols="12"><v-select label="ເລືອກປາຍທາງ" flat outlined dense solo :items="endWays" class="rounded-pill"></v-select></v-col>
                                    <div class="d-flex mb-3">
                                        <v-col cols="6" class="d-block pr-sm-1 pr-md-0 pr-lg-0"><input type="text" name="" id="" placeholder="ກວ້າງ + ສູງ +ຍາວ" class="input-max box-border "></v-col>
                                        <v-col cols="6" class="d-block pl-1"><input type="text" name="" id="" placeholder="ນ້ຳໜັກຂອງພັດສະດຸ" class="input-max box-border"></v-col>
                                    </div>
                                    <v-col cols="12"><v-select label="ເລືອກປາຍທາງ" flat outlined dense solo :items="endWays" class="rounded-pill"></v-select></v-col>
                                    <h4 class="text-center color-red">ໝາຍເຫດ</h4>
                                    <p class="text-center ">ຄ່າບໍລິການ ແມ່ນຕ້ອງອ້າງອີງຕາມການຄິດໄລ່ຕົວຈິງຂອງພະນັກງານຮຸ່ງອາລຸນ</p>
                                </div>
                                <v-btn width="100%" color="bg-red white--text" @click="e1=2;dew=true">ບັນທຶກ</v-btn>
                            </form>
                            <!-- ------------------------------END Step1------------------------------ -->
                        </div>
                    </v-stepper-content>




                    <!-- step 2 -->
                    <v-stepper-content step="2">
                        <form>
                            <!-- S1 -->
                            <div>
                                <h4 class="text-center pb-2">ຂໍ້ມູນຜູ້ຮັບ</h4>
                                <v-divider class="bg-red"></v-divider>
                                <div class="pt-2">
                                    <div class="d-flex justify-space-between">
                                        <p>ຊື່</p><p>bebe</p>
                                    </div>
                                    <div class="d-flex justify-space-between">
                                        <p>ເບີໂທຜູ້ຕິດຕໍ່</p><p>22557799</p>
                                    </div>
                                    <div class="d-flex justify-space-between">
                                        <p>ທີ່ຢູ່ປັດຈຸບັນຂອງຜູ້ຮັບ</p><p> ດົງນາໂຊກ</p>
                                    </div>
                                    
                                </div>
                            </div>
                            <!-- S2 -->
                            <div>
                                <h4 class="text-center pb-2">ຂໍ້ມູນພັດສະດຸ</h4>
                                <v-divider class="bg-red"></v-divider>
                                <div class="pt-2">
                                    <div class="d-flex justify-space-between">
                                        <p>ປະເພດພັດສະດຸ</p><p>ພັດສະດຸທົ່ວໄປ</p>
                                    </div>
                                    <div class="d-flex justify-space-between">
                                        <p>ໝວດໝູ່ພັດສະດຸ</p><p>ເຄື່ອງນຸ່ງຫົ່ມ</p>
                                    </div>
                                    <div class="d-flex justify-space-between">
                                        <p>ຂະໜາດ</p><p> 40 cm</p>
                                    </div>
                                    <div class="d-flex justify-space-between">
                                        <p>ນ້ຳໜັກ</p><p> 1.4 kg</p>
                                    </div>
                                    <div class="d-flex justify-space-between">
                                        <p>ລາຄາຂອງສິນຄ້າ</p><p> 100,000 K</p>
                                    </div>
                                    
                                </div>
                            </div>
                            <!-- S3 -->
                            <div>
                                <h4 class="text-center pb-2">ຂໍ້ມູນການຂົນສົ່ງ</h4>
                                <v-divider class="bg-red"></v-divider>
                                <div class="pt-2">
                                    <div class="d-flex justify-space-between">
                                        <p>ຕົ້ນທາງ : ດົງໂດກ</p><p><img src="../../../assets/Admin/sendContent/ArrowForForm2.svg" alt=""></p><p>ປາຍທາງ : ດົງນາໂຊກ</p>
                                    </div>
                                    <div class="d-flex justify-space-between">
                                        <p>ໃຊ້ບໍລິການ</p><p>COD</p>
                                    </div>
                                    <div class="d-flex justify-space-between">
                                        <p>ຄ່າຂົນສົ່ງໂດຍປະມານ</p><p>5,000 K</p>
                                    </div>
                                    <div class="d-flex">
                                        <div><img src="../../../assets/Admin/sendContent/CodeCostIcon.svg" alt=""></div><p class="pl-2 color-red">ນຳໃຊ້ລະຫັດຄູປອງ</p>
                                    </div>
                                    <div class="d-flex justify-space-between">
                                        <p>ລວມເງິນ</p><p>8,000 K</p>
                                    </div>
                                    
                                </div>
                            </div>
                        
                            <v-btn width="100%" color="bg-red white--text" @click="e1=3;dew=true">ຢືັນຢັນການບັນທຶກ</v-btn>
                        </form>
                    </v-stepper-content>




                    <!-- step 3 -->
                    <v-stepper-content step="3">
                        <div class="d-flex justify-center">
                            <v-avatar size="90" color="red"><img src="../../../assets/Admin/sendContent/CompleteForm.svg" alt=""></v-avatar>
                            
                        </div>
                        <h5 class="text-center pt-5">ອໍເດີ້ຂອງທ່ານໄດ້ຖືກຢືນຢັນ</h5>
                        <div class="d-flex justify-center pt-3">
                            
                            <v-btn color="bg-red white--text" @click="e1=4">ພັດສະດຸທີ່ຂ້ອຍສົ່ງອອກ</v-btn>
                        </div>
                    </v-stepper-content>
                    <!-- <v-stepper-content v-model="e7" :e7="false"><v-col><v-btn >Succes</v-btn></v-col></v-stepper-content> -->
                </v-stepper-items>
                
            </v-stepper>
                
        
    </v-container>
    
</template>

<script>
export default {
    name:'home2HT',
    data() {
        return {
            e1:1,
            e2:false,
            slecteritem:'020',
            slecteritems:['020','030'],
            startWays:['ສາຍນ້ຳເງິນ','ຫົວຂົວ (ນາຊາຍທອງ)','ດົງສ້າງຫີນ(ຫຼັກ 15)','ສາຍນ້ຳເງິນ','ຫົວຂົວ(ນາຊາຍທອງ1)','ດົງສ້າງຫີນ(ຫຼັກ 16)'],
            endWays:['ສາຍນ້ຳເງິນ','ຫົວຂົວ (ນາຊາຍທອງ)','ດົງສ້າງຫີນ(ຫຼັກ 15)','ສາຍນ້ຳເງິນ','ຫົວຂົວ(ນາຊາຍທອງ1)','ດົງສ້າງຫີນ(ຫຼັກ 16)'],
        }
    },
}
</script>

<style lang="scss" scoped>
.rountest{
    border-radius: 10px;
}
    .select-class{
        text-align: center;
        border-radius: 24px; 
        justify-content: center;
    }
    .step111{
        color: $red;
    }
    .color-red{
        color: $red;
    }
    .backL{
        background: $red !important;
    }
    .bg-grey{
        background: $d-grey !important;
    }
    
    .v_step_header{
        box-shadow: none;
    }
    .box-border{
        border :1px solid #888888;
        border-radius: 28px;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
// INput form design
.input-max{
    width: 100%;
    height: 38px;
    padding-left: 24px;
    outline: none;
    // display: block;
}



// v-select seting
// .v-text-field.v-text-field--enclosed:not(.v-text-field--rounded) > .v-input__control > .v-input__slot, .v-text-field.v-text-field--enclosed .v-text-field__details{
//     padding: 0 0px;
// }
 .v-text-field--outlined.v-input--dense.v-text-field--single-line > .v-input__control > .v-input__slot, .v-text-field--outlined.v-input--dense.v-text-field--outlined > .v-input__control > .v-input__slot{
    min-height: 35px;
 }





.form-2{
    border-radius: 35px;
}

// box border form
.border-R{
    border-right: 2px solid grey;
    
}
// .border-R::after{
//     content: "";
//     // border-right: 3px solid rgb(150, 145, 145);
//     width: 3px;
//     position: absolute;
//     background: $d-grey !important;
//     height: 45px;
//     top: 2px;
//     left: 150px;
//     border-radius: 10px;
// }

.shadow-box{
     box-shadow: 8px 5px 8px -5px grey,
     ;
    //  clip-path: inset(5px 0px -5px 5px);
     position: relative;
    //  border-radius: 8px;
    // box-shadow: 0px 10px 5px #888, 0px -10px 5px #888;
}
@media screen and (max-width: 600px) {
    *{
        font-size: 14px !important;
    }
    // form checkbox mobile
    .v-input--selection-controls .v-input__slot > .v-label {
        font-size: 8px;
    }
    .input-max{
    height: 38px;
    padding-left: 18px;
    outline: none;
    // display: block;
}
}
</style>