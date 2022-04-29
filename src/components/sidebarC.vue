<template>
    <v-app class="bg-grey">
        <v-navigation-drawer app  v-model="drawer">
        <v-list>
                <v-list-item>
                    <v-list-item-title class="d-flex flex-column justify-center pt-3">
                        <v-list-item-title class="logo pl-3 "><img width="100px" src="../assets/Admin/sidebar/HalLogo.png" alt=""></v-list-item-title>
                        <v-list-item-content class="point">HAL logistic</v-list-item-content>
                        <v-btn @click="Pushleft">drawer</v-btn>
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        <!-- end logo -->
        <!-- start list logo not working -->
            
                <sidebarviewC></sidebarviewC>
    </v-navigation-drawer>


    <!-- container Toolbar main -->
    <v-container > <!-- This important for change Search And remove add new Icon this section remove col add to Search Comment -->
        <searchbarC :Sidebarpush='drawer' :Getleft='Pushleft'></searchbarC>
    </v-container>
    <!-- container view -->
    <v-container>
        <!-- {{data_CSearch}} -->
        <router-view></router-view>
    </v-container>
    </v-app>
</template>

<script>
import searchbarC from './searchbarC.vue'
import sidebarviewC from '../views/Admin/sidebarviewC.vue'

export default {
    name:'sidebarC',
    data() {
        return {
            drawer:null,
            hello:'hi',
            TEST:[{id:1,text:'Comple'}],
            
        }
    },
    components:{
        searchbarC,
        sidebarviewC,
    }
    ,
    methods:{
        Pushleft(){
            this.drawer = !this.drawer;
        }
    },
    computed:{
            
    }
}
</script>





<style lang="scss" scoped>
.v-application--is-ltr .v-list-group--no-action > .v-list-group__items > .v-list-item{
    padding-left:24px;
}
.theme--light.v-list-item--active::before{
    opacity: 0;
}
.theme--light.v-list-item--active::before:hover{
    opacity: 0;
}
.theme--light.v-list-item--active:hover::before{
    opacity: 0;

}
.v-list-item--active .v-list-item{
    background: red;
}
.v-application a {
    color: #E21312;
}

// 
.logo{
    cursor: pointer;
}

// class active
.svg_width{
        width: 20px;
        
    }
.clickBR{
    border-right: 4px solid $red;
}
.clickBR-G{
    border-right: 4px solid $red;
}
.bg-grey{
    background: $d-grey !important;
}
.bg-red{
    background-color: $red !important;
}
.color-grey-text{
    color: #888888;
}

// Toolbar for-search

.user-AVA{
    width: 45px;
    height: 45px;
    border-radius: 50%;
}

.toolbar-mb-pd{
    padding-top:6px;
}
.User_Dropdown_Conntent{
    background: #FFFFFF;
}
.TTTT{
    cursor: pointer;
    width: 220px;
    &:hover{
        color: $red;
    }
}
// @media screen and (max-width: 1024px) {
    
// }
@media only screen and (max-width: 768px) {
    *{
        font-size: 16px;
    
}
}
@media screen and (max-width: 600px) {
    
    
}
    
</style>