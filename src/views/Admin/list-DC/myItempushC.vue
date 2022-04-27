<template>
    <div    >
        <v-toolbar  flat class="bg-grey">
            <v-toolbar-items class="d-flex align-center">
                <v-avatar color="red lighten-4" size="45"><v-img src="../../../assets/Admin/PushGET/PushC/pushLogo.svg" max-height="35" max-width="35"></v-img></v-avatar>
            </v-toolbar-items>
            <v-toolbar-title class="d-flex align-center ml-2">ພັດສະດຸທີ່ຂ້ອຍສົ່ງອອກ</v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>
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
// import push1C from './dataC/push1C.vue'
export default {
    name:'myItempushC',
    data() {
        return {
            HeaderPush:[
                {id:1,text:'ບິນສ້າງເອງ',routeA:'/myItempushC'},
                {id:2,text:'ກຳລັງດຳເນີນການ',routeA:'/push2C'},
                {id:3,text:'ຈັດສົ່ງສຳເລັດ',routeA:'/push3C'}
            ]
        };
    },
    components:{
        // push1C
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
</style>