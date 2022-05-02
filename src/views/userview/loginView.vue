<template>
<div>
    <Toolbar/>
    <div class="loginpage">
        <v-row>
            <v-col cols="5">
                <h2>ຍິນດີຕ້ອນຮັບ</h2>
                <p>ເຂົ້າສູ່ລະບົບ ເພື່ອຮັບສິດໃນການໃຊ້ <br>
ບໍລິການຕ່າງໆ ຂອງ HAL LOGISTIC ແລະ <br>ສິດທິໃນການສະສົມຄະແນນເພື່ອຮັບຂອງລາງວັນຕ່າງໆ</p>
            </v-col>
            <v-col cols="7"></v-col>
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
  name: "homeuser",
  components: {
    Toolbar,
    Footer,
    HomeView,
  },
};
</script>

<style>
.loginpage{
    background-color: #E21312;
    align-items: center;
    padding: 20px;
    padding-left: 10%;
    color: white;
}
</style>