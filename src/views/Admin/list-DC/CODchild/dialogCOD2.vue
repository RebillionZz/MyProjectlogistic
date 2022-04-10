<template>
    <form action="" class="dialog2Form">
        <div class="">
            <div class="d-flex justify-space-between align-center  ">
                    <div></div>
                    <div class="my-3 color-red text-center">ຂໍ້ມູນບັນຊີ COD</div>
                    <div @click="dialog1= false" class="closeDA1 "><v-img src="../../../../assets/Admin/CODContent/CloseDialog1.svg" max-height="25" max-width="25"></v-img></div>
            </div>
        </div>
    </form>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
// Global
.color-red{
    color: $red;
}
.backL{
    background: $red !important;
}
.bg-grey{
    background: $d-grey !important;
}
// End
// form

</style>