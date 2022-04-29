<template>
    <footer style="background-color: #E5E5E5;" class=" d-none d-md-flex">
            <v-container class="border-set d-flex py-2 ">
                <v-col cols="6" to="">ຂໍ້ກຳນົດ ແລະ ເງື່ອນໄຂການຂົນສົ່ງ</v-col>
                <!-- <v-spacer></v-spacer> -->
                <v-col cols="6" class="text-right">COPYRIGHT© 2021 BY HAL TECH</v-col>
            </v-container>
        </footer>
</template>

<script>
export default {
    name:'footerC'
}
</script>

<style lang="scss" scoped>
.border-set{
    border-top: 2px solid $red;
}
</style>