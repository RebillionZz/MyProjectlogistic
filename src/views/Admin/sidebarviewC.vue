<template>
    <div class="slideBox">
        
        <v-list-item v-for="LG1 in listG1" :key="LG1.id" :to="LG1.route"  class="navslide-none" active-class="clickBR" >
                        <v-col cols="3" class="d-flex align-center justify-center"><img :src="LG1.imgS" class="svg_width1" alt="" srcset=""></v-col>
                        <v-col cols="9">{{LG1.text}}</v-col>
            </v-list-item>
                <!-- Group my item -->
                <v-list-group :value="false" no-action >
                    
                    <template  v-slot:activator >
                        <v-col cols="3" class="d-flex align-center justify-center">
                            <div class="imgGbox">
                                <img src="../../assets/Admin/sidebar/my-item0.svg" class="imgGroup" alt="" srcset="">

                            </div>
                        </v-col>
                        <!-- <v-list-item-icon><img src="../assets/Admin/sidebar/my-item0.svg" class="svg_width" alt="" srcset=""></v-list-item-icon> -->
                        <v-col cols="9" class="d-flex justify-space-between">
                            
                            <div>ພັດສະດຸຂອງຂ້ອຍ</div>
                            <div>ICON</div>
                        </v-col>
                    </template>
                    <v-list-item  v-for="LGI in listG322" :value="true" :key="LGI.id" :to="LGI.route"  active-class="clickBR" class="navslide-none">
                        <v-col cols="3" class="d-flex align-center justify-center"><img :src="LGI.imgS" class="svg_width" alt="" srcset=""></v-col>
                        <v-col cols="9">{{LGI.text}}</v-col>
                    </v-list-item>
                </v-list-group>
                <!-- end group  and start loop list 2-->
                <v-list-item v-for="LG2 in listG2" :key="LG2.id" :to="LG2.route" active-class="clickBR" class="navslide-none">
                    <v-col cols="3" class="d-flex align-center justify-center"><img :src="LG2.imgG2" class="svg_width" alt="" srcset=""></v-col>
                    <v-col cols="9">{{LG2.text}}</v-col>
                </v-list-item>



        
        
    </div>
</template>
<script >
        
export default {
    name:'sidebarviewC',
    data() {
        return {

            listG1:[
                {id:1,text:'ໜ້າຫຼັກ',icon:'ICON',imgS:require('../../assets/Admin/sidebar/home.svg'),route:'/sidebarC',},
                {id:2,text:'ຝາກເຄື່ອງເອງ',icon:'ICON',imgS:require('../../assets/Admin/sidebar/give.svg'),route:'/sendDC',},
            ],
            listG2:[
                {id:3,text:'ຄິດໄລ່ຄ່າຂົນສົ່ງ',icon:'ICON',imgG2:require('../../assets/Admin/sidebar/caculator.svg'),route:'/priceDC'},
                {id:4,text:'COD',icon:'ICON',imgG2:require('../../assets/Admin/sidebar/COD.svg'),route:'/CODDC'},
                {id:5,text:'ຂໍ້ມູນສາຂາ',icon:'ICON',imgG2:require('../../assets/Admin/sidebar/treeData.svg'),route:'/DataDC'},

            ],
            listG322:[
                {id:7,text:'ພັດສະດຸທີ່ຂ້ອຍສົ່ງອອກ',icon:'ICON',imgG2:require('../../assets/Admin/sidebar/caculator.svg'),route:'/myItempushC'},
                {id:6,text:'ພັດສະດຸທີ່ຂ້ອຍສົ່ງເຖິງຂ້ອຍ',icon:'ICON',imgG2:require('../../assets/Admin/sidebar/caculator.svg'),route:'/myItemGetC'},
                
            ],
            // A1:[{id:1,text:'ໜ້າຫຼັກ',icon:'ICON',imgS:require('../../assets/Admin/sidebar/home.svg'),route:'/sidebarC',}],
            // A2:[{id:2,text:'ຝາກເຄື່ອງເອງ',icon:'ICON',imgS:require('../../assets/Admin/sidebar/give.svg'),route:'/sendDC',}],
            // A3:[{id:3,text:'ຄິດໄລ່ຄ່າຂົນສົ່ງ',icon:'ICON',imgG2:require('../../assets/Admin/sidebar/caculator.svg'),route:'/priceDC'}],
            // A4:[{id:4,text:'COD',icon:'ICON',imgG2:require('../../assets/Admin/sidebar/COD.svg'),route:'/CODDC'}],
            // A5:[{id:5,text:'ຂໍ້ມູນສາຂາ',icon:'ICON',imgG2:require('../../assets/Admin/sidebar/treeData.svg'),route:'/DataDC'}],
            // A7:[{id:7,text:'ພັດສະດຸທີ່ຂ້ອຍສົ່ງອອກ',icon:'ICON',imgG2:require('../../assets/Admin/sidebar/caculator.svg'),route:'/myItempushC'}],
            // A6:[{id:6,text:'ພັດສະດຸທີ່ຂ້ອຍສົ່ງເຖິງຂ້ອຍ',icon:'ICON',imgG2:require('../../assets/Admin/sidebar/caculator.svg'),route:'/myItemGetC'}],
        }
    },

    methods:{
        slidec(){
            var maker = document.querySelector('#slideTop');
            var item = document.querySelectorAll('.navslide ');
            function eieiA(e){
                maker.style.top = e.offsetTop+"px";
                maker.style.height = e.offsetHeight+"px";
                // item.style.color = "red";
                
            }
            item.forEach(link =>{
                link.addEventListener('click',(e)=>{
                    eieiA(e.target);
                    
                })
            })
        }
    },
    mounted(){
        this.slidec();
        
    },
    
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
// sssss
.svg_width{
        width: 30px;
        
    }

    
    .svg_width1{
        width: 25px;
        height: 25px;
        
    }
        .svg_width1{
            width: 25px;
            height: 25px;
            
        }
        .svg_width1{
            width: 25px;
            height: 25px;
            
        }
// slide
.slideBox{
    position: relative;
}

.navslide{
    position: relative;
    // height: 40px;
}

#slideTop{
    position: absolute;
    height: 48px;
    width: 4px;
    background-color: $red;
    right: 0px;
    transition: 0.3s;
    border-radius: 4px;
    top: 0px;
}
// .font-AA{
//     font-size: 2em;
// }
.imGbox{
    width: 25px;
    height: 25px;
   

}
 .imgGroup{
        width: 50%;
        height: 50%;
    }
</style>