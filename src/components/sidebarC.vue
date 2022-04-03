<template>
    <section>
        <v-navigation-drawer app v-model="moveham">
            <!-- Logo section -->
            <v-list>
                <v-list-item>
                    <v-list-item-title class="d-flex flex-column justify-center pt-3">
                        <v-list-item-title class="logo-box pl-3 point"><img class="logo" src="../assets/logoHT.png" alt=""></v-list-item-title>
                        <v-list-item-content class="point">HAL logistic</v-list-item-content>
                    </v-list-item-title>
                    
                </v-list-item>
            </v-list>
            <!-- list item section -->
            <v-list>
                <v-list-item 
                v-for="LG1 in listG1" :key="LG1.id" link router :to="listG1.route"
                >
                    <v-list-item-icon>{{LG1.icon}}</v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>
                            {{LG1.text}}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <!-- Group my item -->
                <v-list-group :value="false" no-action>
                    
                    <template v-slot:activator >
                        <v-list-item-icon>IN</v-list-item-icon>
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
                    <v-list-item-icon>{{LG2.icon}}</v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>
                            {{LG2.text}}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                
            </v-list>
        </v-navigation-drawer>
        
    </section>
</template>

<script>
export default {
    name:'barfootHT',
    data() {
        return {
            moveham:null,
            listG1:[
                {id:1,text:'ໜ້າຫຼັກ',icon:'ICON'},
                {id:2,text:'ຝາກເຄື່ອງເອງ',icon:'ICON'},
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

<style  scoped>
</style>