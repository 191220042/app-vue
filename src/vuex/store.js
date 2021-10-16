import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);



export default new Vuex.Store({
    state:{
        employees:[]
    },
    mutations:{
        init(state,data){
            state.employees=data;
            window.localStorage.setItem('employees',JSON.stringify(data));
        }
    }
})