<template>
  <div class="ovf">
    <Toolbar />
    <div class="loginpage">
      <v-row>
        <v-col cols="12" lg="5" md="5" sm="12">
          <div class="welcum">
          <h2>ຍິນດີຕ້ອນຮັບ</h2>
          <p class="linktoregis">
            ສະໝັກ COD Cash on Delivery<br>
ເພື່ອໃຊ້ບໍລິການເກັບເງິນປາຍທາງ <br>ເພື່ອເພີ່ມຊ່ອງທາງການຊຳລະເງິນ<br> ເພີ່ມຍອດຂາຍໃຫ້ແກ່ທ່ານ
          </p>
          </div>
        </v-col>
        <v-col cols="12" lg="7" md="7" sm="12">
          <div class="formlogin">
            <form action="">
              <div class="textlogin">
                <h2 class="hline">ສະໝັກ COD</h2>
                <h4>ເພື່ອໃຊ້ບໍລິການເກັບເງິນປາຍທາງ </h4>
              </div>
              <div class="formlogin">
                                                  <h4>ຊື່ທະນາຄານ</h4>
                  <v-row>
                      <v-col cols="12" sm="12">
                          <v-select
                          :item="items"
                          label="ທະນາຄານ BCEL"
                          dense
                          color="red darken-1"
                          outlined
                          rounded>
                          </v-select>
                      </v-col>
                  </v-row>
                                  <h4>ຊື່ບັນຊີທະນາຄານ</h4>
                  <v-row>
                      <v-col cols="12" sm="12">
                          <v-text-field
                          :item="items"
                          label="ຕ້ອງເປັນພາສາອັງກິດ ຊື່ ແລະ ນາມສະກຸນ"
                          dense
                          color="red darken-1"
                          outlined
                          rounded>
                          </v-text-field>
                      </v-col>
                  </v-row>
                  
                    <div class="d-flex itemSelect mb-4 align-center">
                                    <!--  -->
                                    <v-col cols="4" class="d-flex align-center justify-center pa-0 ">
                                        <div class=" ">ເລກບັນຊີທະນາຄານ</div>
                                    </v-col>
                                    <v-col cols="8" class="d-flex">
                                        <!-- 4 md lg// 6 xs -->
                                        <v-col cols="6" md="4" lg="4" xs="6" class="line-leftR pa-0">
                                            <div class="d-flex align-center line-left pl-3">
                                                <input type="radio" id="itemGeneralID" name="itemSelect" value="1">
                                                <label for="itemGeneralID" class="pl-1">13 ຫຼັກ</label>
                                            </div>
                                        </v-col>
                                        <!-- 8 md lg 6 xs -->
                                        <v-col cols="8" xs="6" md="8" lg="8" class=" pa-0">
                                            <div class="d-flex align-center">
                                                <input type="radio" id="itemDocumentID" name="itemSelect" value="2">
                                                <label for="itemDocumentID" class="pl-1">18 ຫຼັກ</label>
                                            </div>
                                        </v-col>
                                    </v-col>
                                </div>
                  <v-row>
                      <v-col cols="12" sm="12">
                          <v-text-field
                          :item="items"
                          label=""
                          dense
                          color="red darken-1"
                          outlined
                          rounded>
                          </v-text-field>
                      </v-col>
                  </v-row>
                  <div class="d-flex itemSelect mb-4 align-center">
                                    <!--  -->
                                        <v-col cols="4" xs="4" md="4" lg="4" class=" pa-0">
                                            <div class="d-flex align-center">
                                                <input type="radio" id="itemDocumentID" name="itemSelect" value="2">
                                                <label for="itemDocumentID" class="pl-1">ບັດປະຈຳຕົວ</label>
                                            </div>
                                        </v-col>
                                    <v-col cols="12" class="d-flex">
                                        <!-- 4 md lg// 6 xs -->
                                        <v-col cols="4" md="4" lg="4" xs="4" class="line-leftR pa-0">
                                            <div class="d-flex align-center line-left pl-3">
                                                <input type="radio" id="itemGeneralID" name="itemSelect" value="1">
                                                <label for="itemGeneralID" class="pl-1">ສຳມະໂນຄົວ</label>
                                            </div>
                                        </v-col>
                                        <!-- 8 md lg 6 xs -->
                                        <v-col cols="4" xs="4" md="4" lg="4" class=" pa-0">
                                            <div class="d-flex align-center">
                                                <input type="radio" id="itemDocumentID" name="itemSelect" value="2">
                                                <label for="itemDocumentID" class="pl-1">ໜັງສືຜ່ານແດນ</label>
                                            </div>
                                        </v-col>
                                        
                                    </v-col>
                                </div>
                  <v-row>
<v-col cols="12" sm="12">
                          <v-text-field
                          :item="items"
                          label=" ເລືອກບັດປະຈຳຕົວ/ ສຳມະໂນຄົວ / ໜັງສືຜ່ານແດນ"
                          dense
                          color="red darken-1"
                          outlined
                          rounded>
                          </v-text-field>
                      </v-col>
                  </v-row>
                  <h4>ແຂວງ</h4>
                  <v-row>
                      <v-col cols="12" sm="12">
                          <v-select
                          :item="items"
                          label="ເລືອກແຂວງ"
                          dense
                          color="red darken-1"
                          outlined
                          rounded>
                          </v-select>
                      </v-col>
                  </v-row>
                  <h4>ເມືອງ</h4>
                  <v-row>
                      <v-col cols="12" sm="12">
                          <v-select
                          :item="items"
                          label="ເລືອກເມືອງ"
                          dense
                          color="red darken-1"
                          outlined
                          rounded>
                          </v-select>
                      </v-col>
                  </v-row>
                  <h4>ບ້ານ</h4>
                  <v-row>
                      <v-col cols="12" sm="12">
                          <v-text-field
                          :item="items"
                          label="ບ້ານຢູ່ປັດຈຸບັນ"
                          dense
                          color="red darken-1"
                          outlined
                          rounded>
                          </v-text-field>
                      </v-col>
                  </v-row>
                  <div class="centertext">
                      <v-col cols="12" sm="12">
                          <v-btn color="red darken-1" rounded dark class="col-12 sm-12">                  ລົງທະບຽນ         </v-btn>
                      </v-col>
                  </div>
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
          /> 
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
.ovf{
  overflow: hidden;
}
.loginpage{
  margin-top: 80px;
}
</style>
