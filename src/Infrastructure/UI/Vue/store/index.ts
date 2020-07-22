import Vue from 'vue';
import Vuex from 'vuex';
import { NewCharacterBaseValue } from '@/Domain/CharacterBase/Types/CharacterBaseInformation';
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
      localStorage.setItem('debug_from_the_store', 'it works');
      state.characterBaseInformation[newCharacterBaseValue.identifier] = newCharacterBaseValue.value;

      characterBaseInformationService.save(state.characterBaseInformation);
    },
  },
  actions: {},
  modules: {},
});
