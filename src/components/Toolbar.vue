<template>
  <div>
    <v-app-bar color="#E21312" dense dark height="105px">
      <div class="logo">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="../assets/Frontend/toolbar/hal logo 2.svg"
          transition="scale-transition"
          width="100"
          height="100"
        />
      </div>
      <v-spacer></v-spacer>
      <v-row>
        <v-col cols="12" sm class="py-2 hiddenSmAndDown">
          <v-btn
          color="#E21312"
          elevation="0"
          >
          ບໍລິການຂອງເຮົາ
          </v-btn>
                    <v-btn
          color="#E21312"
          elevation="0"
          >
          ຂໍ້ມູນສາຂາ
          </v-btn>
                    <v-btn
          color="#E21312"
          elevation="0"
          >
          ຂໍ້ກຳນົດ
          </v-btn>
                    <v-btn
          color="#E21312"
          elevation="0"
          >
          ກ່ຽວກັບພວກເຮົາ
          </v-btn>
                    <v-btn
          color="#E21312"
          elevation="0"
          >
          ເຂົ້າສູ່ລະບົບ
          </v-btn>
                    <v-btn
          color="#FFFFFF"
          elevation="0"
          text-color="red"
          rounded
          class="red--text"

          >
          ລົງທະບຽນ
          </v-btn>

         </v-col>
      </v-row>
    </v-app-bar>
  </div>
</template>

<script>
export default {};
</script>

<style>
.logo {
  margin-left: 2%;
}
*{
  font-family: 'Phetsarath', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
