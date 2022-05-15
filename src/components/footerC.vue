<template>
    <footer style="background-color: #E5E5E5;" class=" d-none d-md-flex">
            <v-row class="border-set d-flex py-2">
                <v-col cols="6" to="">
                    <router-link to="/reasonc" style="text-decoration: none;  color:#E21312;">ຂໍ້ກຳນົດ ແລະ ເງື່ອນໄຂການຂົນສົ່ງ</router-link></v-col>
                <!-- <v-spacer></v-spacer> -->
                <v-col cols="6" class="text-right">COPYRIGHT© 2021 BY HAL TECH</v-col>
            </v-row>
        </footer>
</template>

<script>
export default {
    name:'footerc'
}
</script>

<style lang="scss" scoped>
.border-set{
    border-top: 2px solid $red;
    width: 100%;
    margin: 0;
    position:sticky;
    
    // padding: 0;
}
footer{
    position: absolute;
    bottom: 0;
    width: 100%;
}

</style>