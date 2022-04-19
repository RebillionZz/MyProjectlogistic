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
        <form class="form mt-5">
            <div class="userBunzy">
                <!-- head -->
                <div class="text-center my-4">ຂໍ້ມູນບັນຊີ</div>
                <v-divider color="red"></v-divider>
                <!-- <img src="../../../../assets/Admin/UserInfo/Bunzy/call.svg" alt="tell" class=""> -->
                <v-row no-gutters class="mt-3">
                    <v-col cols="10">
                        <div class="d-flex align-center">
                            <v-col cols="1"><div class=""><img src="../../../../assets/Admin/UserInfo/Bunzy/call.svg" alt="tell" class="tell"></div></v-col>
                            <v-col cols="4" md="2" lg="2"><div>ເບີໂທລະສັບ</div></v-col>
                            <v-col cols="10" sm="7"><div>020 22557799</div></v-col>
                            
                            
                        </div>
                    </v-col>
                    <v-col cols="2" class="d-flex align-center justify-end">
                        <div class="edit">ແກ້ໄຂ</div>
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
                        <div class="edit">ແກ້ໄຂ</div>
                    </v-col>
                </v-row>
                <v-divider class="mb-15"></v-divider>
            </div>
        </form>
    </v-container>
</template>

<script>
export default {
    name:'UserInfoC'
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
}
</style>