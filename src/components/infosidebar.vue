<template>
  <v-card height="350px">
    <v-navigation-drawer
      absolute
      permanent
      left
    >
      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
        >

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { title: 'I. ໝວດທີ1: ວ່າດ້ວຍຂໍ້ມູນສ່ວນຕົວ',},
          { title: 'II. ມາດຕະຖານດ້ານຄວາມປອກໄພຂອງສິນຄ້າ',},
          { title: 'III. ມາດຕະຖານດ້ານຂະໜາດ ແລະ ນ້ຳໜັກຂອງພັດສະດຸ',},
          { title: 'IV. ມາດຕະຖານການດຳເນີນງານ',},
          { title: 'V. ມາດຕະຖານການດຳເນີນງານຂອງພະນັກງານສາຂາທີ່ທຳການຄັດແຍກພັດສະດຸ',},
          { title: 'VI. ເງື່ອນໄຂມາດຕະຖານການໃຫ້ບໍລິການ ແລະ ຊົດເຊີຍຄ່າເສຍຫາຍໃຫ້ແກ່ລູກຄ້າ',},
        ],
      }
    },
  }
</script>

<style>

</style>