<template>
  <div>
    <Toolbar />
    <div class="loginpage">
      <v-row>
        <v-col cols="12" lg="5" md="5" sm="12">
          <div class="welcum">
            <h2>ຍິນດີຕ້ອນຮັບ</h2>
            <p class="linktoregis">
              ສະໝັກ COD Cash on Delivery<br />
              ເພື່ອໃຊ້ບໍລິການເກັບເງິນປາຍທາງ <br />ເພື່ອເພີ່ມຊ່ອງທາງການຊຳລະເງິນ
              <br />ເພີ່ມຍອດຂາຍໃຫ້ແກ່ທ່ານ
            </p>
          </div>
        </v-col>
        <v-col cols="12" lg="7" md="7" sm="12">
          <div class="formlogin">
            <form action="">
              <div class="textlogin">
                <h2>ສະໝັກ COD</h2>
                <h4>ເພື່ອໃຊ້ບໍລິການເກັບເງິນປາຍທາງ</h4>
              </div>
              <div class="formlogin">
               <v-row> <h4>ຊື່ທະນາຄານ</h4> </v-row>
                <v-row>
                  <v-col cols="12" class="d-flex">
                    <v-select
                      label="ທະນາຄານ BCEL"
                      rounded
                      dense
                      outlined
                    ></v-select>
                  </v-col>
                  <v-row><h4>ຊື່ບັນຊີທະນາຄານ</h4></v-row>
                  <v-row>
                  <v-col cols="12" class="d-flex">
                    <v-text-field
                      label="ຕ້ອງເປັນພາສາອັງກິິດ ຊື່ ແລະ ນາມສະກຸນ"
                      dense
                      rounded
                      outlined
                    ></v-text-field>
                  </v-col>
                  </v-row>
                  <v-col cols="12" class="d-flex">
                    <v-row><p>ເລກບັນຊີທະນາຄານ</p></v-row>
                    <v-text-field rounded outlined></v-text-field>
                  </v-col>
                  <v-col cols="12" class="d-flex">
                    <v-text-field
                      label=" ເລືອກບັດປະຈຳຕົວ/ ສຳມະໂນຄົວ / ໜັງສືຜ່ານແດນ"
                      dense
                      rounded
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" class="d-flex">
                   <v-row> <p>ແຂວງ</p></v-row>
                    <v-select
                      label="ເລືອກແຂວງ"
                      dense
                      rounded
                      outlined
                    ></v-select>
                  </v-col>
                  <v-col cols="12" class="d-flex">
                    <v-row><p>ເມືອງ</p></v-row>
                    <v-select
                      label="ເລືອກເມືອງ"
                      dense
                      rounded
                      outlined
                    ></v-select>
                  </v-col>
                  <v-col cols="12" class="d-flex">
                    <v-row><p>ບ້ານ</p></v-row>
                    <v-text-field
                      label="ບ້ານຢູ່ປັດຈຸບັນ"
                      dense
                      rounded
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" class="d-flex">
                    <v-btn
                      color="red darken-1"
                      rounded
                      dark
                      class="col-12 sm-12"
                      >ລົງທະບຽນ</v-btn
                    >
                  </v-col>
                </v-row>
              </div>
            </form>
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="claim">
      <h2 class="redtext">ເປັນຫຍັງຕ້ອງສະໝັກ COD</h2>
      <v-row>
        <v-col cols="12" lg="6" md="6" sm="12" xs="12">
          <img src="../../assets/Frontend/cod 1 (2).png" alt="" />
          <h4>ບໍລິການເກັບສິນຄ້າປາຍທາງ</h4>
          <p>
            Lorem ipsum dolor sit<br />
            amet, consectetur<br />
            adipiscing elit
          </p>
        </v-col>
        <v-col cols="12" lg="6" md="6" sm="12" xs="12">
          <img
            src="../../assets/Frontend/fa-solid_money-bill-wave.png"
            alt=""
          />]
          <h4>ທາງເລືອກໃນການຊໍາລະເງິນ</h4>
          <p>
            Lorem ipsum dolor sit<br />
            amet, consectetur<br />
            adipiscing elit
          </p>
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
  name: "codregister",
  components: {
    Toolbar,
    Footer,
    HomeView,
  },
};
</script>

<style>
.codregis {
  background-color: #e21312;
  align-items: center;
}
.whitetext {
  color: white;
}
.formcod {
  background-color: white;
  color: black;
  text-align: center;
  border-radius: 10px;
}
.claim {
  text-align: center;
  align-items: center;
}
.redtext {
  color: #e21312;
}
</style>
