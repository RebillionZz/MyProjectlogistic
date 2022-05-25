<template>
      <div class="footerpage">
     <v-footer
    white
    padless
  >
  
  <v-row >
    <v-col cols="12" sm="4">
      <img src="../assets/Frontend/hal logo2 1.svg" width="100" height="100" >
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
    <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
  </v-row>
  </v-footer> 
  </div>
</template>
<script>

</script>
<style>
.footerpage{
  align-items: center;
  text-align: center;
}
.margintop{
  margin-top: 80px;
}
</style>