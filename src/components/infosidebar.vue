<template>
  <v-navigation-drawer left>
    <v-card class="mx-auto" max-width="300" tile>
      <v-list dense>
        <v-list-item-group v-model="selectedItem" color="red darken-2">
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-navigation-drawer>
</template>
<script>
export default {
  data: () => ({
    selectedItem: 1,
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

<style></style>
