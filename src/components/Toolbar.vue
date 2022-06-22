<template>
  <div class="ovf" id="allTheNav">
    <v-navigation-drawer v-model="drawer"  app color="red darken-2" dark>
      <div class="logo logomb">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="../assets/Frontend/hal logo 2.svg"
          transition="scale-transition"
          width="100"
          height="100"
        ></v-img>
      </div>
      <v-list class="sbmobile">
        <v-list-item link>
    
        </v-list-item>
        <router-link to="/servicearea" class="d-flex justify-center whitetext"
                >
        <v-list-item link>
          
                ຂໍ້ມູນສາຂາ
        </v-list-item>
        </router-link>
        <router-link to="/infohal1" class="whitetext"
              >
        <v-list-item link>
             ຂໍ້ກຳນົດ
        </v-list-item>
         </router-link
            >
            <router-link to="/Aboutus" class="whitetext"
              >
        <v-list-item link>
              ກ່ຽວກັບພວກເຮົາ
        </v-list-item>
        </router-link
            >
        <v-list-item link>
            ສະໝັກ COD
        </v-list-item>
         <router-link to="/login" class="d-flex justify-center whitetext"
                >
        <v-list-item link>
           ເຂົ້າສູ່ລະບົບ
        </v-list-item>
        </router-link>
         <router-link to="/registerhal" class=" whitetext"
                >
        <v-list-item link>
           ລົງທະບຽນ
        </v-list-item>
        </router-link
              >
        <v-list-item link>
            <a href="tel:1419" class="call-btn">ໂທ 1419</a>
        </v-list-item>
        
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="#E21312" dense dark fixed height="80px" elevation="0" class="nav-bar">
      <div class="logo">
        <router-link to="/homepage">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="../assets/Frontend/hal logo 2.svg"
            transition="scale-transition"
            width="75"
            height="75"
          ></v-img
        ></router-link>
      </div>
      <v-spacer></v-spacer>
      <div class="nav">
        <v-row>
          <v-col cols="12" sm class="py-2 hiddenSmAndDown">
            <!-- <div class="dropdown"> -->
            <!-- <button class="dropbtn">ບໍລິການຂອງເຮົາ</button>
                  <div class="dropdown-content">
                  <router-link to="/senddc">ຝາກເຄື່ອງເອງ</router-link>
                  <router-link to="/follow">ພັດສະດຸຂອງຂ້ອຍ</router-link>
                  <router-link to="/pricecal">ຄິດໄລ່ຄ່າຂົນສົ່ງ</router-link>
                  <router-link to="/servicearea">ຂໍ້ມູນສາຂາ</router-link>
                  <router-link to="/coddc">COD</router-link>
                  <a href="#">ຄ່າບໍລິການ</a>
                  <a href="#">ຜູ້ຮັບປາຍທາງ</a> -->
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <button v-bind="attrs" v-on="on" class="dropbtn">ບໍລິການຂອງເຮົາ <img src="../assets/Frontend/Vector.svg" alt="">
</button>
              </template>
              <v-list>
                <v-list-item :to="a.route" v-for="a in items" :key="a.id">
                  {{ a.title }}
                </v-list-item>
              </v-list>
            </v-menu>

            <!-- </div>  -->
            <!-- </div> -->
            <v-btn color="#E21312" elevation="0">
              <router-link to="/servicearea" class="d-flex justify-center whitetext"
                >ຂໍ້ມູນສາຂາ</router-link
              >
            </v-btn>
            <router-link to="/infohal1"
              ><v-btn color="#E21312" elevation="0"> ຂໍ້ກຳນົດ </v-btn></router-link
            >
            <router-link to="/Aboutus"
              ><v-btn color="#E21312" elevation="0"> ກ່ຽວກັບພວກເຮົາ </v-btn></router-link
            >
            <v-btn color="#E21312" elevation="0">
              <router-link to="/login" class="d-flex justify-center whitetext"
                >ເຂົ້າສູ່ລະບົບ</router-link
              >
            </v-btn>
            <v-btn
              color="#FFFFFF"
              elevation="0"
              text-color="red"
              rounded
              class="red--text"
            >
              <router-link to="/registerhal" class="d-flex justify-center redtext"
                >ລົງທະບຽນ</router-link
              >
            </v-btn>
          </v-col>
        </v-row>
      </div>
      <div class="hamburgerlogo" @click="drawer = !drawer">
        <Hamlogo />
      </div>
    </v-app-bar>
  </div>
</template>
<script>
import Hamlogo from "../components/mobilebar.vue";
export default {
  data: () => ({
    items: [
      { title: "ຝາກເຄື່ອງເອງ", route: "/senddc" },
      { title: "ພັດສະດຸຂອງຂ້ອຍ", route: "/follow" },
      { title: "ຄິດໄລ່ຄ່າຂົນສົ່ງ", route: "/pricecal" },
      { title: "ຂໍ້ມູນສາຂາ", route: "/servicearea" },
      { title: "COD", route: "/coddc" },
      { title: "ຄ່າບໍລິການ", route: "" },
      { title: "ຜູ້ຮັບປາຍທາງ", route: "" },
    ],
    itemsmb: [
      { title: "ຝາກເຄື່ອງເອງ", route: "/senddc" },
      { title: "ພັດສະດຸຂອງຂ້ອຍ", route: "/follow" },
      { title: "ຄິດໄລ່ຄ່າຂົນສົ່ງ", route: "/pricecal" },
      { title: "ຂໍ້ມູນສາຂາ", route: "/servicearea" },
      { title: "COD", route: "/coddc" },
      { title: "ຄ່າບໍລິການ", route: "" },
      { title: "ຜູ້ຮັບປາຍທາງ", route: "" },
    ],
    drawer: false,
    group: null,
  }),
  watch: {
    group() {
      this.drawer = false;
    },
  },
  methods: {
    Getleft12() {
      this.$store.state.drawer = !this.$store.state.drawer;
    },
  },
  components: {
    Hamlogo,
  },
  opened: false,
};
</script>
<style>
.logo {
  margin-left: 2%;
}
.logomb {
  border-left: 200px;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.whitetext {
  color: #ffffff !important;
}
.call-btn{
  color: #fff !important; 
}
a{
  color: #fff;
}
.redtext {
  color: #e21312 !important;
}
.dropbtn {
  background-color: #e21312;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}
.sbmobile{
  color: white !important;
}
.dropdown {
  position: relative;
  display: inline-block;
  /* z-index: 1000; */
}
.a{
  color: #ffffff !important;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 10000;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #e21312;
}
* {
  text-decoration: none;
}
@media screen and (max-width: 778px) {
  div.nav {
    display: none;
  }
}
@media screen and (min-width: 778px) {
  div.hamburgerlogo {
    display: none;
  }
}
.ofv {
  overflow: hidden;
}
.nav-bar{
  position: fixed;
  left: 0;
  top: 0;
  z-index: 200;
}
</style>
