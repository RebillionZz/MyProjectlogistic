<template>
  <div>
    <Toolbar />
    <div class="codregis">
      <v-row>
        <v-col cols="5" sm="5">
          <h2 class="whitetext">ຍິນດີຕ້ອນຮັບ</h2>
          <p class="whitetext">
            ສະໝັກ COD Cash on Delivery<br />
            ເພື່ອໃຊ້ບໍລິການເກັບເງິນປາຍທາງ<br />ເພື່ອເພີ່ມຊ່ອງທາງການຊຳລະເງິນ<br />ເພີ່ມຍອດຂາຍໃຫ້ແກ່ທ່ານ
          </p>
        </v-col>
        <v-col cols="7" sm="7">
          <div class="formcod">
            <form action="">
              <div class="codtext">
                <h2>ສະໝັກ COD</h2>
                <P>ເພື່ອໃຊ້ບໍລິການເກັບເງິນປາຍທາງ</P>
              </div>
              <v-row>
                <v-col cols="10" class="d-flex">
                  <p>ຊື່ທະນາຄານ</p>
                  <v-select
                    label="ທະນາຄານ BCEL"
                    rounded
                    dense
                    outlined
                  ></v-select>
                </v-col>
                <v-col cols="10" class="d-flex">
                  <p>ຊື່ບັນຊີທະນາຄານ</p>
                  <v-text-field
                    label="ຕ້ອງເປັນພາສາອັງກິິດ ຊື່ ແລະ ນາມສະກຸນ"
                    dense
                    rounded
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="10" class="d-flex">
                  <p>ເລກບັນຊີທະນາຄານ</p>
                  <v-text-field rounded outlined></v-text-field>
                </v-col>
                <v-col cols="10" class="d-flex">
                  <v-text-field
                    label=" ເລືອກບັດປະຈຳຕົວ/ ສຳມະໂນຄົວ / ໜັງສືຜ່ານແດນ"
                    dense
                    rounded
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="10" class="d-flex">
                  <p>ແຂວງ</p>
                  <v-select label="ເລືອກແຂວງ" dense rounded outlined></v-select>
                </v-col>
                <v-col cols="10" class="d-flex">
                  <p>ເມືອງ</p>
                  <v-select
                    label="ເລືອກເມືອງ"
                    dense
                    rounded
                    outlined
                  ></v-select>
                </v-col>
                <v-col cols="10" class="d-flex">
                  <p>ບ້ານ</p>
                  <v-text-field
                    label="ບ້ານຢູ່ປັດຈຸບັນ"
                    dense
                    rounded
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="10" class="d-flex">
                  <v-btn color="red darken-1" rounded dark class="col-10 sm-10"
                    >ລົງທະບຽນ</v-btn
                  >
                </v-col>
              </v-row>
            </form>
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="claim">
        <h2 class="redtext">ເປັນຫຍັງຕ້ອງສະໝັກ COD</h2>
        <v-row>
            <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                <img src="../../assets/Frontend/service/cod 1 (2).png" alt="">
                <h4>ບໍລິການເກັບສິນຄ້າປາຍທາງ</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </v-col>
                        <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                <img src="../../assets/Frontend/service/fa-solid_money-bill-wave.png" alt="">]
                <h4>ທາງເລືອກໃນການຊໍາລະເງິນ</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
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
.claim{
    text-align: center;
    align-items: center;
}
.redtext{
    color: #e21312;
}
</style>
