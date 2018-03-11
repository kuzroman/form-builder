import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export default {

    getStore(model) {
        return new Vuex.Store({
            state: {
                model: model,
            },
            mutations: {
                setParamInForm (state, obj) { // obj = {stepId, id, key, val}
                    // console.log(state, obj);
                    // todo менять при смене схемы!
                    state.model.steps[obj.stepId].children[obj.id][obj.key] = obj.val;
                },
                changeActiveStep (state, obj) { // obj = {stepId}
                    // console.log(state, obj);
                    for (let i in state.model.steps) {
                        if (i === obj.stepId) {
                            state.model.steps[obj.stepId].active = true;
                        } else {
                            state.model.steps[i].active = false;
                        }
                    }
                }
            }
        });
    }

}