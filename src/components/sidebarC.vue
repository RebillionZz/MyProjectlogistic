<template>
    <v-app style="background-color: #E5E5E5;">
        <v-navigation-drawer app >
        <v-list>
                <v-list-item>
                    <v-list-item-title class="d-flex flex-column justify-center pt-3">
                        <v-list-item-title class="logo-box pl-3 point"><img width="100px" src="../assets/Admin/sidebar/HalLogo.png" alt=""></v-list-item-title>
                        <v-list-item-content class="point">HAL logistic</v-list-item-content>
                    </v-list-item-title>
                    
                </v-list-item>
            </v-list>
        <!-- end logo -->
        <!-- start list logo not working -->
        <v-list-item 
                v-for="LG1 in listG1" :key="LG1.id" link router :to="listG1.route"
                >
                    <v-list-item-icon><img src="../assets/Admin/sidebar/home.svg" class="svg_width" alt="" srcset=""></v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>
                            {{LG1.text}}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <!-- Group my item -->
                <v-list-group :value="false" no-action>
                    
                    <template v-slot:activator >
                        <v-list-item-icon><img src="../assets/Admin/sidebar/home.svg" class="svg_width" alt="" srcset=""></v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>ພັດສະດຸຂອງຂ້ອຍ</v-list-item-title>
                        </v-list-item-content>
                    </template>
                    <v-list-item :value="true"
                        no-action
                    >
                        
                        <v-list-item-content>
                            <v-list-item-title>ພັດສະດຸທີ່ຂ້ອຍສົ່ງອອກ</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item :value="true"
                        
                    >
                        <v-list-item-content>
                            <v-list-item-title>ພັດສະດຸທີ່ສົ່ງເຖິງຂ້ອຍ</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-group>
                <!-- end group  and start loop list 2-->
                <v-list-item 
                v-for="LG2 in listG2" :key="LG2.id" link
                >
                    <v-list-item-icon><img src="../assets/Admin/sidebar/home.svg" class="svg_width" alt="" srcset=""></v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>
                            {{LG2.text}}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
    </v-navigation-drawer>
    <!-- container -->
    <v-container >
        <v-toolbar flat class="" style="background-color: #E5E5E5;">
        <!-- search -->
        <h1>THis is tool bar</h1>
        </v-toolbar>
    </v-container>
    <v-container>
        <router-view></router-view>
    </v-container>
    </v-app>
</template>

<script>
export default {
    name:'sidebarC',
    data() {
        return {
            imgS1:'../assets/Admin/sidebar/home.svg',
            listG1:[
                {id:1,text:'ໜ້າຫຼັກ',icon:'ICON',imgS:'../assets/Admin/sidebar/home.svg'},
                {id:2,text:'ຝາກເຄື່ອງເອງ',icon:'ICON',imgS:'../assets/Admin/sidebar/home.svg'},
            ],
            listG2:[
                {id:1,text:'ຄິດໄລ່ຄ່າຂົນສົ່ງ',icon:'ICON'},
                {id:2,text:'COD',icon:'ICON'},
                {id:3,text:'ຂໍ້ມູນສາຂາ',icon:'ICON'},
            ]
        }
    },
}
</script>
<style scoped>
    .svg_width{
        width: 20px;
        
    }
</style>
<style lang="sass">

</style>