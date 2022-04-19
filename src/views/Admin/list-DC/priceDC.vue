<template>
    <v-container>
        <div class="d-flex bg-grey mb-4">
            <div class="d-flex align-center">
                <v-avatar color="red lighten-4"><v-img src="../../../assets/Admin/priceContent/caculator.svg" max-height="35" max-width="35"></v-img></v-avatar>
            </div>
            <v-toolbar-title class="d-flex align-center ml-3">ຄິດໄລ່ຄ່າຂົນສົ່ງ</v-toolbar-title>
        </div>
        <form class="form pa-8">
            <h4 class="text-center">ຄິດໄລ່ຄ່າຂົນສົ່ງ</h4>
            <div class="d-md-flex justify-space-around">
                <v-col cols="5" xs="12">
                    <label class="pl-3">ຕົ້ນທາງ</label>
                    <v-select label="ເລືອກຕົ້ນທາງ" flat outlined dense solo :items="endWays" class="rounded-pill"></v-select>
                </v-col>
                <v-col cols="2" xs="12" class="d-flex justify-center align-center "><v-img src="../../../assets/Admin/priceContent/ArrowPC.svg" max-height="36" max-width="36" class="changeIcon "></v-img></v-col>
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
    </v-container>
    
</template>

<script>
export default {
    name:'priceDC',
    data() {
        return {
            totalPrice:0,
            startWays:['ສາຍນ້ຳເງິນ','ຫົວຂົວ (ນາຊາຍທອງ)','ດົງສ້າງຫີນ(ຫຼັກ 15)','ສາຍນ້ຳເງິນ','ຫົວຂົວ(ນາຊາຍທອງ1)','ດົງສ້າງຫີນ(ຫຼັກ 16)'],
            endWays:['ສາຍນ້ຳເງິນ','ຫົວຂົວ (ນາຊາຍທອງ)','ດົງສ້າງຫີນ(ຫຼັກ 15)','ສາຍນ້ຳເງິນ','ຫົວຂົວ(ນາຊາຍທອງ1)','ດົງສ້າງຫີນ(ຫຼັກ 16)'],
        }
    },
}
</script>

<style lang="scss" scoped>
// .t1{
//     padding-right: -10px;
// }
.form{
    background: white;
    border-radius: 4px;
}
.color-red{
    color: $red;
}
.backL{
    background: $red !important;
}
.bg-grey{
    background: $d-grey !important;
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
    border :1px solid $red;
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
    border :1px solid $red;
    border-radius: 28px;
}
// hide arrow
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
@media screen and (max-width: 600px) {
    // form checkbox mobile
    .changeIcon{
    transform: rotate(90deg);
    .total-w-h-l{
        padding-top: 4px;
    }
}
}
</style>