<template>
    <v-container>
        <!-- <v-col>AAA</v-col>
        <v-toolbar
        dense
        flat
        outlined
></v-toolbar> -->

        <!-- <v-card > -->
            <v-container>
                <v-container class="px-5">
                    <v-stepper flat v-model="e1" class="aaa v_step_header">
                <v-flex class="aaa">
                <v-stepper-header class="v_step_header">
                    <v-stepper-step :complete="e1 >1" step="1" color="red"><span class="step111" >ສ້າງບິນດ້ວຍຕົນເອງ</span></v-stepper-step>
                    <v-divider color="red"></v-divider>
                    <v-stepper-step :complete="e1 >2" step="2" color="red"><span :class="{step111:dew}" :dew="false">ລາຍລະອຽດອໍເດີ້</span></v-stepper-step>
                    <v-divider :class="{backL:dew}" :dew="false"></v-divider>
                    <v-stepper-step :complete="e1 > 3" step="3 " color="red" :class="{step111:dew2}" :dew2="false"></v-stepper-step>
                    
                </v-stepper-header>
                </v-flex>
                <v-stepper-items>
                    <!-- step111111111111111111 -->
                    <v-stepper-content step="1">
                        <v-card >
                            
                            <!-- form 2 -->
                            <v-col cols="12" ><v-btn width="100%" color="red" @click="e1=2;dew=true">Click1</v-btn></v-col>

                        </v-card>
                    </v-stepper-content>




                    <!-- step 2222222 -->
                    <v-stepper-content step="2"><v-col><v-btn @click="e1=3;dew2=true">Click2</v-btn></v-col></v-stepper-content>
                    <v-stepper-content step="3"><v-col><v-btn @click="e1=4">Click3</v-btn></v-col></v-stepper-content>
                    <!-- <v-stepper-content v-model="e7" :e7="false"><v-col><v-btn >Succes</v-btn></v-col></v-stepper-content> -->
                </v-stepper-items>
                
            </v-stepper>
        <!-- </v-card> -->
                </v-container>
            </v-container>
        
    </v-container>
    
</template>

<script>
export default {
    name:'home2HT',
    data() {
        return {
            e1:1,
            e2:false,
            slecteritem:'020',
            slecteritems:['020','030']
        }
    },
}
</script>

<style scoped>
    /*  */
    /* push form spacing */
    .push-form4{
        margin-bottom: -40px;
    }
    .push-form3{
        margin-bottom: -30px;
    }
    .push-form2{
        margin-bottom: -20px;
    }
    .push-form1{
        margin-bottom: -10px;
    }
    .select-class{
        text-align: center;
        border-radius: 24px; 
        /* width: 100px; */

    justify-content: center;
    }
    .step111{
        color: red;
    }
    .backL{
        background: red;
    }
    .aaa{
        background: #E5E5E5;
    }
    .v_step_header{
        box-shadow: none;
    }
    /* form */
    .form-input{
        width: 100%;
        border: 1px solid #888888;
        padding: 7px 0 7px 20px;

        border-radius: 28px;
        outline: none;
    }
    .box-border{
        border :1px solid #888888;
        border-radius: 28px;
    }
    input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}



/*  */


</style>