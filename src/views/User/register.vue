<template>
  <div class="ovf">
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
                <h2 class="hline">ລົງທະບຽນ</h2>
                <h4>ເພື່ອເປັນສະມາຊິກຂອງ HAL LOGISTIC </h4>
              </div>
              <div class="formlogin">
                                  <h4>ຊື່</h4>
                  <v-row>
                      <v-col cols="12" sm="12">
                          <v-text-field
                          :item="items"
                          label="ຊື່"
                          dense
                          color="red darken-1"
                          outlined
                          rounded>
                          </v-text-field>
                      </v-col>
                  </v-row>
                                    <h4>ນາມສະກຸນ</h4>
                  <v-row>
                      <v-col cols="12" sm="12">
                          <v-text-field
                          :item="items"
                          label="ນາມສະກຸນ"
                          dense
                          color="red darken-1"
                          outlined
                          rounded>
                          </v-text-field>
                      </v-col>
                  </v-row>
                  <h4>ເບີໂທລະສັບ</h4>
                  <v-row>
                <v-col class="d-flex" cols="6" sm="3">
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
                <v-col class="d-flex" cols="6" sm="9">
                    <v-text-field
                    :item="items"
                    label="ເບີໂທລະສັບ"
                    dense
                    outlined
                    color="red darken-1"
                    rounded>
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
                      name="password"
    :value="myPass"

    @click:append="() => (value = !value)"
    :type="value ? 'password' : 'text'">
                          </v-text-field>
                      </v-col>
                  </v-row>
            <!--      <v-checkbox
              v-model="ex4"
              label="ຍອມຮັບເງື່ອນໄຂ ແລະ ຂໍ້ກຳນົດ"
              color="red"
              value="red"
              hide-details
            
            >
            </v-checkbox>-->

           <div>
             <input type="checkbox">
  <label >ຍອມຮັບເງື່ອນໄຂ ແລະ ຂໍ້ກຳນົດ <a href="/infohal1" class="more-info">ອ່ານເພີ່ມເຕີມ</a></label>
            
           </div>
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
      <h2 class="hh2">ສິດປະໂຫຍດເມື່ອທ່ານເປັນສະມາຊິກ</h2>
      <v-row>
        <v-col cols="12" lg="6" md="6" sm="12">
          <img
            src="../../assets/Frontend/ລະບົບຈັດການຂົນສົ່ງ.png"
            alt=""
          />
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
  name: "registerhal",
    data() {
    return {
      slecteritem: "020",
      slecteritems: ["020", "030"],
            value: String,
    };
  },
  components: {
    Toolbar,
    Footer,
    HomeView,
  }
}
</script>


<style scoped>
.redtext{
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
.centertext{
  text-align: center;
}
.linktoregis{
  margin-top: 20px;
}
.welcum{
  padding: 15%;
}
@media screen and (max-width: 778px) {
  div.welcum {
    padding: 1%;
    text-align: center;
  }
  p.linktoregis{
    margin-top: 10px;
    text-align: center;
  }
}
.halpoint{
  margin-top: 6%;
}
.halp{
  margin-top: 5%;
}
.hline {
  color:#000;
  text-align: center;
  position: relative;
}
.hline:before {
  content: "";
  display: block;
  width: 35%;
  height: 2px;
  background: #e21312;
  left: 0;
  top: 50%;
  position: absolute;
}

.hline:after {
  content: "";
  display: block;
  width: 35%;
  height: 2px;
  background: #e21312;
  right: 0;
  top: 50%;
  position: absolute;
}
.ovf{
  overflow: hidden;
}
</style>