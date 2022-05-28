<template>
  <div class="ovf">
    <Toolbar/>
    <div class="lgscreen">
      <v-row>
        <v-col cols="4">
          <Infosidebar></Infosidebar>
        </v-col>
        <v-col cols="8" class="gbg">
          <div class="rule">
              <h1>ຂໍ້ກຳນົດ ແລະ ເງື່ອນໄຂການຂົນສົ່ງ </h1>
              <h3>VI. ມາດຕະຖານການຄິດໄລ່ລາຄາ ແລະ ວັດແທກບໍລິມາດຂອງ
     ສິນຄ້າ.</h3>
     <p>ດ້ານການຄິດໄລ່ລາຄາແມ່ນອີງໃສ່ນ້ຳໜັກໂດຍປະລິມານຕໍ່ກ່ອງພັດສະດຸ
     ຫຼື ອາດຈະມີການຊັ່ງນ້ຳໜັກ, ວັດແທກ ເພື່ອຢືນຢັນການຄິດໄລ່ລາຄາ.</p>
     <p>ກໍລະນີເຄື່ອງມີຂະໜາດທົ່ວໄປໃຫ້ອີງໃສ່ນ້ຳໜັກ ແລະ ບໍລິມາດທີ່ກຳນົດ
     ໄວ້ໃນລາຄາ:</p>
     <p>ຫຼັງຈາກວັດແທກສິນຄ້າຕົວຈິງແລ້ວຕ້ອງທຳການສົມທຽບກັນລະຫວ່າງ
ນ້ຳໜັກ ແລະ ບໍລິມາດຖ້າໂຕໃດຫຼາຍແມ່ນຈະເອົາໂຕນັ້ນມາຄິດໄລ່ລາຄາ.</p>
<h4>ລວງຍາວ + ລວງກວ້າງ + ລວງສູງ = ຂະໜາດລວມຫົວໜ່ວຍເປັນ Cm</h4>
<p>ກໍລະນີເຄື່ອງມີຂະໜາດໃຫຍ່ແຕ່ນ້ຳໜັກເບົາ:</p>
<h4>(ລວງຍາວ x ລວງກວ້າງ x ລວງສູງ)/6000 = ຂະໜາດລວມຫົວໜ່ວຍ
ເປັນ Cm</h4>
              </div>
        </v-col>
      </v-row>
      </div>
      <div class="mbscreen">
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
      </div>
    <Footer/>
  </div>
</template>

<script>
import Toolbar from "../../components/Toolbar.vue";
import Footer from "../../components/Footer.vue";
import HomeView from "../HomeView.vue";
import Infosidebar from "../../components/infosidebar.vue"
import r1C from '../Admin/ReasonChild/r1C.vue'
import r2C from '../Admin/ReasonChild/r2C.vue'
import r3C from '../Admin/ReasonChild/r3C.vue'
import r4C from '../Admin/ReasonChild/r4C.vue'
import r5C from '../Admin/ReasonChild/r5C.vue'
import r6C from '../Admin/ReasonChild/r6C.vue'
export default {
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
components: {
    Toolbar,
    Footer,
    HomeView,
    Infosidebar,
    r1C,
    r2C,
    r3C,
    r4C,
    r5C,
    r6C,
  },
}
</script>

<style lang="scss" scoped>
.rule{
  padding: 20px;
  margin-top: 5%;
}
.gbg{
  background-color: #e5e5e5;
}
.ovf{
  overflow: hidden;
}
@media screen and (max-width: 778px) {
  div.lgscreen {
    display: none;
  }
}
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
@media screen and (min-width: 778px) {
  div.mbscreen {
    display: none;
  }
}
</style>