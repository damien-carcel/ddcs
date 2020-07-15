import Vue from 'vue';
import Vuex from 'vuex';

import { NewCharacterBaseValue } from '@/domain/characterBase/model/NewCharacterBaseValue';
import getCharacterBaseInformationService from '@/application/characterBase/getCharacterBaseInformationService';
import saveCharacterBaseInformationService from '@/application/characterBase/saveCharacterBaseInformationService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    characterBaseInformation: getCharacterBaseInformationService(),
  },
  mutations: {
    updateCharacterBaseInformation(state, newCharacterBaseValue: NewCharacterBaseValue) {
      state.characterBaseInformation[newCharacterBaseValue.identifier] = newCharacterBaseValue.value;

      saveCharacterBaseInformationService(state.characterBaseInformation);
    },
  },
  actions: {},
  modules: {},
});
