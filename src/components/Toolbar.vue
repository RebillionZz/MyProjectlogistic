<template>
  <div>
    <v-app-bar color="#E21312" dense dark height="105px">
      <div class="logo">
        <router-link to="/homepage">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="../assets/Frontend/hal logo 2.svg"
          transition="scale-transition"
          width="100"
          height="100"
         ></v-img></router-link>
      </div>
      <v-spacer></v-spacer>
      <v-row>
        <v-col cols="12" sm class="py-2 hiddenSmAndDown">
         <div class="dropdown">
  <button class="dropbtn">ບໍລິການຂອງເຮົາ</button>
  <div class="dropdown-content">
  <a href="#">ຝາກເຄື່ອງເອງ</a>
  <router-link to="/follow">ພັດສະດຸຂອງຂ້ອຍ</router-link>
  <router-link to="/pricecal">ຄິດໄລ່ຄ່າຂົນສົ່ງ</router-link>
  <router-link to="/servicearea">ຂໍ້ມູນສາຂາ</router-link>
  <a href="#">COD</a>
  <a href="#">ຄ່າບໍລິການ</a>
    <a href="#">ຜູ້ຮັບປາຍທາງ</a>
  </div>
</div>
          <v-btn color="#E21312" elevation="0">
            <router-link
              to="/servicearea"
              class="d-flex justify-center whitetext"
              >ຂໍ້ມູນສາຂາ</router-link
            >
          </v-btn>
          <router-link to="/infohal1"><v-btn color="#E21312" elevation="0"> ຂໍ້ກຳນົດ </v-btn></router-link>
          <v-btn color="#E21312" elevation="0"> ກ່ຽວກັບພວກເຮົາ </v-btn>
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
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: "ຝາກເຄື່ອງເອງ" },
      { title: "ພັດສະດຸຂອງຂ້ອຍ" },
      { title: "ຄິດໄລ່ຄ່າຂົນສົ່ງ" },
      { title: "ຂໍ້ມູນສາຂາ" },
      { title: "COD" },
      { title: "ຄ່າບໍລິການ" },
      { title: "ຜູ້ຮັບປາຍທາງ" },
    ],
  }),
};
</script>

<style>
.logo {
  margin-left: 2%;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.whitetext {
  color: #ffffff !important;
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

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: #f1f1f1}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #e21312;
}
</style>
