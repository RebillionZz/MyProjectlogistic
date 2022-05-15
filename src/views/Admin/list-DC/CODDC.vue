<template>
    <div>
        <v-container>
            <v-row no-gutters>
            <v-flex class="d-flex align-center">
                <hamburgur ></hamburgur>
                <v-col cols="8"  lg="8" md="8"   class="search-form mr-lg-2 mr-md-3 pa-0">
                    <label class="for-search" for="searchBar" ><v-img src="../../../assets/Admin/sidebar/toolbar/search.svg" max-height="37" max-width="37"></v-img></label>
                    <input class="input-max" type="text" name="" id="searchBar" placeholder="ໃສ່ລະຫັດ tracking ID" >
                </v-col>
                <userAcoin></userAcoin>
            </v-flex>
        </v-row>
        </v-container>
        <v-container class="d-flex">
            <v-flex class="d-flex align-center bg-grey">
                <v-col class="d-flex align-center" >
                    <div class="home_head"><img class="imgH" src="../../../assets/Admin/CODContent/CODIcon.svg" max-height="50" max-width="50"></div>
                    <div class="d-flex align-center ml-2 Header-C">ລາຍການເຄື່ອງ COD</div>

                </v-col>
            </v-flex>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog2" width="600" >
                <template  v-slot:activator="{ on, attrs } ">
                <div class="d-flex edit-COD align-center" v-bind="attrs" v-on="on">
                    <div class="edit-icon-box"><img src="../../../assets/Admin/CODContent/editIcon.svg"  class="mr-2 edit-icon"></div>
                    <div class="d-flex align-center color-red pt-1 pl-2">ແກ້ໄຂCOD</div>
                </div>
                </template>
                <div action="" class="dialog2Form pa-5">
                    <div class="">
                        <div class="d-flex justify-space-between align-center  ">
                                <div></div>
                                <div class="my-3 text-center">ຂໍ້ມູນບັນຊີ COD</div>
                                <div @click="dialog2= false" class="closeDA1 "><v-img src="../../../assets/Admin/CODContent/CloseDialog1.svg" max-height="25" max-width="25"></v-img></div>
                        </div>
                        <dialogCOD2></dialogCOD2>
                    </div>
                </div>
                
                </v-dialog>
        </v-container>
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
                    <template v-slot:activator="{ on, attrs }" >
                        
                        <v-col cols="4" class="mt-3 color-red COD-service "   v-bind="attrs" v-on="on">
                        ເງື່ອນໄຂການໃຫ້ບໍລິການ COD 
                        
                        </v-col>
                        <v-col cols="8"></v-col>
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
    </div>
</template>

<script>
import dialogCOD1 from './CODchild/dialogCOD1.vue'
import dialogCOD2 from './CODchild/dialogCOD2.vue'
import hamburgur from '../../../components/DashTopview/hamburgur.vue'
import userAcoin from '../../../components/DashTopview/userAcoin.vue'
import footerC from '../../../components/footerC.vue'
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
        dialogCOD2,
        footerC,
        hamburgur,
        userAcoin

    }
}
</script>
<style lang="scss" scoped>
// ---------------------

.home_head{
    width: 50px;
    height: 50px;
    padding:4px;
    border-radius: 50%;
    background: $dashhead;
    .imgH{
        width: 100%;
        height: 100%;
    }
}







// end-----------------
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
    .edit-icon-box{
        width: 30px;
        height: 30px;
        .edit-icon{
            width: 100%;
            height: 100%;
        }

    }
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
// -------------------------------------------------------End search
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
    .search-form{
        position: relative;
        padding-right: 8px;
        
        .input-max{
            width: 100%;
            height: 35px;
            padding-left: 40px;
            
            border-radius: 34px;
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
    .edit-COD{
    cursor: pointer;
    .edit-icon-box{
        width: 24px;
        height: 24px;
        .edit-icon{
            width: 100%;
            height: 100%;
        }

    }
}
    .search-form{
        padding:0 5px !important;
            .input-max{
            height: 35px;
        }
        .for-search{
            position: absolute;
            left: 12px;
            top: 2px;
            width: 30px;
            height: 30px;
        }
    }
}

</style>
