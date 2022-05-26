<template>
  <div>
    <Toolbar/>
    <div>
      <v-row>
        <v-col cols="4">
           <div class="infosidebar">
            <div>
              <v-list dense>
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
  margin-top: 5%;
}
.gbg{
  background-color: #e5e5e5;
}
</style>