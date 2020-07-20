import Vue from 'vue';
import Vuex from 'vuex';
import { NewCharacterBaseValue } from '@/domain/characterBase/types/NewCharacterBaseValue';
import CharacterBaseInformationService from '@/application/CharacterBaseInformationService';
import CharacterBaseInformationRepositoryAdapter from '@/infrastructure/storage/localStorage/CharacterBaseInformationRepositoryAdapter';

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
      state.characterBaseInformation[newCharacterBaseValue.identifier] = newCharacterBaseValue.value;

      characterBaseInformationService.save(state.characterBaseInformation);
    },
  },
  actions: {},
  modules: {},
});
