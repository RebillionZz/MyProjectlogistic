<template>
    <div>
        <Toolbar/>
        <div class="service">
            <h2>ສາຂາ ສາຍນ້ຳເງິນ</h2>
            <v-row>
                <v-col cols="7">
                    <img src="../../assets/Frontend/service/835c261394466b2d26e8bd8583a557781632998225_profile 1.svg" alt="">
                </v-col>
                <v-col cols="5">
                    <img src="../../assets/Frontend/service/ແຜນທີ່.svg" alt="">
                </v-col>
            </v-row>
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
</style>