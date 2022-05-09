<template>
    <div>
        <!-- <UserInfoC></UserInfoC> -->
        <!-- <UserBunzyC></UserBunzyC> -->
        <!-- <ReasonC></ReasonC> -->
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
        <!-- <div v-for="map in maps" :key="map.id" class="d-flex">
            <v-col cols="3">{{map.id}}</v-col>
            <v-col cols="6">{{map.name}}</v-col>
            <v-col cols="3">{{map.prefix}}</v-col>
            
        </div> -->
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
            lists:[]
        }
    },
    methods: {
    },
    computed:{
        maps(){
            return this.$store.state.mapState
        }
    }
    ,
    mounted(){
        this.$store.dispatch("mapAction");
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