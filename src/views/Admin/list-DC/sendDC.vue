<template>
    <div class=" dashboard-container-wrap">
            <!-- Important this component background red name not are the same other component -->
            <v-row no-gutters class="hide-overflow d-flex align-center ">
                <!-- <v-flex class="d-flex align-center"> -->
                    <hamburgur ></hamburgur>
                    <v-col cols="8"  lg="9" md="9" sm="9" xs="8"    class="search-form   pa-0">
                        <label class="for-search" for="searchBar" ><v-img src="../../../assets/Admin/sidebar/toolbar/search.svg" max-height="37" max-width="37"></v-img></label>
                        <input class="input-max" type="text" name="" id="searchBar" placeholder="ໃສ່ລະຫັດ tracking ID" >
                    </v-col>
                    <userAcoin></userAcoin>
                <!-- </v-flex> -->
            </v-row>
                <!-- <v-container> -->
                    <v-flex class="d-flex align-center bg-grey">
                        <v-col cols="12" class="d-flex align-center">
                            <div class="home_head"><img class="imgH" src="../../../assets/Admin/homeContent/box-header.svg" alt=""></div>
                            <div class="d-flex align-center ml-2">ຝາກເຄື່ອງເອງ</div>
                        </v-col>
                    </v-flex>
                    
                <!-- </v-container> -->
                <v-stepper flat v-model="e1" class="v_step_header" >
                
                <v-stepper-header class="v_step_header bg-grey">
                    <v-stepper-step :complete="e1 >1" step="1" color="red" @click="e1 = 1"><span class="step111" >ສ້າງບິນດ້ວຍຕົນເອງ</span></v-stepper-step>
                    <v-divider color="red"></v-divider>
                    <v-stepper-step :complete="e1 >2" step="2" color="red"><span :class="{step111:dew}" :dew="false">ລາຍລະອຽດອໍເດີ້</span></v-stepper-step>
                    <v-divider :class="{backL:dew}" :dew="false"></v-divider>
                    <v-stepper-step :complete="e1 >= 3" step="3 " color="red" ><span :class="{step111:dew2}" :dew2="false">ສຳເລັດ  </span></v-stepper-step>
                    
                </v-stepper-header> 
                
                <v-stepper-items rounded>
                    <!-- step 1 -->
                    <v-stepper-content step="1">
                            <!-- form 1 -->
                            
                            <v-form>
                                <h4 class="text-center mb-3">ຂໍ້ມູນຜູ້ຮັບ</h4>
                                <v-text-field class="mt-4" label="ຊື່ຜູ້ຮັບ" v-model="destinationName" outlined dense  rounded hide-details></v-text-field>
                                <v-row class="   " no-gutters>
                                    <v-col cols="3" lg="2" md="2" sm="2" xs="4" >
                                        <v-select class=" pt-4" label="ເບີໂທ" outlined dense v-model="forPhone"   rounded hide-details append-icon :items="numberPhone" ></v-select>

                                    </v-col>
                                    <v-col cols="9" lg="10" md="10" sm="10" xs="8" class="">
                                        <v-text-field class="mt-4 pl-1" v-model="destinationPhone" label="ເບີໂທຜູ້ຕິດຕໍ່" outlined dense  rounded hide-details></v-text-field>

                                    </v-col>
                                </v-row>
                                <v-text-field class="mt-4" label="ທີ່ຢູ່ປັດຈຸບັນຂອງຜູ້ຮັບ" v-model="Current_address" outlined dense  rounded hide-details></v-text-field>
                                <h4 class="text-center my-3">ຂໍ້ມູນພັດສະດຸ</h4>

                                <div class="d-flex itemSelect mb-4 align-center">
                                    <!--  -->
                                    <v-col cols="4" class="d-flex align-center justify-center pa-0 ">
                                        <div class=" ">ປະເພດພັດສະດຸ</div>
                                    </v-col>
                                    <v-col cols="8" class="d-flex">
                                        <!-- 4 md lg// 6 xs -->
                                        <v-col cols="6" md="4" lg="4" xs="6" class="line-leftR pa-0">
                                            <div class="d-flex align-center line-left pl-3">
                                                <input type="radio" v-model="TypeItem" id="itemGeneralID" name="itemSelect" selected  value="ພັດສະດຸທົ່ວໄປ">
                                                <label for="itemGeneralID" class="pl-1">ພັດສະດຸທົ່ວໄປ</label>
                                            </div>
                                        </v-col>
                                        <!-- 8 md lg 6 xs -->
                                        <v-col cols="8" xs="6" md="8" lg="8" class=" pa-0">
                                            <div class="d-flex align-center">
                                                <input type="radio" v-model="TypeItem" id="itemDocumentID" name="itemSelect" value="ເອກະສານ">
                                                <label for="itemDocumentID" class="pl-1">ເອກະສານ</label>
                                            </div>
                                        </v-col>
                                    </v-col>
                                </div>



                                <div class="d-flex itemSelect mb-4 align-center">
                                    <v-col cols="4" class="d-flex align-center justify-center pa-0 ">
                                        <div class=" ">ບໍລິການເສີມ</div>
                                    </v-col>
                                    <v-col cols="8" class="d-flex">
                                        <v-col cols="4" md="4" lg="4" xs="4" class="line-leftR pa-0">
                                            <div class="d-flex align-center line-left pl-3">
                                                <input type="checkbox" id="CDC" name="serviceSelect" value="1">
                                                <label for="CDC" class="pl-1">CDC</label>
                                            </div>
                                        </v-col>
                                        <v-col cols="4" xs="4" md="4" lg="4" class=" pa-0">
                                            <div class="d-flex align-center">
                                                <input type="checkbox" id="COD" name="serviceSelect" checked value="2">
                                                <label for="COD" class="pl-1">COD</label>
                                            </div>
                                        </v-col>
                                        <v-col cols="4" xs="4" md="4" lg="4" class=" pa-0">
                                            <div class="d-flex align-center">
                                                <input type="checkbox" id="Pagunphai" name="serviceSelect" value="3">
                                                <label for="Pagunphai" class="pl-1">ປະກັນໄພ</label>
                                            </div>
                                        </v-col>
                                    </v-col>
                                </div>



                                <div class="d-flex align-center  mb-4">
                                    <v-col cols="6" xs="12">
                                        <v-select class="  pr-2" v-model="origin" label=" ເລືອກຕົ້ນທາງ " outlined dense   rounded hide-details append-icon="d-xs-none"  :items="startWays" ></v-select>
                                    </v-col>
                                    <v-col cols="6" xs="12" class="d-flex align-center">
                                        <div class=""><v-img src="../../../assets/Admin/sendContent/Arrow.svg" max-height="37" max-width="37"></v-img></div>
                                        <v-select class="  pl-2" v-model="destination" label="ເລືອກປາຍທາງ" outlined dense   rounded hide-details append-icon="d-xs-none" :items="startWays" ></v-select>
                                    </v-col>
                                </div>



                                <v-col cols="12" class="mb-4">
                                    <!-- <v-select class="  " label="ເລືອກປາຍທາງ" outlined dense   rounded hide-details append-icon :items="startWays" ></v-select> -->
                                    <v-text-field class="" v-model="nameItem" label="ເລືອກໝວດໝູ່" outlined dense  rounded hide-details></v-text-field>
                                </v-col>
                                


                                <div class="mb-4 d-flex">
                                    <v-col cols="6" >
                                        <v-text-field class="pr-1" v-model="Size" @input="calc()" label="ກວ້າງ + ສູງ + ຍາວ " outlined dense  rounded hide-details></v-text-field>
                                    </v-col>
                                    <v-col cols="6" >
                                        <v-text-field class="pl-1" v-model="wieghtItem" @input="calc()" label="ນ້ຳໜັກຂອງພັດສະດຸ" outlined dense  rounded hide-details></v-text-field>
                                    </v-col>
                                </div>






                                <v-col cols="12" class="mb-4">
                                    <!-- <v-select class="  " label="ເລືອກປາຍທາງ" outlined dense   rounded hide-details append-icon :items="startWays" ></v-select> -->
                                    <v-text-field class="" v-model="ResultItem" label="ລາຄາພັດສະດຸ" disabled outlined dense  rounded hide-details></v-text-field>
                                </v-col>



                                <v-btn width="100%" color="bg-red white--text" @click="Submit()">ຢືັນຢັນການບັນທຶກ</v-btn>
                            </v-form>
                            <!-- ------------------------------END Step1------------------------------ -->
                    </v-stepper-content>




                    <!-- step 2 -->
                    <v-stepper-content step="2">
                        <form>
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
                            
                            <v-btn color="bg-red white--text" @click="e1=1">ພັດສະດຸທີ່ຂ້ອຍສົ່ງອອກ</v-btn>
                        </div>
                    </v-stepper-content>
                    <!-- <v-stepper-content v-model="e7" :e7="false"><v-col><v-btn >Succes</v-btn></v-col></v-stepper-content> -->
                </v-stepper-items>
                
            </v-stepper>
            <br>
            <br>
            <br>
            <br>
            <br>
            <footerC class="mt-5"></footerC>    
        
    </div>
    
</template>

<script>
import hamburgur from '../../../components/DashTopview/hamburgur.vue'
import userAcoin from '../../../components/DashTopview/userAcoin.vue'
import footerC from '../../../components/footerC.vue'
export default {
    name:'senddc',
    data() {
        return {
            dew2:null,
            dew:null,
            e1:1,
            e2:false,
            // slecteritem:'020',
            // slecteritems:['020','030'],
            numberPhone:['020','030'],
            startWays:['ສາຍນ້ຳເງິນ','ຫົວຂົວ (ນາຊາຍທອງ)','ດົງສ້າງຫີນ(ຫຼັກ 15)','ສາຍນ້ຳເງິນ','ຫົວຂົວ(ນາຊາຍທອງ1)','ດົງສ້າງຫີນ(ຫຼັກ 16)'],
            

            // form
            destinationName:'biew',
            forPhone:'020',
            destinationPhone:'229758345',
            TypeItem:null,
            origin:null,
            destination:null,
            Current_address:'',
            nameItem:'',
            
            Size:null,
            wieghtItem:null,
            ResultItem:null,
            


        }
    },
    
    
    methods: {
        calc(){
            
            var Size= this.Size
            // console.log('HI')
            var wieght= this.wieghtItem

            if(Size >0 && wieght > 0){
                this.ResultItem = Size * wieght
                this.ResultItem = 0 
                
            }
        },

        Submit(){
            // this.e1=2
            // this.dew=true
            let Name = this.destinationName
            let forNumber = this.forPhone
            let phoneNumber = this.destinationPhone
            let TypeItem = this.TypeItem
            let destination = this.destination
            let origin = this.origin
            let address = this.Current_address
            let nameItem = this.nameItem
            let wieght = this.wieghtItem
            let Size = this.Size
            let ResultItem = this.ResultItem
            if(destination == null || Name =='' || forNumber =='' || phoneNumber == '' || TypeItem == null || origin == null || address =='' || nameItem ==''||wieght == '' || Size == '' || ResultItem == ''){
                console.error('No 1')
            }

            else if(wieght ===String || Size ===String){
                return console.log(wieght , Size)
            }
            // else if(wieght !==  Number || Size !== Number){
            //     console.log("please try again")
            // }
            else{
                console.log("YES")
                this.e1=2
                this.dew=true
            }

            
            // console.log(Name,forNumber,phoneNumber,TypeItem,origin,destination)
        },
        
        
    },
    //     computed:{
    //         calculation(){
    //             let wieght = this.wieghtItem
    //             let Size = this.Size
    //             console.log("hi")
    //         }
    // },
        
    
    components:{
        footerC,
        hamburgur,
        userAcoin
    }
}
</script>

<style lang="scss" scoped>
// footer


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
        cursor:pointer;
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
    box-shadow: 0px 0px 3px 0.5px #ABABAB;
    border-radius: 28px;
    height: 40px;
}
// .line-leftR{
//     position:relative;
//     .line-left::before{
//         content: '';
//             width: 2px;
//             height: 36px;
//             // display: block;
//             top: -6px;
//             // bottom: 2%;
//             left: 0;
//             position: absolute;
//             background: #ABABAB;
//             // padding: 0.5px;
//             border-radius: 2px;
//     }
// }

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
            background:$bg-footer;
            border-radius: 34px;
            outline: none;
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
    .search-form{
    position: relative;
    
    padding:0 5px !important;

        .input-max{
        width: 100%;
        height: 35px;
        padding-left: 40px;
        background:$bg-footer;
        border-radius: 34px;
        outline: none;
    }
    .for-search{
        position: absolute;
        left: 12px;
        top: 2px;
        width: 30px;
        height: 30px;
    }
    }
    




    // lable and text-field select change css
    .v-text-field--rounded > .v-input__control > .v-input__slot{
        padding: 0px 14px;
    }
}
</style>