<template>
  <div>
    <Toolbar />
    <div class="loginpage">
      <v-row>
        <v-col cols="12" lg="5" md="5" sm="12">
          <h2>ຍິນດີຕ້ອນຮັບ</h2>
          <p>
            ເຂົ້າສູ່ລະບົບ ເພື່ອຮັບສິດໃນການໃຊ້ <br />
            ບໍລິການຕ່າງໆ ຂອງ HAL LOGISTIC ແລະ
            <br />ສິດທິໃນການສະສົມຄະແນນເພື່ອຮັບຂອງລາງວັນຕ່າງໆ
          </p>
        </v-col>
        <v-col cols="12" lg="7" md="7" sm="12">
          <div class="formlogin">
            <form action="">
              <div class="textlogin">
                <h4>ລົງທະບຽນ</h4>
                <h4>ເພື່ອເປັນສະມາຊິກຂອງ HAL LOGISTIC</h4>
              </div>
              <div class="formlogin">
                <h4>ຊື່</h4>
                <v-row>
                  <v-col class="d-flex" cols="10">
                    <v-text-field
                      label="ຊື່"
                      dense
                      outlined
                      rounded
                    ></v-text-field>
                  </v-col>
                  <v-col class="d-flex" cols="10">
                    <h4>ນາມສະກຸນ</h4>
                    <v-text-field
                      label="ນາມສະກູນ"
                      dense
                      outlined
                      rounded
                    ></v-text-field>
                  </v-col>
                </v-row>
                <h4>ເບີິໂທລະສັບ</h4>
                <v-row>
                  <v-col class="d-flex" cols="3" sm="3">
                    <v-select
                      :items="items"
                      label="020"
                      dense
                      outlined
                      rounded
                    ></v-select>
                  </v-col>
                  <v-col class="d-flex" cols="8" sm="8">
                    <v-text-field
                      :item="items"
                      label="ເບີໂທລະສັບ"
                      dense
                      outlined
                      rounded
                    >
                    </v-text-field>
                  </v-col>
                </v-row>
                <h4>ລະຫັດຜ່ານ</h4>
                <v-row>
                  <v-col cols="12" sm="12">
                    <v-text-field
                      :item="items"
                      label="ລະຫັດຜ່ານ"
                      dense
                      outlined
                      rounded
                    >
                    </v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="12">
                    <v-btn color="red darken-1" rounded dark class="col-10 sm-10"
                      >ລົງທະບຽນ</v-btn
                    >
                    <h4>ລືມລະຫັດຜ່ານ</h4>
                  </v-col>
                </v-row>
                <p>ຍອມຮັບເງື່ອນໄຂ ແລະ ຂໍ້ກຳນົດ <a>ອ່ານເພີ່ມເຕີມ</a></p>
              </div>
            </form>
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="claim">
      <h2 class="hh2">ສິດປະໂຫຍດເມື່ອທ່ານເປັນສະມາຊິກ</h2>
      <v-row>
        <v-col cols="12" lg="6" md="6" sm="12">
          <img
            src="../../assets/Frontend/service/ລະບົບຈັດການຂົນສົ່ງ.png"
            alt=""
          />
          <h4>ລະບົບຈັດການຂົນສົ່ງ</h4>
          <p>
            ທ່ານສາມາດໃຊ້ບໍລິການຕ່າງໆ<br />ບໍວ່າຈະເປັນຝາກເຄື່ອງເອງ, COD,<br />ເອີ້ນລົດຮັບເຄື່ອງ
            ແລະ ບໍລິການອື່ນໆ
          </p>
        </v-col>
        <v-col cols="12" lg="6" md="6" sm="12">
          <img src="../../assets/Frontend/service/Group 46.png" alt="" />
          <h4>ສະສົມຄະແນນ</h4>
          <p>
            ເມື່ອທ່ານໃຊ້ບໍລິການຝາກເຄື່ອງ,ຮັບເຄື່ອງ<br />ທ່ານຈະໄດ້ຮັບຄະແນນສະສົມເພື່ອແລກສິດ<br />ພິເສດ
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
  name: "homeuser",
  components: {
    Toolbar,
    Footer,
    HomeView,
  },
};
</script>

<style>
.redtext {
  color: #e21312;
}
.textlogin {
  text-align: center;
}
.claim {
  text-align: center;
  align-items: center;
}
.hh2 {
  text-align: center;
  color: #e21312;
}
.loginpage {
  background-color: #e21312;
  align-items: center;
  padding: 20px;
  padding-left: 10%;
  color: white;
}
.formlogin {
  background: white;
}
.rountest {
  border-radius: 10px;
}
</style>