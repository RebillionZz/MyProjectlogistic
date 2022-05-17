<template>
<div>
    <Toolbar/>
    <div class="calculator">
        <h2 class="hh21">ຄິດໄລ່ຄ່າຂົນສົ່ງ ຂອງພັດສະດຸທີ່ທ່ານຈະສົ່ງ</h2>
        <div>
             <form class="form pa-8">
            <h4 class="text-center">ຄິດໄລ່ຄ່າຂົນສົ່ງ</h4>
            <div class="d-md-flex justify-space-around">
                <v-col cols="5" xs="12">
                    <label class="pl-3">ຕົ້ນທາງ</label>
                    <v-select label="ເລືອກຕົ້ນທາງ" flat outlined dense solo :items="endWays" class="rounded-pill"></v-select>
                </v-col>
                <v-col cols="2" xs="12" class="d-flex justify-center align-center "><v-img src="../../assets/Admin/priceContent/ArrowPC.svg" max-height="36" max-width="36" class="changeIcon "></v-img></v-col>
                <v-col cols="5" xs="12">
                    <label class="pl-3">ປາຍທາງ</label>
                    <v-select label="ເລືອກປາຍທາງ" flat outlined dense solo :items="endWays" class="rounded-pill"></v-select>
                </v-col>
            </div>
            <!--  -->
            <div class="d-md-flex">
                <v-col cols="5">
                    <label class="pl-3">ນໍ້າໜັກລວມ</label>
                    <input type="text" name="" id="" placeholder="ນ້ຳໜັກຂອງພັດສະດຸ" class="input-max box-border">
                </v-col>
                <v-col cols="1"></v-col>
                <v-col cols="6" class="mt-xs-2 mr-0" >
                    <label class="pl-3">ຂະໜາດຂອງພັດສະດຸ ຄິດໄລ່ເປັນ cm</label>
                    <div class="d-flex total-w-h-l">
                        <input type="number" placeholder="ລວງຍາວ" class="number-input box-border mr-1">
                        <input type="number" placeholder="ລວງກວ້າງ" class="number-input box-border">
                        <input type="number" placeholder="ລວງສູງ" class="number-input box-border ml-1">
                    </div>
                </v-col>
            </div>
            <!--  -->
            <div>
                <label class="pl-4">ລາຄາປະມານ</label>
                <div class="total-price py-2 box-total d-flex justify-space-between">
                    <p>{{totalPrice}}</p>
                    <p class="pr-4">K</p>
                </div>
            </div>
            <!--  -->
            <div class="d-flex mt-5">
                <v-col cols="8 p-n1" >
                    
                    <v-btn elevation="0" color="backL" width="100%" class="bg-red white--text btn-round1 t1">ຄຳນວນລາຄາ</v-btn>
                </v-col>
                <v-col cols="4">
                    <v-btn elevation="0" width="100%" class=" white--black btn-round2">ລ້າງຂໍ້ມູນ</v-btn>
                </v-col>
            </div>
        </form>
        </div>
    </div>
    <div class="pcal">
        <h2 class="hh21">ຄ່າບໍລິການ</h2>
    </div>
    <Footer/>
</div>
</template>

<script>
import Toolbar from "../../components/Toolbar.vue";
import Footer from "../../components/Footer.vue";
import HomeView from "../HomeView.vue";
export default {
  name: "pricecal",
  components: {
    Toolbar,
    Footer,
    HomeView,
  },
};
</script>

<style>
.hh21{
    text-align: center;
    color: #E21312;

}
</style>