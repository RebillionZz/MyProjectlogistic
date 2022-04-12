<template>
    <v-container>
        <v-toolbar  flat class="bg-grey mb-4">
            <v-toolbar-items class="d-flex align-center">
                <v-avatar color="red lighten-4" size="55"><v-img src="../../../assets/Admin/CODContent/CODIcon.svg" max-height="50" max-width="50"></v-img></v-avatar>
            </v-toolbar-items>
            <v-toolbar-title class="d-flex align-center ml-2 Header-C">ລາຍການເຄື່ອງ COD</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog2" width="600" >
                <template  v-slot:activator="{ on, attrs } ">
                <div class="d-flex edit-COD" v-bind="attrs" v-on="on">
                    <v-img src="../../../assets/Admin/CODContent/editIcon.svg" max-height="25" max-width="25" class="mr-2"></v-img>
                    <div class="d-flex align-center color-red ">ແກ້ໄຂCOD</div>
                </div>
                </template>
                <div action="" class="dialog2Form pa-5">
                    <div class="">
                        <div class="d-flex justify-space-between align-center  ">
                                <div></div>
                                <div class="my-3 color-red text-center">ຂໍ້ມູນບັນຊີ COD</div>
                                <div @click="dialog2= false" class="closeDA1 "><v-img src="../../../assets/Admin/CODContent/CloseDialog1.svg" max-height="25" max-width="25"></v-img></div>
                        </div>
                        <dialogCOD2></dialogCOD2>
                    </div>
                </div>
                
                </v-dialog>
        </v-toolbar>
        <!--  -->
        <v-container>
            <!-- not have box shadow -->
            <div class="d-md-flex justify-space-between" >
                <v-col cols="12" sm="12" md="2" class="d-flex justify-space-between align-center  dateLeft">
                    <div class="text-center mr-2">ກ່ອນ  {{beforeTime}}</div>
                    <v-img src="../../../assets/Admin/CODContent/down.svg" max-height="10" max-width="10"></v-img>
                </v-col>
                <div class="d-flex align-center">
                    <v-col cols="5"  class="d-flex align-center ptmobile">
                        <!-- not design datepicker should back to do -->
                        <div class="d-flex justify-space-between align-center text-center datePick" width="100%">
                            <div class=" pr-6 pl-4">8/10/2021</div>
                            <div class="pr-2"><v-img src="../../../assets/Admin/CODContent/date.svg" max-height="18" max-width="18"></v-img></div>
                        </div>
                    </v-col>
                    <v-col cols="2" class="d-flex align-center justify-center px-1  ">
                        <!-- pc arrow       -->
                        <div class="d-none d-lg-block"><v-img src="../../../assets/Admin/CODContent/dateTOdate.svg" max-height="15" max-width="15" ></v-img></div>
                        <!-- Mobile Arrow -->
                        <div class="arrow-mobile pt-2"><v-img src="../../../assets/Admin/CODContent/mobileArrowDatetoDate.svg" max-height="30" max-width="30" ></v-img></div>

                    </v-col>
                    <v-col cols="5" class="d-flex align-center ptmobile" >
                        <!-- not design datepicker should back to do -->
                        <div class="d-flex justify-space-between align-center text-center datePick" width="100%">
                            <div class=" pr-6 pl-4">9/10/2021</div>
                            <div class="pr-2"><v-img src="../../../assets/Admin/CODContent/date.svg" max-height="18" max-width="18"></v-img></div>
                        </div>
                    </v-col>
                </div>
            </div>
            <!-- ENd date -->
            <!--  -->
            <div class="mt-4 nav-animate animate-none-Bg d-flex  ">
                <v-col cols="6" class="text-center pt-2 inline-block a-child backL white--text nav-animate">
                    ກຳລັງດຳເນີນການ
                </v-col>
                <v-col cols="6" class="text-center pt-2 inline-block a-child ">
                    ໄດ້ຮັບເງິນແລ້ວ
                </v-col>
            </div>
            <div class="card-normal mt-5">

            </div>
                <v-dialog
                    v-model="dialog1" width="500" >
                    <template v-slot:activator="{ on, attrs }">
                        
                        <div class="mt-3 color-red COD-service "   v-bind="attrs" v-on="on">
                        ເງື່ອນໄຂການໃຫ້ບໍລິການ COD 
                        
                        </div>
                    </template>

                    <v-card class="pa-5">
                        <div class="">
                            <div class="d-flex justify-space-between align-center  ">
                                    <div></div>
                                    <div class="my-3 color-red text-center DCOD">ເງື່ອນໄຂການໃຫ້ບໍລິການ COD</div>
                                    <div @click="dialog1= false" class="closeDA1 "><v-img src="../../../assets/Admin/CODContent/CloseDialog1.svg" max-height="25" max-width="25"></v-img></div>
                            </div>
                        </div>
                        <div class=""><v-divider class="bg-grey"></v-divider></div>
                        <dialogCOD1></dialogCOD1>
                        
                    </v-card>
                    </v-dialog>
        </v-container>
    </v-container>
</template>

<script>
import dialogCOD1 from './CODchild/dialogCOD1.vue'
import dialogCOD2 from './CODchild/dialogCOD2.vue'
export default {
    name:'COD',
    data() {
        return {
            dialog1: false,
            dialog2: false,
            beforeTime:'07/07/2021'
            
        }
    },
    components:{
        dialogCOD1,
        dialogCOD2
    }
}
</script>
<style lang="scss" scoped>
// dialog2
.dialog2Form{
    background: #ffffff;
}
// card
    .card-normal{
        width: 100%;
        height: 250px;
        background: #ffffff;
        border-radius: 8px;
    }
    .COD-service{
        cursor: pointer;
    }
    .DCOD{
        font-size: 20px;
    }
// 
.dateLeft{
    background: #ffffff;
    padding: 4px 12px;
    border-radius: 28px;
}
.datePick{
    background: $d-grey;
    border: 1px solid #ABABAB;
    border-radius: 28px;
    color:#ABABAB;
    width: 100%;
}
// Global
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
.edit-COD{
    cursor: pointer;
}
.arrow-mobile{
    display: none;
}


// Animate

.nav-animate{
    border-radius: 28px;
    width: 100%;
    height: 45px;
}
.animate-none-Bg{
    background: #EEEEEE;
}
// .nav-animate{
//     background: rgb(103, 103, 124);
//     position: relative;
   
//     display: inline-block;
    
//     width: 100%;
//     height: 45px;
//     border: 1px solid #000000;
//     border-radius: 28px;

//     .a-child{
//     z-index: 1;
//     text-align: center;
//     position: relative;
//     width: 100%;
//     display: inline-block;
//     .animate-text{
//         position: absolute;
//         top: 0;
//         z-index: 0;
//         background: $red;
//         height: 100%;
//         width: 50%;
//     }
    
// }
// }

// // 
// .a-child:nth-child(1){
//     width: 50%;
// }
// .a-child:nth-child(2){
//     width: 50%;
// }
@media only screen and (max-width: 768px) {
    *{
        font-size: 16px;
    }
    .Header-C{
        font-size: 18px;
    }
    .ptmobile{
        padding-top: 10px;
    }
    .arrow-mobile{
        display: block;
    }
    .nav-animate{
    border-radius: 28px;
    width: 100%;
    height: 35px;
}
}
@media screen and (max-width: 600px) {
    *{
        font-size: 14px;
    }
    // form checkbox mobile
    .Header-C{
        font-size: 16px;
    }
    .ptmobile{
        padding-top: 10px;
    }
    .arrow-mobile{
        display: block;
    }
    .nav-animate{
    border-radius: 28px;
    width: 100%;
    height: 35px;
    .DCOD{
        font-size: 16px;
    }
}
}

</style>
