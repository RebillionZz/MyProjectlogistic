<template>
  <div>
    <Toolbar/>
    <div>
      <v-row>
        <v-col cols="4">
           <div class="infosidebar">
            <div>
              <v-list>
                <router-link to="/infohal1"><v-list-item>I. ໝວດທີ 1: ວ່າດ້ວຍຂໍ້ມູນສ່ວນຕົວ</v-list-item></router-link>
                <router-link to="/infohal2"><v-list-item>II. ມາດຖານດ້ານຄວາມປອດໄພຂອງສິນຄ້າ </v-list-item></router-link>
                <router-link to="/infohal3"><v-list-item>III. ມາດຕະຖານດ້ານຂະໜາດ ແລະ ນ້ຳໜັກຂອງພັດສະດຸ</v-list-item></router-link>
                <router-link to="/infohal4"><v-list-item>IV. ມາດຕະຖານການຄິດໄລ່ລາຄາ ແລະ ວັດແທກບໍລິມາດຂອງສິນຄ້າ</v-list-item></router-link>
                <router-link to="/infohal5"><v-list-item>V. ມາດຕະຖານການດຳເນີນງານຂອງພະນັກງານສາຂາທີ່ທຳການຄັດແຍກພັດສະດຸ</v-list-item></router-link>
                <router-link to="/infohal6"><v-list-item>VI. ເງື່ອນໄຂມາດຕະຖານການໃຫ້ບໍລິການ ແລະ ການຊົດເຊີຍຄ່າາເສຍຫາຍໃຫ້ແກ່ລູກຄ້າ</v-list-item></router-link>
              </v-list>
            </div>
          </div>
        </v-col>
        <v-col cols="8" class="gbg">
          <div class="rule">
           <h2>III. ມາດຕະຖານດ້ານຂະໜາດ ແລະ ນ້ຳໜັກຂອງພັດສະດຸ.</h2>
           <p>ດ້ານຂະໜາດສິນຄ້າທີ່ສາມາດຮັບໄດ້: ໜຶ່ງພັດສະດຸຕ້ອງມີນ້ຳໜັ້ກບໍ່
     ເກີນ 50 ກິໂລກຣາມ ແລະ ຂະໜາດລວງຍາວ ບວກ ລວງກວ້າງ ບວກ
     ລວງສູງ ບໍ່ເກີນ 250 ຊັງຕີແມັດ.</p>
     <p>ດ້ານການແຈ້ງຂໍ້ມູນ:​ ສິນຄ້າທີ່ບໍ່ສາມາດຮຽກຮ້ອງຄ່າເສຍຫາຍໄດ້ ຫຼື 
     ສິນຄ້າທີ່ຕ້ອງຊື້ປະກັນໄພ ພະນັກງານຕ້ອງໄດ້ແຈ້ງ ແລະ ອະທິບາຍໃຫ້
     ລູກຄ້າຮັບຮູ້ກ່ອນຝາກສະເໝີ.</p>
              </div>
        </v-col>
      </v-row>
      </div>
    <Footer/>
  </div>
</template>

<script>
import Toolbar from "../../components/Toolbar.vue";
import Footer from "../../components/Footer.vue";
import HomeView from "../HomeView.vue";
import Infosidebar from "../../components/infosidebar.vue"

export default {
  data: () => ({
      selectedItem: 1,
      items: [
        { text: "I. ໝວດທີ 1: ວ່າດ້ວຍຂໍ້ມູນສ່ວນຕົວ " },
      { text: "II. ມາດຖານດ້ານຄວາມປອດໄພຂອງສິນຄ້າ" },
      { text: "III. ມາດຕະຖານດ້ານຂະໜາດ ແລະ ນ້ຳໜັກຂອງພັດສະດຸ" },
      { text: "IV. ມາດຕະຖານການຄິດໄລ່ລາຄາ ແລະ ວັດແທກບໍລິມາດຂອງສິນຄ້າ" },
      { text: "V. ມາດຕະຖານການດຳເນີນງານຂອງພະນັກງານສາຂາທີ່ທຳການຄັດແຍກພັດສະດຸ" },
      { text: "VI. ເງື່ອນໄຂມາດຕະຖານການໃຫ້ບໍລິການ ແລະ ການຊົດເຊີຍຄ່າາເສຍຫາຍໃຫ້ແກ່ລູກຄ້າ" },
      ],
    }),
components: {
    Toolbar,
    Footer,
    HomeView,
    Infosidebar,
  },
}
</script>

<style>
.rule{
  padding: 20px;
  margin-top: 10%;
}
.gbg{
  background-color: #e5e5e5;
}
</style>