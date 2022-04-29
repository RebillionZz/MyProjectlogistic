<template>
    <v-app>
        <sidebarC></sidebarC>
        <!-- container view -->
        <v-container>
            <router-view></router-view>
        </v-container>
        
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