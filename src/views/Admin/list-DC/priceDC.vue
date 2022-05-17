<template>
    <div class="dashboard-container-wrap">
        <v-row no-gutters class="hide-overflow ">
            <v-flex class="d-flex align-center">
                <hamburgur ></hamburgur>
                <v-col cols="8"  lg="8" md="8"   class="search-form mr-lg-2 mr-md-3 pa-0">
                    <label class="for-search" for="searchBar" ><v-img src="../../../assets/Admin/sidebar/toolbar/search.svg" max-height="37" max-width="37"></v-img></label>
                    <input class="input-max" type="text" name="" id="searchBar" placeholder="ໃສ່ລະຫັດ tracking ID" >
                </v-col>
                <userAcoin></userAcoin>
            </v-flex>
        </v-row>
        <v-flex class="d-flex align-center bg-grey mb-4">
            <v-col cols="9" class="d-flex align-center">
                <div class="home_head"><img class="imgH" src="../../../assets/Admin/priceContent/caculator.svg" max-height="35" max-width="35"></div>
                <div class="d-flex align-center ml-2">ຄິດໄລ່ຄ່າຂົນສົ່ງ</div>
            </v-col>
        </v-flex>
        <form class="form pa-8">
            <h4 class="text-center">ຄິດໄລ່ຄ່າຂົນສົ່ງ</h4>
            <div class="d-md-flex justify-space-around">
                <v-col cols="5" xs="12">
                    <label class="pl-3">ຕົ້ນທາງ</label>
                    <v-select label="ເລືອກຕົ້ນທາງ" flat outlined dense solo :items="endWays" hide-details class="rounded-pill"></v-select>
                </v-col>
                <v-col cols="2" xs="12" class="d-flex justify-center align-center pt-5 "><v-img src="../../../assets/Admin/priceContent/ArrowPC.svg" max-height="36" max-width="36" class="changeIcon "></v-img></v-col>
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
                <v-col cols="8 p-n1" >
                    
                    <v-btn elevation="0" color="backL" width="100%" class="bg-red white--text btn-round1 t1">ຄຳນວນລາຄາ</v-btn>
                </v-col>
                <v-col cols="4">
                    <v-btn elevation="0" width="100%" class=" white--black btn-round2">ລ້າງຂໍ້ມູນ</v-btn>
                </v-col>
            </div>
        </form>
        <footerC class="mt-5"></footerC>
    </div>
    
</template>

<script>
import footerC from '../../../components/footerC.vue'
import hamburgur from '../../../components/DashTopview/hamburgur.vue'
import userAcoin from '../../../components/DashTopview/userAcoin.vue'
export default {
    name:'pricedc',
    data() {
        return {
            totalPrice:0,
            startWays:['ສາຍນ້ຳເງິນ','ຫົວຂົວ (ນາຊາຍທອງ)','ດົງສ້າງຫີນ(ຫຼັກ 15)','ສາຍນ້ຳເງິນ','ຫົວຂົວ(ນາຊາຍທອງ1)','ດົງສ້າງຫີນ(ຫຼັກ 16)'],
            endWays:['ສາຍນ້ຳເງິນ','ຫົວຂົວ (ນາຊາຍທອງ)','ດົງສ້າງຫີນ(ຫຼັກ 15)','ສາຍນ້ຳເງິນ','ຫົວຂົວ(ນາຊາຍທອງ1)','ດົງສ້າງຫີນ(ຫຼັກ 16)'],
        }
    },
    components:{
        footerC,
        hamburgur,
        userAcoin
    }
}
</script>

<style lang="scss" scoped>
.home_head{
    width: 45px;
    height: 45px;
    padding:4px;
    border-radius: 50%;
    background: $dashhead;
    .imgH{
        width: 100%;
        height: 100%;
    }
}
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
.search-form{
    position: relative;
    width: 100%;
    .input-max{
        width: 100%;
        height: 40px;
        padding-left: 45px;
        background:$bg-footer;
        border-radius: 34px;
        outline: none;
    }
    .for-search{
        position: absolute;
        left: 8px;
        top:0px;
    }
}
// -------------------------------------------------------End search
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
        
        .input-max{
            width: 100%;
            height: 35px;
            padding-left: 40px;
            
            border-radius: 34px;
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

}
@media screen and (max-width: 600px) {
    // form checkbox mobile
    .changeIcon{
    transform: rotate(90deg);
}
    .total-w-h-l{
        padding-top: 4px;
    }
    .search-form{
        padding:0 5px !important;
            .input-max{
            height: 35px;
        }
        .for-search{
            position: absolute;
            left: 12px;
            top: 2px;
            width: 30px;
            height: 30px;
        }
    }
}
</style>