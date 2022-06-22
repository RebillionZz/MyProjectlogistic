<template>
  <div class="ovf">
    <Toolbar />
    <div>
      <div class="homecontent">
        <img
          src="../../assets/Frontend/165338410_766854214262404_8686616552952205961_n 3.svg"
          width="100%"
          height="100%"
        />
  <!--  <v-btn
      rounded
      color="primary"
      dark
      class="call-btn-1"
    >
      Rounded Button
    </v-btn> -->
      </div>
      <div class="text">
        <h2 class="hh2">ກວດສອບພັດສະດຸຂອງທ່ານ</h2>
      </div>
      <div class="divs">
      <div class="searching transition-swing" :class="`elevation-${hover ? 24 : 3}`">
        <!--<v-text-field
          v-model="search"
          label="ໃສ່ລະຫັດ tracking ID"
          color="red darken-1"
          rounded
          outlined
        >
          <v-btn color="red darken-1" rounded dark outlined>ຕິດຕາມ</v-btn>
        </v-text-field>-->
        <!--<i class="fa fa-cc-visa" aria-hidden="true"></i> <form >
                    <label for="Location_search" class="icon-search"><v-img src="../../assets/Admin/sidebar/toolbar/search.svg" max-height="37" class="isearch" max-width="37"></v-img></label>
                    <input   v-model="search" @click="SearchLocation" type="text" name="" id="Location_search" placeholder="ໃສ່ລະຫັດ tracking ID" class="input-max box-border sha input-search ">
          <p class="phd">ໃສ່ລະຫັດ tracking ID</p> 
          <label for="Location_search" class="btnsearch"><v-btn color="red darken-1" rounded dark class="rbtn">ຕິດຕາມ</v-btn>
        </label><button type="button" class="btns">ຕິດຕາມ</button>
                </form> -->
                <img src="../../assets/Admin/sidebar/toolbar/search.svg" alt="">
        <input type="text" placeholder="ໃສ່ລະຫັດ tracking ID" class="text75"  />
        <button class="button button5">ຕິດຕາມ</button>
      </div>
      </div>
      <div class="doublebutton">
       <span class="bpd"> <v-btn color="red darken-1" rounded dark outlined> ຝາກເຄື່ອງ </v-btn> </span>
       <span> <router-link to="/pricecal">
          <v-btn class="bpd" color="red darken-1" rounded dark outlined>
            ຄິດໄລ່ຄ່າຂົນສົ່ງ
          </v-btn></router-link
        > </span>
      </div>
    </div>
    <div class="service1">
      <h2 class="hh2">ບໍລິການຂອງພວກເຮົາ</h2>
      <h2 class="greytext">ພວກເຮົາໃຫ້ຫຼາຍກວ່າຂົນສົ່ງ</h2>
    </div>


<div class="al-card">
    <div class="px-3 ">
      <v-container >
      <v-row no-gutters>
         <v-col cols="6" lg="4" md="4" sm="6" xs="6">
          <v-card class="mx-auto my-12 card3">
            <router-link to="/senddc">
            <img src="../../assets/card/ຝາກເຄື່ອງເອງ.png" alt="" />
            <p>ຝາກເຄື່ອງເອງ</p>
            <img src="../../assets/Frontend/Arrow 5.svg" alt="" />
            </router-link>
          </v-card>
        </v-col>
      <!--  <v-col cols="6" lg="4" md="4" sm="6" xs="6" class="card-box ">
          <div class="box  d-flex justify-center flex-column pa-5">
            <div class="d-flex justify-center py-1"><div class="box-img"><img src="../../assets/Frontend/box 1.png" alt="" /></div></div>
            <div class="text-center py-1"><p>ຝາກເຄື່ອງເອງ</p></div>
            <div class="d-flex justify-center py-1"><div class="arr-img"><img src="../../assets/Frontend/Arrow 5.svg" alt="" /></div></div>
          </div>
        </v-col> -->
        <v-col cols="6" lg="4" md="4" sm="6" xs="6">
          <v-card class="mx-auto my-12 card3">
            <router-link to="/follow"
            >
            <div>
              <img src="../../assets/card/ພັດສະດຸຂອງຂ້ອຍ.png" alt="" />
              <p>ພັດສະດຸຂອງຂ້ອຍ</p>
              <img src="../../assets/Frontend/Arrow 5.svg" alt="" />
              </div> 
            </router-link>
              </v-card
          >
        </v-col>
        <v-col cols="6" lg="4" md="4" sm="6" xs="6">
          
            <v-card class="mx-auto my-12 card3" >
              <router-link to="/pricecal">
              <div class="box-item-align">
              <img src="../../assets/card/ຄິດໄລ່ຄ່າຂົນສົ່ງ.png" alt="" />
              </div>
              <div class="box-text"><p>ຄິດໄລ່ຄ່າຂົນສົ່ງ</p></div>
              <div ><img src="../../assets/Frontend/Arrow 5.svg" alt="" /> </div>
              </router-link>
              </v-card
          >
          
        </v-col>
        <v-col cols="6" lg="4" md="4" sm="6" xs="6">
          
            <v-card class="mx-auto my-12 card3">
              <router-link to="/servicearea">
              <img
                src="../../assets/card/ຂໍ້ມູນສາຂາ.png"
                alt=""
              />
              <p>ຂໍ້ມູນສາຂາ</p>
              <img src="../../assets/Frontend/Arrow 5.svg" alt="" /> 
              </router-link></v-card
          >
        </v-col>
        <v-col cols="6" lg="4" md="4" sm="6" xs="6">
          <v-card class="mx-auto my-12 card3">
            <router-link to="/coddc">
            <img src="../../assets/card/COD.png" alt="" />
            <p>COD</p>
            <img src="../../assets/Frontend/Arrow 5.svg" alt="" />
            </router-link>
          </v-card>
        </v-col>
        <v-col cols="6" lg="4" md="4" sm="6" xs="6">
          <v-card class="mx-auto my-12 card3">
            <a href="#">
            <img src="../../assets/card/ຄ່າບໍລິການ.png" alt="" />
            <p>ຄ່າບໍລິການ</p>
            <img src="../../assets/Frontend/Arrow 5.svg" alt="" />
            </a>
          </v-card>
        </v-col>
      </v-row>
      </v-container>
    </div>
</div>
      <div class="moresv">
        <v-btn color="red darken-1" rounded dark>ບໍລິການເພີ່ມເຕີມ</v-btn>
      </div>



<v-container>
      <v-row>
        <v-col cols="12" lg="6" md="6" sm="12" xs="12" class="svcenter">  
          <img
            src="../../assets/Frontend/210709791_835246240756534_2076683395362452089_n-removebg-preview 1.svg"
            alt=""
            class="imgsize1"
          />
          <p>
            ຈັດສົ່ງປອດໄພ ວາງໃຈທຸກການຂົນສົ່ງກັບ<br /><span class="hh2"
              >ຮຸ່ງອາລຸນ ຂົນສົ່ງດ່ວນ</span
            ><br />ສົ່ງພັດສະດຸພາຍໃນແຂວງ ແລະ ຕ່າງແຂວງ
          </p>
          <router-link to="/registerhal"  
            ><v-btn color="red darken-1" rounded dark
              >ລົງທະບຽນຕອນນີ້</v-btn
            ></router-link
          >
        </v-col>
        <v-col cols="12" lg="6" md="6" sm="12" xs="12" class="svcenter">
          <div class="codif">
            <img
              src="../../assets/Frontend/cod2 1.png"
              alt=""
              class="imgsize1"
            />
            <p>
              ເພີ່ມຊ່ອງທາງການຊໍາລະເງິນໃຫ້ແກ່ລູກຄ້າ<br />ແລະ
              ເພີ່ມຍອດຂາຍໃຫ້ທຸກທ່ານດ້ວຍບໍລິການ<br /><span class="hh2">COD</span>
              ໂອນເງິນໄວໃນ 01 ມື້
            </p>
            <router-link to="/codregister"
              ><v-btn color="red darken-1" rounded dark
                >ສະໝັກ COD</v-btn
              ></router-link
            >
          </div>
        </v-col>
      </v-row>
      <div class="svcenter">
        <h2 class="hh2">ເຂດບໍລິການ</h2>
        <h2>ທ່ານສາມາດຄົ້ນຫາເຂດບໍລິການໃກ້ບ້ານທ່ານໄດ້</h2>
        <v-row>
          <v-col cols="12" lg="6" md="6" sm="12" xs="12">
            <img
              src="../../assets/Frontend/243124112_575975943737369_4532728116862306827_n 2.png"
              alt=""
              class="imgsize1"
            />
            <p>ເຮົາມີຫຼາຍກວ່າ 100 ສາຂາ<br />ຄອບຄຸມປະເທດ<br />ແຕ່ເໜືອເຖິງໃຕ້</p>
          </v-col>
          <v-col cols="12" lg="6" md="6" sm="12" xs="12"> </v-col>
        </v-row>
      </div>
    </v-container>
    <div class="downloadhal">
      <v-container>
      <v-row>
        <v-col cols="12" lg="5" md="5" sm="12" xs="12"
          ><img
            src="../../assets/Frontend/mockup 2.png"
            class="mobile"
            width="100%"
            height="100%"
          />
        </v-col>
        <v-col cols="12" lg="7" md="7" sm="12" xs="12">
          <h3 class="text3">
            ຕິດຕາມພັດສະດຸຂອງທ່ານໄດ້ທຸກທີ່ ທຸກເວລາ <br />
            ພຽງທ່ານໂຫລດແອັບ ຮຸ່ງອາລຸນ ຂົນສົ່ງດ່ວນ
          </h3>
          <p>ທ່ານສາມາດຕິດຕາມພັດສະດຸ ຝາກເຄື່ອງເອງ ເອີ້ນຮັບເຄື່ອງ</p>
          <div class="dl">
            <div class="apphal">
              <v-row>
                <v-col>
                  <img
                    src="../../assets/Frontend/hal app 1 (1).png"
                    alt=""
                    class="imgsize1"
                  />
                </v-col>
                <v-col>
                  <h2 class="side">
                    HAL EXPRESS <br />
                    ສາມາດດາວໂຫລດໄດ້ທີ່
                  </h2>
                </v-col>
              </v-row>
            </div>
            <div>
            <a
              href="https://play.google.com/store/apps/details?id=me.com.phoud.hal_logistics&hl=th&gl=US"
            >
              <img
                src="../../assets/Frontend/5a902dbf7f96951c82922875 1 (1).png"
                alt=""
                class="imgsize2"
            /></a>
          
            <a
              href="https://apps.apple.com/bg/app/hal-express-laos/id1483001714"
              ><img
                src="../../assets/Frontend/5a902db97f96951c82922874 1 (1).png"
                class="imgsize3"
            /></a>
            </div>
          </div>
        </v-col>
      </v-row>
      </v-container>
    </div>
    <Footer />
  </div>
</template>
<script>
import Toolbar from "../../components/Toolbar.vue";
import Footer from "../../components/Footer.vue";
import HomeView from "../HomeView.vue";
import Userbar from "../../components/usermobilebar.vue"
export default {
  name: "homeuser",
  components: {
    Toolbar,
    Footer,
    HomeView,
    Userbar,
  },
};
</script>
<style scoped>
.box{
  background: red;
}
.box-img{
  width: 60px;
  height: 60px;
  
}
.box-img img{
  width: 100%;
  height: 100%;
}
.arr-img{
  width: 25px;
  height: 25px;
}
.card6{
  width: 1024px;
}
.card-box{
  width: 125px;
  height: 150px;
}
.tel{
  margin-bottom: 100px;
  position: absolute;
}
.al-card{
  align-content: center;
  align-items: center;
}
textarea:focus, input:focus{
    outline: none;
}








.appstore{
  float: left;
  position: absolute;
}




.telbtn {
  margin-left: 10%;
  margin-top: -18%;
  color: #e21312;
}
.hh2 {
  color: #e21312;
  text-align: center;
}
.doublebutton {
  align-items: center;
  text-align: center;
  padding: 5px;
  margin-top: 20px;
  
}
.bpd{
  padding: 5px;
}
.service1 {
  align-items: center;
  text-align: center;
  padding: 10px;
}
.cardservice {
  align-items: center;
  text-align: center;
}
.button {
  background-color: #e21312;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  
  width: 15%;
  border-radius: 50px
}
.singlebutton {
  align-items: center;
  text-align: center;
  border-radius: 20%;
}
.downloadhal {
  background-color: #e21312;
  color: white;
  padding: 20px;
}
.text {
  padding: 5px;
}
.divs{
  align-items: center;
  padding-right: 15%;
  padding-left: 15%;
}
.searching {
  padding: 10px;
  border-style: solid;
  border-color: #fff;
  
        border-radius: 50px;
        width: 100%;
        height: auto;
        display: flex;
        
    }
    .text75{
      flex: auto;

    }
.card3 {
  align-items: center;
  text-align: center;
  width: 220px;
  height: 200px;
  color: #ababab;
}
.moresv {
  text-align: center;
  align-items: center;
  margin-bottom: 20px;
}
.svcenter {
  text-align: center;
  align-items: center;
}
.codif {
  margin-top: 15%;
}
* {
  text-decoration: none;
}
.ovf {
  overflow: hidden;
}

.apphal {
  padding: 5%;
  text-align: start;
}
.imgsize3{
  margin-left: 20px;
}
a{
  color: #000000 !important;
}
.btns {
  border: #e21312;
  position: absolute;
  margin-right: 50px;
}
.side {
  margin-left: -50%;
}
@media screen and (max-width: 960px) {
  h2.side {
    margin-left: 1px;
  }
  .downloadhal{
    align-items: center;
    align-content: center;
    padding: 30px;
  }
}
@media screen and (max-width: 490px) {
  .card3 {
    width: 150px !important;
    height: 178px !important;
    color: #ababab;
  }
}
@media screen and (max-width: 960px) {
  div.dl {
    align-content: center;
    align-items: center;
    text-align: center;
  }
  img.imgsize2 {
    width: 40%;
  }
    img.imgsize3 {
    width: 40%;
  }
  .apphal {
    text-align: start !important;
    align-content: flex-end !important;
  }
  .button{
    width: 20%;
  }
  .searching{
    height: 60px;
  }
  .divs{
    height: 60px;
  }
  .text75{
    height: 40px;
  }
}
@media screen and (max-width: 390px) {
  .button{
    width: 30%;
    height: 20px;
  }
  .searching{
    height: 40px;
  }
  .divs{
    height: 40px;
  }
  .text75{
    height: 20px;
  }
}
@media screen and (max-width: 335px) {
  .button{
    width: 30%;
    height: 20px;
  }
  .searching{
    height: 40px;
  }
  .divs{
    height: 40px;
  }
  .text75{
    height: 20px;
    width: 50%;
  }
}
.homecontent{
  width: auto;
  margin-top: 80px;
}

</style>
