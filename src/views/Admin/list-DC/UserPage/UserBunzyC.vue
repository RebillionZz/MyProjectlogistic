<template>
    <v-container class="body-form">
        <!-- Avata + heading User Info mobile hide-lg-md -->
        <div class="box-userBunzy">
            <div class="d-flex align-center Bunzy-head">
                <v-avatar class="bg-head d-flex align-center pl-1 pb-1"><img src="../../../../assets/Admin/UserInfo/Bunzy/bunzyIcon.svg" alt="UserInfo" class="InfoIcon"></v-avatar>
                <!-- <div class="bg-head"><img src="../../../../assets/Admin/UserInfo/bunzyIcon.svg" alt="UserInfo" class="InfoIcon"></div> -->
                <div>ຂໍ້ມູນບັນຊີ</div>
            </div>
        </div>
        <form class="form mt-5" v-if="activeEdit == 2">
            <div class="userBunzy">
                <!-- head -->
                <div class="text-center my-4">ຂໍ້ມູນບັນຊີ</div>
                <v-divider color="red"></v-divider>
                <!-- <img src="../../../../assets/Admin/UserInfo/Bunzy/call.svg" alt="tell" class=""> -->
                <v-row no-gutters class="mt-3">
                    <v-col cols="10">
                        <div class="d-flex align-center">
                            <v-col cols="1"><div class=""><img src="../../../../assets/Admin/UserInfo/Bunzy/call.svg" alt="tell" class="tell"></div></v-col>
                            <v-col cols="4" sm="3" md="2" lg="2"><div>ເບີໂທລະສັບ</div></v-col>
                            <v-col cols="10" sm="7"><div>020 22557799</div></v-col>
                            
                            
                        </div>
                    </v-col>
                    <v-col cols="2" class="d-flex align-center justify-end">
                        <v-dialog v-model="dialog" width="500">
                            <template v-slot:activator="{on , attrs}">
                            <div class="edit" v-bind="attrs" v-on="on">ແກ້ໄຂ</div>
                                
                            </template>
                            <div class="dialog-1" v-if="activeD1 == 1">
                                <div class="text-center py-4">ປ່ຽນເບີໂທລະສັບ</div>
                                <v-divider color="red"></v-divider>
                                <div class="text-center pt-3 pb-2">ທ່ານຕ້ອງການປ່ຽນເບີໂທແທ້ຫຼືບໍ່</div>
                                <div class="text-center"><img src="../../../../assets/Admin/UserInfo/Bunzy/phone.svg" alt=""></div>
                                <div class="text-center mb-4">020 22557799</div>
                                <div class="btn-g pb-5">
                                    <v-col cols="6">
                                        <button class="button pl-2" @click="goStep(2)">ດຳເນີນການຕໍ່</button>
                                    </v-col>
                                    <v-col cols="6" class="">
                                        <button class="button pr-2" @click="dialog = false">ຍົກເລີກ</button>
                                    </v-col>
                                    
                                    
                                </div>
                            </div>
                            <form v-if="activeD1 == 2" class="form-Change">
                                <div class="head-form pt-3 pb-2 d-flex align-center">
                                    <v-col cols="1">
                                        <button class="btn-back" @click="goStep(1)"><img src="../../../../assets/Admin/UserInfo/Bunzy/backDialog.svg" alt=""></button>
                                    </v-col>
                                    <v-col cols="10" class="text-center">
                                        <div>ກະລຸນາໃສ່ເບີໂທໃໝ່</div>
                                    </v-col>
                                </div>
                                <v-divider color="red"></v-divider>
                                <div class="change-form pb-3 pt-4">
                                    <div class="tell-change d-flex">
                                        <v-col cols="2">
                                            <div class="box-C input-C d-flex align-center justify-center">020</div>
                                        </v-col>
                                        <v-col cols="1"></v-col>
                                        <v-col cols="9" class="">
                                            <input class="box-C input-C d-flex align-center pl-4 justify-end"  type="number" placeholder="ເບີໂທລະສັບ">

                                        </v-col>
                                    </div>
                                    <div class="pb-5 pt-5"><button class="btn-change" @click="dialog = false">ຢືນຢັນເບີໂທ</button></div>
                                </div>
                            </form>
                        </v-dialog>
                    </v-col>
                </v-row>
                <v-divider></v-divider>
                <v-row no-gutters class="mt-3">
                    <v-col cols="10">
                        <div class="d-flex align-center">
                            <v-col cols="1"><div class="pl-1"><img src="../../../../assets/Admin/UserInfo/Bunzy/lock pass.svg" alt="Pass" class="Pass"></div></v-col>
                            <v-col cols="4" md="2" lg="2"><div>ລະຫັດຜ່ານ</div></v-col>
                            <v-col cols="10" sm="7"><div>********</div></v-col>
                            
                            
                        </div>
                    </v-col>
                    <v-col cols="2" class="d-flex align-center justify-end">
                            <button class="edit" @click="goStepEdit(3)">ແກ້ໄຂ</button>
                    </v-col>
                </v-row>
                <v-divider class="mb-15"></v-divider>
                
            </div>
        </form>
        <!-- Active Edit -->
        <form v-if="activeEdit == 3" class="change_passForm mt-5">
            <div class="text-center my-4">ປ່ຽນລະຫັດຜ່ານໃໝ່</div>
            <v-divider color="red"></v-divider>
            <div class="pt-3">
                <label class="">ລະຫັດຜ່ານປະຈຸບັນ</label>
                <input  class="getCpass" type="number" name="" id="" placeholder="ລະຫັດຜ່ານປະຈຸບັນ">
            </div>
            <div class="pt-3">
                <label class="">ລະຫັດຜ່ານໃໝ່</label>
                <input  class="getCpass" type="number" name="" id="" placeholder="ລະຫັດຜ່ານໃໝ່">
            </div>
            <div class="pt-3">
                <label class=""> ຢືນຢັນລະຫັດຜ່ານໃໝ່</label>
                <input  class="getCpass" type="number" name="" id="" placeholder="ຢືນຢັນລະຫັດຜ່ານໃໝ່">
            </div>
            <div class="my-6"><button class="btnCPass">ບັນທຶກ</button></div>
        </form>
    </v-container>
</template>

<script>
export default {
    name:'UserInfoC',
    data() {
        return {
            activeD1:1,
            activeEdit:2,
            dialog:false,
        }
    },
    methods:{
        goStep : function(step){
            this.activeD1 = step;
        },
        goStepEdit : function(AE){
            this.activeEdit = AE;
        }
    }
}
</script>

<style lang="scss" scoped>
// 
.color-red{
    color: $red;
}
.backL{
    background: $red !important;
}
.bg-grey{
    background: $d-grey !important;
}
// 
.body-form{
    padding: 0 40px;
    .box-userBunzy{
        
        .Bunzy-head{
            .bg-head{
                background-color: $dashhead;
                // padding:  6px 4px 4px 8px ;
                // border-radius: 50%;
                margin-right: 8px;
                // display: flex;
                // align-items: center;
                .InfoIcon{
                    width: 28px;
                    height: 28px;
                }
            }
        }
    }
    .form{
        background-color: #ffffff;
        width: 100%;
        height: auto;
        // padding: 8px 70px;
        border-radius: 4px;
        margin-bottom: 16px;
        padding: 10px 40px;
        .userBunzy{
            .box-border{
                border :1px solid #888888;
                border-radius: 28px;
            }
            .input-max{
                width: 100%;
                height: 35px;
                padding-left: 12px;
                outline: none;
            }
        }
    }
}
.tell{
    width: 40px;
    height: 40px;
}
.Pass{
    width:30px;
    height: 30px;
    
}
.edit{
    color: $red;
    cursor: pointer;

}
// ------------------------GD
.dialog-1{
    background-color: #ffffff;
    padding: 0 12px;
    .btn-g{
        display: flex;
        justify-content: center;
        .button{
            background-color:$red;
            color: #ffffff;
            padding: 8px 12px;
            border-radius: 24px;
            width: 95%;
        }

    }
}
.form-Change{
    padding: 0px 12px;
    background: #ffffff;
}
.head-form{
    display: flex;
    padding: top;
    .btn-back{
        display: flex;
        align-items: center;
        padding: 6px;
        background: $red;
        border-radius: 50%;
    }
}
            .box-C{
                border :1px solid #888888;
                border-radius: 24px;
            }
            .input-C{
                width: 100%;
                height: 30px;
                // padding-left: 12px;
                outline: none;
            }
            .btn-change{
                background-color:$red;
                color: #ffffff;
                border-radius: 24px;
                width: 100%;
                padding: 4px 0px;
            }
// _--------------------------------













//  -------------------------------------------------------- form 2-------------------------------------------------------------------
.change_passForm{
    padding: 0px 12px;
    background: #ffffff;
    border-radius: 4px;
        margin-bottom: 16px;
        padding: 10px 40px;
        
}
.getCpass{
    width: 100%;
    height: 35px;
    padding-left: 12px;
    outline: none;
    border :1px solid #888888;
    border-radius: 28px;
}
.btnCPass{
    background-color:$red;
    color: #ffffff;
    border-radius: 24px;
    width: 100%;
    padding: 4px 0px;
}
@media only screen and (max-width: 786px) {
    *{
        font-size: 16px;
    }
}
@media screen and (max-width: 600px) {
    *{
        font-size: 14px;
    }
    // form checkbox mobile
    .body-form{
        padding: 0 10px;
        .box-userBunzy{
            
            .Bunzy-head{
                .bg-head{
                    background-color: $dashhead;
                    // padding:  6px 4px 4px 8px ;
                    // border-radius: 50%;
                    margin-right: 8px;
                    // display: flex;
                    // align-items: center;
                    .InfoIcon{
                        width: 28px;
                        height: 28px;
                    }
                }
            }
        }
        .form{
            
            padding: 5px 10px;
            .userBunzy{
                .box-border{
                    border :1px solid #888888;
                    border-radius: 28px;
                }
                .input-max{
                    width: 100%;
                    height: 35px;
                    padding-left: 12px;
                    outline: none;
                }
            }
        }
    }
    // .tell{
    // width: 35px;
    // height: 35px;
    // }
    // .Pass{
    //     width:25px;
    //     height: 25px;
        
    // }
}
</style>