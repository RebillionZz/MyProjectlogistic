<template>
    <div>This is Your data{{this.dataId}}

        <p>555555{{this.$route.params.id}}</p>
    </div>
</template>

<script>
export default {
    name:'dataCC',
    data() {
        return {
            dataId:this.$route.params.id,
        }
    },
    watch:{
        dataId:function(val){
            console.log(val,8888)
        }
    },
}
</script>

<style>

</style>