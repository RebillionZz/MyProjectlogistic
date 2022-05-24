<template>
    <div class="body-form">
        <v-row no-gutters class=" my-5 hide-overflow ">
            <v-flex class="d-flex align-center ">
                <hamburgur ></hamburgur>
                <v-col cols="8"  lg="8" md="8"   class="search-form mr-lg-2 mr-md-3 pa-0 ">
                    <div class="box-userInfo d-none d-lg-block d-md-block">
                        <div class="d-flex align-center info-head">
                            <div class="bg-head"><img src="../../../../assets/Admin/UserInfo/userInfoIcon.svg" alt="UserInfo" class="InfoIcon"></div>
                            <div>ຂໍ້ມູນສ່ວນຕົວ</div>
                        </div>
                    </div>
                </v-col>
                <userAcoin></userAcoin>
            </v-flex>
        </v-row>
        <!-- Avata + heading User Info mobile hide-lg-md -->
        <div class="box-userInfo d-block my-5 d-lg-none d-md-none" >
            <div class="d-flex align-center info-head " >
                <div class="bg-head"><img src="../../../../assets/Admin/UserInfo/userInfoIcon.svg" alt="UserInfo" class="InfoIcon"></div>
                <div>ຂໍ້ມູນສ່ວນຕົວ</div>
            </div>
        </div>
        <form class="form">
            <div class="Avata mb-5">
                <!-- CHange IMG tag and test user IMG -->
                <div class="box-img" @click.prevent="Fileupdate">
                    <div class="img">
                    <img class="userImg" :src="Image" alt="" srcset="">
                    
                </div>
                
                <div class="camera"><img src="../../../../assets/Admin/UserInfo/Camera.svg" alt="Camera" srcset="" class="cameraIcon"></div>
                </div>
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
    </div>
</template>

<script>
import hamburgur from '../../../../components/DashTopview/hamburgur.vue'
import userAcoin from '../../../../components/DashTopview/userAcoin.vue'
export default {
    name:'userinfoc',
    data() {
        return {
            Image:"https://wallpapercave.com/wp/wp2955499.jpg",
            // Image:"data:image/png;base64,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"
        }
    },
    methods:{
        Fileupdate(e){
            // console.log(e)
            const file = e.target.file[0]
            this.Image  = URL.createObjectURL(file)
        }
    },
    components:{
        hamburgur,
        userAcoin,
    },
    
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
                // background-color: #E5E5E5;
                width: 80px;
                height: 80px;
                border-radius: 50%;
                position: relative;
                .userImg{
                    height: 100%;
                    width:100%;
                    object-fit: cover;
                    border-radius: 50%;
                    
                }
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
.box-img{
    cursor: pointer;
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
.home_head{
    width: 40px;
    height: 40px;
    padding:4px;
    border-radius: 50%;
    background: $dashhead;
    .imgH{
        width: 100%;
        height: 100%;
    }
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
    .form{
        background-color: #ffffff;
        width: 100%;
        height: auto;
        padding: 8px 30px;
        border-radius: 4px;
    }
}
@media screen and (max-width: 600px) {
    *{
        font-size: 14px;
    }
    // form checkbox mobile
    .body-form{
    // padding: 40px 50px;
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
                bottom: -4%;
                background: #F7F7F7;
                right: 34%;
                // right: 45%;
                padding: 4px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                .cameraIcon{
                    width: 18px;
                }
            }
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