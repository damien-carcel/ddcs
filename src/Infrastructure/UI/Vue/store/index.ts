import Vue from 'vue';
import Vuex from 'vuex';
import { NewCharacterBaseValue } from '@/Domain/CharacterBase/Model/CharacterBaseInformation';
import CharacterBaseInformationService from '@/Application/CharacterBaseInformationService';
import CharacterBaseInformationRepositoryAdapter from '@/Infrastructure/Storage/LocalStorage/CharacterBaseInformationRepositoryAdapter';

Vue.use(Vuex);

const characterBaseInformationService = new CharacterBaseInformationService(
  new CharacterBaseInformationRepositoryAdapter()
);

export default new Vuex.Store({
  state: {
    characterBaseInformation: characterBaseInformationService.get(),
  },
  mutations: {
    updateCharacterBaseInformation(state, newCharacterBaseValue: NewCharacterBaseValue) {
      characterBaseInformationService.update(state.characterBaseInformation, newCharacterBaseValue);
    },
  },
  actions: {},
  modules: {},
});
