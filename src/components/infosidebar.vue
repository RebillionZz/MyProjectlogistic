<template>
<div class="infosidebar">
            <div>
              <v-list-item-group
        v-model="selectedItem"
        color="red darken-2
        "
        active-class="red--text"
      >
              <v-list>
                <router-link to="/infohal1"><v-list-item>I. ໝວດທີ 1: ວ່າດ້ວຍຂໍ້ມູນສ່ວນຕົວ</v-list-item></router-link>
                <router-link to="/infohal2"><v-list-item>II. ມາດຖານດ້ານຄວາມປອດໄພຂອງສິນຄ້າ </v-list-item></router-link>
                <router-link to="/infohal3"><v-list-item>III. ມາດຕະຖານດ້ານຂະໜາດ ແລະ ນ້ຳໜັກຂອງພັດສະດຸ</v-list-item></router-link>
                <router-link to="/infohal4"><v-list-item>IV. ມາດຕະຖານການຄິດໄລ່ລາຄາ ແລະ ວັດແທກບໍລິມາດຂອງສິນຄ້າ</v-list-item></router-link>
                <router-link to="/infohal5"><v-list-item>V. ມາດຕະຖານການດຳເນີນງານຂອງພະນັກງານສາຂາທີ່ທຳການຄັດແຍກພັດສະດຸ</v-list-item></router-link>
                <router-link to="/infohal6"><v-list-item>VI. ເງື່ອນໄຂມາດຕະຖານການໃຫ້ບໍລິການ ແລະ ການຊົດເຊີຍຄ່າາເສຍຫາຍໃຫ້ແກ່ລູກຄ້າ</v-list-item></router-link>
              </v-list>
              </v-list-item-group>
            </div>
          </div>
</template>
<script>
export default {
  data: () => ({
    selectedItem: -1,
    items: [
      { text: "I. ໝວດທີ 1: ວ່າດ້ວຍຂໍ້ມູນສ່ວນຕົວ " },
      { text: "II. ມາດຖານດ້ານຄວາມປອດໄພຂອງສິນຄ້າ" },
      { text: "III. ມາດຕະຖານດ້ານຂະໜາດ ແລະ ນ້ຳໜັກຂອງພັດສະດຸ" },
      { text: "IV. ມາດຕະຖານການຄິດໄລ່ລາຄາ ແລະ ວັດແທກບໍລິມາດຂອງສິນຄ້າ" },
      { text: "V. ມາດຕະຖານການດຳເນີນງານຂອງພະນັກງານສາຂາທີ່ທຳການຄັດແຍກພັດສະດຸ" },
      { text: "VI. ເງື່ອນໄຂມາດຕະຖານການໃຫ້ບໍລິການ ແລະ ການຊົດເຊີຍຄ່າາເສຍຫາຍໃຫ້ແກ່ລູກຄ້າ" },
    ],
  }),
};
</script>

<style>
.infosidebar{
  color: #e21321;
  background-color: #e21321;
  overflow: hidden;
  margin-top: 12px;
}
</style>
