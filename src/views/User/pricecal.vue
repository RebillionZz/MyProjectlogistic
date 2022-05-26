<template>
<div>
    <Toolbar/>
    <div class="calprice">
        <h2 class="hh2">ຄິດໄລ່ຄ່າຂົນສົ່ງ ຂອງພັດສະດຸທີ່ທ່ານຈະສົ່ງ</h2>
        <div 
        :class="`elevation-${hover ? 20 : 4}`"
        class="bdprice">
             <form class="form pa-8 borderf">
            <h4 class="text-center">ຄິດໄລ່ຄ່າຂົນສົ່ງ</h4>
            <div class="d-md-flex justify-space-around">
                <v-col cols="5" xs="12">
                    <label class="pl-3">ຕົ້ນທາງ</label>
                    <v-select label="ເລືອກຕົ້ນທາງ" flat outlined dense solo :items="endWays" hide-details class="rounded-pill"></v-select>
                </v-col>
                <v-col cols="2" xs="12" class="d-flex justify-center align-center pt-5 "><v-img src="../../assets/Admin/priceContent/ArrowPC.svg" max-height="36" max-width="36" class="changeIcon "></v-img></v-col>
                <v-col cols="5" xs="12">
                    <label class="pl-3">ປາຍທາງ</label>
                    <v-select label="ເລືອກປາຍທາງ" flat outlined dense solo :items="endWays" hide-details class="rounded-pill"></v-select>
                </v-col>
            </div>
            <!--  -->
            <div class="d-md-flex mt-3">
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
                <v-col cols="8" >
                    
                    <v-btn elevation="0" color="backL" width="100%" class="bg-red white--text btn-round1 t1">ຄຳນວນລາຄາ</v-btn>
                </v-col>
                <v-col cols="4">
                    <v-btn elevation="0" width="100%" class=" white--black btn-round2 del">ລ້າງຂໍ້ມູນ</v-btn>
                </v-col>
            </div>
        </form>
        </div>

    </div>
    <div class="pcal">
        <h2 class="hh21">ຄ່າບໍລິການ</h2>
        <div class="tab1">
            <v-tabs v-model="tab" centered color="red darken-2">
                <v-tab>ສາຂາຫາສາຂາ (ພາຍໃນແຂວງ)</v-tab>
                <v-tab>ລະຫວ່າງແຂວງ (ທົ່ວປະເທດ)</v-tab>
            </v-tabs>
        </div>
        <div class="tab2">
            <v-tabs v-model="tab" centered color="red darkern-2" class="tabrounded">
                <v-tab>ລາຄາ EXPRESS</v-tab>
                <v-tab>ຊອງເອກະສານ</v-tab>
                <v-tab>ລາຄາ LOGISTIC</v-tab>
            </v-tabs>
            <h5>ລູກຄ້າຝາກເຄື່ອງແລ້ວສາມາດຮັບເຄື່ອງໃນມື້ຖັດໄປ</h5>
            <v-container fluid>
                            <div class="calpic">
                <img src="../../assets/Frontend/ລາຍລະອຽດລາຄາ.svg" alt="" class="imgres">
            </div>
            </v-container>
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
.calprice{
    border: 20px;
}
.home_head{
    width: 45px;
    height: 45px;
    padding:4px;
    border-radius: 50%;
    background: #f4d7d7;
}
.t1{
    padding-right: -10%;
}
.form{
    background: #ffffff;
    border-radius: 4px;
    border-color: #888888;
}
.color-red{
    color: #E21312;
}
.backL{
    background: #E21312 !important;
}
.bg-grey{
    background: #e5e5e5 !important;
}
.box-border{
    border :1px solid #888888;
    border-radius: 28px;
}

.btn-round1{
    border-radius: 28px;
}
.btn-round2{
    border-radius: 28px;
    border :1px solid #E21312;
    background: none !important;
}
.input-max{
    width: 100%;
    height: 38px;
    padding-left: 12px;
    outline: none;
}
.number-input{
    width: 100%;
    height: 38px;
    padding-left: 12px;
    outline: none;
}
.total-price{
    width: 100%;
    height: 38px;
    padding-left: 16px;
}
.box-total{
    border :1px solid #E21312;
    border-radius: 28px;
}
 hide arrow
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.search-form{
    position: relative;
    width: 100%;
}
@media only screen and (max-width: 768px) {
    *{
        font-size: 16px;
        }
        .changeIcon{
    transform: rotate(90deg);
}
    .search-form{
        position: relative;
        padding-right: 8px;
        
       
        }
        .for-search{
            position: absolute;
            left: 8px;
            top:2px;
            width: 30px;
            height: 30px;
        }
    }
    input::placeholder{
    font-size: 14px;
}


@media screen and (max-width: 600px) {
     form checkbox mobile
    .changeIcon{
    transform: rotate(90deg);
}
    .total-w-h-l{
        padding-top: 4px;
    }
    .search-form{
        padding:0 5px !important;
    }
}
.bdprice{
    padding: 5%;
}
.tab1{
    align-items: center;
    align-content: center;
    text-align: center;
}
.tab2{
    align-items: center;
    align-content: center;
    text-align: center;
}
.tabrounded{
    border-radius: 25%;
}
.calpic{
    height: auto;
    width: auto;
}
.imgres{
    height: auto;
    width: 70%;
}
.del{
    margin-top: 20px;
    margin-left: 1px;
}
.borderf{
    border-block-color: #888888;
    border-end-end-radius: 1px;
}
</style>