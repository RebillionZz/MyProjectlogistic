<template>
      <div class="footerpage">
     <v-footer
    white
    padless
  >
  <v-container>
  <v-row >
    <v-col cols="12" sm="4" class="footer-row">
      <div class="logo-box"><img src="../assets/Frontend/hal logo2 1.svg" width="100%" height="100%" ></div>
      <p>ບໍລິສັດ ຮຸ່ງອາລຸນ ຂົນສົ່ງດ່ວນ <br>ບ້ານ ຈອມມະນີ<br>ເມືອງ ໄຊເສດຖາ<br>ນະຄອນຫຼວງວຽງຈັນ</p>
<p>
  ສາຍດ່ວນ 1419
</p>
<img src="../assets/Frontend/facebook-email icon.svg" alt="">
    </v-col>
    
    <v-col cols="12" sm="4" class="margintop">
      <h3>ບໍລິການຂອງເຮົາ</h3>
      <p>ຝາກເຄື່ອງເອງ<br>ພັດສະດຸຂອງຂ້ອຍ<br>ຄິດໄລ່ຄ່າຂົນສົ່ງ<br>ຂໍ້ມູນສາຂາ<br>COD<br>ເອີ້ນຮັບເຄື່ອງ</p>
    </v-col>
    <v-col cols="12" sm="4" class="margintop">
      <h3>
        ບໍລິການຮັບ-ຝາກເຄື່ອງ
      </h3>
      <p>
        ວັນຈັນ ຫາ ວັນສຸກ
        08:30 - 18:00 (ຮັບສົ່ງເຖິງທີ່ 09:00 - 15:00)
        ວັນເສົາອາທິດ
        08:00 - 17:30 (ປິດບໍລິການຮັບ - ສົ່ງເຖິງທີ່)
      </p>
    </v-col>
      <v-card-text class="dark--text">
           <hr class="solid s-responsive">
        <v-row>
          <v-col cols="12" md="6" class="textstart">
            ຂໍ້ກຳນົດ ແລະ ເງື່ອນໄຂໃນການສົ່ງ
          </v-col>
          <v-col cols="12" md="6" class="textend">
            copyright © {{ new Date().getFullYear() }} — <strong>BY HAL TECH</strong>
          </v-col>
          </v-row> 
      </v-card-text>
  </v-row>
  </v-container>
  </v-footer> 
  </div>
</template>
<script>

  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }

</script>
<style scoped>
.logo-box{
  width: 100%;
  height: 100px;
}
.footerpage{
  align-items: center;
  text-align: center;
  background-color: #eeeeee;
}
.margintop{
  margin-top: 80px;
}
.textstart{
  text-align: start;
}
.textend{
  text-align: end;
}
@media screen and (max-width: 960px) {
  .textstart{
    text-align: center
  };
  .textend{
    text-align: center;
    align-self: center;

  
  };
  hr.s-responsive{
    display: none;
  }
    }
.footer-row{
  margin-top: 30px;
}
</style>