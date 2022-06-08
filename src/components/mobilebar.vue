<template>
    <v-col cols="1" class="d-lg-none d-md-none d-xs-block d-sm-block" id="hamburgur">
        <div class="d-flex align-center justify-center "> <!-- @click="Getleft()"   -->
            <img class="HamSide" src="../assets/Frontend/Group 368.svg" @click="Getleft2" >
        </div>
    </v-col>
</template>

<script>
export default {
    name:'hamburgur',
    data() {
        return {
            // A1:$store.state.drawer
        }
    },
    // props:{
    //     Getleft:Function,
    // },
    methods: {
        Getleft2(){
            this.$store.state.drawer = !this.$store.state.drawer
        }
    },
}
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 778px) {
    .HamSide{
    width: 25px;
    height: 25px;
}
}
</style>