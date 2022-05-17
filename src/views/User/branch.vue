<template>
    <div>
        <Toolbar/>
        <div class="service">
            <h2>ສາຂາ ສາຍນ້ຳເງິນ</h2>
            <div class="bsv">
            <v-row>
                <v-col cols="7">
                  <div class="picl">
                        <v-img
                        src="../../assets/Frontend/835c261394466b2d26e8bd8583a557781632998225_profile 1.png"
                        max-height="412px"
                        max-width="621px"
                        min-height="243px"
                        min-width="371px"
                        ></v-img>
                                          </div>
                </v-col>
                <v-col cols="5">
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
export default {
  name: "branch",
  components: {
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
</style>