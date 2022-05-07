<template>
    <div>
        <v-col  cols="12" md="4" lg="4" v-for="LocatV in VT" :key="LocatV.id"  class="px-2 py-2"  >
            <v-btn class="d-flex align-center locate_BTN backW sha">
                <div class="pl-3"><v-img src="@/assets/Admin/dataContent/gridicons_location.svg" max-height="35" max-width="35"></v-img></div>
                <div class="pt-1 pl-2">{{LocatV.text}}</div>
            </v-btn>
        </v-col>
    </div>
</template>

<script>
export default {
    name:'Capital',
    data() {
        return {
            VT:
                [
                    {id:1,text:"ເມືອງ ຈັນທະບູລີ"},
                    {id:2,text:"ເມືອງ ໄຊເສດຖາ"},
                    {id:3,text:"ເມືອງ ສີໂຄດຕະບອງ"},
                    {id:4,text:"ເມືອງ ສີສັດຕະນາກ"},
                    {id:5,text:"ເມືອງ ຫາດຊາຍຟອງ"},
                    {id:6,text:"ເມືອງ ນາຊາຍທອງ"},
                    {id:7,text:"ເມືອງ ໄຊທານີ"},
                    {id:8,text:"ເມືອງ ສັງທອງ"},
                    {id:9,text:"ເມືອງ ໃໝ່ປາກງື່ມ"},
                ],
        }
    },
}
</script>

<style>

</style>