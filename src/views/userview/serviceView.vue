<template>
<div>
    <Toolbar/>
    <div class="servicearea">
        <v-row>
            <v-col cols="7">
                <h2 class="hh2">ເຂດບໍລິການ</h2>
                <p>ພວກເຮົາມີຫຼາຍສາຂາຄອບຄຸມທົ່ວປະເທດ<br>
ແລະ ເປີດໃຫ້ບໍລິການ 365 ມື້ບໍ່ມີພັກ</p>
            </v-col>
            <v-col cols="5">
                <img src="../../assets/Frontend/service/Untitled-1 1.png" alt="">
            </v-col>
        </v-row>
    </div>
    <div class="svbranch">
       <v-row>
           <v-col cols="4">

           </v-col>
           <v-col cols="4">

           </v-col>
           <v-col cols="4">

           </v-col>
       </v-row>
       <v-row></v-row>
    </div>
    <Footer/>
</div>
</template>

<script>
import Toolbar from "../../components/Toolbar.vue";
import Footer from "../../components/Footer.vue";
import HomeView from "../HomeView.vue";
export default {
  name: "userservice",
  components: {
    Toolbar,
    Footer,
    HomeView,
  },
};
</script>

<style>
.servicearea{
    background-color: #E21312;
    text-align: center;
    align-items: center;
    align-content: center;
    color: white;
    padding: 20px;
}
.svbranch{
    align-items: center;
}
</style>