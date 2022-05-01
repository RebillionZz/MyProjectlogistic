<template>
    <div>
            <!-- Important this component background red name not are the same other component -->
            
                <!-- <v-container> -->
                    <v-flex class="d-flex align-center bg-grey">
                        <v-col cols="12" class="d-flex align-center">
                            <div class="home_head"><img class="imgH" src="../../../assets/Admin/homeContent/box-header.svg" alt=""></div>
                            <div class="d-flex align-center ml-2">ຝາກເຄື່ອງເອງ</div>
                        </v-col>
                    </v-flex>
                <!-- </v-container> -->
                <v-stepper flat v-model="e1" class="v_step_header">
                
                <v-stepper-header class="v_step_header bg-grey">
                    <v-stepper-step :complete="e1 >1" step="1" color="red"><span class="step111" >ສ້າງບິນດ້ວຍຕົນເອງ</span></v-stepper-step>
                    <v-divider color="red"></v-divider>
                    <v-stepper-step :complete="e1 >2" step="2" color="red"><span :class="{step111:dew}" :dew="false">ລາຍລະອຽດອໍເດີ້</span></v-stepper-step>
                    <v-divider :class="{backL:dew}" :dew="false"></v-divider>
                    <v-stepper-step :complete="e1 > 3" step="3 " color="red" ><span :class="{step111:dew2}" :dew2="false">ສຳເລັດ  </span></v-stepper-step>
                    
                </v-stepper-header> 
                
                <v-stepper-items rounded>
                    <!-- step 1 -->
                    <v-stepper-content step="1">
                        <div class="px-0 px-md-2" >
                            <!-- form 1 -->
                            <form>
                                <h4 class="text-center pt-2">ຂໍ້ມູນຜູ້ຮັບ</h4>
                                
                                <v-col cols="12" class="mb-5">
                                    <input type="text" name="" id="" placeholder="ຊື່ຜູ້ຮັບ" class="input-max box-border">
                                </v-col>
                                
                                <div class="d-flex ">
                                    <v-col cols="2" class=""><v-select :label="slecteritem" :items="slecteritems" dense flat outlined class="rounded-pill  " solo  ></v-select></v-col>
                                    <v-col cols="10" class="pl-2"><input type="number" name="" id="" placeholder="ເບີໂທຜູ້ຕິດຕໍ່" class="input-max box-border"></v-col>
                                    <!-- <v-col cols="4" lg="2" md="2" class="px-0"><v-select :label="slecteritem" :items="slecteritems" dense flat outlined class="rounded-pill  " solo  ></v-select></v-col>
                                    <v-col cols="8" lg="10" md="10" class="pt-3"><input type="number" name="" id="" placeholder="ເບີໂທຜູ້ຕິດຕໍ່" class="input-max box-border"></v-col> -->
                                
                                </div>
                                <v-col cols="12"  class="mb-6">
                                    <input type="text" name="" id="" placeholder="ທີ່ຢູ່ປັດຈຸບັນຂອງຜູ້ຮັບ" class="input-max box-border">
                                </v-col>
                                

                                <!-- form 2 -->
                                <h4 class="text-center mb-3">ຂໍ້ມູນພັດສະດຸ</h4>
                                <!-- checkbox 1 if comback take it out -->
                                <div class="d-flex itemSelect mb-3 align-center">
                                    <!--  -->
                                    <v-col cols="4" class="d-flex align-center justify-center pa-0 ">
                                        <div class=" ">ປະເພດພັດສະດຸ</div>
                                    </v-col>
                                    <v-col cols="8" class="d-flex">
                                        <!-- 4 md lg// 6 xs -->
                                        <v-col cols="6" md="4" lg="4" xs="6" class="line-leftR pa-0">
                                            <div class="d-flex align-center line-left pl-3">
                                                <input type="radio" id="itemGeneralID" name="itemSelect" value="1">
                                                <label for="itemGeneralID" class="pl-1">ພັດສະດຸທົ່ວໄປ</label>
                                            </div>
                                        </v-col>
                                        <!-- 8 md lg 6 xs -->
                                        <v-col cols="8" xs="6" md="8" lg="8" class=" pa-0">
                                            <div class="d-flex align-center">
                                                <input type="radio" id="itemDocumentID" name="itemSelect" value="2">
                                                <label for="itemDocumentID" class="pl-1">ເອກະສານ</label>
                                            </div>
                                        </v-col>
                                    </v-col>
                                </div>
                                <div>
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
                                <v-divider class="bg-red" ></v-divider>
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
            <footerC class="mt-5"></footerC>
        
    </div>
    
</template>

<script>
import footerC from '../../../components/footerC.vue'
export default {
    name:'senddc',
    data() {
        return {
            dew2:null,
            dew:null,
            e1:1,
            e2:false,
            slecteritem:'020',
            slecteritems:['020','030'],
            startWays:['ສາຍນ້ຳເງິນ','ຫົວຂົວ (ນາຊາຍທອງ)','ດົງສ້າງຫີນ(ຫຼັກ 15)','ສາຍນ້ຳເງິນ','ຫົວຂົວ(ນາຊາຍທອງ1)','ດົງສ້າງຫີນ(ຫຼັກ 16)'],
            endWays:['ສາຍນ້ຳເງິນ','ຫົວຂົວ (ນາຊາຍທອງ)','ດົງສ້າງຫີນ(ຫຼັກ 15)','ສາຍນ້ຳເງິນ','ຫົວຂົວ(ນາຊາຍທອງ1)','ດົງສ້າງຫີນ(ຫຼັກ 16)'],
        }
    },
    components:{
        footerC
    }
}
</script>

<style lang="scss" scoped>
// head bar

.home_head{
    width: 45px;
    height: 45px;
    padding:4px;
    border-radius: 50%;
    background: $dashhead;
    .imgH{
        width: 100%;
        height: 100%;
    }
}


// end
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
    height: 40px;
    padding-left: 24px;
    outline: none;
    // display: block;
}




// .v-text-field--outlined.v-input--dense.v-text-field--single-line > .v-input__control > .v-input__slot, .v-text-field--outlined.v-input--dense.v-text-field--outlined > .v-input__control > .v-input__slot{
//     min-height: 35px;
// }





.form-2{
    border-radius: 35px;
}

// box border form
.border-R{
    border-right: 2px solid grey;
    
}
// Form2
.itemSelect{
    position: relative;
    box-shadow: 0px 0px 3px 0.2px #ABABAB;
    border-radius: 28px;
    height: 40px;
}
.line-leftR{
    position:relative;
    .line-left::before{
        content: '';
            width: 2px;
            height: 36px;
            // display: block;
            top: -6px;
            // bottom: 2%;
            left: 0;
            position: absolute;
            background: #ABABAB;
            // padding: 0.5px;
            border-radius: 2px;
    }
}

// end
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