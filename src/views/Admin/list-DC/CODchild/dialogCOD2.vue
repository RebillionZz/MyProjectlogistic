<template>
    <form class="scroll_remove">
        <v-col cols="12">
            <label class="pl-3">ຊື່ທະນາຄານ</label>
            <v-select label="ເລືອກປາຍທາງ" flat outlined dense solo :items="Bunzy" class="rounded-pill"></v-select>
        </v-col>
        <!--  -->
        <v-col cols="12">
                <label class="pl-3">ນໍ້າໜັກລວມ</label>
                <input type="text" name="" id="" placeholder="ນ້ຳໜັກຂອງພັດສະດຸ" class="input-max box-border">
        </v-col>
        <!--  -->
        <div class="d-flex mt-3">
            <v-col cols="5" class="pl-3">
                ເລກບັນຊີທະນາຄານ
            </v-col>
            <v-col cols="7" class="d-flex algin-center">
                    <div class="padding_Respon">
                        <input type="radio" id="set13" checked="checked"  name="setBunzy" value="1">
                        <label for="set13" class="pl-1">13 ຫຼັກ</label>
                    </div>
                    <div class="padding_Respon">
                        <input type="radio" id="set18" name="setBunzy" value="2">
                        <label for="set18" class="pl-1">18 ຫຼັກ</label>
                    </div>
            </v-col>
        </div>
        <!--  -->
        <v-col cols="12" class="my-1">
                <input type="text" name="" id="" placeholder="" class="input-max box-border">
        </v-col>
        <!--  -->
        <div class="d-flex pl-3 mt-3">
            <v-col cols="4" class="">
                <div class="d-flex align-center">
                    <input type="radio" checked id="aboutCardID" name="aboutBunzy" value="1">
                    <label for="aboutCardID" class="pl-2">ບັດປະຈຳຕົວ</label>
                </div>
            </v-col>
            <v-col cols="4">
                <div class="d-flex align-center">
                    <input type="radio" id="aboutBookID" name="aboutBunzy" value="2">
                    <label for="aboutBookID" class="pl-2">ສຳມະໂນຄົວ</label>
                </div>
            </v-col>
            <v-col cols="4">
                <div class="d-flex align-center">
                    <input type="radio" id="aboutPapperID" name="aboutBunzy" value="3">
                    <label for="aboutPapperID" class="pl-1">ໜັງສືຜ່ານແດນ</label>
                </div>
            </v-col>
        </div>
        <!-- Class label BunzyIcon_FOR -->
        <div>
            <div class=" BunzyIcon_FOR_label_box">
                <input type="text" id="BunzyIcon_FOR_Icon" name="BunzyIcon_FOR_Name" placeholder="" class="input-max box-border BunzyIcon_FOR_label">
                <label for="BunzyIcon_FOR_Icon" class="BunzyIcon_FOR"><v-img src="../../../../assets/Admin/CODContent/bunzyIconDAL2.svg" max-height="23" max-width="23"></v-img></label>
            </div>
        </div>
        <!-- Location -->
        <v-col cols="12" class="mt-2">
            <label class="pl-3">ແຂວງ</label>
            <v-select label="" flat outlined dense solo :items="ProvinceItem" class="rounded-pill"></v-select>
        </v-col>
        <v-col cols="12 CostMY">
            <label class="pl-3">ເມືອງ</label>
            <v-select label="" flat outlined dense solo :items="DistrictItem" class="rounded-pill"></v-select>
        </v-col>
        <v-col cols="12 CostMY">
            <label class="pl-3">ບ້ານ</label>
            <input type="text" name="" id="" placeholder="" class="input-max box-border">
        </v-col>
        <!-- BTN -->
        <v-col cols="12" class="mt-5">
            <v-btn elevation="0" color="backL" width="100%" class="bg-red white--text box-border">ບັນທຶດ</v-btn>
        </v-col>

    </form>
</template>
<script>
// import CODDC from '../CODDC.vue'
export default {
    name:'dialogCOD2',
    data() {
        return {
            Bunzy:['ທະນາຄານ BCEL','ທະນາຄານ BCEL2','ທະນາຄານ BCEL3','ທະນາຄານ BCEL4'],
            ProvinceItem:['Province1','Province2','Province3'],
            DistrictItem:['District1','District2','District3'],
        }
    },
}
</script>

<style lang="scss" scoped>
html { overflow-y: auto }
// Global
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
.input-max{
    width: 100%;
    height: 38px;
    padding-left: 12px;
    outline: none;
}
// End
// form
input[name="setBunzy"] {
	accent-color: $red;
    width: 15px;
    height: 15px;
}
input[name="aboutBunzy"] {
	accent-color: $red;
    width: 15px;
    height: 15px;
}
.padding_Respon{
    margin: 0 55px 0 0;
}
// NERVER USED JUST IF COME TO USE
.pd-l{
    padding-left: 12px;
}
.CostMY{
    margin-top: -12px;
}
// BunzyIcon_FOR
.BunzyIcon_FOR_label_box{
    position: relative;
    .BunzyIcon_FOR{
            position: absolute;
            right: 12px;
            top: 7px;
            
        }

}
.scroll_remove{
    overflow-y: hidden;
}
@media only screen and (max-width: 768px) {
    *{
        font-size: 16px;
    
}
}
@media screen and (max-width: 600px) {
    *{
        font-size: 14px;
    }
    // form checkbox mobile
    .padding_Respon{
    margin: 0 10px 0 0;
    }
    .pd-l{
    padding-left: 4px;
    }

}
</style>