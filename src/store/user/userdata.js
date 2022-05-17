export default {
    namespaced: true,
    state:{
        couter:1
    },
    mutations:{
        INCR_COUTER : function(state){
            state.couter = state.couter +1;
        }
    },
    actions:{

    },
};