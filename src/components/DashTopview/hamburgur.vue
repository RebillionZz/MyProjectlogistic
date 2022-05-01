<template>
    <v-col cols="1" class="d-lg-none d-md-none d-xs-block d-sm-block" >
        <div class="d-flex align-center justify-center "> <!-- @click="Getleft()"   -->
            <img class="HamSide" src="../../assets/Admin/sidebar/toolbar/ham.svg" @click="Getleft()" >
        </div>
    </v-col>
</template>

<script>
export default {
    name:'hamburgur',
    data() {
        return {
            
        }
    },
    props:{
        Getleft:Function,
    }
}
</script>

<style>

</style>