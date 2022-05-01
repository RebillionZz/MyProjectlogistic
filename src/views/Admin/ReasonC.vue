<template>
    <v-container>
        <h3>ຂໍ້ກຳນົດ ແລະ ເງື່ອນໄຂການຂົນສົ່ງ </h3>
        <!-- Box1 -->
        <div class="mt-3">
            <v-col cols="12" class="d-flex ar-ar" @click="box1 = !box1; ">
                <div class="ar-box "><img class="ar-item" :class="{'ar-rotate': box1}" src="../../assets/Admin/ReasonC/ARR-right.svg" alt="" srcset=""></div>
                <div class="ar-text pl-2">ໝວດທີ 1: ວ່າດ້ວຍຂໍ້ມູນສ່ວນຕົວ </div>
            </v-col>
            <transition name="fade">
                <div class="pl-8 " v-if="box1">
                    <r1C></r1C>
                </div>
            </transition>
        </div>
        <!-- Box2 -->
        <div class="mt-3">
            <v-col cols="12" class="d-flex ar-ar" @click="box2 = !box2; ">
                <div class="ar-box "><img class="ar-item" :class="{'ar-rotate': box2}" src="../../assets/Admin/ReasonC/ARR-right.svg" alt="" srcset=""></div>
                <div class="ar-text pl-2">ມາດຖານດ້ານຄວາມປອດໄພຂອງສິນຄ້າ </div>
            </v-col>
            <transition name="fade">
                <div class="pl-8 " v-if="box2">
                    <r2C></r2C>
                </div>
            </transition>
        </div>
        <!-- Box3 -->
        <div class="mt-3">
            <v-col cols="12" class="d-flex ar-ar" @click="box3 = !box3; ">
                <div class="ar-box "><img class="ar-item" :class="{'ar-rotate': box3}" src="../../assets/Admin/ReasonC/ARR-right.svg" alt="" srcset=""></div>
                <div class="ar-text pl-2">ມາດຕະຖານດ້ານຂະໜາດ ແລະ ນ້ຳໜັກຂອງພັດສະດຸ </div>
            </v-col>
            <transition name="fade">
                <div class="pl-8 " v-if="box3">
                    <r3C></r3C>
                </div>
            </transition>
        </div>
        <!-- Box4 -->
        <div class="mt-3">
            <v-col cols="12" class="d-flex ar-ar" @click="box4 = !box4; ">
                <div class="ar-box "><img class="ar-item" :class="{'ar-rotate': box4}" src="../../assets/Admin/ReasonC/ARR-right.svg" alt="" srcset=""></div>
                <div class="ar-text pl-2">ມາດຕະຖານການຄິດໄລ່ລາຄາ ແລະ ວັດແທກບໍລິມາດຂອງສິນຄ້າ </div>
            </v-col>
            <transition name="fade">
                <div class="pl-8 " v-if="box4">
                    <r4C></r4C>
                </div>
            </transition>
        </div>
        <!-- Box5 -->
        <div class="mt-3">
            <v-col cols="12" class="d-flex ar-ar" @click="box5 = !box5; ">
                <div class="ar-box "><img class="ar-item" :class="{'ar-rotate': box5}" src="../../assets/Admin/ReasonC/ARR-right.svg" alt="" srcset=""></div>
                <div class="ar-text pl-2">ມາດຕະຖານການດຳເນີນງານຂອງພະນັກງານສາຂາທີ່ທຳ ການຄັດແຍກພັດສະດຸ </div>
            </v-col>
            <transition name="fade">
                <div class="pl-8 " v-if="box5">
                    <r5C></r5C>
                </div>
            </transition>
        </div>
        <!-- Box6 -->
        <div class="mt-3">
            <v-col cols="12" class="d-flex ar-ar" @click="box6 = !box6; ">
                <div class="ar-box "><img class="ar-item" :class="{'ar-rotate': box6}" src="../../assets/Admin/ReasonC/ARR-right.svg" alt="" srcset=""></div>
                <div class="ar-text pl-2">ເງື່ອນໄຂມາດຕະຖານການໃຫ້ບໍລິການ ແລະ ການຊົດເຊີຍຄ່າາເສຍຫາຍໃຫ້ແກ່ລູກຄ້າ </div>
            </v-col>
            <transition name="fade">
                <div class="pl-8 " v-if="box6">
                    <r6C></r6C>
                </div>
            </transition>
        </div>
    </v-container>
</template>

<script>
// import { component } from 'vue/types/umd'
import r1C from './ReasonChild/r1C.vue'
import r2C from './ReasonChild/r2C.vue'
import r3C from './ReasonChild/r3C.vue'
import r4C from './ReasonChild/r4C.vue'
import r5C from './ReasonChild/r5C.vue'
import r6C from './ReasonChild/r6C.vue'
export default {
    name:'reasonc',
    data() {
        return {
            box1:false,
            box2:false,
            box3:false,
            box4:false,
            box5:false,
            box6:false,
            
        }
    },
    // methods:{
    //     // rotateArrow:function(){
    //     //         this.rotateArrow = true;
    //     // }
    // },
    components:{
        r1C,
        r2C,
        r3C,
        r4C,
        r5C,
        r6C,
    }
}
</script>

<style lang="scss" scoped>
.ar-ar:hover{
    cursor: pointer;
    transition: all .3s ease-in-out;
}
.ar-box{
    width: 25px;
    height: 25px;
    background: $red;
    border-radius: 50%;
    padding: 6.5px;
    display: flex;
    align-items: center;
    
    .ar-item{
        width:100%;
        height: 100%;
        
        transition: .3s;
    }
}
.ar-text{
    color: $red;
}
.ar-rotate{
    transform: rotate(90deg);
}
// Fade transition
.fade-enter-active, .fade-leave-active{
    transition: opacity .3s ease-in-out;
    // transform: scaleY(0%);
}
.fade-enter, .fade-leave-to{
    opacity: 0;
    // transform: scaleY(-100%);
}
</style>