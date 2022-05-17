<template>
  <div>
    <Toolbar />
    <div class="loginpage">
      <v-row>
        <v-col cols="12" lg="5" md="5" sm="12">
          <div class="welcum">
            <h2>ຍິນດີຕ້ອນຮັບ</h2>
            <p class="linktoregis">
              ເຂົ້າສູ່ລະບົບ ເພື່ອຮັບສິດໃນການໃຊ້ <br />
              ບໍລິການຕ່າງໆ ຂອງ HAL LOGISTIC ແລະ
              <br />ສິດທິໃນການສະສົມຄະແນນເພື່ອຮັບຂອງລາງວັນຕ່າງໆ
            </p>
          </div>
        </v-col>
        <v-col cols="12" lg="7" md="7" sm="12">
          <div class="formlogin">
            <form action="">
              <div class="textlogin">
                <h2>ເຂົ້າສູ່ລະບົບ</h2>
                <h4>ເພື່ອໃຊ້ບໍລິການຂອງ HAL LOGISTIC</h4>
              </div>
              <div class="formlogin">
                <h4>ເບີໂທລະສັບ</h4>
                <v-row>
                  <v-col class="d-flex" cols="3" sm="3">
                    <v-select
                      :label="slecteritem"
                      :items="slecteritems"
                      dense
                      flat
                      outlined
                      color="red darken-1"
                      rounded
                    ></v-select>
                  </v-col>
                  <v-col class="d-flex" cols="9" sm="9">
                    <v-text-field
                      :item="items"
                      label="ເບີໂທລະສັບ"
                      dense
                      outlined
                      color="red darken-1"
                      rounded
                      v-model="numberValue"
                      hide-details
                      single-line
                      type="number"
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
                      color="red darken-1"
                      outlined
                      v-model="password"
                      rounded
                      autocomplete="current-password"
                      :type="value ? 'password' : 'text'"
                    @input="_=>userPassword=_"
                    >
                    </v-text-field>
                  </v-col>
                </v-row>
                <div class="centertext">
                  <v-row>
                    <v-col cols="12" sm="12">
                      <v-btn
                        color="red darken-1"
                        rounded
                        dark
                        class="col-12 sm-12"
                      >
                        ເຂົ້າສູ່ລະບົບ
                      </v-btn>
                      <h4>ລືມລະຫັດຜ່ານ</h4>
                    </v-col>
                  </v-row>
                  <div class="linktoregis">
                    ຍັງບໍ່ມີບັນຊີເທື່ອບໍ? <a class="redtext">ລົງທະບຽນ</a>
                  </div>
                </div>
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
          <img src="../../assets/Frontend/ລະບົບຈັດການຂົນສົ່ງ.png" alt="" />
          <h4>ລະບົບຈັດການຂົນສົ່ງ</h4>
          <p>
            ທ່ານສາມາດໃຊ້ບໍລິການຕ່າງໆ<br />ບໍວ່າຈະເປັນຝາກເຄື່ອງເອງ, COD,<br />ເອີ້ນລົດຮັບເຄື່ອງ
            ແລະ ບໍລິການອື່ນໆ
          </p>
        </v-col>
        <v-col cols="12" lg="6" md="6" sm="12">
          <div class="halpoint">
            <img src="../../assets/Frontend/Group 46.png" alt="" />
          </div>
          <div class="halp">
            <h4>ສະສົມຄະແນນ</h4>
            <p>
              ເມື່ອທ່ານໃຊ້ບໍລິການຝາກເຄື່ອງ,ຮັບເຄື່ອງ<br />ທ່ານຈະໄດ້ຮັບຄະແນນສະສົມເພື່ອແລກສິດ<br />ພິເສດ
            </p>
          </div>
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
  data() {
    return {
      slecteritem: "020",
      slecteritems: ["020", "030"],
    };
  },
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
  color: black;

  align-items: center;
  border-radius: 10px;
  padding: 20px;
}
.centertext {
  text-align: center;
}
.linktoregis {
  margin-top: 20px;
}
.welcum {
  padding: 15%;
}
.halpoint {
  margin-top: 6%;
}
.halp {
  margin-top: 5%;
}
</style>
