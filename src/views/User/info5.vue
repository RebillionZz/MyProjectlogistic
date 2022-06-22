<template>
  <div class="ovf">
    <Toolbar/>
    <div class="lgscreen">
      <v-row>
        <v-col cols="3">
          <Infosidebar></Infosidebar>
        </v-col>
        <v-col cols="9" class="gbg">
          <div class="rule">
              <h1>ຂໍ້ກຳນົດ ແລະ ເງື່ອນໄຂການຂົນສົ່ງ </h1>
              <h3>V. ມາດຕະຖານການດຳເນີນງານຂອງພະນັກງານສາຂາທີ່ທຳການ
    ຄັດແຍກພັດສະດຸ</h3>
    <p>ການໃຫ້ຂໍ້ມູນຂອງພັດສະດຸທີ່ຢູ່ໃນສາຂາຕົນໃຫ້ແກ່ໜ່ວຍງານ Call 
     center ຫຼື ໜ່ວຍງານທີ່ກ່ຽວຂ້ອງກໍລະນີມີການສອບຖາມພາຍໃນ
     ກຸ່ມ ຫຼື ປະສານງານສ່ວນຕົວ</p>
     <p>ກວດສອບການຄັດແຍກພັດສະດຸອອກເປັນແຕ່ລະແຂວງ ພ້ອມທັງ
ກວດເບິ່ງເຄື່ອງທີ່ໄດ້ຮັບຈາກລູກຄ້າເຊັ່ນ: ປະເພດສິນຄ້າ, ການຫຸ້ມ
ຫໍ່, ການຂຽນຂໍ້ມູນກ່ອນຈະທຳການຈັດສົ່ງໄປສາຂາປາຍທາງ.</p>
<p>ການປະສານງານກັນໜ່ວຍງານ  Call center ດ້ານການຮັບລາຍ
ການທີ່ຈະອອກໄປຮັບພັດສະດຸ ແລ້ວຕົນຕ້ອງປະສານງານຕໍ່ກັບໜ່ວຍ
ງານ Delivery ໃນສາຂາຕົນເອງ ເພື່ອຈະໄດ້ເກັບກຳ ແລະ ລາຍງານ
ໃຫ້ໜ່ວຍງານທີ່ກ່ຽວຂ້ອງໄດ້.</p>
<p>ການອອກມາຮັບເຄື່ອງທີ່ສູນໃຫຍ່ຄັດແຍກດ້ວຍຕົນເອງພ້ອມທັງທຳການ
Scan ຮັບເຄື່ອງຢູ່ສູນໃຫຍ່ຄັດແຍກໄປພ້ອມເລີຍ ( ສຳຫຼັບສາຂາພາຍ
ໃນນະຄອນຫຼວງ ).</p>
<p>ຄັດແຍກພັດສະດຸໃຫ້ແກ່ໜ່ວຍງານ Delivery ທີ່ຢູ່ໃນສາຂາຕົນຕາມ
ຂອບເຂດຮັບຜີດຊອບ.</p>
<p>ການຄີຂໍ້ມູນຂອງພັດສະດຸທີ່ໄດ້ຮັບຈາກລູກຄ້າລົງໃນລະບົບພາຍໃນມື້ນັ້ນ
ໃຫ້ແລ້ວ.</p>
<p>ກວດຄືນພັດສະດຸທີ່ຄີລົງລະບົບກົງກັບໜ້າບິນທີ່ລູກຄ້າຂຽນລະບຸໄວ້ ຫຼື
ບໍ່ ເຊັ່ນ: ສາຂາປາຍທາງ, ຊື່ຜູ້ຮັບ ແລະ ເບີໂທ, ນ້ຳໜັກ, ຈຳນວນເຄື່ອງ
ຕົວຈິງ, ພ້ອມທັງລາຄາ ຕາມຂໍ້ມູນທີ່ໄດ້ລະບຸໄວ້ເທິງໜ້າບິນ.</p>
<p>ຈັດກຽມພັດສະດຸທີ່ຈະຈັດສົ່ງໄປຕ່າງແຂວງພາຍໃນມື້ສົ່ງມາໃຫ້ສູນໃຫຍ
່ຄັດແຍກ ແລະ ລໍຖ້າຈົນກວ່າສູນໃຫຍ່ຄັດແຍກຈັດເຄື່ອງທີ່ມາຈາກສາຂາ
ຕົນຂຶ້ນລົດຈົນຄົບໝົດແລ້ວຄ່ອຍກັບບ້ານໄດ້ການລໍຖ້າກໍເພື່ອວ່າຫາກພະ
ນັກງານສູນໃຫຍ່ຄັດແຍກກວດພົບເຫັນຂໍ້ຜິດພາດຕົນກໍຈະສາມາດແກ້ໄຂ
ໄດ້ທັນເວລາ.</p>
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
               
                <div class="ar-text pl-2">I. ໝວດທີ 1: ວ່າດ້ວຍຂໍ້ມູນສ່ວນຕົວ </div>
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

                <div class="ar-text pl-2">II. ມາດຖານດ້ານຄວາມປອດໄພຂອງສິນຄ້າ </div>
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
                
                <div class="ar-text pl-2">III. ມາດຕະຖານດ້ານຂະໜາດ ແລະ ນ້ຳໜັກຂອງພັດສະດຸ </div>
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
               
                <div class="ar-text pl-2">IV. ມາດຕະຖານການຄິດໄລ່ລາຄາ ແລະ ວັດແທກບໍລິມາດຂອງສິນຄ້າ </div>
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

                <div class="ar-text pl-2">V. ມາດຕະຖານການດຳເນີນງານຂອງພະນັກງານສາຂາທີ່ທຳ ການຄັດແຍກພັດສະດຸ </div>
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
                
                <div class="ar-text pl-2">VI. ເງື່ອນໄຂມາດຕະຖານການໃຫ້ບໍລິການ ແລະ ການຊົດເຊີຍຄ່າາເສຍຫາຍໃຫ້ແກ່ລູກຄ້າ </div>
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
.lgscreen{
    margin-top: 80px;
}
.mbscreen{
    margin-top: 80px;
}
</style>