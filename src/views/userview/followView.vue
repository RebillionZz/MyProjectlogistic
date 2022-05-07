<template>
<div>
    <Toolbar/>
    <div class="followitem">
        <v-row>
            <v-col cols="6">
                <h2>ຕິດຕາມພັດສະດຸ</h2>
                <p>ທ່ານສາມາດກວດສອບພັດສະດຸ<br>ຂອງທ່ານທຸກທີ່ ທຸກເວລາ<br>ບໍ່ວ່າຈະຢູ່ໃສ ເວລາໃດກໍເບິ່ງໄດ້</p>
            </v-col>
            <v-col cols="6">
                <img src="../../assets/Frontend/service/tracking 1.png" alt="">
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="8" class="followitem">
            <v-text-field
            rounded
            outlined
            dense
            ></v-text-field>
            </v-col>
        </v-row>
    </div>
    <div class="followpart">
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
    
}
</style>