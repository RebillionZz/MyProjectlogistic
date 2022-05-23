<template>
<div>
    <Toolbar/>
    <div class="followitem">
        <v-row>
            <v-col cols="6">
                <div class="fltext">
                                    <h1>ຕິດຕາມພັດສະດຸ</h1>
                <h3 class="mg20">ທ່ານສາມາດກວດສອບພັດສະດຸ<br>ຂອງທ່ານທຸກທີ່ ທຸກເວລາ<br>ບໍ່ວ່າຈະຢູ່ໃສ ເວລາໃດກໍເບິ່ງໄດ້</h3>
                </div>
            </v-col>
            <v-col cols="6">
                <div class="flpic">
                    <img src="../../assets/Frontend/tracking 1.png" alt="">
                </div>
            </v-col>
        </v-row>
    </div>
    <div class="followpart">
        <div class="searchitem">
            <v-text-field
          v-model="search"
          label="ໃສ່ລະຫັດ tracking ID"
          color="red darken-1"
          rounded
          outlined
        ></v-text-field>
        </div>
        <h2 class="hh2">ຕິດຕາມພັດສະດຸຂອງທ່ານ</h2>
    </div>
    <Footer/>
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
.followitem{
    background-color: #E21312;
    color: #FFFFFF;
    text-align: center;
    align-items: center;
}
.hh2{
    text-align: center;
    color: #E21312
}
.followpart{
    text-align: center;
    align-items: center;
    padding: 5%;
}
.fltext{
    padding: 10%;
}
.mg20{
    margin-top: 20px;
}
.flpic{
    padding: 5%;
}
.searchitem{
    margin-top: -7%;
    background: #FFFFFF;
    border-radius: 27px;
}
</style>