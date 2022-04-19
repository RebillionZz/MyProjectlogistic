<template>
    <v-container class="body-form">
        <!-- Avata + heading User Info mobile hide-lg-md -->
        <div class="box-userInfo">
            <div class="d-flex align-center info-head">
                <div class="bg-head"><img src="../../../../assets/Admin/UserInfo/userInfoIcon.svg" alt="UserInfo" class="InfoIcon"></div>
                <div>ຂໍ້ມູນສ່ວນຕົວ</div>
            </div>
        </div>
        <form class="form">
            <div class="Avata mb-5">
                <!-- CHange IMG tag and test user IMG -->
                <div class="img"></div>
                <div class="camera"><img src="../../../../assets/Admin/UserInfo/Camera.svg" alt="Camera" srcset="" class="cameraIcon"></div>
</div>

            <div class="userInfo">
                <v-col cols="12" class="mb-2">
                    <label class="pl-3">ຊື່</label>
                    <div class="input-max box-border d-flex align-center pl-4">bebe</div>
                    
                </v-col>
                <v-col cols="12" class="mb-2">
                    <label class="pl-3">ນາມສະກຸນ</label>
                    <div class="input-max box-border d-flex align-center pl-4">soudalat</div>
                    
                </v-col>
                <v-col cols="12" class="mb-2">
                    <label class="pl-3">ແຂວງ</label>
                    <div class="input-max box-border d-flex align-center pl-4">ນະຄອນຫຼວງວຽງຈັນ</div>
                    
                </v-col>
                <v-col cols="12" class="mb-2">
                    <label class="pl-3">ເມືອງ</label>
                    <div class="input-max box-border d-flex align-center pl-4">ໄຊທານີ</div>
                    
                </v-col>
                <v-col cols="12" class="mb-2">
                    <label class="pl-3">ບ້ານ</label>
                    <div class="input-max box-border d-flex align-center pl-4">ດົງໂດກ</div>
                    
                </v-col>
                <v-col cols="12" class="mt-10 bt-box mb-10">
                    <v-btn elevation="0" color="backL" width="100%" class="bg-red white--text btn-sumits">ບັນທືກ</v-btn>
                </v-col>
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
.body-form{
    // padding: 40px 50px;
    .box-userInfo{
        margin-bottom: 16px;
        .info-head{
            .bg-head{
                background-color: $dashhead;
                padding: 6px 8px ;
                border-radius: 50%;
                margin-right: 8px;
                .InfoIcon{
                    width: 30px;
                }
            }
            // Icon Info
            
        }
    }
    .form{
        background-color: #ffffff;
        width: 100%;
        height: auto;
        padding: 8px 70px;
        border-radius: 4px;
        .Avata{
            position: relative;
            display: flex;
            justify-content: center;
            .img{
                background-color: #E5E5E5;
                width: 80px;
                height: 80px;
                border-radius: 50%;
                position: relative;
            }
            .camera{
                position: absolute;
                bottom: 0;
                background: #F7F7F7;
                // right: 35%;
                right: 45%;
                padding: 6px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                .cameraIcon{
                    width: 20px;
                }
            }

        }
        .userInfo{
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
            .bt-box{
                .btn-sumits{
                    border-radius: 28px;
                }
            }
        }
    }
}
@media only screen and (max-width: 786px) {
    *{
        font-size: 16px;
    }
    .body-form{
    
        .form{
            .Avata{
                .camera{
                    right: 42%;
                    .cameraIcon{
                        width: 20px;
                    }
                }
            }
        }
    }
}
@media screen and (max-width: 600px) {
    *{
        font-size: 14px;
    }
    // form checkbox mobile
    .body-form{
    padding: 40px 50px;
    .form{
        background-color: #ffffff;
        width: 100%;
        height: auto;
        padding: 8px 30px;
        border-radius: 4px;
        .Avata{
            .img{
                background-color: #E5E5E5;
                width: 70px;
                height: 70px;
                border-radius: 50%;
            }
            .camera{
                position: absolute;
                bottom: 0;
                background: #F7F7F7;
                right: 35%;
                // right: 45%;
                padding: 6px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                .cameraIcon{
                    width: 20px;
                }
            }
        }
    }
}
}
</style>