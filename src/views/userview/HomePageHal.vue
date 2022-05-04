<template>
  <div>
    <Toolbar />
    <div>
      <div class="homecontent">
        <img
          src="../../assets/Frontend/homepage/165338410_766854214262404_8686616552952205961_n 3.svg"
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
        <v-btn color="red darken-1" rounded dark outlined>
          ຄິດໄລ່ຄ່າຂົນສົ່ງ
        </v-btn>
      </div>
    </div>
    <div class="service1">
      <h2 class="hh2">ບໍລິການຂອງພວກເຮົາ</h2>
      <h2 class="greytext">ພວກເຮົາໃຫ້ຫຼາຍກວ່າຂົນສົ່ງ</h2>
    </div>
    <div class="card6">
      <v-row>
        <v-col cols="4" class="sm-6 xs-6">
          <v-card class="mx-auto my-12 card3" max-width="330" min-height="286">
            <img src="../../assets/Frontend/homepage/box 1.png" alt="">
            <p>ຝາກເຄື່ອງເອງ</p>
            <img src="../../assets/Frontend/homepage/Arrow 5.svg" alt="">
          </v-card>
        </v-col>
        <v-col cols="4" class="sm-6 xs-6">
          <v-card class="mx-auto my-12 card3" max-width="330">
            <img src="../../assets/Frontend/homepage/trace 1 (1).png" alt="">
            <p>ພັດສະດຸຂອງຂ້ອຍ</p>
            <img src="../../assets/Frontend/homepage/Arrow 5.svg" alt="">
          </v-card>
        </v-col>
        <v-col cols="4" class="sm-6 xs-6">
          <v-card class="mx-auto my-12 card3" max-width="330">
            <img src="../../assets/Frontend/homepage/calculator 1.png" alt="">
            <p>ຄິດໄລ່ຄ່າຂົນສົ່ງ</p>
            <img src="../../assets/Frontend/homepage/Arrow 5.svg" alt="">
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4" class="sm-6 xs-6">
          <v-card class="mx-auto my-12 card3" max-width="330">
            <img src="../../assets/Frontend/homepage/fluent_branch-fork-16-regular.png" alt="">
            <p>ຂໍ້ມູນສາຂາ</p>
            <img src="../../assets/Frontend/homepage/Arrow 5.svg" alt="">
          </v-card>
        </v-col>
        <v-col cols="4" class="sm-6 xs-6">
          <v-card class="mx-auto my-12 card3" max-width="330">
            <img src="../../assets/Frontend/homepage/cod 1 (1).png" alt="">
            <p>COD</p>
            <img src="../../assets/Frontend/homepage/Arrow 5.svg" alt="">
          </v-card>
        </v-col>
        <v-col cols="4" class="sm-6 xs-6">
          <v-card class="mx-auto my-12 card3" max-width="330">
            <img src="../../assets/Frontend/homepage/dashicons_money-alt.png" alt="">
            <p>ຄ່າບໍລິການ</p>
            <img src="../../assets/Frontend/homepage/Arrow 5.svg" alt="">
          </v-card>
        </v-col>
      </v-row>
      <div class="moresv"><v-btn color="red darken-1" rounded dark>ບໍລິການເພີ່ມເຕີມ</v-btn></div>
    </div>
    <div class="downloadhal">
      <v-row>
        <v-col cols="5"
          ><img
            src="../../assets/Frontend/homepage/mockup 2.svg"
            class="mobile"
            width="100%"
            height="100%"
          />
        </v-col>
        <v-col cols="7">
          <h3 class="text3">
            ຕິດຕາມພັດສະດຸຂອງທ່ານໄດ້ທຸກທີ່ ທຸກເວລາ <br />
            ພຽງທ່ານໂຫລດແອັບ ຮຸ່ງອາລຸນ ຂົນສົ່ງດ່ວນ
          </h3>
          <p>ທ່ານສາມາດຕິດຕາມພັດສະດຸ ຝາກເຄື່ອງເອງ ເອີ້ນຮັບເຄື່ອງ</p>
          <img src="../../assets/Frontend/homepage/hal app 1.svg" alt="" />
          <h2>
            HAL EXPRESS <br />
            ສາມາດດາວໂຫລດໄດ້ທີ່
          </h2>
          <img
            src="../../assets/Frontend/homepage/5a902dbf7f96951c82922875 1.svg"
            alt=""
          />
          <img src="../../assets/Frontend/homepage/5a902db97f96951c82922874 1.svg">
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
</style>
