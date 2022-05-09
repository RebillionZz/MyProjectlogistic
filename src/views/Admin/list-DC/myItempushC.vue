<template>
    <div>
        <v-row no-gutters>
            <v-flex class="d-flex align-center">
                <hamburgur ></hamburgur>
                <v-col cols="8" sm="9" lg="9" md="9" xs="8"   class="search-form mr-lg-2 mr-md-3 pa-0">
                    <label class="for-search" for="searchBar" ><v-img src="../../../assets/Admin/sidebar/toolbar/search.svg" max-height="37" max-width="37"></v-img></label>
                    <input class="input-max" type="text" name="" id="searchBar" placeholder="ໃສ່ລະຫັດ tracking ID" >
                </v-col>
                <userAcoin></userAcoin>
            </v-flex>
        </v-row>
        <div class="d-flex bg-grey">
            <div class="d-flex align-center">
                <v-avatar color="red lighten-4" size="45"><v-img src="../../../assets/Admin/PushGET/PushC/pushLogo.svg" max-height="35" max-width="35"></v-img></v-avatar>
            </div>
            <div class="d-flex align-center ml-2">ພັດສະດຸທີ່ຂ້ອຍສົ່ງອອກ</div>
        </div>
            


            <v-list class="d-flex line_D" dense fl>
                <v-list-item link   v-for="listH in HeaderPush" :key="listH.id" :to="listH.routeA"  class="text-center d-flex align-center justify-center L-item" active-class="T1"> 
                    <div>{{listH.text}}</div>
                </v-list-item>
            </v-list>
            <router-view></router-view>
            <!-- <push1C></push1C> -->
    </div   >
</template>
<script>
import hamburgur from '../../../components/DashTopview/hamburgur.vue'
import userAcoin from '../../../components/DashTopview/userAcoin.vue'
// import userAcoin from '../../../components/DashTopview/userAcoin.vue'
// import push1C from './dataC/push1C.vue'
export default {
    name:'myitempushc',
    data() {
        return {
        //     tab: null,
        // text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        //     tabs: null,
            HeaderPush:[
                {id:1,text:'ບິນສ້າງເອງ',routeA:'/myitempushc/push1c'},
                {id:2,text:'ກຳລັງດຳເນີນການ',routeA:'/myitempushc/push2c'},
                {id:3,text:'ຈັດສົ່ງສຳເລັດ',routeA:'/myitempushc/push3c'}
            ],
            
        };
    },
    components:{
        // push1C
        hamburgur,
        userAcoin
    }
}
</script>

<style lang="scss" scoped>
.line_D{
    background-color: #EEEEEE;
    border-radius: 34px;
    
}

.T1{
    background: $red !important;
    color: #FFFFFF;
    border-radius:34px;
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
.v-list{
    padding: 0 0 ;
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
        font-size: 14px;
    }
    // form checkbox mobile
    
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