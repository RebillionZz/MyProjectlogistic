<template>
  <div>
    <Toolbar />
    <div>
      <div class="homecontent">
        <img
          src="../../assets/Frontend/165338410_766854214262404_8686616552952205961_n 3.svg"
          width="100%"
          height="100%"
        />
        <!-- <v-btn class="telbtn" color="white" rounded href="tel:1419">1419</v-btn>></v-btn>-->
      </div>
      <div class="text">
        <h2 class="hh2">ກວດສອບພັດສະດຸຂອງທ່ານ</h2>
      </div>
      <div class="searching">
        <v-text-field
          v-model="search"
          label="ໃສ່ລະຫັດ tracking ID"
          color="red darken-1"
          rounded
          outlined
        >
          <v-btn color="red darken-1" rounded dark outlined>ຕິດຕາມ</v-btn>
        </v-text-field>
      </div>
      <div class="doublebutton">
        <v-btn color="red darken-1" rounded dark outlined> ຝາກເຄື່ອງ </v-btn>
        <router-link to="/pricecal">        <v-btn color="red darken-1" rounded dark outlined>
          ຄິດໄລ່ຄ່າຂົນສົ່ງ
        </v-btn></router-link>
      </div>
    </div>
    <div class="service1">
      <h2 class="hh2">ບໍລິການຂອງພວກເຮົາ</h2>
      <h2 class="greytext">ພວກເຮົາໃຫ້ຫຼາຍກວ່າຂົນສົ່ງ</h2>
    </div>
    <div class="card6">
      <v-row>
        <v-col cols="6" lg="4" md="4" sm="6" xs="6">
          <v-card class="mx-auto my-12 card3" max-width="220" min-width="174" height="200">
            <img src="../../assets/Frontend/box 1.png" alt="">
            <p>ຝາກເຄື່ອງເອງ</p>
            <img src="../../assets/Frontend/Arrow 5.svg" alt="">
          </v-card>
        </v-col>
        <v-col cols="6" lg="4" md="4" sm="6" xs="6">
          <router-link to="/follow"><v-card class="mx-auto my-12 card3" max-width="220" min-width="174" height="200">
            <img src="../../assets/Frontend/trace 1 (1).png" alt="">
            <p>ພັດສະດຸຂອງຂ້ອຍ</p>
            <img src="../../assets/Frontend/Arrow 5.svg" alt="">
          </v-card></router-link>
        </v-col>
        <v-col cols="6" lg="4" md="4" sm="6" xs="6">
         <router-link to="/pricecal"> <v-card class="mx-auto my-12 card3" max-width="220" min-width="174" height="200">
            <img src="../../assets/Frontend/calculator 1.png" alt="">
            <p>ຄິດໄລ່ຄ່າຂົນສົ່ງ</p>
            <img src="../../assets/Frontend/Arrow 5.svg" alt="">
          </v-card></router-link>
        </v-col>
        <v-col cols="6" lg="4" md="4" sm="6" xs="6">
          <router-link to="/servicearea">          <v-card class="mx-auto my-12 card3" max-width="220" min-width="174" height="200">
            <img src="../../assets/Frontend/fluent_branch-fork-16-regular.png" alt="">
            <p>ຂໍ້ມູນສາຂາ</p>
            <img src="../../assets/Frontend/Arrow 5.svg" alt="">
          </v-card></router-link>
        </v-col>
        <v-col cols="6" lg="4" md="4" sm="6" xs="6">
          <v-card class="mx-auto my-12 card3" max-width="220" min-width="174" height="200">
            <img src="../../assets/Frontend/cod 1 (1).png" alt="">
            <p>COD</p>
            <img src="../../assets/Frontend/Arrow 5.svg" alt="">
          </v-card>
        </v-col>
        <v-col cols="6" lg="4" md="4" sm="6" xs="6">
          <v-card class="mx-auto my-12 card3" max-width="220" min-width="174" height="200">
            <img src="../../assets/Frontend/dashicons_money-alt.png" alt="">
            <p>ຄ່າບໍລິການ</p>
            <img src="../../assets/Frontend/Arrow 5.svg" alt="">
          </v-card>
        </v-col>
      </v-row>
      <div class="moresv"><v-btn color="red darken-1" rounded dark>ບໍລິການເພີ່ມເຕີມ</v-btn></div>
      <v-row>
        <v-col cols="12" lg="6" md="6" sm="12" xs="12" class="svcenter">
          <img src="../../assets/Frontend/210709791_835246240756534_2076683395362452089_n-removebg-preview 1.svg" alt="">
          <p>ຈັດສົ່ງປອດໄພ ວາງໃຈທຸກການຂົນສົ່ງກັບ<br>ຮຸ່ງອາລຸນ ຂົນສົ່ງດ່ວນ<br>ສົ່ງພັດສະດຸພາຍໃນແຂວງ ແລະ ຕ່າງແຂວງ</p>
          <router-link to="/registerhal"><v-btn color="red darken-1" rounded dark>ລົງທະບຽນຕອນນີ້</v-btn></router-link>
        </v-col>
        <v-col cols="12" lg="6" md="6" sm="12" xs="12" class="svcenter">
          <div class="codif">
          <img src="../../assets/Frontend/cod2 1.png" alt="">
          <p>ເພີ່ມຊ່ອງທາງການຊໍາລະເງິນໃຫ້ແກ່ລູກຄ້າ<br>ແລະ ເພີ່ມຍອດຂາຍໃຫ້ທຸກທ່ານດ້ວຍບໍລິການ<br>COD ໂອນເງິນໄວໃນ 01 ມື້</p>
          <router-link to="/codregister"><v-btn color="red darken-1" rounded dark>ສະໝັກ COD</v-btn></router-link>
          </div>
        </v-col>
      </v-row>
      <div class="svcenter">
        <h2 class="hh2">ເຂດບໍລິການ</h2>
        <h2>ທ່ານສາມາດຄົ້ນຫາເຂດບໍລິການໃກ້ບ້ານທ່ານໄດ້</h2>
        <v-row>
          <v-col cols="12" lg="6" md="6" sm="12" xs="12">
            <img src="../../assets/Frontend/243124112_575975943737369_4532728116862306827_n 2.png" alt="">
            <p>ເຮົາມີຫຼາຍກວ່າ 100 ສາຂາ<br>ຄອບຄຸມປະເທດ<br>ແຕ່ເໜືອເຖິງໃຕ້</p>
          </v-col>
          <v-col cols="12" lg="6" md="6" sm="12" xs="12">
          </v-col>
        </v-row>
      </div>
    </div>
    <div class="downloadhal">
      <v-row>
        <v-col cols="12" lg="5" md="5" sm="12" xs="12"
          ><img
            src="../../assets/Frontend/mockup 2.png"
            class="mobile"
            width="100%"
            height="100%"
          />
        </v-col>
        <v-col cols="12" lg="7" md="7" sm="12" xs="12">
          <h3 class="text3">
            ຕິດຕາມພັດສະດຸຂອງທ່ານໄດ້ທຸກທີ່ ທຸກເວລາ <br />
            ພຽງທ່ານໂຫລດແອັບ ຮຸ່ງອາລຸນ ຂົນສົ່ງດ່ວນ
          </h3>
          <p>ທ່ານສາມາດຕິດຕາມພັດສະດຸ ຝາກເຄື່ອງເອງ ເອີ້ນຮັບເຄື່ອງ</p>
          <img src="../../assets/Frontend/hal app 1 (1).png" alt="" />
          <h2> 
            HAL EXPRESS <br />
            ສາມາດດາວໂຫລດໄດ້ທີ່
          </h2>
          <img
            src="../../assets/Frontend/5a902dbf7f96951c82922875 1 (1).png"
            alt=""
          />
          <img src="../../assets/Frontend/5a902db97f96951c82922874 1 (1).png">
        </v-col>
      </v-row>
    </div>
    <Footer />
  </div>
</template>
<script>
import Toolbar from "../../components/Toolbar.vue";
import Footer from "../../components/Footer.vue";
import HomeView from "../HomeView.vue";
export default {
  name: "homeuser",
  components: {
    Toolbar,
    Footer,
    HomeView,
  },
};
</script>
<style scoped>
.telbtn {
  margin-left: 10%;
  margin-top: -18%;
}
.hh2 {
  color: #e21312;
  text-align: center;
}
.doublebutton {
  align-items: center;
  text-align: center;
}
.service1 {
  align-items: center;
  text-align: center;
  padding: 10px;
}
.cardservice {
  align-items: center;
  text-align: center;
}
.singlebutton {
  align-items: center;
  text-align: center;
  border-radius: 20%;
}
.downloadhal {
  background-color: #e21312;
  color: white;
  padding: 20px;
}
.text{
  padding: 5px;
}
.searching{
  padding: 5px;
  padding-left: 20%;
  padding-right: 20%;
}
.card3{
  align-items: center;
  text-align: center;
  padding: auto;
}
.moresv{
  text-align: center;
  align-items: center;
 margin-bottom: 20px;
}
.svcenter{
  text-align: center;
  align-items: center;
}
.codif{
  margin-top: 15%;
}

</style>
