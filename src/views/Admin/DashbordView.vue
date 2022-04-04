<template>
    <v-app>
        <sidebarC></sidebarC>
        <!-- container view -->
        <v-container>
            <router-view></router-view>
        </v-container>
        <footer style="background-color: #E5E5E5;" class="px-16 d-none d-md-flex">
            <v-container class="border-set d-flex py-2 ">
                <v-col cols="6">ຂໍ້ກຳນົດ ແລະ ເງື່ອນໄຂການຂົນສົ່ງ</v-col>
                <!-- <v-spacer></v-spacer> -->
                <v-col cols="6" class="text-right">COPYRIGHT© 2021 BY HAL TECH</v-col>
            </v-container>
        </footer>
    </v-app>
</template>

<script>
// import sidebarC from '../components/sidebarC.vue'
import sidebarC from '@/components/sidebarC.vue'

export default {
    name:'DashbordView',

    components:{
        sidebarC,
    }
}
</script>

<style lang="scss" scoped>
.border-set{
    border-top: 2px solid red;
}
*{
  font-family: 'Phetsarath', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>