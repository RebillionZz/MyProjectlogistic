<template>
    <div class="dashboard-container-wrap">
        <!-- <UserInfoC></UserInfoC> -->
        <!-- <UserBunzyC></UserBunzyC> -->
        <!-- <ReasonC></ReasonC> -->
        <v-row no-gutters class="hide-overflow  d-flex align-center">
            <!-- <v-flex class="d-flex align-center"> -->
                <hamburgur ></hamburgur>
                <v-col cols="8"  lg="9" md="9" sm="9" xs="8"   class="search-form  pa-0">
                    <label class="for-search" for="searchBar" ><v-img src="../../../assets/Admin/sidebar/toolbar/search.svg" max-height="37" max-width="37"></v-img></label>
                    <input class="input-max" type="text" name="" id="searchBar" placeholder="ໃສ່ລະຫັດ tracking ID" >
                </v-col>
                <userAcoin></userAcoin>
            <!-- </v-flex> -->
        </v-row>
        <!-- <v-img max-width="300px" max-height="300px" :src="('https://media.istockphoto.com/photos/between-worlds-fantasy-concept-picture-id1165403702?k=20&m=1165403702&s=612x612&w=0&h=uhZS2QKm6Vu3IxwWsCiP27mxZg7_AQT_p0UapjTIBvc=')"></v-img> -->
        <!-- <v-img max-width="300px" max-height="300px" :src="(img)"></v-img> -->
    </div>
</template>

<script>

// import UserInfoC from './UserPage/UserInfoC.vue'
// import UserBunzyC from './UserPage/UserBunzyC.vue'
// import ReasonC from '../ReasonC.vue'
import hamburgur from '../../../components/DashTopview/hamburgur.vue'
import userAcoin from '../../../components/DashTopview/userAcoin.vue'
// import Vue from 'vue'



export default {
    name:'myitemgetc',
    data() {
        return {
            lists:[],
            img:'../../../assets/Admin/sidebar/toolbar/search.svg'
        }
    },
    
    methods: {
    
    },
    computed:{
        
        
    }
    ,
    mounted(){
        
    },
    components:{
        // UserInfoC
        // UserBunzyC
        // ReasonC,
        hamburgur,
        userAcoin,
        
    },
    
}
</script>

<style lang="scss" scoped>
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