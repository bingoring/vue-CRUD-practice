'use strict'

import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);

export const CLICK_USER = 'CLICK_USER';

export const store = new Vuex.Store({
    state: {
        singleUserId: "",
        allUserData: [],
        singleUserData: [],
        modifyUserData: {
            id: "",
            name: "",
            job: "",
        }
    },
    getters: {
        getFetchedId(state) {
            return state.singleUserId;
        },
        getAllUserData(state) {
            return state.allUserData;
        },
        getSingleUserData(state) {
            return state.singleUserData;
        }
    },
    mutations,
    actions
})