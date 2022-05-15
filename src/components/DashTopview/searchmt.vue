<template>
    <v-col cols="8" sm="9" lg="9" md="9" xs="8"   class="search-form mr-lg-2 mr-md-3 pa-0" v-if="dataC === 'Show' " >
        <label class="for-search" for="searchBar" ><v-img src="@/assets/Admin/sidebar/toolbar/search.svg" max-height="37" max-width="37"></v-img></label>
        <input class="input-max" type="text" name="" id="searchBar" placeholder="ໃສ່ລະຫັດ tracking ID" >
    </v-col>
</template>

<script>
export default {
    name:'itemForCoppy'
}
</script>

<style lang="scss" scoped>
.search-form{
    position: relative;
    width: 100%;
    .input-max{
        width: 100%;
        height: 40px;
        padding-left: 45px;
        background:$bg-footer;
        border-radius: 34px;
        outline: none;
    }
    .for-search{
        position: absolute;
        left: 8px;
        top:0px;
    }
}

@media only screen and (max-width: 768px) {
    *{
        font-size: 16px;
        }
    .search-form{
        position: relative;
        padding-right: 8px;
        
        .input-max{
            width: 100%;
            height: 35px;
            padding-left: 40px;
            background:$bg-footer;
            border-radius: 34px;
            outline: none;
        }
        .for-search{
            position: absolute;
            left: 8px;
            top:2px;
            width: 30px;
            height: 30px;
        }
    }
    input::placeholder{
    font-size: 14px;
}
}
@media screen and (max-width: 600px) {
    .search-form{
    position: relative;
    
    padding:0 5px !important;

        .input-max{
        width: 100%;
        height: 35px;
        padding-left: 40px;
        background:$bg-footer;
        border-radius: 34px;
        outline: none;
    }
    .for-search{
        position: absolute;
        left: 12px;
        top: 2px;
        width: 30px;
        height: 30px;
    }
    }
    
}
</style>