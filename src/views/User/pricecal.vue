<template>
<div class="ovf">
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
            
           <!-- <v-tabs centered color="red darken-2" v-model="tabs">
    <v-tab>ສາຂາຫາສາຂາ (ພາຍໃນແຂວງ)</v-tab>
    <v-tab>ລະຫວ່າງແຂວງ (ທົ່ວປະເທດ)</v-tab>
  </v-tabs>            -->
  <v-card elevation="0">
    <v-toolbar
      color="white"
      white
    >

      <template v-slot:extension>
        <v-tabs
          v-model="tabs"
          centered
          color="red darken-2"
          
        >
          <v-tab>
            ສາຂາຫາສາຂາ (ພາຍໃນແຂວງ)
          </v-tab>
          <v-tab>
            ລະຫວ່າງແຂວງ (ທົ່ວປະເທດ)
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tabs">
      <v-tab-item>
        <v-card flat class="tab-card">
          <v-tabs v-model="tab" background-color="#eee" class="border-tab"  active-class="tab-active"  color="red" height="38" centered fixed-tabs   slider-color="red " slider-size="38">
            <v-tabs-slider class="rounded-pill" ></v-tabs-slider>
            <v-col cols="4" >
                <v-tab href="#tab-1" class="test">
                    ລາຄາ EXPRESS
                </v-tab>
            </v-col>
            <v-col cols="4" >
                <v-tab href="#tab-2" class="test">
                    ຊອງເອກະສານ
                </v-tab>
            </v-col>
            <v-col cols="4" >
                <v-tab href="#tab-3" class="test">
                    ລາຄາ LOGISTIC
                </v-tab>
            </v-col>

            <v-tabs-items v-model="tab">
                <v-tab-item value="tab-1" reverse-transition>
                    <p>ລູກຄ້າຝາກເຄື່ອງແລ້ວສາມາດຮັບເຄື່ອງໃນມື້ຖັດໄປ</p>
                    
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr class="red">
          <th class="text-center">
            ນ້ຳໜັກ
          </th>
          <th class="text-center">
            ຍາວ+ກວ້າງ+ສູງ
          </th>
          <th class="text-center">
            ຄ່າບໍລິການ
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in price"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.size }}</td>
          <td>{{ item.price}}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
                </v-tab-item>
                <v-tab-item value="tab-2" reverse-transition>
                    <p>ລູກຄ້າຝາກເຄື່ອງແລ້ວສາມາດຮັບເຄື່ອງໃນມື້ຖັດໄປ</p>
                
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr class="red">
          <th class="text-center">
            ຊອງເອກະສານ
          </th>
          <th class="text-center">
            ຄ່າບໍລິການ
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in docs"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
                </v-tab-item>
                <v-tab-item value="tab-3" reverse-transition>
                    <p>ລູກຄ້າຝາກເຄື່ອງແລ້ວສາມາດຮັບເຄື່ອງໃນມື້ຖັດໄປ</p>
                    
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr class="red">
          <th class="text-center">
            ນຳ້ໜັກ KG
          </th>
          <th class="text-center">
            ຄ່າບໍລິການ
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in desserts"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
                </v-tab-item>
            </v-tabs-items>
      
    </v-tabs>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat class="tab-card">
           <v-tabs v-model="tab" background-color="#eee" class="border-tab" active-class="tab-active"  color="red" height="38" centered fixed-tabs   slider-color="red " slider-size="38">
            <v-tabs-slider class="rounded-pill" ></v-tabs-slider>
            <v-col cols="4" >
                <v-tab href="#tab-1" class="test">
                    ລາຄາ EXPRESS
                </v-tab>
            </v-col>
            <v-col cols="4" >
                <v-tab href="#tab-2" class="test">
                    ຊອງເອກະສານ
                </v-tab>
            </v-col>
            <v-col cols="4" >
                <v-tab href="#tab-3" class="test">
                    ລາຄາ LOGISTIC
                </v-tab>
            </v-col>

            <v-tabs-items v-model="tab">
                 <v-tab-item value="tab-1" reverse-transition>
                    <p>ລູກຄ້າຝາກເຄື່ອງແລ້ວສາມາດຮັບເຄື່ອງໃນມື້ຖັດໄປ</p>
                    
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr class="red">
          <th class="text-center">
            ນ້ຳໜັກ
          </th>
          <th class="text-center">
            ຍາວ+ກວ້າງ+ສູງ
          </th>
          <th class="text-center">
            ຄ່າບໍລິການ
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in price"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.size }}</td>
          <td>{{ item.price}}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
                </v-tab-item>
                <v-tab-item value="tab-2" reverse-transition>
                    <p>ລູກຄ້າຝາກເຄື່ອງແລ້ວສາມາດຮັບເຄື່ອງໃນມື້ຖັດໄປ</p>
                
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr class="red">
          <th class="text-center">
            ຊອງເອກະສານ
          </th>
          <th class="text-center">
            ຄ່າບໍລິການ
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in docs"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
                </v-tab-item>
                <v-tab-item value="tab-3" reverse-transition>
                    <p>ລູກຄ້າຝາກເຄື່ອງແລ້ວສາມາດຮັບເຄື່ອງໃນມື້ຖັດໄປ</p>
                    
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr class="red">
          <th class="text-center">
            ນຳ້ໜັກ KG
          </th>
          <th class="text-center">
            ຄ່າບໍລິການ
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in desserts"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
                </v-tab-item>
            </v-tabs-items>
      
    </v-tabs>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
  
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
  data() {
        return {
            totalPrice:0,
            startWays:['ສາຍນ້ຳເງິນ','ຫົວຂົວ (ນາຊາຍທອງ)','ດົງສ້າງຫີນ(ຫຼັກ 15)','ສາຍນ້ຳເງິນ','ຫົວຂົວ(ນາຊາຍທອງ1)','ດົງສ້າງຫີນ(ຫຼັກ 16)'],
            endWays:['ສາຍນ້ຳເງິນ','ຫົວຂົວ (ນາຊາຍທອງ)','ດົງສ້າງຫີນ(ຫຼັກ 15)','ສາຍນ້ຳເງິນ','ຫົວຂົວ(ນາຊາຍທອງ1)','ດົງສ້າງຫີນ(ຫຼັກ 16)'],
            tabs: null,
            tabs2: null,
            tab: null,
            price: [
          {
            name: '1',
            size: 45,
            price: 5000,
          },
          {
            name: '2',
            size: 50,
            price: 5000,
          },
          {
            name: '3',
            size: 55,
            price: 6000,
          },
          {
            name: '1',
            size: 45,
            price: 6000,
          },
          {
            name: '2',
            size: 50,
            price: 6000,
          },
          {
            name: '4',
            size: 60,
            price: 7000,
          },
          {
            name: '3',
            size: 55,
            price: 7000,
          },
          {
            name: '5',
            size: 65,
            price: 8000,
          },
          {
            name: '4',
            size: 60,
            price: 8000,
          },
          {
            name: '5',
            size: 65,
            price: 9000,
          },
          {
            name: '6',
            size: 70,
            price: 10000,
          },
          {
            name: '7',
            size: 75,
            price: 12000,
          },
          {
            name: '6',
            size: 70,
            price: 120000,
          },
          {
            name: '8',
            size: 80,
            price: 14000,
          },
          {
            name: '7',
            size: 75,
            price: 14000,
          },
          {
            name: '1',
            size: 45,
            price: 15000,
          },
          {
            name: '3',
            size: 55,
            price: 7000,
          },
          {
            name: '5',
            size: 65,
            price: 8000,
          },
          {
            name: '4',
            size: 60,
            price: 8000,
          },
          {
            name: '5',
            size: 65,
            price: 9000,
          },
        ],
        docs: [
          {
            name: 'A5 ບໍ່ເກີນ 3 Kg',
            calories: 15000,
          },
          {
            name: 'A5 ບໍ່ເກີນ 3 Kg',
            calories: 15000,
          },
          {
            name: 'A4 ບໍ່ເກີນ 3 Kg',
            calories: 20000,
          },
          {
            name: 'A4 ບໍ່ເກີນ 3 Kg',
            calories: 20000,
          },
          {
            name: 'A3 ບໍ່ເກີນ 3 Kg',
            calories: 25000,
          },
          {
            name: 'A3 ບໍ່ເກີນ 3 Kg',
            calories: 25000,
          },
          {
            name: 'A5 ບໍ່ເກີນ 3 Kg',
            calories: 25000,
          },
          {
            name: 'A4 ບໍ່ເກີນ 3 Kg',
            calories: 30000,
          },
          {
            name: 'A3 ບໍ່ເກີນ 3 Kg',
            calories: 35000,
          },
        ],
        desserts: [
          {
            name: 'Logistics - 201KG - 10000KG',
            calories: '1,100 /Kg'
          },
          {
            name: 'Logistics - 201KG - 10000KG',
            calories: '1,100 /Kg',
          },
          {
            name: 'Logistics - 101KG - 200KG',
            calories: '1,300 /Kg',
          },
          {
            name: 'Logistics - 101KG - 200KG',
            calories: '1,300 /Kg',
          },
          {
            name: 'Logistics - 50.1KG - 100KG',
            calories: '1,500 /Kg',
          },
          {
            name: 'Logistics - 50.1KG - 100KG',
            calories: '1,500 /Kg',
          },
        ],  
            items: [
        'ລາຄາ EXPRESS', 'ຊອງເອກະສານ', 'ລາຄາ LOGISTIC',
      ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        }
    },
  components: {
    Toolbar,
    Footer,
    HomeView,
    
  },
};
</script>

<style lang="scss" scoped>
.hh21{
    text-align: center;
    color: #E21312;

}
.calprice{
    border: 20px;
    padding: 5%;
    margin-top: 80px;
}
.img-price{
  width: 80%;
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
.tab-card{
  padding: 10px;
}
.border-tab{
    border-radius: 25px !important   ;
    background: grey !important;
    color: #222222 !important;
}
.tab-active{
    color: #FFFFFF !important;

}
.whitetext{
    color: #fff !important;
}
.btn-round1{
    border-radius: 28px;
}
.btn-round2{
    border-radius: 28px;
    border :1px solid #E21312;
    background: #FFFFFF !important;
}
.input-max{
    width: 100%;
    height: 38px;
    padding-left: 12px;
    outline: none;
}
.border-tab{
    border-radius: 28px;
    background: none !important;
    color: #222222;
    padding-left: 10%;
    padding-right: 10%;
}
.tab-active{
    color: #FFFFFF !important;

}
.slide{
    border-radius: 28px;
    background: $red !important;
    color: #FFFFFF;
    transition: .3s ease-in-out;
    
}
.tabred{
    background-color: #888888;
    align-content: center;
    align-items: center;
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
.test{
    width:100%;
    height: 100%;
    z-index: 100;
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
        .border-tab{
    border-radius: 28px;
    background: none !important;
    color: #222222;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 10px !important;
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
    background-color: #ffffff;
}
.borderf{
    border-block-color: #888888;
    border-end-end-radius: 1px;
}
.ovf{
    overflow: hidden;
}
.v-slide-group__next, .v-slide-group__prev {
    align-items: center;
    
    flex: 0 1 1px !important;
    justify-content: center;
    min-width: 1px !important;
}
</style>