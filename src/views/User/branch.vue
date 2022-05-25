<template>
    <div>
        <Toolbar/>
        <div class="service">
            <h2>ສາຂາ ສາຍນ້ຳເງິນ</h2>
            <div class="bsv">
            <v-row>
                <v-col cols="12" sm="7">
                  <div class="picl">
                      <img src="../../assets/Frontend/835c261394466b2d26e8bd8583a557781632998225_profile 1.png" alt="" class="picresponsive">
                                          </div>
                </v-col>
                <v-col cols="12" sm="5">
                    <Maps></Maps>
                </v-col>
            </v-row>
            </div>
        </div>
        <Footer/>
    </div>
</template>
<script>
import Toolbar from "../../components/Toolbar.vue";
import Footer from "../../components/Footer.vue";
import HomeView from "../HomeView.vue";
import Maps from "../Maps.vue";
export default {
  name: "branch",
  components: {
      Maps,
    Toolbar,
    Footer,
    HomeView,
  },
};
</script>
<style scoped>
.service{
    text-align: center;
}
.bsv{
    padding: 3%;
}
.picl{
    position:relative;
}
.picresponsive{
    width: 80%;
    height: auto;
}
</style>