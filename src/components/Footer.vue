<template>
    <v-container fluid>
      <div class="footerpage">
     <v-footer
    white
    padless
  >
  
  <v-row >
    <v-col cols="4">
      <img src="../assets/Frontend/footer/hal logo2 1.svg" width="100" height="100" >
      <p>ບໍລິສັດ ຮຸ່ງອາລຸນ ຂົນສົ່ງດ່ວນ</p>
      <p>ບ້ານ ຈອມມະນີ</p>
      <p>ເມືອງໄຊເສດຖາ</p>
      <p>ນະຄອນຫຼວງວຽງຈັນ</p>
<p>
  ສາຍດ່ວນ 1419
</p>
    </v-col>
    <v-col cols="4">
      <h3>ບໍລິການຂອງເຮົາ</h3>
      <p>ຝາກເຄື່ອງເອງ</p>
      <p>ພັດສະດຸຂອງຂ້ອຍ</p>
      <p>ຄິດໄລ່ຄ່າຂົນສົ່ງ</p>
      <p>ຂໍ້ມູນສາຂາ</p>
      <p>COD</p>
      <p>ເອີ້ນຮັບເຄື່ອງ</p>
    </v-col>
    <v-col cols="4">
      <h3>
        ບໍລິການຮັບ-ຝາກເຄື່ອງ

      </h3>
      <p>
        ວັນຈັນ ຫາ ວັນສຸກ
08:30 - 18:00 (ຮັບສົ່ງເຖິງທີ່ 09:00 - 15:00)</p>
<p>ວັນເສົາອາທິດ
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
    </v-container>
</template>
<script>

</script>
<style>
.footerpage{
  align-items: center;
  text-align: center;
}
</style>